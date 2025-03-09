'use client';
import { useState } from "react";
import Image from "next/image";
import tailors from "@/lib/dataTailors"; // Import des tailleurs

const BoutiquePage = () => {
  const [activeTailor, setActiveTailor] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6 bg-white"> {/* Fond blanc */}
      <h1 className="text-3xl font-bold text-center mb-6">LA BOUTIQUE</h1>

      {/* ✅ Première section mise à jour */}
      <section className="relative py-12 px-6">
        <div className="w-full h-[36px] flex justify-center items-center mb-20">
          <h2 className="text-2xl font-bold text-left ">COMMENT ÇA MARCHE ?</h2>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[2px] rotate-45 ml-10"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[2px] bg-secondGold"></div>
        </div>

        <p className="text-gray-600 text-center">
          C&apos;est simple : vous choisissez votre vêtement et nous le fabriquons à votre mesure. Ici, pas de tailles standards : tout est fait juste pour vous.
        </p>
        <p className="text-gray-600 text-center mt-2">Ça se passe en 3 étapes :</p>

        <div className="mt-6">
          <div className="flex items-start mb-4">
            <div className="w-4 h-4 border-gold border-[2px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold">Vous choisissez votre costume</h3>
              <p className="text-gray-600">
                3 pièces, 2 pièces ou une pièce unique que vous personnalisez (tissu, boutons…). 
                Pour cela, rendez-vous sur <span className="text-blue-600 cursor-pointer">SUITS</span>.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <div className="w-4 h-4 border-gold border-[2px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold">Vous enregistrez vos mensurations</h3>
              <p className="text-gray-600">
                Un mètre de couture suffit ! Suivez nos tutoriels et renseignez vos mesures.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-4 h-4 border-gold border-[2px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold">Vous passez commande</h3>
              <p className="text-gray-600">
                Nous nous occupons du reste. Vous êtes à quelques clics de votre costume parfait.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-6">
          Rendez-vous sur <span className="text-blue-600 cursor-pointer">SUITS</span> pour créer votre costume.
        </p>
      </section>

      {/* ✅ Section Notre Boutique */}
      <section className="relative py-12 px-6">
        <div className="w-full flex items-center m-6">
          {/* Ligne à gauche */}
          <div className="flex-grow h-[2px] bg-secondGold"></div>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
          <h3 className="text-secondGold text-2xl uppercase mx-4">NOTRE BOUTIQUE</h3>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[2px] bg-secondGold"></div>
        </div>

        <div className="flex">
          <Image 
            className="w-auto h-auto"
            src="/images/boutique_entree.webp" 
            alt="image boutique" 
            width={500} 
            height={550} 
          />
          <div className="mx-6">
            <p className="mt-4 text-gray-600 leading-6">
              Infinite Suits, c’est avant tout Mason & Mason, la boutique des frères tailleurs Peter et Vincent Mason.
              Ces deux frères anglais sont tombés amoureux de Paris il y a une dizaine d’années et se sont installés
              dans notre capitale en nous offrant leur savoir-faire de tailleurs en ouvrant une boutique. Ce sont 
              des artisans à l’anglaise, à la fois “so british” que Rock’n’roll. Le succès de la boutique les a amenés
              à s’agrandir, d’abord en accueillant un nouveau tailleur, Bienvenu Kitoko et en se rendant visible sur les
              réseaux avec notamment le site Infinite Suits. Découvrez l’histoire de la boutique, nos tailleurs, et notre histoire.
            </p>
            <button className="mt-6 px-4 py-2 bg-gold text-white rounded m-auto block">
              À propos de nous
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Section Nos Tailleurs */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">NOS TAILLEURS</h2>
        <div className="flex justify-center gap-6">
          {tailors.map((tailor) => (
            <div 
              key={tailor.name} 
              className="p-4 text-center cursor-pointer"
              onMouseEnter={() => setActiveTailor(tailor.name)}
              onMouseLeave={() => setActiveTailor(null)}
            >
              {/* ✅ Image du tailleur sans bordure, sans effet, taille fixe */}
              <div className="relative inline-block">
                <Image 
                  src={tailor.portrait} 
                  alt={tailor.name} 
                  width={366} 
                  height={366} 
                />
              </div>

              {/* ✅ Nom du tailleur avec hover et soulignement */}
              <h2 className="text-lg font-bold mt-2 relative group">
                {tailor.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondGold transition-all duration-300 group-hover:w-full" />
              </h2>
            </div>
          ))}
        </div>

        {/* ✅ Biographie affichée au survol */}
        <p className="mt-6 text-center text-gray-700 transition-all duration-300">
          {activeTailor 
            ? tailors.find(t => t.name === activeTailor)?.description
            : "Survolez un tailleur pour découvrir son expertise et son savoir-faire."
          }
        </p>
      </section>
    </div>
  );
};

export default BoutiquePage;
