"use client";

import { useState } from "react";

export default function MesureForm() {
  const [form, setForm] = useState({
    manches: "",
    epaules: "",
    poitrine: "",
    ventre: "",
    jambes: "",
    taille: "",
    hanche: "",
    cuisse: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/mesure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Mesures enregistrées !");
      // Redirection après l'enregistrement (ex: page suivante)
    } else {
      alert("Erreur lors de l'enregistrement");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Vos mesures</h2>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <label>Longueur des manches</label>
          <input name="manches" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Longueur des jambes</label>
          <input name="jambes" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Épaules</label>
          <input name="epaules" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Taille</label>
          <input name="taille" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Poitrine</label>
          <input name="poitrine" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Hanche</label>
          <input name="hanche" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Ventre</label>
          <input name="ventre" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Cuisse</label>
          <input name="cuisse" type="number" onChange={handleChange} className="border p-2 w-full" />
        </div>
      </div>

      {/*<div className="mt-6">
        <video width="500" controls>
          <source src="/videos/mesure-guide.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>*/}

      <div className="mt-6 flex space-x-4">
        <button onClick={() => window.history.back()} className="bg-gray-500 text-white px-4 py-2 rounded">
          Retour
        </button>
        <button onClick={handleSubmit} className="bg-gold text-white px-4 py-2 rounded">
          Passer à l&apos;étape suivante
        </button>
      </div>
    </div>
  );
}
