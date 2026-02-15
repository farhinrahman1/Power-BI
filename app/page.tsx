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
import { Footer } from "./components/dashboard/footer";
import Image from "next/image";

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
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div
          className={`mb-20 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-5xl font-bold text-foreground text-balance">
              Data Analytics Portfolio
              <br />
              SQL | Power BI | Business Intelligence
            </h1>
            {/* Featured Project */}
            <div
              id="sales-insights"
              className={`mb-20 transition-all duration-700 delay-150 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">
                  Featured Project
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-primary/20 rounded-2xl p-6 bg-muted/30 shadow-xl">
                  <Image
                    src="/sales_insight.png"
                    alt="Sales Insights Dashboard"
                    width={1200}
                    height={700}
                    className="rounded-xl"
                    priority
                  />

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      Sales Insights Dashboard — Power BI
                    </h3>

                    <p className="text-muted-foreground">
                      End-to-end analytics project solving declining revenue
                      issues for a hardware manufacturer using SQL, ETL, DAX,
                      and interactive dashboards.
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Revenue & Sales Quantity Tracking</li>
                      <li>Top 5 Customers & Products</li>
                      <li>Market-wise Revenue Breakdown</li>
                      <li>Automated Dashboard (20% Time Saved)</li>
                    </ul>

                    <a
                      href="/projects/sales-insights"
                      className="inline-block mt-4 px-6 py-3 text-primary-foreground rounded-xl transition-colors cursor-pointer bg-blue-950 border-2 border-white hover:border-gray-300 hover:bg-blue-900 font-semibold"
                    >
                      View Full Case Study →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="relative w-full">
                <div className="rounded-2xl overflow-hidden m-3 space-y-5 p-2 border border-primary/30 shadow-2xl bg-muted/30">
                  <Image
                    src="/powerbicertificate.jpg"
                    alt="Certificate preview"
                    width={1600}
                    height={900}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <Image
                    src="/sqlcertificate.jpg"
                    alt="Certificate preview"
                    width={1600}
                    height={900}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4">
                <NotesSection />
              </div>
            </div>
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

            {/* Notes moved to hero beside certificate */}
            {/* <NotesSection /> */}
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <Footer />
    </main>
  );
}
