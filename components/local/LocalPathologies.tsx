import {
  Droplets,
  Leaf,
  Search,
  ShieldAlert,
  TriangleAlert,
  Waves,
} from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalPathologiesProps = {
  city: LocalCity;
};

const icons = [
  Leaf,
  TriangleAlert,
  Droplets,
  ShieldAlert,
  Waves,
];

export default function LocalPathologies({
  city,
}: LocalPathologiesProps) {
  const { pathologies } = city;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site">

        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
              <Search size={17} />
              Diagnostic local
            </span>

            <h2 className="mt-4 font-editorial text-4xl leading-tight text-[#071739] sm:text-5xl lg:text-6xl">
              {pathologies.title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#0C131C]/70 sm:text-lg lg:pb-2">
            {pathologies.intro}
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
            ===================================================== */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pathologies.items.map((pathology, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={pathology.title}
                className={`group relative overflow-hidden rounded-2xl border border-[#071739]/10 bg-[#F5F3EE] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#20548E]/25 hover:bg-white hover:shadow-lg sm:p-7 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Decorative number */}
                <span className="absolute -right-2 -top-5 font-editorial text-8xl leading-none text-[#071739]/[0.035] sm:text-9xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071739] transition duration-300 group-hover:bg-[#20548E]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-editorial text-2xl leading-tight text-[#071739] sm:text-3xl">
                    {pathology.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-4 max-w-2xl text-sm leading-7 text-[#0C131C]/65 sm:text-base ${
                      index === 0 ? "lg:max-w-xl" : ""
                    }`}
                  >
                    {pathology.description}
                  </p>
                </div>
              </article>
            );
          })}

          {/* =================================================
              ADVICE CARD
              ================================================= */}
          <article className="relative overflow-hidden rounded-2xl bg-[#071739] p-6 sm:p-7">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

            <div className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
                  Un doute ?
                </span>

                <h3 className="mt-4 font-editorial text-3xl leading-tight text-white">
                  {pathologies.adviceTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {pathologies.adviceText}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A68868] transition hover:text-white"
              >
                Faire examiner ma toiture
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>

        {/* =====================================================
            BOTTOM NOTE
            ===================================================== */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#071739]/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-[#0C131C]/55">
            Une fuite ou un désordre visible ne permet pas toujours
            d&apos;identifier immédiatement son origine. Un diagnostic de la
            couverture permet d&apos;examiner les différents éléments
            concernés avant de déterminer l&apos;intervention la plus adaptée.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#20548E] transition hover:text-[#071739]"
          >
            Demander un diagnostic
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}