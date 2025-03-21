'use client';
import { useState } from "react";
import Image from "next/image";
import tailors from "@/lib/dataTailors"; // Import des tailleurs
import Link from "next/link";

const BoutiquePage = () => {
  const [activeTailor, setActiveTailor] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6 bg-white"> {/* Fond blanc */}
      <h1 className="text-3xl font-bold text-center mb-6">LA BOUTIQUE</h1>

      <section className="relative py-12 px-6">
        <div className="w-full h-[36px] flex justify-center items-center mb-20">
          <h2 className="text-2xl font-bold text-left ">COMMENT ÇA MARCHE ?</h2>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45 ml-10"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
        </div>

        <p className="text-gray-600 text-center">
          C&apos;est simple : vous choisissez votre vêtement et nous le fabriquons à votre mesure. Ici, pas de tailles standards : tout est fait juste pour vous.
        </p>
        <p className="text-gray-600 text-center mt-2">Ça se passe en 3 étapes :</p>

        <div className="mt-6">
          <div className="flex items-start mb-4">
            <div className="w-4 h-4 border-gold border-[4px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Vous choisissez votre costume</h3>
              <p className="text-gray-600 text-xl">
                3 pièces, 2 pièces ou une pièce unique que vous personnalisez (tissu, boutons…). 
                Pour cela, rendez-vous sur <span className="text-blue-600 cursor-pointer">SUITS</span>.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4 ">
            <div className="w-4 h-4 border-gold border-[4px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Vous enregistrez vos mensurations</h3>
              <p className="text-gray-600 text-xl">
                Un mètre de couture suffit ! Suivez nos tutoriels et renseignez vos mesures.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-4 h-4 border-gold border-[4px] rotate-45 mr-20 mt-5"></div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Vous passez commande</h3>
              <p className="text-gray-600 text-xl">
                Nous nous occupons du reste. Vous êtes à quelques clics de votre costume parfait.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-2xl">
          Rendez-vous sur <span className="text-blue-600 cursor-pointer">SUITS</span> pour créer votre costume.
        </p>
      </section>


      <section className="relative py-12 px-6">
        <div className="w-full flex items-center m-6">
          {/* Ligne à gauche */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
          <h3 className="text-secondGold text-2xl uppercase mx-4">NOTRE BOUTIQUE</h3>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-stretch">

    <div className="flex">
      <Image 
        className="w-full h-auto object-cover" 
        src="/images/boutique_entree.webp" 
        alt="image boutique" 
        width={500} 
        height={550} 
      />
    </div>

    <div className="flex flex-col justify-center">
      <p className="text-gray-600 text-xl text-center leading-10">
Mason & Mason, c&apos;est la boutique du 44 rue François 1er dans le 8ème arrondissement de Paris tenue par les frères tailleurs Peter et Vincent Mason.

<p>Ces deux frères anglais sont tombé amoureux de Paris il y a une dizaine d’année et se sont installés dans notre capitale en nous offrant leur savoir-faire de tailleurs en ouvrant une boutique.</p>

Ils sont  des artisans à l’anglaise, pouvant être  autant “so british” que Rock’n’roll. 

Le succès de la boutique les amener à s’agrandir, d’abord en accueillant un nouveau tailleur dans l&apos;équipe avec le jeune et talentueux Bienvenu Kitoko,mais également en ouvrant une boutique en ligne et avec le site Infinite Suits.

<p>Découvrez nos tailleurs et notre histoire.</p>
      </p>
      
    </div>
  </div>
      </section>

      <section className="py-12">
      <div className="w-full flex items-center m-6">
          {/* Ligne à gauche */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45"></div>
          <h3 className="text-gold text-2xl uppercase mx-4">nos tailleurs</h3>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
        </div>
  <div className="flex justify-center gap-6">
    {tailors.map((tailor) => (
      <div 
        key={tailor.name} 
        className="p-4 text-center cursor-pointer group"
        onMouseEnter={() => setActiveTailor(tailor.name)}
        onMouseLeave={() => setActiveTailor(null)}
      >
       
        <div className="relative inline-block">
          <Image 
            src={tailor.portrait} 
            alt={tailor.name} 
            width={366} 
            height={366} 
          />
        </div>

        {/* ✅ Nom avec animation de sous-lignage */}
        <h2 className="text-lg font-bold mt-2 relative">
          {tailor.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondGold transition-all duration-300 group-hover:w-full" />
        </h2>
      </div>
    ))}
  </div>

  {/* ✅ Biographie affichée dynamiquement au hover */}
  <p className="mt-6 text-center text-gray-700 transition-all duration-300">
    {activeTailor 
      ? tailors.find(t => t.name === activeTailor)?.description
      : "Survolez un tailleur pour découvrir son expertise et son savoir-faire."
    }
  </p>
</section>
<section className="relative py-12 px-6">
        <div className="w-full flex items-center m-6">
          {/* Ligne à gauche */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45"></div>
          <h3 className="text-secondGold text-2xl uppercase mx-4">PRENDRE RENDEZ-VOUS</h3>
          {/* Losange au centre */}
          <div className="w-4 h-4 border-secondGold border-[4px] rotate-45"></div>
          {/* Ligne à droite */}
          <div className="flex-grow h-[4px] bg-secondGold"></div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-stretch">
        <div className="grid grid-cols-2 gap-4">
            <Image 
              className="w-full h-auto object-cover" 
              src="/images/services_meet.webp" 
              alt="Rencontre tailleurs" 
              width={330} 
              height={206} 
            />
            <Image 
              className="w-full h-auto object-cover" 
              src="/images/services_mesure.jpeg" 
              alt="Prise de mesure" 
              width={330} 
              height={206} 
            />
          </div>

          <div className="flex flex-col justify-center text-center">
            <p className="text-gray-600 text-xl leading-10">
              Vous ne vous sentez pas prêt pour prendre vos mesures vous-même ?
              <br/><br/>
              Dans ce cas, nous vous proposons de rencontrer nos tailleurs en boutique ou chez vous !
              <br/><br/>
              Nous offrons désormais la possibilité de prendre rendez-vous à domicile ou au bureau pour plus de commodité.
              <br/><br/>
              Consultez notre agenda et prenez votre rendez-vous dès maintenant.
            </p>
            <Link href="/rdv">
              <button className="mt-6 px-6 py-3 bg-gold text-white rounded mx-auto block text-xl font-bold shadow-md hover:bg-opacity-80 transition-all">
                Prendre rendez-vous
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>

    
  );
  
};

export default BoutiquePage;
