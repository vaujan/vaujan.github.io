import Link from "next/link"
import {
  IconArrowRight,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"
import { getAllProjects } from "@/lib/datocms"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemePixelBlast } from "@/components/theme-pixel-blast"
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal"

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="relative flex min-h-[50vh] flex-col justify-end px-6 pb-12 md:min-h-[40vh] md:px-8 md:pb-16">
        <ThemePixelBlast />
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Frontend Engineer
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Ahmad Fauzan
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-1 text-base text-muted-foreground">
              Design systems, creative tools, and products that respect their
              users.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@ahmadfauzan.dev"
                className="text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
              >
                hello@ahmadfauzan.dev
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/ahmadfauzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="GitHub"
                >
                  <IconBrandGithub className="size-4" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmadfauzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin className="size-4" />
                </a>
                <a
                  href="https://x.com/ahmadfauzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="X / Twitter"
                >
                  <IconBrandX className="size-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      {/* Experience */}
      <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Experience
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-col gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-base font-medium text-foreground">
                    Senior Frontend Engineer
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    2022 — Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">TechCorp</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Leading the design system initiative across 5 product teams.
                  Built a scalable component library on Radix UI and Tailwind
                  CSS. Improved UI development time by 60% and achieved WCAG 2.1
                  AA compliance across all components.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-base font-medium text-foreground">
                    Frontend Engineer
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    2020 — 2022
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">StartupXYZ</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Built real-time collaborative features and creative tooling
                  interfaces. Worked with WebGL, Web Audio API, and CRDTs.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <Separator />

      {/* Index of Works */}
      <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Selected Works
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-col" staggerDelay={0.08}>
            {projects.slice(0, 3).map((project, index) => (
              <StaggerItem key={project.slug}>
                <div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex w-full flex-col gap-1 py-5 text-left transition-colors hover:bg-accent/50 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-3"
                  >
                    <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
                      <span className="text-lg font-medium text-foreground group-hover:text-accent-foreground md:text-xl">
                        {project.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.type}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </Link>
                  {index < 2 && <Separator className="opacity-50" />}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <Button variant="secondary" size="default" asChild>
                <Link href="/work">
                  View all selected works
                  <IconArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      {/* Closing Note */}
      <section className="flex flex-col justify-center px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <ScrollReveal>
            <p className="text-base text-muted-foreground">
              Currently available for select projects and collaborations. If you
              have something meaningful to build, let&apos;s talk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-4">
              <Button variant="outline" size="default" asChild>
                <a href="mailto:hello@ahmadfauzan.dev">
                  <IconMail className="size-4" />
                  hello@ahmadfauzan.dev
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
