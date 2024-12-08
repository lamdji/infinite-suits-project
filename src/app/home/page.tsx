/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import data from "../data.json";

export default function Accueil() {
  return (
    <>
      {/* Section "Découvrez la vraie qualité" */}
      <section className="relative py-12 px-6">
        <div className="flex">
          <Image className="w- h-auto" src="/images/services_custom.webp" alt="image tailleur" width={500} height={550} />
          <div className="mx-6">
            <h2 className="text-3xl font-bold">Découvrez la vraie qualité</h2>
            <div className=" w-full flex  items-center mt-4">
                <h3 className="text-secondGold text-2xl uppercase mr-4">costume fait main</h3>
                {/* Losange au centre */}
                <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                {/* Ligne à droite */}
                <div className=" flex-grow border-[1px] border-secondGold"></div>
            </div>

            <p className="mt-4 text-gray-600 leading-6">
              Nous vous proposons des costumes d'exception qui conviennent à votre style de vie. Nos costumes sont fabriqués à partir des tissus de la plus haute qualité et garantis pour vous  fonctionnalité, durabilité et confort. Nos maîtres tailleurs qualifiés s'occupent de toutes les étapes de la coupe et de la couture, assurant une précision dans tous les processus de production et en portant une attention particulière aux détails. Venez chez nous et choisissez le meilleur costume pour chaque moment de votre vie, vous aurez une infinité de choix!
            </p>
            <button className="mt-6 px-4 py-2 bg-gold text-white rounded m-auto block">
              À propos de nous
            </button>
          </div>
        </div>
      </section>

      {/* Section "Nos services" */}
      <section className="py-12 bg-white">
        <div className=" w-full h-[36px] flex justify-center items-center mb-20">
              <div className=" w-full flex items-center m-6">
                  {/* Ligne à gauche */}
                  <div className="flex-grow h-[2px]  bg-secondGold"></div>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  <h3 className="text-secondGold text-2xl uppercase mx-4">nos services</h3>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  {/* Ligne à droite */}
                  <div className="flex-grow h-[2px] bg-secondGold"></div>
              </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {data.services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-[200px] h-[200px] bg-gray-100 mx-auto overflow-hidden rounded-full mb-4" >
                  <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-cover"
                />
                </div>
                <h3 className="font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-gold text-white rounded m-auto block">{service.button}</button>
              </div>
            ))}
        </div>
      </section>

      {/* Section "Notre boutique" */}
      <section className="py-12 px-6  flex items-center">
        <Image src="/images/boutique_entree.webp" alt="Notre boutique" width={400} height={200} />
        <div className="mx-4">
          <h2 className="text-3xl font-bold my-4">Notre Boutique</h2>
          <div className="mt-4 text-gray-600 leading-6">
           <p>
              Infinite Suits, c'est avant tout Mason & Mason, la boutique des frères tailleurs Peter et Vincent Mason.
            </p> 
            <p className="block my-4">
              Le succès de la boutique les amener à s'agrandir, d'abord en accueillant un nouveau tailleur, Bienvenu Kitoko et en se rendant visible sur les réseaux avec notamment le site Infinite Suits.
            </p>
            <p>
              Découvrez l'histoire de la boutique, nos tailleurs, et notre histoire.
            </p>
          </div>
          <button className="mt-6 px-4 py-2 bg-gold text-white rounded m-auto block">
            Découvrir l'histoire
          </button>
        </div>
      </section>
    </>
  );
}
