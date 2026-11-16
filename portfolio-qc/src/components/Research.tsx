type ResearchItem = {
  title: string;
  description: string;
  tags: string[];
};

export default function Research({ items }: { items: ResearchItem[] }) {
  return (
    <section id="research" className="section section-alt">
      <div className="container">
        <p className="section-kicker">Recherche</p>
        <h2>Axes pour un stage en quantum computing</h2>
        <p className="section-lead">
          Objectif : contribuer à un laboratoire ou une équipe de recherche sur
          les fondements, la simulation ou l’ingénierie logicielle du calcul
          quantique — en capitalisant sur mon inscription au cours du Pr.
          Frédéric Holweck (UTBM) et mon expérience chez Quantum ARISE.
        </p>

        <div className="research-grid">
          {items.map((item, index) => (
            <article key={item.title} className="research-item" style={{ ["--i" as string]: index }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
