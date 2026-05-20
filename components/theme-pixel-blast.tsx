"use client";

import { useTheme } from "next-themes";
import { PixelBlast } from "./pixel-blast";

export function ThemePixelBlast() {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "light" ? "#252525" : "#fbfbfb";

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
