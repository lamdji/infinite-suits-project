'use client';

import React, { useState } from "react";

const Connection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Connexion réussie :", data.user);
        // Effectuez une redirection ou une autre action ici si nécessaire
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Une erreur est survenue.");
    }
  };

  return (
    <div>
      {/* Section Connexion */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Connexion</h1>

          {/* Section Créez votre compte */}
          <div className="max-w-md mx-auto border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Connectez vous</h2>
            <form onSubmit={handleSubmit}>
              {/* Adresse mail */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-gray-700 mb-2">
                  Adresse mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="adresse mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {/* Mot de passe */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-left text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {/* Bouton Valider */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#C19A6B] text-white font-bold py-2 px-4 rounded-lg"
                >
                  VALIDER
                </button>
              </div>
            </form>

            {/* Lien pour se connecter */}
            <p className="mt-6 text-sm text-gray-600">
              Nouveau client?{" "}
              <a href="/register" className="text-[#C19A6B] underline">
                Créez votre compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
