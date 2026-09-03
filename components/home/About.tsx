import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const expertise = [
  "Couverture",
  "Zinguerie",
  "Réparation",
  "Entretien",
];

const commitments = [
  "Un accompagnement clair du diagnostic à la réalisation",
  "Des solutions adaptées à l'état réel de votre toiture",
  "Une attention particulière portée aux finitions",
];

export default function About() {
  return (
    <section
      id="a-propos"
      className="bg-[#F5F3EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              L'entreprise
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
              Un savoir-faire de proximité pour protéger durablement votre
              bâtiment.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-7 text-[#0C131C]/65 sm:text-lg sm:leading-8">
              Couverture Vasseur accompagne les particuliers et les
              professionnels dans leurs projets de toiture, de rénovation et
              d'entretien. Chaque intervention commence par une analyse
              précise de l'existant afin de proposer une solution adaptée au
              bâtiment et à son environnement.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
            <Image
              src="/images/about-couverture-vasseur.webp"
              alt="Chantier de couverture réalisé par Couverture Vasseur"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071739]/80 via-[#071739]/20 to-transparent p-6 sm:p-8">
              <p className="max-w-md text-sm leading-6 text-white/85">
                Une toiture bien réalisée, c'est avant tout une protection
                durable, des détails maîtrisés et un chantier suivi avec
                sérieux.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A68868]">
                Notre savoir-faire
              </p>

              <h3 className="mt-3 max-w-lg text-2xl font-bold leading-tight text-[#0C131C] sm:text-3xl">
                Plusieurs compétences réunies autour d'un même objectif :
                une toiture fiable.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#0C131C]/60">
                De la couverture aux éléments de zinguerie, en passant par la
                réparation et l'entretien, nous intervenons sur les différents
                éléments qui participent à la protection de votre habitation.
              </p>
            </div>

            {/* Expertise */}
            <div className="mt-10 grid grid-cols-2 border-t border-[#0C131C]/10">
              {expertise.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 border-b border-[#0C131C]/10 py-5 ${
                    index % 2 === 0 ? "border-r pr-5" : "pl-5"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#A68868] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-semibold text-[#0C131C] sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Commitments */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-[#0C131C]">
                Ce qui guide nos interventions
              </p>

              <div className="mt-5 space-y-4">
                {commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex gap-3 text-sm leading-6 text-[#0C131C]/65"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A68868]" />
                    <span>{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 border-b border-[#0C131C] pb-2 text-sm font-bold text-[#0C131C] transition-colors hover:border-[#A68868] hover:text-[#A68868]"
              >
                Découvrir notre savoir-faire

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}