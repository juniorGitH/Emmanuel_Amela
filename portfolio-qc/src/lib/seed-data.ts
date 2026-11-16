export const profileData = {
  name: "Emmanuel AMELA",
  title: "Ingénieur logiciel · Intelligence artificielle · Informatique quantique",
  headline:
    "Candidat au Master Informatique & Systèmes (EPL–UTBM) — ouvert à un stage de recherche en quantum computing",
  summary:
    "Software Engineer et Microsoft Student Ambassador, je poursuis un Master of Science (MSc) en Computer Systems en double diplôme entre l’École Polytechnique de Lomé (EPL) et l’Université de Technologie de Belfort-Montbéliard (UTBM). Mon parcours allie ingénierie logicielle (.NET, React, Azure), intelligence artificielle et un engagement croissant vers l’informatique quantique — notamment via mon inscription au cours d’informatique quantique du Pr. Frédéric Holweck (UTBM) et mon expérience chez Quantum ARISE. Je recherche un stage de recherche pour contribuer à des travaux en algorithms quantiques, simulation et calcul scientifique.",
  email: "Emmanuel.Amela@studentambassadors.com",
  location: "Lomé, Togo · Mobilité France (UTBM)",
  linkedIn: "https://www.linkedin.com/in/emmanuel-amela/",
  gitHub: "https://github.com/juniorGitH",
  website: "https://e-a.codes",
  seeking:
    "Stage de recherche en informatique quantique (algorithms, simulation, hybrid classical–quantum, scientific computing)",
};

export const experiences = [
  {
    company: "Microsoft",
    role: "Microsoft Learn Student Ambassador",
    location: "Lomé, Togo",
    startDate: "2023-10",
    endDate: null,
    description:
      "Promotion des technologies Microsoft et animation de communautés tech. Organisation d’ateliers techniques et mentorat d’étudiants.",
    highlights: JSON.stringify([
      "Atelier « Essentiel de React » avec ASP.NET et Azure",
      "Atelier « Mastering the Basics of RESTful API with .NET C# »",
      "Participation au 12ᵉ NYUAD International Hackathon for Social Good (2024)",
    ]),
    order: 1,
  },
  {
    company: "Quantum ARISE",
    role: "C# Developer",
    location: "Lomé, Togo / France",
    startDate: "2024-03",
    endDate: "2025-09",
    description:
      "Développement logiciel au sein d’une structure de services de recherche (Quantum ARISE), avec une exposition aux enjeux du calcul et de l’innovation deeptech.",
    highlights: JSON.stringify([
      "Développement d’applications et d’API en C# / .NET",
      "Collaboration dans un contexte recherche & innovation",
      "Contribution liée au hackathon NYUAD (projet quantum computing)",
    ]),
    order: 2,
  },
  {
    company: "Python Togo",
    role: "Co-fondateur",
    location: "Lomé, Togo",
    startDate: "2023",
    endDate: null,
    description:
      "Co-fondation et animation de la communauté Python au Togo : événements, partage de connaissances et organisation locale.",
    highlights: JSON.stringify([
      "Co-organisation de PyCon Togo et PyCon Africa Extended — Lomé Edition",
      "Participation à PyCon Africa 2024 (University of Ghana)",
      "Animation de workshops autour de Python, IA et systèmes de recommandation",
    ]),
    order: 3,
  },
];

export const education = [
  {
    institution: "UTBM · Université de Technologie de Belfort-Montbéliard",
    degree: "MSc Computer Systems (double diplôme)",
    field: "Informatique & Systèmes — recherche, systèmes intelligents, calcul scientifique",
    startDate: "2025",
    endDate: "2027",
    description:
      "Double diplôme EPL–UTBM. Inscription au cours d’informatique quantique du Pr. Frédéric Holweck. Membre d’un groupe de recherche multidisciplinaire en physique.",
    order: 1,
  },
  {
    institution: "École Polytechnique de Lomé (EPL) — Université de Lomé",
    degree: "MSc Computer Systems (double diplôme)",
    field: "Informatique & Systèmes",
    startDate: "2025",
    endDate: "2027",
    description:
      "Formation d’excellence en double diplôme avec l’UTBM, orientée systèmes avancés, IA/Big Data et mobilité internationale.",
    order: 2,
  },
  {
    institution: "Institut Polytechnique Defitech",
    degree: "Licence — Génie logiciel",
    field: "Software Engineering",
    startDate: "2021",
    endDate: "2024",
    description:
      "Formation solide en développement logiciel, conception, tests et ingénierie des systèmes. Engagement communautaire (CPD, GDSC DEFITECH).",
    order: 3,
  },
];

