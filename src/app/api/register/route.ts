//
/*import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { hash } from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      nom,
      prenom,
      adresse,
      code_Postal,
      ville,
      email,
      mot_De_Passe,
    } = req.body;

    try {
      // Connexion bd
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      // verifie si email deja utilisé
      const knownUser = await connection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      ) 
      if (Array.isArray(knownUser) && knownUser.length > 0) {
        return res.status(400).json({ message: "Cet email est déjà utilisé." });
      }

      // le hachage du mot de passe pour le sécuriser
      const hashedPassword = await hash(mot_De_Passe, 10)
      
      // insertion du user dans la bd
      const query = `
        INSERT INTO users (nom, prenom, adresse, code_postal, ville, email, mot_de_passe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [nom, prenom, adresse, code_Postal, ville, email, mot_De_Passe, hashedPassword];

      await connection.execute(query, values);
      await connection.end();

      //enregistrement effectué
      res.status(200).json({ message: "Utilisateur enregistré avec succès." });
    } catch (error) {
      console.error("Erreur lors de l'insertion :", error);
      res.status(500).json({ error: "Erreur lors de l'enregistrement." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}

*/

import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { hash } from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      nom,
      prenom,
      adresse,
      code_Postal,
      ville,
      email,
      mot_De_Passe,
    } = req.body;

    console.log("Requête reçue avec les données :", {
      nom,
      prenom,
      adresse,
      code_Postal,
      ville,
      email,
      mot_De_Passe,
    });

    try {
      // Connexion à la base de données
      console.log("Tentative de connexion à la base de données...");
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      console.log("Connexion réussie.");

      // Vérification si l'email existe déjà
      console.log("Vérification si l'email est déjà utilisé :", email);
      const [knownUser] = await connection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      console.log("Résultat de la vérification de l'email :", knownUser);
      if (Array.isArray(knownUser) && knownUser.length > 0) {
        console.log("L'email est déjà utilisé.");
        return res.status(400).json({ message: "Cet email est déjà utilisé." });
      }

      // Hachage du mot de passe
      console.log("Hachage du mot de passe...");
      const hashedPassword = await hash(mot_De_Passe, 10);
      console.log("Mot de passe haché :", hashedPassword);

      // Insertion du nouvel utilisateur
      console.log("Insertion de l'utilisateur dans la base de données...");
      const query = `
        INSERT INTO users (nom, prenom, adresse, code_postal, ville, email, mot_de_passe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [nom, prenom, adresse, code_Postal, ville, email, hashedPassword];
      const [result] = await connection.execute(query, values);
      console.log("Résultat de l'insertion :", result);

      // Fermeture de la connexion
      await connection.end();
      console.log("Connexion à la base de données fermée.");

      // Réponse au client
      res.status(200).json({ message: "Utilisateur enregistré avec succès." });
    } catch (error) {
      console.error("Erreur lors de l'insertion :", error);
      res.status(500).json({ error: "Erreur lors de l'enregistrement." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    console.log(`Méthode ${req.method} non autorisée.`);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}

