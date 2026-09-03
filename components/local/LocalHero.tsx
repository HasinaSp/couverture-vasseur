import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import type { LocalCity } from "@/data/local-cities";

type LocalHeroProps = {
  city: LocalCity;
};

export default function LocalHero({ city }: LocalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F5F3EE]">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#071739]/5" />

        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#071739]/5" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#071739 1px, transparent 1px), linear-gradient(90deg, #071739 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="container-site relative py-20 sm:py-24 lg:py-28">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-[#0C131C]/50">
          <Link
            href="/"
            className="transition hover:text-[#20548E]"
          >
            Accueil
          </Link>

          <span>/</span>

          <span className="text-[#071739]">
            Couvreur à {city.name}
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}
          <div>
            {/* Local label */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
              <MapPin size={17} />

              {city.hero.eyebrow}
            </span>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl font-editorial text-5xl leading-[1.04] text-[#071739] sm:text-6xl lg:text-7xl">
              {city.hero.title}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#0C131C]/70 sm:text-lg">
              {city.hero.description}
            </p>

            {/* Reassurance points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {city.hero.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#071739]">
                    <Check
                      size={14}
                      className="text-white"
                    />
                  </span>

                  <span className="text-sm font-medium text-[#071739]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#20548E] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#071739]"
              >
                Demander un devis à {city.name}

                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+33000000000"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#071739]/15 bg-white px-7 py-4 text-sm font-semibold text-[#071739] transition duration-300 hover:border-[#20548E] hover:text-[#20548E]"
              >
                <Phone size={18} />

                Nous appeler
              </a>
            </div>

            {/* Small information */}
            <p className="mt-5 text-sm text-[#0C131C]/50">
              Un projet de toiture à {city.name} ou dans ses environs ?
              Échangeons ensemble sur votre besoin.
            </p>
          </div>

          {/* =====================================================
              RIGHT LOCAL VISUAL
              ===================================================== */}
          <div className="relative">
            {/* Main visual container */}
            <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-[#071739] p-7 sm:min-h-[520px] sm:p-9">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative flex h-full min-h-[386px] flex-col justify-between sm:min-h-[448px]">
                {/* Top badge */}
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    <MapPin
                      size={15}
                      className="text-[#A68868]"
                    />

                    {city.name} · 49
                  </span>
                </div>

                {/* Center content */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A68868]">
                      {city.hero.visualTitle}
                    </p>

                    <div className="mt-5 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-7 rounded-full border border-[#A68868]/20" />

                        <div className="absolute -inset-4 rounded-full border border-[#A68868]/30" />

                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#A68868] shadow-2xl">
                          <MapPin
                            size={34}
                            strokeWidth={1.8}
                            className="text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 max-w-xs text-sm leading-6 text-white/60">
                      Une approche adaptée aux toitures, aux matériaux et
                      aux contraintes propres à {city.name}.
                    </p>
                  </div>
                </div>

                {/* Bottom information */}
                <div className="border-t border-white/10 pt-6">
                  <div className="grid grid-cols-2 gap-6">
                    {city.hero.visualItems.slice(0, 2).map((item, index) => (
                      <div key={item}>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                          {index === 0 ? "Secteur" : "Spécificité"}
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="relative mx-5 -mt-8 rounded-xl border border-[#071739]/10 bg-white p-5 shadow-xl sm:mx-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A68868]">
                Votre projet
              </p>

              <p className="mt-2 font-editorial text-xl text-[#071739]">
                Réparation, rénovation ou entretien de toiture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}