export const researchInterests = [
  {
    title: "Algorithmes quantiques & complexité",
    description:
      "Étude des primitives quantiques (interférence, entanglement, oracles) et des algorithmes fondamentaux (Grover, Deutsch–Jozsa, circuits variationnels) en lien avec les applications de recherche.",
    tags: JSON.stringify(["Qiskit", "Circuits", "Grover", "VQE"]),
    order: 1,
  },
  {
    title: "Simulation & calcul scientifique hybride",
    description:
      "Approches hybrides classique–quantique pour la simulation, le calcul scientifique et l’optimisation, en s’appuyant sur mon background en systèmes et IA.",
    tags: JSON.stringify(["Hybrid QC", "Simulation", "Scientific computing"]),
    order: 2,
  },
  {
    title: "Ingénierie logicielle pour le quantum",
    description:
      "Conception d’API, pipelines et outils logiciels robustes (.NET, Python, cloud) pour expérimenter, mesurer et industrialiser des protocoles quantiques.",
    tags: JSON.stringify([".NET", "Python", "Azure", "APIs"]),
    order: 3,
  },
  {
    title: "IA & systèmes intelligents",
    description:
      "Intersection entre machine learning et calcul avancé : modélisation, données, et déploiement cloud — un socle pour explorer le quantum machine learning.",
    tags: JSON.stringify(["ML", "QML", "Cloud", "Systems"]),
    order: 4,
  },
];

export const projects = [
  {
    title: "Cours d’informatique quantique — UTBM (Pr. Holweck)",
    description:
      "Inscription confirmée au cours d’informatique quantique du Pr. Frédéric Holweck (UTBM). Engagement académique pour construire un socle théorique et pratique en vue d’un stage de recherche.",
    category: "research",
    url: null,
    tech: JSON.stringify(["Quantum Computing", "UTBM", "Research"]),
    featured: true,
    order: 1,
  },
  {
    title: "Hackathon NYUAD — Quantum Computing (Quantum ARISE)",
    description:
      "Participation à la 12ᵉ édition de l’International Hackathon for Social Good (NYU Abu Dhabi, 2024), contribution à un projet d’informatique quantique avec Quantum ARISE.",
    category: "research",
    url: "https://hackathon.nyuad.nyu.edu/year/2024/",
    tech: JSON.stringify(["Quantum", "Hackathon", "C#"]),
    featured: true,
    order: 2,
  },
  {
    title: "ComptaPlus — Application de comptabilité",
    description:
      "Application de gestion comptable (ASP.NET Web API + React) : écritures, grand livre, bilan, compte de résultat, import/export.",
    category: "engineering",
    url: "https://comptaplus-app.azurewebsites.net",
    tech: JSON.stringify(["ASP.NET", "React", "Azure", "SQL"]),
    featured: true,
    order: 3,
  },
  {
    title: "Workshop .NET — RESTful API avec C#",
    description:
      "Animation d’un atelier Microsoft sur les fondamentaux des API REST avec .NET C# (présentation + live coding).",
    category: "community",
    url: "https://mvp.microsoft.com/fr-FR/events/47078",
    tech: JSON.stringify([".NET", "C#", "Web API", "Teaching"]),
    featured: false,
    order: 4,
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "Organisation d’événements tech, mentorat et promotion de .NET, React et Azure auprès des étudiants en Afrique.",
    category: "community",
    url: "https://mvp.microsoft.com/fr-FR/studentambassadors/profile/8a9ab462-afce-4e4c-b222-abc409bac550",
    tech: JSON.stringify(["Community", "Azure", "React", ".NET"]),
    featured: false,
    order: 5,
  },
  {
    title: "PyCon Africa & PyCon Togo Extended",
    description:
      "Participation à PyCon Africa 2024 et co-organisation de PyCon Africa Extended — édition Lomé, pour structurer l’écosystème Python togolais.",
    category: "community",
    url: null,
    tech: JSON.stringify(["Python", "Community", "Events"]),
    featured: false,
    order: 6,
  },
];

export const skills = [
  { name: "C# / .NET / ASP.NET", category: "backend", order: 1 },
  { name: "React / TypeScript", category: "frontend", order: 2 },
  { name: "Python", category: "languages", order: 3 },
  { name: "API REST & conception logicielle", category: "engineering", order: 4 },
  { name: "Azure / Cloud", category: "cloud", order: 5 },
  { name: "Bases de données SQL", category: "data", order: 6 },
  { name: "IA / Machine Learning (fondamentaux)", category: "ai", order: 7 },
  { name: "Informatique quantique (en formation)", category: "quantum", order: 8 },
  { name: "Calcul scientifique", category: "research", order: 9 },
  { name: "CI/CD & DevOps", category: "engineering", order: 10 },
];
