"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      name: "Retail Stockout Prediction",
      problem:
        "Managers spent 10+ hours weekly on manual inventory checks, leading to frequent stockouts and wasted resources.",
      userPersona: "Mita, Store Manager - Tracks 500+ SKUs across 3 locations",
      solution:
        "Built Power BI dashboard with predictive ML model reducing inventory waste by 12%",
      impact: "10 hours/week saved, 12% waste reduction",
      tools: ["Power BI", "SQL", "Python", "Vercel"],
      database: "PostgreSQL with real-time data sync",
      dax: "YoY Sales = CALCULATE(SUM(Sales), DATEADD(Dates[Date],-1,YEAR))",
      color: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      id: 2,
      name: "EyeDrop - Design Collaboration",
      problem:
        "Designers wasted time extracting colors manually from images during design reviews",
      userPersona:
        "Alex, Product Designer - Works with 10+ stakeholders on brand consistency",
      solution:
        "Created Next.js app with AI-powered color extraction and palette generation",
      impact: "90% faster design collaboration, improved brand consistency",
      tools: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
      database: "Supabase with RLS for team permissions",
      dax: "Palette Diversity = DIVIDE(COUNTROWS(Colors), COUNTA(Projects))",
      color: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          🏢 Featured Projects
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Real problems solved with engineering excellence
        </p>
      </div>

      {projects.map((project) => (
        <Card
          key={project.id}
          className={`glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden ${project.borderColor}`}
        >
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Problem Statement */}
            <div className="border-l-2 border-primary/50 pl-4 py-2">
              <p className="text-sm font-semibold text-primary mb-1">
                Problem Statement
              </p>
              <p className="text-sm text-foreground">{project.problem}</p>
            </div>

            {/* User Research */}
            <div className={`${project.color} p-4 rounded-lg`}>
              <p className="text-sm font-semibold text-foreground mb-2">
                User Persona
              </p>
              <p className="text-sm text-muted-foreground">
                {project.userPersona}
              </p>
            </div>

            {/* Solution & Impact */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Solution
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Impact</p>
                <p className="text-sm text-foreground font-medium">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Engineering Proof */}
            <div className="border-t border-border pt-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Database Schema
                </p>
                <div className="bg-background/50 p-3 rounded text-xs font-mono text-muted-foreground border border-border overflow-x-auto">
                  {project.database}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  DAX Formula (Complex Logic)
                </p>
                <div className="bg-background/50 p-3 rounded text-xs font-mono text-primary border border-border overflow-x-auto">
                  {project.dax}
                </div>
              </div>
            </div>

            {/* TL;DR Sidebar */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 space-y-2">
              <p className="text-xs font-bold text-accent uppercase">TL;DR</p>
              <ul className="text-sm space-y-1 text-foreground">
                <li>
                  • <span className="text-primary">Goal:</span>{" "}
                  {project.problem.split(" ").slice(0, 5).join(" ")}...
                </li>
                <li>
                  • <span className="text-primary">Impact:</span>{" "}
                  {project.impact}
                </li>
                <li>
                  • <span className="text-primary">Tech Stack:</span>{" "}
                  {project.tools.slice(0, 3).join(", ")}
                </li>
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
