"use client";

import Link from "next/link";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { notes } from "@/app/data/notes";

export function NotesSection() {
  return (
    <div
      id="notes"
      className="space-y-4 animate-slide-up"
      style={{ animationDelay: "100ms" }}
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground">📝 Notes</h2>
        <p className="text-muted-foreground text-sm mt-1">Quick reference</p>
      </div>

      <Card className="glass-effect border-primary/20 overflow-hidden">
        <ScrollArea className="h-64">
          <div className="p-4 m-3 space-y-3">
            {notes.map((note) => (
              <Link key={note.id} href={`/notes/${note.id}`}>
                <div className="p-3 m-5 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors cursor-pointer border-l-2 border-primary hover:border-primary/80 hover:shadow-md">
                  <h4 className="font-semibold text-foreground text-sm">
                    {note.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {note.snippet}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
