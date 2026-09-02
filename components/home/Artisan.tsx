import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const commitments = [
  "Un interlocuteur disponible pour votre projet",
  "Des explications claires avant chaque intervention",
  "Une attention particulière portée aux finitions",
];

export default function Artisan() {
  return (
    <section
      id="artisan"
      className="overflow-hidden bg-[#F5F3EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/artisan.jpg"
                alt="Artisan de Couverture Vasseur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 right-5 bg-[#071739] p-5 text-white sm:-bottom-7 sm:right-7 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
                Couverture Vasseur
              </p>

              <p className="mt-2 font-editorial text-xl leading-tight sm:text-2xl">
                Le savoir-faire
                <br />
                au service de votre toiture.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              L'artisan
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
              Derrière chaque chantier, un artisan engagé.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-[#0C131C]/65 sm:text-lg sm:leading-8">
              <p>
                Un projet de toiture mérite d'être étudié avec attention.
                Avant toute intervention, l'objectif est de comprendre l'état
                du bâtiment, d'identifier les besoins et de proposer une
                solution adaptée.
              </p>

              <p>
                De la première prise de contact jusqu'à la réalisation des
                travaux, Couverture Vasseur privilégie une approche claire,
                directe et attentive aux détails.
              </p>
            </div>

            {/* Commitments */}
            <div className="mt-10 border-y border-[#0C131C]/10">
              {commitments.map((commitment) => (
                <div
                  key={commitment}
                  className="flex items-center gap-4 border-b border-[#0C131C]/10 py-5 last:border-b-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A68868] text-white">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#0C131C] sm:text-base">
                    {commitment}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8">
              <p className="font-editorial text-2xl italic text-[#0C131C]">
                Couverture Vasseur
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0C131C]/45">
                Artisan couvreur à Angers
              </p>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#0C131C] pb-2 text-sm font-bold text-[#0C131C] transition-colors hover:border-[#A68868] hover:text-[#A68868]"
            >
              Parler de votre projet
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}