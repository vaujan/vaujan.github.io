import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

export const metadata = {
  title: "Resume",
  description: "Resume of Ahmad Fauzan — Frontend Engineer & UI/UX Designer.",
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
              Frontend Engineer & UI/UX Designer
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <IconMapPin className="size-3.5" />
                Sorong, Southwest Papua
              </span>
              <a
                href="mailto:buildfrombed@gmail.com"
                className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
              >
                <IconMail className="size-3.5" />
                buildfrombed@gmail.com
              </a>
              <span className="inline-flex items-center gap-1.5">
                <IconPhone className="size-3.5" />
                081247358494 (WhatsApp)
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-3 flex items-center gap-2">
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
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-4">
              {/* TODO: Replace href with Google Docs resume link */}
              <Button variant="outline" size="sm" asChild>
                <a href="/resume.pdf" download>
                  <IconDownload className="size-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Experience
              </h2>

              <div className="flex flex-col gap-10">
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
                    <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                      <p>
                        Built Monkeio.com, a productivity-focused SaaS application, independently managing product strategy, market research, UX design, branding, and full-stack development.
                      </p>
                      <p>
                        Applied user-centered design principles to develop workflows, prioritize features, and improve product usability through iterative development.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="opacity-30" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-medium text-foreground">
                      Telkomsigma (PT Sigma Cipta Caraka)
                    </h3>
                    <span className="text-xs text-muted-foreground">Yogyakarta</span>
                  </div>
                  <div className="flex flex-col gap-6 border-l-2 border-border pl-4">
                    <div>
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <h4 className="text-sm font-medium text-foreground">
                          UI/UX Engineer
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          Jul 2023 — Jul 2025
                        </span>
                      </div>
                      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          Designed user flows, wireframes, and high-fidelity interfaces for 5+ enterprise applications across the Telkom Group and Telkomsigma internal platforms.
                        </p>
                        <p>
                          Developed and maintained frontend features using Nuxt.js and Tailwind CSS for enterprise operational systems.
                        </p>
                        <p>
                          Collaborated with developers and stakeholders to translate business requirements into implementation-ready user experiences and frontend solutions.
                        </p>
                      </div>
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
                      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          Resolved first-level technical issues for 10–20 enterprise users per day across Microsoft services for enterprise client (Perum Bulog).
                        </p>
                        <p>
                          Assisted users in troubleshooting technical issues, resolving operational blockers, and providing conference-call support when necessary.
                        </p>
                        <p>
                          Communicated technical information clearly to non-technical users in professional environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="opacity-30" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-medium text-foreground">
                      Marketing and Communication | FPSB UII (Fakultas Psikologi & Ilmu Sosial Budaya)
                    </h3>
                    <span className="text-xs text-muted-foreground">Yogyakarta</span>
                  </div>
                  <div className="flex flex-col gap-6 border-l-2 border-border pl-4">
                    <div>
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <h4 className="text-sm font-medium text-foreground">
                          Head of Creative Media
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          Apr 2023 — Feb 2024
                        </span>
                      </div>
                      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          Led and coordinated a team of 8 members, ensuring timely delivery of creative projects.
                        </p>
                        <p>
                          Established structured workflows using Figma Jam and Trello, improving team coordination and reducing project delays.
                        </p>
                      </div>
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
                      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          Created visual content using Adobe Creative Suite tools including Photoshop, Premiere Pro, Lightroom, and Illustrator.
                        </p>
                        <p>
                          Produced more than 20 visual assets per week across multiple digital platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Selected Works
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      <a
                        href="https://monkeio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-accent-foreground"
                      >
                        Monkeio.com
                      </a>
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      Fullstack Engineer & Designer
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A deep work tracker currently in Beta. Built as a passion project and entrepreneurial venture.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      SentraPDP / PatuhPDP
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      UI/UX Design
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Data protection compliance platform for enterprise clients.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      Digisign
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      UI/UX Design
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Digital signature platform for BUMN / state-owned enterprises.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      E-procurement
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      UI/UX Design
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise procurement system.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      Frederica (Risk Management System)
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      UI/UX Design
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise risk management system.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-6">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Education
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      Bachelor of Communication Science
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      2019 — Jan 2024
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Universitas Islam Indonesia — Yogyakarta, ID
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Graduated with a cumulative GPA of 3.81 out of 4.0 (Cumlaude). Thesis: <em>Analisis Resepsi Generasi Z Terhadap Pendidikan Kesehatan Mental dalam Youtube Channel Satu Persen</em>.
                    </p>
                    <p>
                      Coursework and certificates: Certificate of English Proficiency; Responsive Web Design (freeCodeCamp); Foundations of UX Design (Google).
                    </p>
                  </div>
                </div>

                <Separator className="opacity-30" />

                <div>
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      UI/UX Design & Research Bootcamp
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      Nov 2022 — Mar 2023
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Binar Academy — Remote
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Graduated with the honor of "The Most Progressive Student" in Wave 30.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Technical Skills
              </h2>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>
                  Frontend Engineering — TypeScript, Tailwind CSS, Shadcn/ui, SvelteKit, Nuxt.js, Next.js, Vercel, MongoDB, SQLite, Supabase
                </p>
                <p>
                  UI/UX Design — Design Systems, UX Writing, Wireframing, Prototyping, Figma
                </p>
                <p>
                  Data Analytics & Office — Python, SQL, Excel, Powershell, Microsoft 365, Microsoft Entra
                </p>
                <p>
                  Tools & Platforms — Headless CMS (Strapi, Sanity CMS, DatoCMS), Adobe Photoshop, Premiere Pro, Illustrator, Lightroom, Notion
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Languages
              </h2>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <p>Bahasa Indonesia — Native</p>
                <p>English — Excellent User (C1/C2 equivalent)</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Download
              </h2>
              {/* TODO: Replace href with Google Docs resume link */}
              <Button variant="outline" size="default" asChild>
                <a href="/resume.pdf" download>
                  <IconDownload className="size-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
