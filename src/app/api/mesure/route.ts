import { NextResponse } from "next/server";
import prisma from "@/lib/mongoClient"; 

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const nouvelleMesure = await prisma.mesure.create({
      data,
    });

    return NextResponse.json(nouvelleMesure, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const mesures = await prisma.mesure.findMany();
    return NextResponse.json(mesures);
  } catch (error) {
    console.error("Erreur lors de la récupération des mesures :", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
