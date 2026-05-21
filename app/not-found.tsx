import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            404
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Page not found
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <Button variant="outline" size="default" asChild>
              <Link href="/">
                Return home
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
