'use client';

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function FirstNavbar() {
  const { user } = useUser();

  return (
    <div className="bg-grayBrown">
      <div className="absolute left-4 m-4 flex items-center space-x-4 text-white">
        <p>Bienvenue, {user ? user.prenom : "invité"}</p>
      </div>
      <div className="absolute right-0 m-4 flex items-center space-x-4 text-white">
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
          {["Boutique", "Compte", "Home", "suits", "RDV", "Contacts"].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
            >
              <a href={`/${item.toLowerCase()}`} className="relative">
                {item}
              </a>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondGold transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
