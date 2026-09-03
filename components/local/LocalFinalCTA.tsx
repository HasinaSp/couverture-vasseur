import { ArrowRight, Check, MapPin, Phone } from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalFinalCTAProps = {
  city: LocalCity;
};

export default function LocalFinalCTA({ city }: LocalFinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071739] py-20 sm:py-24 lg:py-28"
    >
      {/* Décor */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-24 h-96 w-96 rounded-full border border-white/10"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Contenu */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#A68868]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A68868]">
                  Couvreur à {city.name}
                </span>
              </div>

              <h2 className="max-w-3xl font-editorial text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Un projet de toiture à {city.name} ?
                <span className="block text-white/60">
                  Parlons-en.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Réparation, rénovation, entretien ou recherche de fuite :
                chaque toiture mérite une approche adaptée à son état,
                à son environnement et aux contraintes du chantier.
              </p>

              {/* Réassurances */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Devis gratuit",
                  "Intervention locale",
                  "Diagnostic adapté",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Check className="h-3.5 w-3.5 text-[#A68868]" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc contact */}
            <div className="w-full max-w-md lg:w-[360px]">
              <div className="border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A68868] text-[#071739]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Secteur
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      {city.name} & alentours
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-sm leading-6 text-white/60">
                  Décrivez-nous votre projet et nous pourrons échanger sur
                  les travaux à envisager pour votre toiture.
                </p>

                <a
                  href="#formulaire-contact"
                  className="group mt-6 flex w-full items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-[#071739] transition hover:bg-[#F5F3EE]"
                >
                  Demander un devis gratuit

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+33000000000"
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  00 00 00 00 00
                </a>
              </div>
            </div>
          </div>

          {/* Phrase de conclusion */}
          <div className="mt-14 border-t border-white/10 pt-6">
            <p className="text-xs leading-5 text-white/40">
              Couvreur à {city.name} · Réparation · Rénovation · Entretien ·
              Zinguerie · Recherche de fuite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}