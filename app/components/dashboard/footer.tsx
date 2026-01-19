"use client";

import { Mail, Github, Briefcase, Linkedin } from "lucide-react";
import { Card } from "../ui/card";

export function Footer() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "farhinrahmanp@gmail.com",
      href: "mailto:farhinrahmanp@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "farhinrahman1",
      href: "https://github.com/farhinrahman1",
    },
    {
      icon: Briefcase,
      label: "Portfolio",
      value: "farhin.vercel.app",
      href: "https://farhin.vercel.app/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "farhin-rahman00",
      href: "https://www.linkedin.com/in/farhin-rahman00/",
    },
  ];

  return (
    <footer className="mt-20 border-t border-border">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl">
              Feel free to reach out to me through any of these channels. I'd
              love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="glass-effect border-primary/20 p-4 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-2">
                      <div className="inline-flex p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="font-semibold text-foreground text-xs mt-1 group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          <div className="border-t border-border/50 pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Power BI Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
