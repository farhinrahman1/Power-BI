"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "APIs", "Authentication"],
  },
  { category: "Tools", skills: ["Git", "Docker", "AWS", "Vercel"] },
];

export function SkillsSection() {
  return (
    <div
      id="skills"
      className="space-y-4 animate-slide-up"
      style={{ animationDelay: "150ms" }}
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground">🎯 Skills</h2>
        <p className="text-muted-foreground text-sm mt-1">Your expertise</p>
      </div>

      <div className="space-y-4">
        {skillCategories.map((cat) => (
          <Card
            key={cat.category}
            className="glass-effect border-primary/20 p-4"
          >
            <h3 className="font-semibold text-foreground mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="default"
                  className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
