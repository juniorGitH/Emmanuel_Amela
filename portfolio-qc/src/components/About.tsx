type AboutProps = {
  summary: string;
  location: string;
  email: string;
  linkedIn: string;
  gitHub: string;
  skills: { name: string; category: string }[];
};

export default function About({
  summary,
  location,
  email,
  linkedIn,
  gitHub,
  skills,
}: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <p className="section-kicker">Profil</p>
        <h2>Ingénieur logiciel tourné vers la recherche quantique</h2>
        <p className="section-lead">{summary}</p>

        <div className="meta-row">
          <span>{location}</span>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={gitHub} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <ul className="skill-cloud">
          {skills.map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
