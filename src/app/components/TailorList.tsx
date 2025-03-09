import React from "react";
import Image from "next/image";

interface Tailor {
  id: number;
  name: string;
  img: string;
  bio: string;
}

interface TailorListProps {
  tailors: Tailor[];
  setActiveBio: (bio: string) => void;
}

const TailorList: React.FC<TailorListProps> = ({ tailors, setActiveBio }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tailors.map((tailor) => (
        <div
          key={tailor.id}
          className="text-center p-4 border rounded-lg cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveBio(tailor.bio)}
          onMouseLeave={() => setActiveBio('Passez votre souris sur un tailleur pour voir sa biographie.')}
        >
          <div className="relative group">
            <div className="w-full h-56 bg-gray-300 flex items-center justify-center group-hover:border-4 group-hover:border-[#BE9667] transition-all duration-300">
              <Image className="rounded-full" src={tailor.img} alt={tailor.name} width={150} height={150} />
            </div>
            <p className="mt-2 text-lg font-medium group-hover:text-[#BE9667] transition-all duration-300">
              {tailor.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailorList;
