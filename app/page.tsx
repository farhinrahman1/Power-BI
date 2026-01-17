"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/dashboard/header";
import { StatsCard } from "./components/dashboard/stats-card";
import { CertificatesSection } from "./components/dashboard/certificates-section";
import { ProgressSection } from "./components/dashboard/progress-section";
import { NotesSection } from "./components/dashboard/notes-section";
import { WorksSection } from "./components/dashboard/works-section";
import { SkillsSection } from "./components/dashboard/skills-section";
import { ProjectShowcase } from "./components/dashboard/project-showcase";
import { PowerBIEmbed } from "./components/dashboard/powerbi-embed";
import { GitHubActivity } from "./components/dashboard/github-activity";
import { HireMe } from "./components/dashboard/hire-me-chat";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation with Dark Mode Toggle */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div
          className={`mb-20 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Power BI Dashboard
            </h1>
            {/* <p className="text-xl text-muted-foreground max-w-2xl">
              Track your progress, certificates, and creative works all in one
              place
            </p> */}
          </div>
        </div>

        {/* Stats Overview */}
        {/* <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <StatsCard label="Certificates" value="12" icon="🏆" />
          <StatsCard label="Courses Completed" value="8" icon="📚" />
          <StatsCard label="Projects" value="24" icon="⚙️" />
          <StatsCard label="Learning Hours" value="250+" icon="⏱️" />
        </div> */}

        {/* Power BI Embed Section */}
        {/* <div
          className={`mb-20 transition-all duration-700 delay-150 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <PowerBIEmbed />
        </div> */}

        {/* GitHub Activity */}
        {/* <div
          className={`mb-20 transition-all duration-700 delay-150 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <GitHubActivity />
        </div> */}

        {/* Project Showcase with Problem Statements & Engineering Proof */}
        {/* <div
          className={`mb-20 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <ProjectShowcase />
        </div> */}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certificates */}
            {/* <CertificatesSection /> */}

            {/* Progress */}
            {/* <ProgressSection /> */}

            {/* Works */}
            {/* <WorksSection /> */}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            {/* <SkillsSection /> */}

            {/* Notes */}
            <NotesSection />
          </div>
        </div>
      </div>

      {/* Hire Me Chat Widget */}
      <HireMe />
    </main>
  );
}
