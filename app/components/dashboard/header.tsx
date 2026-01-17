"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">P</span>
          </div> */}
          <span className="text-xl font-bold text-foreground hidden sm:inline">
            Power BI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#certificates"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Certificates
          </a>
          <a
            href="#progress"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Progress
          </a>
          <a
            href="#works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Works
          </a>
          <a
            href="#notes"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Notes
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-lg hover:bg-primary/10 bg-transparent"
          >
            <a
              href="https://github.com/farhinrahman1/Power-BI"
              target="_blank"
              className=""
            >
              Github
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
