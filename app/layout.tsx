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
    "Building thoughtful digital experiences at the intersection of design and engineering. Frontend engineer focused on design systems, creative tools, and products that respect their users.",
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
  metadataBase: new URL("https://ahmadfauzan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmadfauzan.dev",
    siteName: "Ahmad Fauzan",
    title: "Ahmad Fauzan — Frontend Engineer",
    description:
      "Building thoughtful digital experiences at the intersection of design and engineering.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ahmadfauzan",
    title: "Ahmad Fauzan — Frontend Engineer",
    description:
      "Building thoughtful digital experiences at the intersection of design and engineering.",
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
