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

export default function WorkPage() {
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
                  <BreadcrumbPage>Selected Works</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Selected Works
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base text-muted-foreground">
              A collection of projects spanning design systems, creative tools, and
              product engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start gap-4">
          <p className="text-base text-muted-foreground">
            No projects here yet. Check back soon.
          </p>
        </div>
      </section>
    </main>
  );
}
