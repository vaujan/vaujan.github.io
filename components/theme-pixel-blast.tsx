"use client";

import { useEffect, useState } from "react";
import { PixelBlast } from "./pixel-blast";

function normalizeColor(colorStr: string): string | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = colorStr;
  const normalized = ctx.fillStyle;
  return normalized;
}

function readCssVar(varName: string): string | null {
  if (typeof document === "undefined") return null;
  const el = document.createElement("div");
  el.style.color = `var(${varName})`;
  el.style.position = "absolute";
  el.style.visibility = "hidden";
  document.body.appendChild(el);
  const computed = getComputedStyle(el).color;
  document.body.removeChild(el);
  return normalizeColor(computed);
}

export function ThemePixelBlast() {
  const [color, setColor] = useState<string>("#000000");

  useEffect(() => {
    const readColor = () => {
      const normalized = readCssVar("--foreground");
      if (normalized) setColor(normalized);
    };

    readColor();

    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PixelBlast
      variant="square"
      pixelSize={3}
      color={color}
      patternScale={3.5}
      patternDensity={1.3}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.09}
      rippleIntensityScale={1}
      speed={0.6}
      transparent
      edgeFade={0.15}
      className="absolute inset-0 z-0"
    />
  );
}
