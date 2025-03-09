import mongoClient from "../lib/mongoClient";

async function testMongo() {
    try {
        const mesures = await mongoClient.mesure.findMany();
        console.log("Données récupérées :", mesures);
    } catch (error) {
        console.error("Erreur MongoDB :", error);
    }
}

testMongo();
