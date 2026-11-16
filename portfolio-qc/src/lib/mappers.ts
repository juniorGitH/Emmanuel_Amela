function parseJsonArray(value: string): string[] {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function mapExperience(e: {
  company: string;
  role: string;
  location: string | null;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string;
  order: number;
}) {
  return {
    company: e.company,
    role: e.role,
    location: e.location,
    startDate: e.startDate,
    endDate: e.endDate,
    description: e.description,
    highlights: parseJsonArray(e.highlights),
    order: e.order,
  };
}

export function mapResearch(r: {
  title: string;
  description: string;
  tags: string;
  order: number;
}) {
  return {
    title: r.title,
    description: r.description,
    tags: parseJsonArray(r.tags),
    order: r.order,
  };
}

export function mapProject(p: {
  title: string;
  description: string;
  category: string;
  url: string | null;
  tech: string;
  featured: boolean;
  order: number;
}) {
  return {
    title: p.title,
    description: p.description,
    category: p.category,
    url: p.url,
    tech: parseJsonArray(p.tech),
    featured: p.featured,
    order: p.order,
  };
}
