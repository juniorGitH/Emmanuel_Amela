import {
  profileData,
  experiences,
  education,
  researchInterests,
  projects,
  skills,
} from "./seed-data";
import { mapExperience, mapProject, mapResearch } from "./mappers";

export function getStaticPortfolio() {
  return {
    profile: profileData,
    experiences: experiences.map((e) =>
      mapExperience({
        company: e.company,
        role: e.role,
        location: e.location ?? null,
        startDate: e.startDate,
        endDate: e.endDate ?? null,
        description: e.description,
        highlights: e.highlights,
        order: e.order,
      })
    ),
    education,
    research: researchInterests.map(mapResearch),
    projects: projects.map((p) =>
      mapProject({
        title: p.title,
        description: p.description,
        category: p.category,
        url: p.url ?? null,
        tech: p.tech,
        featured: p.featured,
        order: p.order,
      })
    ),
    skills,
  };
}
