import { NextApiRequest, NextApiResponse } from "next";
import mongoClient from "../../../lib/mongoClient"; // Connexion à MongoDB

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const {
      commande_id,
      type_produit,
      tissu,
      couleur_boutons,
      couleur_fils,
      personnalisations
    } = req.body;

    const tissusValides = ["Bleu marine", "Bordeaux", "Gris"];
    const couleursBoutonsValides = ["Blanc", "Noir", "Beige"];
    const couleursFilsValides = ["Bleu marine", "Bordeaux", "Gris"];

    if (!tissusValides.includes(tissu)) {
      return res.status(400).json({ error: "Tissu invalide" });
    }
    if (!couleursBoutonsValides.includes(couleur_boutons)) {
      return res.status(400).json({ error: "Couleur de boutons invalide" });
    }
    if (!couleursFilsValides.includes(couleur_fils)) {
      return res.status(400).json({ error: "Couleur du fil invalide" });
    }


    const collection = mongoClient.personnalisation;

    const nouvellePersonnalisation = {
      commande_id,
      type_produit,
      tissu,
      couleur_boutons,
      couleur_fils,
      personnalisations, // Stocké sous format JSON
      date_personnalisation: new Date(),
    };

    await collection.create({data:nouvellePersonnalisation,});

    return res.status(201).json({ message: "Personnalisation enregistrée avec succès !" });

  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
}
