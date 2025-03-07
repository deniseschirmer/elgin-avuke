"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-elgin-blue text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="relative h-8 w-24">
          <Image src="/img/logo-white.svg" alt="Elgin Logo" fill className="object-contain" priority />
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Cadastre-se aqui
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Acesse Clube Elgin
          </Link>
        </nav>

        {/* Botão do menu mobile */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-elgin-blue absolute top-16 left-0 w-full transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Cadastre-se aqui
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Acesse Clube Elgin
          </Link>
        </nav>
      </div>
    </header>
  );
}
