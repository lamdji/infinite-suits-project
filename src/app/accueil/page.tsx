/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import FirstNavbar from "../components/FirstNavbar";
import data from "../data.json";

export default function Accueil() {
  return (
    <>
      <FirstNavbar /> 

      <div className="mx-52 my-10">
          {/* Section "Découvrez la vraie qualité" */}
          <section className="relative py-12 px-6">
            <div className="flex">
              <Image className="w- h-auto" src="/images/image_tailleur_accueil.svg" alt="image tailleur" width={500} height={550} />
              <div className="mx-6">
                <h2 className="text-3xl font-bold">Découvrez la vraie qualité</h2>
                <div className="ml-[57px] w-full h-[100px] flex justify-center items-center">
                  
                  <div className=" absolute flex items-center m-6">
                  <h3 className="text-secondGold text-2xl uppercase mx-4">costume fait main</h3>
    {/* Losange au centre */}
    <div className=" relative w-4 h-4 border-secondGold border-[3px] rotate-45" />
    {/* Ligne à droite */}
    <div className="relative h-[1px] w-[684px] bg-secondGold" />
  </div>
  </div>
  
                <p className="mt-4 text-gray-600 leading-6">
                  Nous vous proposons des costumes d'exception qui conviennent à votre style de vie. Nos costumes sont fabriqués à partir des tissus de la plus haute qualité et garantis pour vous  fonctionnalité, durabilité et confort. Nos maîtres tailleurs qualifiés s'occupent de toutes les étapes de la coupe et de la couture, assurant une précision dans tous les processus de production et en portant une attention particulière aux détails. Venez chez nous et choisissez le meilleur costume pour chaque moment de votre vie, vous aurez une infinité de choix!
                </p>
                <div className="flex items-center mt-6">
                
                </div>
                <button className="mt-6 px-4 py-2 bg-gold text-white rounded m-auto block">
                  À propos de nous
                </button>
              </div>
            </div>

          </section>

          {/* Section "Nos services" */}
          <section className="py-12 bg-white">
            <div className=" w-full h-[36px] flex justify-center items-center mb-20">
                  <div className=" absolute flex  items-center m-6">
                      {/* Ligne à gauche */}
                    <div className="relative h-[1px] w-[682px] bg-secondGold" />
                      {/* Losange au centre */}
                      <div className=" relative w-4 h-4 border-secondGold border-[3px] rotate-45" />
                  <h3 className="text-secondGold text-2xl uppercase mx-4">nos services</h3>
                      {/* Losange au centre */}
                      <div className=" relative w-4 h-4 border-secondGold border-[3px] rotate-45" />
                      {/* Ligne à droite */}
                      <div className="relative h-[1px] w-[682px] bg-secondGold" />
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
                  <button className="mt-4 px-4 py-2 bg-gold text-white rounded m-auto block">{service.button}

                   </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section "Notre boutique" */}
          <section className="py-12 px-6  flex items-center">
            <Image src="/images/boutique_entree.webp" alt="Notre boutique" width={400} height={200} />
            <div className="mx-4">
              <h2 className="text-3xl font-bold my-4">Notre Boutique</h2>
              <p className="mt-4 text-gray-600 leading-6">
                Infinite Suits, c'est avant tout Mason & Mason, la boutique des frères tailleurs Peter et Vincent Mason.
                <span className="block my-4">Le succès de la boutique les amener à s'agrandir, d'abord en accueillant un nouveau tailleur, Bienvenu Kitoko et en se rendant visible sur les réseaux avec notamment le site Infinite Suits.</span>
                Découvrez l'histoire de la boutique, nos tailleurs, et notre histoire.
              </p>
              <button className="mt-6 px-4 py-2 bg-gold text-white rounded m-auto block">
                Découvrir l'histoire
              </button>
            </div>
          </section>
      </div>
    </>
  );
}
