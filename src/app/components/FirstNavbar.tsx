import Image from "next/image";

export default function FirstNavbar() {
  return (

<div className="bg-[color:#7A746E]">
  <div className="absolute right-0 m-4 flex items-center space-x-2 text-white">
    <span className="text-sm">0 articles</span>
    <button className="bg-white text-black px-4 py-2 rounded-lg">
      Panier
    </button>
  </div>
  <Image
        src="/images/infinite-suits-logo2.png"
        alt="Infinite Suits Logo"
        width={384}
        height={226}
        className="m-auto"
  />
<nav className="py-4 px-6 flex justify-around items-center uppercase">
        <ul className="flex space-x-6 text-white text-lg">
          {/* Navigation Links */}
          {["Boutique", "Compte", "Home", "RDV", "Contacts"].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
            >
              <a href={`/${item.toLowerCase()}`} className="relative">
                {item}
              </a>
              {/* Barre soulignée */}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#BE9667] transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </nav>
    <div className="relative w-full h-72 overflow-hidden grid place-items-center">

    <Image src="/images/hero_banner.svg 
    " alt="hero banner"width={1000} height={200} className=" z-20 w-full h-full object-cover-[50%_20%] -translate-y-24" />
    </div>
</div>
  );
};

