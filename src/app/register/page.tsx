"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ✅ Définition du schéma de validation
const registerSchema = z.object({
  nom: z.string().min(1, "Le nom est obligatoire"),
  prenom: z.string().min(1, "Le prénom est obligatoire"),
  adresse: z.string().min(1, "L'adresse est obligatoire"),
  code_Postal: z.string().min(5, "Le code postal doit contenir au moins 5 caractères"),
  ville: z.string().min(1, "La ville est obligatoire"),
  email: z.string().email("Email invalide"),
  mot_De_Passe: z.string().min(6, "Doit contenir au moins 6 caractères"),
  confirm_Mot_De_Passe: z.string().min(6, "Doit contenir au moins 6 caractères"),
}).refine((data) => data.mot_De_Passe === data.confirm_Mot_De_Passe, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirm_Mot_De_Passe"],
});

const Register = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // ✅ Soumission du formulaire
  const onSubmit = async (formData: unknown) => {
    setServerError("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setServerError(data.error || "Erreur lors de l'inscription.");
        return;
      }

      alert("Inscription réussie !");
      router.push("/account");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setServerError("Une erreur est survenue.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Créer un compte</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
              {...register(name as keyof typeof registerSchema._type)}
            />
            {errors[name as keyof typeof registerSchema._type] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name as keyof typeof registerSchema._type]?.message}
              </p>
            )}
          </div>
        ))}
        
        {/*Message d'erreur général */}
        {serverError && <p className="text-red-500 text-sm mt-2">{serverError}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          S&apos;inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;
