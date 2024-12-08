import React from "react";

const Connection = () => {
  return (
    <div>

      {/* Section Connexion */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Connexion</h1>

          {/* Section Créez votre compte */}
          <div className="max-w-md mx-auto border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Connectez vous</h2>
            <form>
              {/* Adresse mail */}
              <div className="mb-4">
                <label className="block text-left text-gray-700 mb-2">Adresse mail</label>
                <input
                  type="email"
                  placeholder="adresse mail"
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {/* Mot de passe */}
              <div className="mb-4">
                <label className="block text-left text-gray-300 mb-2">Mot de passe</label>
                <input
                  type="password"
                  placeholder="mot de passe"
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
