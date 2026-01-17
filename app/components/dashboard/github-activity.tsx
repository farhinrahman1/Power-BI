"use client";

import { Card } from "../ui/card";

export function GitHubActivity() {
  return (
    <div className="space-y-4 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          📈 GitHub Contribution Activity
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Your daily consistency and contributions
        </p>
      </div>

      <Card className="glass-effect border-primary/20 p-6">
        <div className="space-y-4">
          {/* GitHub Calendar Placeholder */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => {
              const intensity = Math.floor(Math.random() * 4);
              const colors = [
                "bg-muted/30",
                "bg-accent/30",
                "bg-primary/40",
                "bg-primary/60",
              ];
              return (
                <div
                  key={i}
                  className={`w-8 h-8 rounded ${colors[intensity]} hover:ring-2 hover:ring-primary transition-all cursor-default`}
                />
              );
            })}
          </div>

          <div className="pt-4 border-t border-border">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-primary">247</p>
                <p className="text-xs text-muted-foreground">Contributions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">52</p>
                <p className="text-xs text-muted-foreground">Weeks Active</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15</p>
                <p className="text-xs text-muted-foreground">Longest Streak</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Connect your GitHub to display real activity.{" "}
            <a href="#" className="text-primary hover:underline">
              Learn how
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
