export default function Footer({
  name,
  linkedIn,
  gitHub,
}: {
  name: string;
  linkedIn: string;
  gitHub: string;
}) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {name} — Portfolio recherche · Quantum
          Computing
        </p>
        <div className="footer-links">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={gitHub} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/cv-emmanuel.pdf" download>
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
