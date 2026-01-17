"use client";

import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const notes = [
  {
    id: 1,
    title: "Introduction to Power BI",
    snippet: "useCallback for performance optimization...",
  },
  // {
  //   id: 2,
  //   title: "Database Design",
  //   snippet: "Normalization vs denormalization trade-offs...",
  // },
  // {
  //   id: 3,
  //   title: "API Security",
  //   snippet: "JWT tokens and refresh rotation...",
  // },
];

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
          <div className="p-4 space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer border-l-2 border-primary"
              >
                <h4 className="font-semibold text-foreground text-sm">
                  {note.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {note.snippet}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
