import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Resume",
  description: "Resume of Ahmad Fauzan — Frontend Engineer.",
};

export default function ResumePage() {
  return (
    <main className="flex flex-col">
      <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
        <div className="flex flex-col gap-2">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Resume
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Ahmad Fauzan
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base text-muted-foreground">
              Frontend Engineer — Design Systems & Creative Tools
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="mailto:hello@ahmadfauzan.dev"
              className="mt-1 inline-block text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
            >
              hello@ahmadfauzan.dev
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Experience
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      Senior Frontend Engineer
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      2022 — Present
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">TechCorp</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Leading the design system initiative across 5 product teams.
                    Built a scalable component library on Radix UI and Tailwind CSS.
                    Improved UI development time by 60% and achieved WCAG 2.1 AA
                    compliance across all components.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      Frontend Engineer
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      2020 — 2022
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">StartupXYZ</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built real-time collaborative features and creative tooling
                    interfaces. Worked with WebGL, Web Audio API, and CRDTs.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Design Systems",
                  "Radix UI",
                  "Storybook",
                  "WebGL",
                  "Node.js",
                  "PostgreSQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Education
              </h2>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  B.S. Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  University of Indonesia — 2016–2020
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
