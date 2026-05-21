import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ahmadfauzan",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmadfauzan",
    icon: IconBrandLinkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/ahmadfauzan",
    icon: IconBrandX,
  },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12">
        <Separator />

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left: Branding + Colophon */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-foreground">
              Ahmad Fauzan
            </p>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              Frontend engineer focused on design systems, creative tools, and
              products that respect their users.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, shadcn/ui, and careful attention to detail.
            </p>
          </div>

          {/* Right: Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmad Fauzan
          </p>
          <p className="text-xs text-muted-foreground">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
