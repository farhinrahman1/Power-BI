"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#certificates", label: "Certificates" },
    { href: "#progress", label: "Progress" },
    { href: "#works", label: "Works" },
    { href: "#notes", label: "Notes" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
          {/* Mobile Menu Button - Left Side */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-primary/50 hover:bg-primary/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Power BI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-lg hover:bg-primary/10 bg-transparent"
          >
            <a
              href="https://github.com/farhinrahman1/Power-BI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="mt-4 border-primary/50 hover:bg-primary/10 w-full justify-center"
            >
              <a
                href="https://github.com/farhinrahman1/Power-BI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
