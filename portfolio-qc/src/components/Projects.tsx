type Project = {
  title: string;
  description: string;
  category: string;
  url?: string | null;
  tech: string[];
  featured: boolean;
};

const labels: Record<string, string> = {
  research: "Recherche",
  engineering: "Ingénierie",
  community: "Communauté",
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <p className="section-kicker">Travaux</p>
        <h2>Projets & contributions</h2>
        <p className="section-lead">
          Un mix recherche, ingénierie logicielle et leadership communautaire —
          le profil d’un candidat prêt à s’investir dans un stage de recherche.
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-row">
              <div className="project-meta">
                <span>{labels[project.category] || project.category}</span>
                {project.featured ? <span className="featured">Featured</span> : null}
              </div>
              <h3>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
