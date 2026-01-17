"use client";

import { Card } from "../ui/card";

const progressItems = [
  { name: "Next.js Mastery", progress: 85, color: "bg-blue-500" },
  { name: "System Design", progress: 60, color: "bg-purple-500" },
  { name: "Web Performance", progress: 75, color: "bg-cyan-500" },
  { name: "UI/UX Design", progress: 90, color: "bg-indigo-500" },
];

export function ProgressSection() {
  return (
    <div id="progress" className="space-y-4 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          📊 Learning Progress
        </h2>
        <p className="text-muted-foreground text-sm mt-1">Track your journey</p>
      </div>

      <Card className="glass-effect border-primary/20 p-6 space-y-6">
        {progressItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{item.name}</span>
              <span className="text-primary font-bold">{item.progress}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} transition-all duration-500`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
