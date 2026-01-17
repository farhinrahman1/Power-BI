"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const certificates = [
  {
    id: 1,
    name: "React Advanced",
    issuer: "Udemy",
    date: "Dec 2024",
    color: "bg-blue-500/20",
  },
  {
    id: 2,
    name: "Full Stack Development",
    issuer: "Coursera",
    date: "Nov 2024",
    color: "bg-purple-500/20",
  },
  {
    id: 3,
    name: "TypeScript Mastery",
    issuer: "Frontend Masters",
    date: "Oct 2024",
    color: "bg-cyan-500/20",
  },
  {
    id: 4,
    name: "Next.js 14",
    issuer: "Vercel",
    date: "Sep 2024",
    color: "bg-indigo-500/20",
  },
];

export function CertificatesSection() {
  return (
    <div id="certificates" className="space-y-4 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">🏆 Certificates</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Your achievements and credentials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 p-4 group hover:scale-105"
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center`}
              >
                <span className="text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <Badge variant="secondary" className="w-fit text-xs">
                {cert.date}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
