import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Now",
  description: "What Ahmad Fauzan is currently working on, reading, and thinking about.",
};

export default function NowPage() {
  return (
    <main className="flex flex-col">
      <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
        <div className="flex flex-col gap-2">
          <ScrollReveal>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Now</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Now
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base text-muted-foreground">
              What I am currently focused on — inspired by{" "}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
              >
                nownownow.com
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Working on
              </h2>
              <p className="text-base text-muted-foreground">
                Building{" "}
                <a
                  href="https://monkeio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-accent-foreground"
                >
                  Monkeio.com
                </a>
                , a deep work tracker currently in Beta. Also refining this portfolio and exploring creative coding with WebGL.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Reading
              </h2>
              <p className="text-base text-muted-foreground">
                <em>The Design of Everyday Things</em> by Don Norman — revisiting
                the classics to ground product decisions in human-centered principles.
                Also slowly making my way through <em>Thinking, Fast and Slow</em> by
                Daniel Kahneman.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Listening to
              </h2>
              <p className="text-base text-muted-foreground">
                A mix of ambient electronic, modern jazz, and instrumental post-rock.
                Current repeat: anything by Nils Frahm, Ólafur Arnalds, and the
                occasional Tycho album while coding.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Thinking about
              </h2>
              <p className="text-base text-muted-foreground">
                The tension between consistency and expression in design systems.
                How do you build tools that feel cohesive without becoming boring?
                Also: the future of local-first software and CRDTs for real-time
                collaboration.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Location
              </h2>
              <p className="text-base text-muted-foreground">
                Based in Sorong, Southwest Papua. Open to remote collaborations and
                select on-site engagements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
