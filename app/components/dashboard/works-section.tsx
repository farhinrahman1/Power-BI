"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const works = [
  {
    id: 1,
    name: "E-Commerce Platform",
    desc: "Full-stack marketplace with payment integration",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Analytics Dashboard",
    desc: "Real-time data visualization and reporting",
    tags: ["React", "Chart.js", "APIs"],
  },
  {
    id: 3,
    name: "Mobile App",
    desc: "React Native app for task management",
    tags: ["React Native", "Firebase"],
  },
  {
    id: 4,
    name: "Blog Platform",
    desc: "Headless CMS with dynamic content",
    tags: ["Next.js", "Contentful"],
  },
];

export function WorksSection() {
  return (
    <div
      id="works"
      className="space-y-4 animate-slide-up"
      style={{ animationDelay: "50ms" }}
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          ⚙️ Featured Works
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Your portfolio showcase
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {works.map((work) => (
          <Card
            key={work.id}
            className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 p-4 group hover:translate-x-2"
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {work.name}
              </h3>
              <p className="text-sm text-muted-foreground">{work.desc}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
