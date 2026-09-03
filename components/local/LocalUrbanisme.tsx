import {
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalUrbanismeProps = {
  city: LocalCity;
};

const urbanismeIcons = [FileCheck2, Landmark, Scale];
const coproprieteIcons = [Building2, Users, CheckCircle2];

export default function LocalUrbanisme({ city }: LocalUrbanismeProps) {
  const { urbanisme } = city;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
            <Landmark className="h-4 w-4" strokeWidth={1.8} />
            Urbanisme & copropriété
          </span>

          <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
            {urbanisme.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8">
            {urbanisme.intro}
          </p>
        </div>

        {/* Deux colonnes */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {/* Urbanisme */}
          <div className="rounded-3xl bg-[#F5F3EE] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071739] text-white">
                <Landmark className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#20548E]">
                  {city.name}
                </p>

                <h3 className="mt-1 font-editorial text-2xl text-[#071739]">
                  {urbanisme.urbanisme.title}
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {urbanisme.urbanisme.items.map((item, index) => {
                const Icon =
                  urbanismeIcons[index % urbanismeIcons.length];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#071739]/[0.07] bg-white p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#20548E]/10 text-[#20548E]">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#071739]">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-sm leading-6 text-[#0C131C]/55">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Copropriété */}
          <div className="rounded-3xl bg-[#071739] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <Building2 className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A68868]">
                  Immeubles & résidences
                </p>

                <h3 className="mt-1 font-editorial text-2xl text-white">
                  {urbanisme.copropriete.title}
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {urbanisme.copropriete.items.map((item, index) => {
                const Icon =
                  coproprieteIcons[index % coproprieteIcons.length];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-sm leading-6 text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bandeau conseil */}
        <div className="mt-6 rounded-2xl border border-[#A68868]/20 bg-[#F5F3EE]/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A68868]/10 text-[#A68868]">
              <Scale className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#071739] sm:text-[15px]">
                Les règles peuvent varier d&apos;un projet à l&apos;autre.
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#0C131C]/55">
                {urbanisme.disclaimer}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#071739] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20548E]"
            >
              Échanger sur mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}