"use client";

import { Card } from "../ui/card";

export function PowerBIEmbed() {
  return (
    <div className="space-y-4 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          📊 Live Power BI Dashboard
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Real-time data analytics and visualizations
        </p>
      </div>

      <Card className="glass-effect border-primary/20 overflow-hidden">
        <div className="w-full aspect-video bg-card flex items-center justify-center relative group">
          {/* Placeholder for Power BI iframe */}
          <iframe
            title="Power BI Dashboard"
            src="https://app.powerbi.com/view?r=YOUR_POWERBI_URL_HERE"
            frameBorder="0"
            allowFullScreen={true}
            className="w-full h-full"
            style={{ display: "none" }}
          />

          {/* Placeholder UI */}
          <div className="text-center space-y-4 p-8">
            <div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Power BI Dashboard
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Add your Power BI embed URL to display live dashboards
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Replace "YOUR_POWERBI_URL_HERE" in the iframe src with your actual
              Power BI report URL
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
