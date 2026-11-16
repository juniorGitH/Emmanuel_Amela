# Emmanuel AMELA — Portfolio Recherche (Quantum Computing)

Portfolio Next.js orienté **stage de recherche en informatique quantique**, synchronisé avec le profil LinkedIn et alimenté par une API + PostgreSQL (Prisma).

## Stack

- **Frontend** : Next.js (App Router) + TypeScript + Tailwind
- **Backend** : Route Handlers `/api/portfolio`, `/api/contact`
- **Base de données** : Prisma Postgres
- **Déploiement** : Vercel

## Démarrage local

```bash
cd portfolio-qc
npm install
cp .env.example .env   # renseigner DATABASE_URL
npm run db:setup
npm run dev
```

## Important — réclamation de la base

La base Prisma Postgres créée pour ce projet est temporaire. **Réclamez-la** (gratuit) via l’URL `CLAIM_URL` dans `.env` avant expiration, sinon les données seront perdues.

## Déploiement Vercel

1. Lier le projet (`vercel`)
2. Ajouter la variable d’environnement `DATABASE_URL`
3. Déployer (`vercel --prod`)
