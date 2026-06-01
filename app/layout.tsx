import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Fauzan — Frontend Engineer",
    template: "%s — Ahmad Fauzan",
  },
  description:
    "Frontend engineer and UI designer. I build web interfaces, design systems, and creative tools.",
  keywords: [
    "frontend engineer",
    "design systems",
    "react",
    "next.js",
    "typescript",
    "creative tools",
    "web development",
  ],
  authors: [{ name: "Ahmad Fauzan" }],
  creator: "Ahmad Fauzan",
  metadataBase: new URL("https://vaujan.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaujan.github.io",
    siteName: "Ahmad Fauzan",
    title: "Ahmad Fauzan — Frontend Engineer",
    description:
      "Frontend engineer and UI designer. I build web interfaces, design systems, and creative tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Fauzan — Frontend Engineer",
    description:
      "Frontend engineer and UI designer. I build web interfaces, design systems, and creative tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
