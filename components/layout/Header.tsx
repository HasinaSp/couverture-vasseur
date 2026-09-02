"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#acceuil", label: "Accueil" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#entreprise", label: "L'entreprise" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative w-full border-b border-white/30 bg-[#CDD5DB]/60 shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="container-site flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/logo/logo-couverture-vasseur.png"
            alt="Couverture Vasseur"
            width={160}
            height={40}
            priority
            className="h-auto w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-[#0C131C] lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Partie droite */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Bouton devis */}
          <Link href="#contact" className="hidden shrink-0 rounded-md bg-[#20548E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20548E]/90 lg:block" >
           Devis gratuit sous 48h 
          </Link>

          {/* Burger - Mobile/Tablette */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#0C131C]/15 text-[#0C131C] transition hover:bg-white/30 lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav
          className="absolute left-0 top-full w-full border-b border-[#0C131C]/10 bg-[#CDD5DB]/95 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="container-site flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#0C131C]/10 py-4 text-base font-semibold text-[#0C131C] transition hover:pl-2 hover:text-[#A68868]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="rounded-md bg-[#20548E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20548E]/90"
            >
              Devis gratuit sous 48h
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}