/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import {connectToMySQL} from "@/lib/database";

export async function GET(_req: Request) {
  try {
    const connection = await connectToMySQL();

    // Récupérer l'utilisateur connecté (vous pouvez remplacer cet ID par une méthode d'authentification réelle)
    const userId = 1; // ID fictif, à adapter à votre logique
    const [user] = await connection.execute(
      "SELECT  nom, prenom, adresse, code_postal, ville, email FROM user WHERE id = ?",
      [userId]
    );

    await connection.end();

    if (!Array.isArray(user) || user.length === 0) {
      return NextResponse.json({ error: "Utilisateur introuvable." }, { status: 404 });
    }

    return NextResponse.json(user[0], { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
