import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("La variable d'environnement MONGODB_URI est manquante.");
}

// Étendre globalThis pour inclure _mongoClientPromise
const globalWithMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const client = new MongoClient(uri);
const clientPromise: Promise<MongoClient> =
  globalWithMongo._mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV === "development") {
  globalWithMongo._mongoClientPromise = clientPromise;
}

export default clientPromise;
