import Image from "next/image";
import Link from "next/link";


export default function FirstNavbar() {
  return (

<div className="bg-grayBrown">
      {/* Section en haut à droite avec les icônes */}
      <div className="absolute right-0 m-4 flex items-center space-x-4 text-white">
        {/* Bouton pour la page Compte */}
        <Link href="/connection" className="flex items-center space-x-2">
  <Image
    src="/images/icon_account.webp"
    alt="Account Icon"
    width={32}
    height={32}
    className="cursor-pointer"
  />
</Link>

<Link href="/cart" className="flex items-center space-x-2">
  <Image
    src="/images/icon_cart.webp"
    alt="Cart Icon"
    width={32}
    height={32}
    className="cursor-pointer"
  />
  <span className="text-sm">0 articles</span>
</Link>
      </div>
  <Image
        src="/images/infinite-suits-logo2.png"
        alt="Infinite Suits Logo"
        width={192}
        height={113}
        className="m-auto"
  />
<nav className="py-4 px-6 flex justify-around items-center uppercase">
        <ul className="flex space-x-6 text-white text-lg">
          {/* Navigation Links */}
          {["Boutique", "Compte", "Home", "suits", "RDV", "Contacts"].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
            >
              <a href={`/${item.toLowerCase()}`} className="relative">
                {item} {/*on créé un lien vers chaque page, avec chaque item du tableau*/}
              </a>
              {/* Barre soulignée */}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondGold transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </nav>
    <div className="relative w-full h-72 overflow-hidden grid place-items-center">

    <Image src="/images/hero_banner.webp" 
    alt="hero banner 
    "width={1000}
     height={200}
      className=" z-20 w-full h-full object-cover-[50%_20%] -translate-y-24" />
    </div>
</div>
  );
};

