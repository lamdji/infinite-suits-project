import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const butlerStencil = localFont({
  src: "./fonts/Butler.woff",
  variable: "--font-butler",
  weight: "400",
  style: "normal",
});
const ralewayRegular = localFont({
  src: "./fonts/Raleway-Regular.woff",
  variable: "--font-Raleway-Regular",
  weight: "400",
  style: "normal",
});
export const metadata: Metadata = {
  title: "Infinite Suits",
  description: "Site de vente de costumes sur mesure pour hommes.",
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-fr">
     <head>
        <title> Infinite Suits</title>
      </head>
      <body
        className={`
          ${butlerStencil.variable}
          ${ralewayRegular.variable}antialiased`}
      >
        <main className="text-gray-800">
          {children}
        </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 ">
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
              alt="paypal Logo"
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
