import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ProjectNotFound() {
  return (
    <main className="flex flex-col">
      <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
        <ScrollReveal>
          <Breadcrumb className="mb-12">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/work">Selected Works</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Not Found</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ScrollReveal>

        <div className="flex flex-col items-center text-center">
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              404
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Project not found
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
              The project you are looking for does not exist or may have been removed.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8">
              <Button variant="outline" size="default" asChild>
                <Link href="/work">
                  Browse all works
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
