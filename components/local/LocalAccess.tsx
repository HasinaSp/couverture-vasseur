import {
  Building2,
  Construction,
  MapPin,
  Package,
  ParkingSquare,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalAccessProps = {
  city: LocalCity;
};

const icons = [
  Construction,
  Route,
  ParkingSquare,
  Truck,
  Building2,
  Package,
];

export default function LocalAccess({ city }: LocalAccessProps) {
  const { access } = city;

  return (
    <section className="relative overflow-hidden bg-[#F5F3EE] py-20 sm:py-24 lg:py-28">
      {/* Décor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#071739 1px, transparent 1px), linear-gradient(90deg, #071739 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-site relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
            <MapPin className="h-4 w-4" strokeWidth={1.8} />
            Organisation locale
          </span>

          <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
            {access.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8">
            {access.intro}
          </p>
        </div>

        {/* Intro / visual */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#071739] p-7 sm:p-9 lg:min-h-full">
            {/* Cercle décoratif */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10"
            />

            {/* Trame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <ShieldCheck
                    className="h-5 w-5 text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-8 max-w-sm font-editorial text-2xl leading-tight text-white sm:text-3xl">
                  Un chantier bien préparé, c&apos;est aussi moins de
                  contraintes pour les occupants et les riverains.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#A68868]"
                    strokeWidth={1.8}
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                      {city.name} · Maine-et-Loire
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Organisation du chantier adaptée à l&apos;environnement
                      local.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes */}
          <div className="grid gap-3 sm:grid-cols-2">
            {access.items.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#071739]/[0.08] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#20548E]/20 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F3EE] text-[#20548E] transition-colors duration-300 group-hover:bg-[#20548E] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-[15px] font-semibold leading-6 text-[#071739]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#0C131C]/60">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Note réglementaire */}
        <div className="mt-6 rounded-2xl border border-[#A68868]/20 bg-white/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A68868]/10 text-[#A68868]">
              <Construction className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#071739] sm:text-[15px]">
                Anticiper les autorisations nécessaires
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#0C131C]/60">
                {access.note}
              </p>
            </div>
          </div>
        </div>

        {/* CTA discret */}
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#071739] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20548E] sm:px-7"
          >
            Évaluer les contraintes de mon chantier
          </a>
        </div>
      </div>
    </section>
  );
}