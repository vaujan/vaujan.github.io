import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/datocms";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col">
      <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
        <div className="flex flex-col gap-2">
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

          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Selected Works
          </h1>
          <p className="text-base text-muted-foreground">
            A collection of projects spanning design systems, creative tools, and
            product engineering.
          </p>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 336px"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-base font-medium text-foreground group-hover:text-accent-foreground">
                    {project.name}
                  </h2>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {project.type}
                </span>
              </div>
            </Link>
          ))}
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
