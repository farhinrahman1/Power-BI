"use client";

import { useParams, useRouter } from "next/navigation";
import { Card } from "@/app/components/ui/card";
import { notes } from "@/app/components/dashboard/notes-section";

export default function NotePage() {
  const params = useParams();
  const router = useRouter();
  const noteId = parseInt(params.id as string);

  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/50 flex items-center justify-center">
        <Card className="glass-effect border-primary/20 p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Note Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The note you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go Back
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="mb-6 px-4 py-2 text-sm text-primary hover:text-primary/80 hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
          >
            ← Back
          </button>

          <Card className="glass-effect border-primary/20 p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {note.title}
                </h1>
                {note.category && (
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {note.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Content */}
        <Card className="glass-effect border-primary/20 p-8">
          <div className="prose prose-invert max-w-none">
            {note.content.split("\n\n").map((paragraph, idx) => (
              <div key={idx} className="mb-4">
                {paragraph.includes("-") ? (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {paragraph.split("\n").map(
                      (item, i) =>
                        item.trim() && (
                          <li key={i} className="text-foreground/90">
                            {item.replace("- ", "")}
                          </li>
                        ),
                    )}
                  </ul>
                ) : paragraph.includes(":") ? (
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {paragraph}
                    </h3>
                  </div>
                ) : (
                  <p className="text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Navigation between notes */}
        {notes.length > 1 && (
          <div className="mt-8 flex gap-4">
            {noteId > notes[0].id && (
              <button
                onClick={() => router.push(`/notes/${noteId - 1}`)}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                ← Previous Note
              </button>
            )}
            {noteId < notes[notes.length - 1].id && (
              <button
                onClick={() => router.push(`/notes/${noteId + 1}`)}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Next Note →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
