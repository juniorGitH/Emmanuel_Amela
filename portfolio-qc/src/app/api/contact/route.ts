import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrisma } from "../../../lib/db";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  org: z.string().max(160).optional().nullable(),
  subject: z.string().min(3).max(200),
  message: z.string().min(20).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const prisma = getPrisma();
    if (!prisma) {
      return NextResponse.json(
        {
          ok: false,
          error: "Base de données non configurée. Réessayez plus tard.",
        },
        { status: 503 }
      );
    }

    const saved = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        org: data.org || null,
        subject: data.subject,
        message: data.message,
      },
    });

    return NextResponse.json({
      ok: true,
      id: saved.id,
      message: "Message reçu. Je vous répondrai rapidement.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Données invalides", details: error.flatten() },
        { status: 400 }
      );
    }

    console.error("contact POST error:", error);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur lors de l'envoi." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const prisma = getPrisma();
    if (!prisma) {
      return NextResponse.json({ messages: [] });
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("contact GET error:", error);
    return NextResponse.json({ messages: [] });
  }
}
