import { NextResponse } from "next/server";
import { getPrisma } from "../../../lib/db";
import { getStaticPortfolio } from "../../../lib/api";
import { mapExperience, mapProject, mapResearch } from "../../../lib/mappers";

export async function GET() {
  try {
    const prisma = getPrisma();
    if (!prisma) {
      return NextResponse.json(getStaticPortfolio());
    }

    const [profile, experiences, education, research, projects, skills] =
      await Promise.all([
        prisma.profile.findFirst(),
        prisma.experience.findMany({ orderBy: { order: "asc" } }),
        prisma.education.findMany({ orderBy: { order: "asc" } }),
        prisma.researchInterest.findMany({ orderBy: { order: "asc" } }),
        prisma.project.findMany({ orderBy: { order: "asc" } }),
        prisma.skill.findMany({ orderBy: { order: "asc" } }),
      ]);

    if (!profile) {
      return NextResponse.json(getStaticPortfolio());
    }

    return NextResponse.json({
      profile,
      experiences: experiences.map(mapExperience),
      education,
      research: research.map(mapResearch),
      projects: projects.map(mapProject),
      skills,
    });
  } catch (error) {
    console.error("portfolio GET error:", error);
    return NextResponse.json(getStaticPortfolio());
  }
}
