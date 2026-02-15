"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "@/app/components/ui/card";
import { notes } from "@/app/data/notes";

type Note = (typeof notes)[0];

export default function NotePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const noteId = parseInt(id, 10);
    const foundNote = notes.find((n) => n.id === noteId) || null;
    setNote(foundNote);
  }, [id]);

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Note Not Found</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
          >
            Go Back
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-primary hover:underline"
        >
          ← Back
        </button>

        {/* Header */}
        <Card className="p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">{note.title}</h1>
          <p className="text-muted-foreground">{note.snippet}</p>

          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {note.category}
            </span>
          </div>
        </Card>

        {/* Content */}
        <Card className="p-8">
          <div className="prose max-w-none">
            {note.sections?.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                  {section.heading}
                </h2>

                {section.content
                  .trim()
                  .split("\n\n")
                  .map((block, i) => {
                    if (block.includes("- ")) {
                      return (
                        <ul key={i} className="list-disc list-inside mb-4">
                          {block
                            .split("\n")
                            .map(
                              (line, j) =>
                                line.startsWith("-") && (
                                  <li key={j}>{line.replace("- ", "")}</li>
                                ),
                            )}
                        </ul>
                      );
                    }

                    return <p key={i}>{block}</p>;
                  })}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
