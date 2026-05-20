import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { getAllProjects } from "@/lib/datocms";
import { Separator } from "@/components/ui/separator";
import { ThemePixelBlast } from "@/components/theme-pixel-blast";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col">
      {/* Opening Statement */}
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6 py-16 md:px-8 md:py-20">
        <ThemePixelBlast />
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Building thoughtful digital experiences at the intersection of design and engineering.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Ahmad Fauzan — Frontend engineer focused on design systems, creative tools, and products that respect their users.
          </p>
        </div>
      </section>

      <Separator />

      {/* Index of Works */}
      <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Selected Works
          </h2>
          <div className="flex flex-col">
            {projects.slice(0, 3).map((project, index) => (
              <div key={project.slug}>
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
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
            >
              View all selected works
              <IconArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Closing Note */}
      <section className="flex flex-col justify-center px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-base text-muted-foreground">
            Currently available for select projects and collaborations. If you have something meaningful to build, let&apos;s talk.
          </p>
          <a
            href="mailto:ahmad.fauzan@example.com"
            className="mt-4 inline-block text-base font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
          >
            ahmad.fauzan@example.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmad Fauzan
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, shadcn/ui, and careful attention to detail.
          </p>
        </div>
      </footer>
    </main>
  );
}
