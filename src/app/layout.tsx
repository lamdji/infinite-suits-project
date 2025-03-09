"use client";

import { UserProvider } from "../context/UserContext";
import { butler, ralewayRegular } from "./fonts";
import Image from "next/image";
import FirstNavbar from "./components/FirstNavbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`
          ${butler.variable}
          ${ralewayRegular.variable} antialiased bg-powderWhite`}
      >
        <UserProvider>
          <FirstNavbar />
          <main className="text-gray-800 max-w-7xl mt-10 m-auto mb-14">
            {children}
          </main>
        </UserProvider>
        {/* Footer */}
        <footer className="bg-gray-900 text-white p-6">
          <div className="flex justify-between px-6">
            <div>
              <Image
                src="/images/visa.png"
                alt="Visa Logo"
                width={150}
                height={59}
                className="m-auto"
              />
              <Image
                src="/images/paypal.png"
                alt="Paypal Logo"
                width={180}
                height={91}
                className="m-auto"
              />
            </div>
            <Image
              src="/images/infinite-suits-logo2.png"
              alt="Infinite Suits Logo"
              width={284}
              height={126}
              className="m-auto"
            />
            <ul className="flex flex-col uppercase text-md leading-loose">
              <li>FAQ</li>
              <li>Nous contacter</li>
              <li>À propos</li>
              <li>Conditions de vente</li>
            </ul>
          </div>
          <div className="text-center mt-6">
            <p>© Infinite Suits. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
