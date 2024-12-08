'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Suits() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Section principale */}
      <main className="container mx-auto px-4 py-8">
      <div className=" w-full flex items-center my-6">
      {/* Ligne à gauche */}
      <div className="flex-grow h-[2px]  bg-secondGold"></div>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  <h1 className="text-center text-3xl font-bold text-gray-800 m-4">NOS COSTUMES</h1>
                  {/* Losange au centre */}
                  <div className=" w-4 h-4 border-secondGold border-[2px] rotate-45"></div>
                  {/* Ligne à droite */}
                  <div className="flex-grow h-[2px] bg-secondGold"></div>
                  </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Costume trois pièces */}
          <Link href="/commande/costume_trois_pieces">
            <div className="group border-Gold rounded-lg overflow-hidden hover: cursor-pointer transition-shadow duration-300">
              <Image
                src="/images/costume_trois_pieces.webp"
                alt="Costume trois pièces"
                width={400}
                height={500}
                className="w-full h-auto"
              />
              <h2 className="text-center text-lg font-semibold mt-4 ">
                CREEZ VOTRE COSTUME 3 PIECES
              </h2>
              <span
                className=" left-0 bottom-0 w-0 h-[2px] bg-Gold transition-all duration-300 group-hover:w-full"
              />
            </div>
          </Link>

          {/* Costume deux pièces */}
          <Link href="/commande/costume_deux_pieces">
            <div className=" hover: cursor-pointer ">
              <Image
                src="/images/costume_deux_pieces.webp"
                alt="Costume deux pièces"
                width={400}
                height={500}
                className="w-full h-auto"
              />
              <h2 className="text-center text-lg font-semibold mt-4">
                CREEZ VOTRE COSTUME 2 PIECES
              </h2>
            </div>
          </Link>

          {/* Pièce unique */}
          <Link href="/commande/costume_mixed_pieces">
            <div className=" hover: cursor-pointer ">
              <Image
                src="/images/costume_mixed_pieces.webp"
                alt="Pièce unique"
                width={400}
                height={500}
                className="w-full h-auto"
              />
              <h2 className="text-center text-lg font-semibold mt-4 group-hover:">
                CREEZ VOTRE PIECE UNIQUE
              </h2>
            </div>
          </Link>
        </div>

        {/* Texte d'information */}
        <p className="text-center text-gray-600 mt-8">
          Veuillez sélectionner le type de costume ou d&apos;article que vous souhaitez et personnalisez-le comme vous souhaitez!<br />
          Besoin de conseils? rendez-vous à <Link href="/boutique" className="text-secondGold underline">la boutique</Link>.
        </p>
      </main>
    </div>
  );
}
