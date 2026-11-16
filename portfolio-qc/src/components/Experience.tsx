type ExperienceItem = {
  company: string;
  role: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description: string;
  highlights: string[];
};

type EducationItem = {
  institution: string;
  degree: string;
  field?: string | null;
  startDate: string;
  endDate?: string | null;
  description: string;
};

function formatRange(start: string, end?: string | null) {
  return `${start} — ${end || "Présent"}`;
}

export default function Experience({
  experiences,
  education,
}: {
  experiences: ExperienceItem[];
  education: EducationItem[];
}) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-kicker">Parcours</p>
        <h2>Expérience, formation & engagement</h2>

        <div className="split">
          <div>
            <h3 className="subhead">Expérience</h3>
            <ol className="timeline">
              {experiences.map((item) => (
                <li key={`${item.company}-${item.role}`}>
                  <div className="timeline-meta">
                    {formatRange(item.startDate, item.endDate)}
                    {item.location ? ` · ${item.location}` : ""}
                  </div>
                  <h4>
                    {item.role} · {item.company}
                  </h4>
                  <p>{item.description}</p>
                  <ul>
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="subhead">Formation</h3>
            <ol className="timeline">
              {education.map((item) => (
                <li key={item.institution}>
                  <div className="timeline-meta">
                    {formatRange(item.startDate, item.endDate)}
                  </div>
                  <h4>{item.degree}</h4>
                  <p className="muted">{item.institution}</p>
                  {item.field ? <p className="muted">{item.field}</p> : null}
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
