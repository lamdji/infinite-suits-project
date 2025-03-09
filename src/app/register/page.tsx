/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    code_Postal: "",
    ville: "",
    email: "",
    mot_De_Passe: "",
    confirm_Mot_De_Passe: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.mot_De_Passe !== formData.confirm_Mot_De_Passe) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inscription réussie !");
        router.push("/account");
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Créer un compte</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {[
          { label: "Nom", name: "nom", type: "text" },
          { label: "Prénom", name: "prenom", type: "text" },
          { label: "Adresse", name: "adresse", type: "text" },
          { label: "Code Postal", name: "code_Postal", type: "text" },
          { label: "Ville", name: "ville", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Mot de passe", name: "mot_De_Passe", type: "password" },
          {
            label: "Confirmez le mot de passe",
            name: "confirm_Mot_De_Passe",
            type: "password",
          },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-4">
            <label className="block mb-2">{label}</label>
            <input
              className="w-full border rounded-lg p-2"
              type={type}
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;
