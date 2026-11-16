# Nouveau portfolio (Quantum Research)

Le portfolio restructuré se trouve dans `portfolio-qc/`.

- **URL production** : https://emmanuel-amela-qc.vercel.app
- **Stack** : Next.js + Prisma Postgres + API Routes
- **Objectif** : candidature stage recherche informatique quantique

## Action urgente

Réclamer la base Prisma Postgres (gratuite) avant expiration :

Voir `CLAIM_URL` dans `portfolio-qc/.env`

## Local

```bash
cd portfolio-qc
npm install
npm run db:setup
npm run dev
```

## GitHub Actions

Workflow : `.github/workflows/portfolio-qc.yml`

Secrets GitHub requis pour le déploiement Vercel :

| Secret | Valeur |
| --- | --- |
| `VERCEL_TOKEN` | Token perso Vercel (Account → Tokens) |
| `VERCEL_ORG_ID` | `team_K8ZuvkBBO3pdA2Q9al95iu83` |
| `VERCEL_PROJECT_ID` | `prj_Z4DBlP2cu0ttsAdXRgosVC1lAmpG` |
| `DATABASE_URL` | URL Postgres (voir `.env`) |
