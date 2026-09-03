"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";

import { getAllLocalCities } from "@/data/local-cities";

const homeSections = [
  { href: "#a-propos", label: "Notre savoir-faire" },
  { href: "#services", label: "Nos services" },
  { href: "#materiaux", label: "Nos matériaux" },
  { href: "#realisations", label: "Nos réalisations" },
  { href: "#entreprise", label: "L'entreprise" },
  { href: "#process", label: "Notre méthode" },
  { href: "#tarifs", label: "Nos tarifs" },
  { href: "#garanties", label: "Nos garanties" },
  { href: "#zone-intervention", label: "Zone d'intervention" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    "home" | "cities" | null
  >(null);

  const cities = getAllLocalCities();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleMenu = (menu: "home" | "cities") => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

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

        {/* Navigation desktop */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navigation principale"
        >

          {/* Accueil */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("home")}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#0C131C] transition hover:text-[#20548E]"
              aria-expanded={activeMenu === "home"}
            >
              Accueil
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeMenu === "home" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "home" && (
              <div className="absolute left-1/2 top-full z-50 mt-5 w-64 -translate-x-1/2 rounded-lg border border-[#0C131C]/10 bg-[#F5F3EE] p-2 shadow-2xl">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-sm font-semibold text-[#20548E] hover:bg-white"
                >
                  Accueil
                </Link>

                {homeSections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-2.5 text-sm text-[#0C131C] transition hover:bg-white hover:text-[#20548E]"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Villes */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("cities")}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#0C131C] transition hover:text-[#20548E]"
              aria-expanded={activeMenu === "cities"}
            >
              Villes
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeMenu === "cities" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "cities" && (
              <div className="absolute left-1/2 top-full z-50 mt-5 w-72 -translate-x-1/2 rounded-lg border border-[#0C131C]/10 bg-[#F5F3EE] p-2 shadow-2xl">
                <div className="px-4 pb-2 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A68868]">
                    Nos zones d'intervention
                  </p>
                </div>

                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/couvreur/${city.slug}`}
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-[#0C131C] transition hover:bg-white hover:text-[#20548E]"
                  >
                    Couvreur à {city.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Appeler */}
          <a
            href="tel:+33XXXXXXXXX"
            className="hidden items-center gap-2 rounded-md border border-[#20548E] px-4 py-2.5 text-sm font-semibold text-[#20548E] transition hover:bg-[#20548E] hover:text-white sm:flex"
          >
            <Phone size={16} />
            <span>Appeler</span>
          </a>

          {/* Devis */}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="hidden shrink-0 rounded-md bg-[#20548E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20548E]/90 sm:block"
          >
            Devis gratuit sous 48h
          </Link>

          {/* Burger */}
          <button
            type="button"
            onClick={() => {
              setIsOpen((current) => !current);
              setActiveMenu(null);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#0C131C]/15 text-[#0C131C] transition hover:bg-white/30 lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav
          className="absolute left-0 top-full z-50 w-full border-b border-[#0C131C]/10 bg-[#CDD5DB]/95 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="container-site">

            {/* Accueil */}
            <button
              type="button"
              onClick={() => toggleMenu("home")}
              className="flex w-full items-center justify-between border-b border-[#0C131C]/10 py-4 text-left text-base font-semibold text-[#0C131C]"
              aria-expanded={activeMenu === "home"}
            >
              <span>Accueil</span>

              <ChevronDown
                size={19}
                className={`transition-transform duration-200 ${
                  activeMenu === "home" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "home" && (
              <div className="border-b border-[#0C131C]/10 py-2 pl-3">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block py-3 text-sm font-semibold text-[#20548E]"
                >
                  Accueil
                </Link>

                {homeSections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    onClick={closeMenu}
                    className="block py-2.5 text-sm text-[#0C131C] transition hover:text-[#20548E]"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Villes */}
            <button
              type="button"
              onClick={() => toggleMenu("cities")}
              className="flex w-full items-center justify-between border-b border-[#0C131C]/10 py-4 text-left text-base font-semibold text-[#0C131C]"
              aria-expanded={activeMenu === "cities"}
            >
              <span>Villes</span>

              <ChevronDown
                size={19}
                className={`transition-transform duration-200 ${
                  activeMenu === "cities" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "cities" && (
              <div className="border-b border-[#0C131C]/10 py-2 pl-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/couvreur/${city.slug}`}
                    onClick={closeMenu}
                    className="block py-3 text-sm font-medium text-[#0C131C] transition hover:text-[#20548E]"
                  >
                    Couvreur à {city.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Actions mobile */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <a
                href="tel:+33XXXXXXXXX"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-md border border-[#20548E] px-5 py-3 text-sm font-semibold text-[#20548E] transition hover:bg-[#20548E] hover:text-white"
              >
                <Phone size={16} />
                Appeler
              </a>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-md bg-[#20548E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#20548E]/90"
              >
                Devis gratuit sous 48h
              </Link>

            </div>
          </div>
        </nav>
      )}
    </header>
  );
}