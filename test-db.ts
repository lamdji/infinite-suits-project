import { connectToDatabase } from "./lib/database";



async function testConnection() {
  try {
    const connection = await connectToDatabase();
    console.log(" Connexion réussie !");
    await connection.end(); //  pour libérer la connexion
  } catch (error) {
    console.error(" Erreur de connexion :", error);
  }
}

testConnection();
