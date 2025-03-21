import { MongoClient } from "mongodb";

async function testMongoDB() {
  const uri = "mongodb://localhost:27017"; // Mets l'URI de ta base MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db("infinite_suits");

    // Vérification des tissus
    const tissus = await db.collection("tissus").find().toArray();
    console.log("Tissus enregistrés :", tissus);

  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    await client.close();
    console.log("🔌 Déconnexion de MongoDB");
  }
}

testMongoDB();

