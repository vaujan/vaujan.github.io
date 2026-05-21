import Link from "next/link";
import Image from "next/image";
import { getAllProjects, getProjectBySlug } from "@/lib/datocms";
import { Badge } from "@/components/ui/badge";
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
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Ahmad Fauzan`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Ahmad Fauzan`,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <article className="mx-auto w-full max-w-2xl px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
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
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{project.type}</Badge>
                <Badge variant="outline">{project.year}</Badge>
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator />

          <ScrollReveal delay={0.2}>
            <div
              className="prose prose-sm max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: project.body }}
            />
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
}
