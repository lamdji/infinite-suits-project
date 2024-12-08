import React from 'react';
import { Commande } from '@/types';

type VosCommandesProps = {
  commandes: Commande[];
};

const VosCommandes: React.FC<VosCommandesProps> = ({ commandes }) => {
  return (
    <div>
      {commandes.map((commande, index) => (
        <div key={index} className="mb-4 border p-4 rounded-lg">
          <p>Numéro de commande : {commande.id}</p>
          <p>Date : {commande.date}</p>
          <p>Total : {commande.total} €</p>
        </div>
      ))}
    </div>
  );
};

export default VosCommandes;
