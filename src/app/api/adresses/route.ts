import { NextResponse } from "next/server";
import { connectToMySQL } from "@/lib/database";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Données reçues :", body); // 🛠️ Debug: Vérifier les données reçues

    const { nom, prenom, adresseLigne1, ville, code_Postal, email, mot_De_Passe } = body;

    // Vérification des champs requis
    const champsManquants = [];
    if (!nom) champsManquants.push("Nom");
    if (!prenom) champsManquants.push("Prénom");
    if (!adresseLigne1) champsManquants.push("Adresse");
    if (!ville) champsManquants.push("Ville");
    if (!code_Postal) champsManquants.push("Code Postal");
    if (!email) champsManquants.push("Email");
    if (!mot_De_Passe) champsManquants.push("Mot de passe");

    if (champsManquants.length > 0) {
      return NextResponse.json(
        { error: `Champs manquants : ${champsManquants.join(", ")}` },
        { status: 400 }
      );
    }

      // Connexion à MySQL
      const connection = await connectToMySQL();
  
      // Insertion de l'adresse dans la table `adresses`
      const queryAdresse = `
        INSERT INTO adresses (ligne1, ligne2, ville, code_postal) 
        VALUES (?, ?, ?, ?)
      `;
      const valuesAdresse = [adresseLigne1, adresseLigne2, ville, code_Postal];
      const [adresseResult]: 'any' = await connection.execute(queryAdresse, valuesAdresse);
      const adresse_id = adresseResult.insertId; // Récupère l'ID de l'adresse insérée
  
      // Hashage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insertion de l'utilisateur dans `user`
      const queryUser = `
        INSERT INTO user (nom, prenom, email, password, telephone, adresse_id)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const valuesUser = [nom, prenom, email, hashedPassword, telephone, adresse_id];
  
      await connection.execute(queryUser, valuesUser);
  
      // Fermeture de la connexion
      await connection.end();
  
      return new Response(JSON.stringify({ message: "Utilisateur créé avec succès" }), { status: 201 });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      return new Response(JSON.stringify({ error: "Erreur interne du serveur" }), { status: 500 });
    }
  }
  