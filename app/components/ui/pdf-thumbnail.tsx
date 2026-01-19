"use client";

import { useEffect, useRef, useState } from "react";

interface PdfThumbnailProps {
  src: string; // path to the PDF, e.g. "/powerbicertificate.pdf"
  width?: number; // desired thumbnail width in pixels
  className?: string;
  openHref?: string; // optional link to open full PDF
}

export function PdfThumbnail({
  src,
  width = 360,
  className = "",
  openHref,
}: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function render() {
      try {
        setLoading(true);
        // Lazy import PDF.js (legacy build works well with bundlers)
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf");

        // Load the document with worker disabled to simplify setup
        const loadingTask = pdfjs.getDocument({
          url: src,
          disableWorker: true,
        });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const initialViewport = page.getViewport({ scale: 1 });
        const scale = width / initialViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas || !isMounted) return;

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas 2D context unavailable");

        await page.render({ canvasContext: ctx, viewport }).promise;
        setError(null);
      } catch (e: any) {
        setError(e?.message || "Failed to render PDF preview");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    render();
    return () => {
      isMounted = false;
    };
  }, [src, width]);

  const content = (
    <div
      className={`rounded-xl overflow-hidden border border-primary/30 shadow-xl bg-muted/30 ${className}`}
    >
      {loading && (
        <div className="flex items-center justify-center p-8 text-sm text-muted-foreground">
          Loading preview…
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center p-8 text-xs text-destructive">
          {error}
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-auto" />
    </div>
  );

  if (openHref) {
    return (
      <a
        href={openHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open full PDF"
      >
        {content}
      </a>
    );
  }
  return content;
}
