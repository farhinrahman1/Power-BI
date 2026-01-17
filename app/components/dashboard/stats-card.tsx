"use client";

import { Card } from "../ui/card";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: string;
}

export function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default p-6 animate-slide-up">
      <div className="space-y-2">
        <div className="text-3xl">{icon}</div>
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
    </Card>
  );
}
