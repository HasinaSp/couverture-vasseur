import {
  Check,
  Hammer,
  Layers3,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalExpertiseProps = {
  city: LocalCity;
};

const icons = [Layers3, Hammer, Wrench, Ruler];

export default function LocalExpertise({ city }: LocalExpertiseProps) {
  const { expertise } = city;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        {/* En-tête */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
              Expertise locale
            </span>

            <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
              {expertise.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8">
              {expertise.intro}
            </p>
          </div>
        </div>

        {/* Bloc principal */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* Expertise */}
          <div className="rounded-3xl bg-[#F5F3EE] p-5 sm:p-7 lg:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {expertise.items.map((item, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-[#071739]/[0.07] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#20548E]/20 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071739] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>

                      <span className="font-editorial text-2xl text-[#071739]/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[15px] font-semibold text-[#071739] sm:text-base">
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

          {/* Bloc éditorial */}
          <div className="relative overflow-hidden rounded-3xl bg-[#071739] p-7 sm:p-9 lg:p-10">
            {/* Décor */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 translate-x-[-55%] translate-y-[55%] rounded-full border border-white/10"
            />

            <div className="relative">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A68868]">
                Notre manière d&apos;intervenir
              </span>

              <h3 className="mt-5 max-w-md font-editorial text-2xl leading-tight text-white sm:text-3xl">
                {expertise.editorialTitle}
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                {expertise.editorialText}
              </p>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-7">
                {expertise.commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-3 w-3" strokeWidth={2.2} />
                    </span>

                    <span>{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Encadré patrimoine */}
        {expertise.patrimonialNote && (
          <div className="mt-6 rounded-2xl border border-[#071739]/[0.08] bg-[#F5F3EE]/60 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#20548E]/10 text-[#20548E]">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#071739] sm:text-[15px]">
                  Contexte patrimonial local
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-[#0C131C]/60">
                  {expertise.patrimonialNote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20548E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#071739] sm:w-auto sm:px-7"
          >
            Faire évaluer ma toiture
            <Check className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}