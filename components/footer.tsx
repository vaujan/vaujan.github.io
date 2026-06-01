import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vaujan",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amdfauzan/",
    icon: IconBrandLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/amd_fzn",
    icon: IconBrandInstagram,
  },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left: Branding + Colophon */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-foreground">
              Ahmad Fauzan
            </p>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              I design and build web interfaces.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, shadcn/ui, and DatoCMS.
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
