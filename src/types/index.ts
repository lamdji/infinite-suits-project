
  // Type pour les utilisateurs
export type User = {
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  code_postal: string;
  ville: string;
};

// Type pour les mesures
export type Mesure = {
  label: string;
  value: string | number;
};

// Type pour les commandes
export type Commande = {
  id: number;
  date: string;
  statut: string;
  total: number;
};
