'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import VosCommandes from '../components/VosCommandes'; // Composant pour les commandes
import { User, Mesure, Commande } from '@/types'; // Import centralisé des types

const Compte = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mesures, setMesures] = useState<Mesure[]>([]);
  const [commandes, setCommandes] = useState<Commande[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [editedMesures, setEditedMesures] = useState<Mesure[]>([]);

  const router = useRouter();

  // Simuler la récupération des données depuis une API
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const userResponse = await fetch('/api/user');
        const mesureResponse = await fetch('/api/mesures');
        const commandesResponse = await fetch('/api/commandes');

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
          setEditedUser(userData); // Copier les données utilisateur
        }
        if (mesureResponse.ok) {
          const mesureData = await mesureResponse.json();
          setMesures(mesureData);
          setEditedMesures(mesureData); // Copier les données mesures
        }
        if (commandesResponse.ok) setCommandes(await commandesResponse.json());
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        router.push('/register'); // Rediriger si non connecté
      }
    };

    fetchAccountData();
  }, [router]);

  const handleEditToggle = async () => {
    if (isEditing) {
      // Enregistrer les modifications au backend
      try {
        await fetch('/api/update-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedUser),
        });
        await fetch('/api/update-mesures', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedMesures),
        });
        alert('Modifications enregistrées avec succès !');
        setUser(editedUser); // Mettre à jour les données affichées
        setMesures(editedMesures);
      } catch (error) {
        console.error('Erreur lors de la mise à jour des données :', error);
        alert('Une erreur est survenue lors de l’enregistrement.');
      }
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key: string, value: string) => {
    if (!editedUser) return;
    setEditedUser({ ...editedUser, [key]: value });
  };

  const handleMesureChange = (index: number, value: string | number) => {
    const updatedMesures = [...editedMesures];
    updatedMesures[index].value = value;
    setEditedMesures(updatedMesures);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" w-full flex items-center my-6">
      {/* Ligne à gauche */}
      <div className="flex-grow h-[2px]  bg-secondGold"></div>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  <h1 className="text-3xl text-center font-bold mx-6">Mon compte</h1>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  {/* Ligne à droite */}
                  <div className="flex-grow h-[2px] bg-secondGold"></div>
                  </div>


      {/* Section Votre compte */}
      <section className="border border-gray-300 rounded-lg p-6 mb-8">
     

        {user ? (
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(editedUser || {}).map(([key, value]) => (
              <div key={key}>
                <label className="font-semibold">{key} :</label>
                {isEditing ? (
                  <motion.input
                    className="border rounded-lg p-2 w-full"

                    onChange={(e) => handleInputChange(key, e.target.value)}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  />
                ) : (
                  <motion.p
                    className="text-gray-700"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    {value}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center'>Chargement des informations...</p>
        )}
        <div className="flex justify-center mt-4">
          <motion.button
            onClick={handleEditToggle}
            className={`py-2 px-4 rounded-lg ${
              isEditing
                ? 'bg-gold hover:bg-secondGold text-white'
                : 'bg-secondGold hover:bg-gold text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isEditing ? 'Valider' : 'Modifier'}
          </motion.button>
        </div>
      </section>

      {/* Section Vos mesures */}
      <section className="border  bg-white border-gray-300 rounded-lg p-6 mb-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Vos mesures</h2>
        {mesures.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {editedMesures.map((mesure, index) => (
              <div key={index}>
                <label className="font-semibold">{mesure.label} :</label>
                {isEditing ? (
                  <motion.input
                    className="border rounded-lg p-2 w-full"
                    value={mesure.value}
                    onChange={(e) =>
                      handleMesureChange(index, e.target.value)
                    }
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  />
                ) : (
                  <motion.p
                    className="text-gray-700 "
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    {mesure.value}
                  </motion.p>
                )}
              </div>
            ))}
            
          </div>
        ) : (
          <p className='text-center'>Aucune mesure enregistrée.</p>
        )}
      </section>

      {/* Section Vos commandes */}
      <section className="border border-gray-300 rounded-lg p-6">
        <h2 className="text-2xl text-center font-semibold mb-4">Vos commandes</h2>
        {commandes.length > 0 ? (
          <VosCommandes commandes={commandes} />
        ) : (
          <h2 className="text-center text-gray-700">Pas de commandes enregistrées</h2>
        )}
      </section>
    </div>
  );
};

export default Compte;
