import {
  ArrowRight,
  Building2,
  MapPin,
  Navigation,
} from "lucide-react";
import Link from "next/link";

import type { LocalCity } from "@/data/local-cities";

type LocalNearbyProps = {
  city: LocalCity;
};

export default function LocalNearby({ city }: LocalNearbyProps) {
  const { nearby } = city;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
              <Navigation className="h-4 w-4" strokeWidth={1.8} />
              Secteur d’intervention
            </span>

            <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
              Couvreur à {city.name} et dans les communes voisines.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8">
              Notre secteur d’intervention ne s’arrête pas aux limites de{" "}
              {city.name}. Nous intervenons également dans les communes
              environnantes pour vos travaux de couverture, réparation,
              rénovation, zinguerie et entretien de toiture.
            </p>
          </div>
        </div>

        {/* Carte / communes */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-6">
          {/* Bloc localisation */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-[#071739] p-7 sm:min-h-[340px] sm:p-9">
            {/* Grille */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Cercles */}
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-white/10"
            />

            {/* Points décoratifs */}
            <div
              aria-hidden="true"
              className="absolute left-[28%] top-[35%] h-2 w-2 rounded-full bg-white/30"
            />

            <div
              aria-hidden="true"
              className="absolute left-[57%] top-[25%] h-2 w-2 rounded-full bg-white/20"
            />

            <div
              aria-hidden="true"
              className="absolute left-[68%] top-[58%] h-2 w-2 rounded-full bg-white/25"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <MapPin className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A68868]">
                  {city.name} · 49
                </p>

                <h3 className="mt-3 max-w-sm font-editorial text-3xl leading-tight text-white sm:text-4xl">
                  Au cœur de votre secteur local.
                </h3>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5">
                <Building2
                  className="h-4 w-4 shrink-0 text-white/45"
                  strokeWidth={1.7}
                />

                <p className="text-sm text-white/55">
                  {city.name} et communes environnantes
                </p>
              </div>
            </div>
          </div>

          {/* Liste */}
          <div className="grid gap-3 sm:grid-cols-2">
            {nearby.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/couvreur/${nearbyCity.slug}`}
                className="group flex min-h-[130px] flex-col justify-between rounded-2xl border border-[#071739]/[0.08] bg-[#F5F3EE]/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#20548E]/25 hover:bg-[#F5F3EE] sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#20548E]">
                      <MapPin className="h-4 w-4" strokeWidth={1.7} />
                    </span>

                    <ArrowRight
                      className="h-4 w-4 text-[#071739]/25 transition duration-300 group-hover:translate-x-1 group-hover:text-[#20548E]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-5 text-[15px] font-semibold text-[#071739] sm:text-base">
                    Couvreur à {nearbyCity.name}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#0C131C]/55">
                    Travaux de couverture et rénovation à{" "}
                    {nearbyCity.name}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Phrase SEO naturelle */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-[#0C131C]/50">
            Vous êtes situé à {city.name} ou dans une commune proche ?
            Contactez-nous pour discuter de votre projet de toiture.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#071739] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20548E] sm:w-auto sm:px-7"
          >
            Vérifier notre secteur d’intervention
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}