import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import {
  profileData,
  experiences,
  education,
  researchInterests,
  projects,
  skills,
} from "../src/lib/seed-data";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const existing = await prisma.profile.count();

  if (existing > 0 && process.env.FORCE_SEED !== "1") {
    console.log("Database already seeded. Set FORCE_SEED=1 to reseed.");
    return;
  }

  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();
  await prisma.researchInterest.deleteMany();
  await prisma.education.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({ data: profileData });
  await prisma.experience.createMany({ data: experiences });
  await prisma.education.createMany({ data: education });
  await prisma.researchInterest.createMany({ data: researchInterests });
  await prisma.project.createMany({ data: projects });
  await prisma.skill.createMany({ data: skills });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
