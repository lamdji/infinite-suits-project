import mysql from "mysql2/promise";
import { MongoClient } from "mongodb";

const MYSQL_CONFIG = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306,
};

// Connexion MySQL avec utilisation d'un pool de connexions
const mysqlPool = mysql.createPool(MYSQL_CONFIG);

export async function connectToMySQL() {
  return await mysqlPool.getConnection();
}

// Le singleton pour MongoDB évite d’ouvrir plusieurs connexions
let mongoClient: MongoClient | null = null;
let mongoDB: unknown = null;

export async function connectToMongoDB() {
  if (!mongoClient) {
    mongoClient = new MongoClient(process.env.MONGODB_URI as string);
    await mongoClient.connect();
    mongoDB = mongoClient.db(); // Sélectionne la base de données
    console.log("Connecté à MongoDB");
  }
  return mongoDB;
}
