import { NextResponse } from "next/server";
import { connectToMySQL } from "@/lib/database"; // Connexion MySQL

export async function GET() {
  try {
    const connection = await connectToMySQL();
    const [rows] = await connection.execute("SELECT * FROM tailleurs");
    connection.release(); // Libérer la connexion MySQL

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des tailleurs :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
