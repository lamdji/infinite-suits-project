import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT
    });

    if (req.method === 'GET') {
      // Récupérer tous les clients
      const [rows] = await connection.query('SELECT * FROM clients');
      await connection.end();
      return res.status(200).json(rows);
    }

    res.status(200).json({ message: 'Connexion réussie à la base de données!' });
  } catch (error) {
    console.error('Erreur de connexion :', error);
    res.status(500).json({ message: 'Erreur de connexion à la base de données.', error });
  }
}
