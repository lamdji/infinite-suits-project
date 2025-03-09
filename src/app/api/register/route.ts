import { NextResponse } from "next/server";
import { connectToMySQL } from "@/lib/database";
import { hash } from "bcryptjs";
import { RowDataPacket, ResultSetHeader } from "mysql2"; // Import du bon type

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, prenom, adresseLigne1, adresseLigne2, ville, code_Postal, email, mot_De_Passe } = body;

    if (!nom || !prenom || !adresseLigne1 || !ville || !code_Postal || !email || !mot_De_Passe) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const connection = await connectToMySQL();

    // 🔹 Vérification si l'email existe déjà
    const [knownUser] = await connection.execute<RowDataPacket[]>(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );

    if (knownUser.length > 0) {
      await connection.end();
      return NextResponse.json(
        { error: "Cet email est déjà utilisé." },
        { status: 400 }
      );
    }

    // 🔹 Insertion de l'adresse
    const queryAdresse = `
      INSERT INTO adresses (ligne1, ligne2, ville, code_postal)
      VALUES (?, ?, ?, ?)
    `;
    const valuesAdresse = [adresseLigne1, adresseLigne2 || null, ville, code_Postal];

    const [result] = await connection.execute<ResultSetHeader>(queryAdresse, valuesAdresse);
    const adresse_id = result.insertId;
    

   // ✅ insertId existe bien maintenant

    // 🔹 Hachage du mot de passe
    const hashedPassword = await hash(mot_De_Passe, 10);

    // 🔹 Insertion de l'utilisateur
    const queryUser = `
      INSERT INTO user (nom, prenom, email, password, adresse_id)
      VALUES (?, ?, ?, ?, ?)
    `;
    const valuesUser = [nom, prenom, email, hashedPassword, adresse_id];

    await connection.execute(queryUser, valuesUser);
    await connection.end();

    return NextResponse.json(
      { message: "Utilisateur enregistré avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
