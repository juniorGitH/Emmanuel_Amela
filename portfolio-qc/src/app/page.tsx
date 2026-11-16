import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Research from "../components/Research";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getStaticPortfolio } from "../lib/api";
import { getPrisma } from "../lib/db";
import { mapExperience, mapProject, mapResearch } from "../lib/mappers";

async function loadPortfolio() {
  try {
    const prisma = getPrisma();
    if (!prisma) return getStaticPortfolio();

    const [profile, experiences, education, research, projects, skills] =
      await Promise.all([
        prisma.profile.findFirst(),
        prisma.experience.findMany({ orderBy: { order: "asc" } }),
        prisma.education.findMany({ orderBy: { order: "asc" } }),
        prisma.researchInterest.findMany({ orderBy: { order: "asc" } }),
        prisma.project.findMany({ orderBy: { order: "asc" } }),
        prisma.skill.findMany({ orderBy: { order: "asc" } }),
      ]);

    if (!profile) return getStaticPortfolio();

    return {
      profile,
      experiences: experiences.map(mapExperience),
      education,
      research: research.map(mapResearch),
      projects: projects.map(mapProject),
      skills,
    };
  } catch {
    return getStaticPortfolio();
  }
}

export default async function HomePage() {
  const data = await loadPortfolio();

  return (
    <>
      <Header />
      <main>
        <Hero
          name={data.profile.name}
          title={data.profile.title}
          headline={data.profile.headline}
          seeking={data.profile.seeking}
        />
        <About
          summary={data.profile.summary}
          location={data.profile.location}
          email={data.profile.email}
          linkedIn={data.profile.linkedIn}
          gitHub={data.profile.gitHub}
          skills={data.skills}
        />
        <Research items={data.research} />
        <Experience experiences={data.experiences} education={data.education} />
        <Projects projects={data.projects} />
        <Contact email={data.profile.email} />
      </main>
      <Footer
        name={data.profile.name}
        linkedIn={data.profile.linkedIn}
        gitHub={data.profile.gitHub}
      />
    </>
  );
}
