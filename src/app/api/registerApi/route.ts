import { NextResponse } from "next/server";
import { connectToMySQL } from "@/lib/database";
import { hash } from "bcryptjs";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("✅ Données reçues :", body);

    const { nom, prenom, adresse, code_Postal, ville, email, mot_De_Passe } = body;

    if (!nom || !prenom || !adresse || !ville || !code_Postal || !email || !mot_De_Passe) {
      console.log("❌ Erreur: Un champ obligatoire est manquant !");
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const connection = await connectToMySQL();

    console.log("🔍 Vérification de l'email :", email);
    const [knownUser] = await connection.execute<RowDataPacket[]>(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );
    console.log("🔍 Résultat de la recherche d'email :", knownUser);

    if (knownUser.length > 0) {
      console.log("❌ Email déjà utilisé :", email);
      await connection.end();
      return NextResponse.json(
        { error: "Cet email est déjà utilisé." },
        { status: 400 }
      );
    }

    console.log("📌 Insertion de l'adresse...");
    const queryAdresse = `
      INSERT INTO adresses (ligne1, ville, code_postal)
      VALUES (?, ?, ?)
    `;
    const valuesAdresse = [adresse, ville, code_Postal];

    const [result] = await connection.execute<ResultSetHeader>(queryAdresse, valuesAdresse);
    console.log("✅ Adresse insérée avec ID :", result.insertId);

    console.log("🔑 Hachage du mot de passe...");
    const hashedPassword = await hash(mot_De_Passe, 10);

    console.log("📌 Insertion de l'utilisateur...");
    const queryUser = `
      INSERT INTO user (nom, prenom, email, mot_de_passe, adresse_id)
      VALUES (?, ?, ?, ?, ?)
    `;
    const valuesUser = [nom, prenom, email, hashedPassword, result.insertId];

    const [userInsert] = await connection.execute(queryUser, valuesUser);
    console.log("✅ Utilisateur inséré :", userInsert);

    await connection.end();

    return NextResponse.json(
      { message: "Utilisateur enregistré avec succès." },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Erreur lors de l'enregistrement :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
