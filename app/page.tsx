import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { ThemePixelBlast } from "@/components/theme-pixel-blast"
import { FeaturedProject } from "@/components/featured-project"
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="relative flex min-h-[50vh] flex-col justify-end px-6 pb-12 md:min-h-[40vh] md:px-8 md:pb-16">
        <ThemePixelBlast />
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <ScrollReveal delay={0.1}>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Hey, I&apos;m Fauzan.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-1 text-base text-muted-foreground">
              I build web interfaces and design systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="mailto:buildfrombed@gmail.com"
                className="text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
              >
                buildfrombed@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/vaujan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="GitHub"
                >
                  <IconBrandGithub className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amdfauzan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin className="size-4" />
                </a>
                <a
                  href="https://instagram.com/amd_fzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram className="size-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Experience
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-col gap-10" staggerDelay={0.1}>
            <StaggerItem>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-medium text-foreground">
                    Monkeio.com (Independent SaaS Project)
                  </h3>
                  <span className="text-xs text-muted-foreground">Remote</span>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h4 className="text-sm font-medium text-foreground">
                      Fullstack Engineer & Designer
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      Jan 2025 — Apr 2026
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Built Monkeio.com, a productivity-focused SaaS application, independently managing product strategy, market research, UX design, branding, and full-stack development. Applied user-centered design principles to develop workflows, prioritize features, and improve product usability through iterative development.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-medium text-foreground">
                    Telkomsigma (PT Sigma Cipta Caraka)
                  </h3>
                  <span className="text-xs text-muted-foreground">Yogyakarta</span>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-border pl-4">
                  <div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        UI/UX Engineer
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        Jul 2023 — Jul 2025
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Designed user flows, wireframes, and high-fidelity interfaces for 5+ enterprise applications across the Telkom Group and Telkomsigma internal platforms. Developed and maintained frontend features using Nuxt.js and Tailwind CSS for enterprise operational systems. Collaborated with developers and stakeholders to translate business requirements into implementation-ready user experiences and frontend solutions.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        Microsoft L0 Support (Project Assignment)
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        Jan 2025 — Jul 2025
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Resolved first-level technical issues for 10–20 enterprise users per day across Microsoft services for enterprise client (Perum Bulog). Assisted users in troubleshooting technical issues, resolving operational blockers, and providing conference-call support when necessary. Communicated technical information clearly to non-technical users in professional environments.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-medium text-foreground">
                    Marketing and Communication | FPSB UII
                  </h3>
                  <span className="text-xs text-muted-foreground">Yogyakarta</span>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-border pl-4">
                  <div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        Head of Creative Media
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        Apr 2023 — Feb 2024
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Led and coordinated a team of 8 members, ensuring timely delivery of creative projects. Established structured workflows using Figma Jam and Trello, improving team coordination and reducing project delays.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        Staff of Creative Media
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        Jun 2020 — Apr 2022
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Created visual content using Adobe Creative Suite tools including Photoshop, Premiere Pro, Lightroom, and Illustrator. Produced more than 20 visual assets per week across multiple digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Capabilities
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-col gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    React
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    SvelteKit
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Nuxt.js
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Shadcn/ui
                  </Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-foreground">Backend & Data</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Supabase
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    SQLite
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Headless CMS
                  </Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-foreground">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Design Systems
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    UX Writing
                  </Badge>
                  <Badge variant="outline" className="h-auto rounded-md px-3.5 py-1.5 text-sm font-normal text-muted-foreground">
                    Adobe Creative Suite
                  </Badge>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProject />

      {/* Index of Works — hidden for now */}
      {/*
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
      */}
    </main>
  )
}
