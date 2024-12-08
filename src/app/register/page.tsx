'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";


type FormData = {
    nom: string;
    prenom: string;
    adresse: string;
    code_Postal: string;
    ville: string;
    email: string;
    mot_De_Passe: string;
    confirm_Mot_De_Passe: string;
  };
const Register = () => {
  const [formData, setFormData] = useState<FormData>({
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

    // Vérification des mots de passe
    if (formData.mot_De_Passe !== formData.confirm_Mot_De_Passe) {
      console.log("Mot de passe :", formData.mot_De_Passe);
      console.log("Confirmation :", formData.confirm_Mot_De_Passe);
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    

    try {
      // Envoi des données au backend
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirection vers la page "Compte"
        router.push("/account");
      } else {
        alert("Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Votre compte</h1>

        <form
          className="max-w-md mx-auto border border-gray-300 rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          {/* le formulaire */}
          {[
            { label: "Nom", name: "nom", type: "text" },
            { label: "Prénom", name: "prenom", type: "text" },
            { label: "Adresse", name: "adresse", type: "text" },
            { label: "Code postal", name: "code_Postal", type: "text" },
            { label: "Ville", name: "ville", type: "text" },
            { label: "Adresse mail", name: "email", type: "email" },
            { label: "Mot de passe", name: "mot_De_Passe", type: "password" },
            {
              label: "Confirmez mot de passe",
              name: "confirm_Mot_De_Passe",
              type: "password",
            },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
          ))}

          {/* Les boutons */}
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-[#C19A6B] text-white font-bold py-2 px-4 rounded-lg"
            >
              VALIDER
            </button>
            <button
              type="button"
              onClick={() => router.push("/connection")}
              className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
            >
              ANNULER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
