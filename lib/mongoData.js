import { MongoClient } from "mongodb";

// Connexion à MongoDB
const uri = "mongodb://localhost:27017"; // Mets l'URI de ton instance MongoDB si différent
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    console.log(" Connecté à MongoDB");

    const db = client.db("infinite_suits");

    
    const tissusCollection = db.collection("tissus");
    await tissusCollection.insertMany([
      { nom: "mulberry", prix: 279.00 },
      { nom: "oberon", prix: 259.00 },
      { nom: "sicilian grey", prix: 259.00 }
    ]);
    console.log("🧵 Tissus insérés avec succès !");

    
    const personnalisationsCollection = db.collection("personnalisations");

    const personnalisations = [
      
      {
        produit_id: 1,
        type: "Veste",
        couleur_fil: "Bleu",
        couleur_bouton: "Noir",
        nombre_boutons_veste: 2,
        nombre_boutons_gilet: null,
        pers_revers_pant: null,
        pers_pinces_pant: null,
        date_enregistrement: new Date()
      },
      {
        produit_id: 2,
        type: "Veste",
        couleur_fil: "Noir",
        couleur_bouton: "Gris",
        nombre_boutons_veste: 3,
        nombre_boutons_gilet: null,
        pers_revers_pant: null,
        pers_pinces_pant: null,
        date_enregistrement: new Date()
      },

      
      {
        produit_id: 3,
        type: "Gilet",
        couleur_fil: "Blanc",
        couleur_bouton: "Beige",
        nombre_boutons_veste: null,
        nombre_boutons_gilet: 5,
        pers_revers_pant: null,
        pers_pinces_pant: null,
        date_enregistrement: new Date()
      },

      
      {
        produit_id: 4,
        type: "Pantalon",
        couleur_fil: "Noir",
        couleur_bouton: "Noir",
        nombre_boutons_veste: null,
        nombre_boutons_gilet: null,
        pers_revers_pant: true,
        pers_pinces_pant: false,
        date_enregistrement: new Date()
      },

      {
        produit_id: 5,
        type: "Costume 2P",
        couleur_fil: "Bleu",
        couleur_bouton: "Noir",
        nombre_boutons_veste: 2,
        nombre_boutons_gilet: null,
        pers_revers_pant: true,
        pers_pinces_pant: true,
        date_enregistrement: new Date()
      },

      
      {
        produit_id: 6,
        type: "Costume 3P",
        couleur_fil: "Noir",
        couleur_bouton: "Beige",
        nombre_boutons_veste: 3,
        nombre_boutons_gilet: 4,
        pers_revers_pant: true,
        pers_pinces_pant: false,
        date_enregistrement: new Date()
      }
    ];

    await personnalisationsCollection.insertMany(personnalisations);
    console.log(" Personnalisations insérées avec succès !");

  } catch (error) {
    console.error(" Erreur lors de l’insertion :", error);
  } finally {
    await client.close();
    console.log(" Déconnexion de MongoDB");
  }
}

// Exécuter la fonction
main();
