"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun, IconFileText } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      <a
        href="/"
        className="text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent-foreground"
      >
        Ahmad Fauzan
      </a>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          asChild
        >
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
          >
            <IconFileText className="size-4" />
            Resume
          </a>
        </Button>
        {mounted && (
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <IconSun className="size-4" />
            ) : (
              <IconMoon className="size-4" />
            )}
          </Button>
        )}
      </div>
    </header>
  );
}
