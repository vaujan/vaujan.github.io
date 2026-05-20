import { executeQuery } from "@datocms/cda-client";
import { projects as mockProjects } from "./projects";

export interface Project {
  slug: string;
  name: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  body: string;
  imageUrl: string;
}

const API_TOKEN = process.env.DATOCMS_API_TOKEN;
const ENVIRONMENT = process.env.DATOCMS_ENVIRONMENT;

function isConfigured() {
  return !!API_TOKEN;
}

function cmsQuery<T = unknown>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!API_TOKEN) {
    throw new Error("DatoCMS API token is not configured");
  }
  return executeQuery(query, {
    token: API_TOKEN,
    environment: ENVIRONMENT,
    excludeInvalid: true,
    includeDrafts: process.env.NODE_ENV === "development",
    variables,
  }) as Promise<T>;
}

const PROJECT_FIELDS = `
  slug
  name
  projectType
  year
  description
  stack
  body
  image {
    url
  }
`;

function normalizeStack(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw as string[];
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function normalizeProject(raw: Record<string, unknown>): Project {
  return {
    slug: String(raw.slug || ""),
    name: String(raw.name || ""),
    type: String(raw.projectType || raw.type || ""),
    year: String(raw.year || ""),
    description: String(raw.description || ""),
    stack: normalizeStack(raw.stack),
    body: String(raw.body || ""),
    imageUrl:
      typeof raw.image === "object" && raw.image !== null
        ? String((raw.image as Record<string, unknown>).url || "")
        : "",
  };
}

export async function getAllProjects(): Promise<Project[]> {
  if (!isConfigured()) {
    return mockProjects;
  }

  const data = await cmsQuery<{ allProjects: Record<string, unknown>[] }>(`
    query AllProjects {
      allProjects(orderBy: year_DESC) {
        ${PROJECT_FIELDS}
      }
    }
  `);

  return data.allProjects.map(normalizeProject);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  if (!isConfigured()) {
    const project = mockProjects.find((p) => p.slug === slug);
    return project || null;
  }

  const data = await cmsQuery<{ project: Record<string, unknown> | null }>(`
    query ProjectBySlug($slug: String!) {
      project(filter: { slug: { eq: $slug } }) {
        ${PROJECT_FIELDS}
      }
    }
  `, { slug });

  if (!data.project) return null;
  return normalizeProject(data.project);
}
