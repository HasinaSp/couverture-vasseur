import {
  ArrowDown,
  ClipboardCheck,
  FileText,
  Hammer,
  Search,
} from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalProcessProps = {
  city: LocalCity;
};

const icons = [ClipboardCheck, Search, FileText, Hammer];

export default function LocalProcess({ city }: LocalProcessProps) {
  const { process } = city;

  return (
    <section className="relative overflow-hidden bg-[#F5F3EE] py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
              Notre méthode
            </span>

            <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
              {process.title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8 lg:ml-auto">
            {process.intro}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 lg:mt-16">
          {/* Ligne desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[31px] hidden h-px bg-[#071739]/10 lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {process.steps.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={step.title}
                  className="group relative rounded-2xl border border-[#071739]/[0.08] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#20548E]/20 sm:p-7"
                >
                  {/* Numéro + icône */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071739] text-white transition-colors duration-300 group-hover:bg-[#20548E]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="font-editorial text-3xl text-[#071739]/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-base font-semibold text-[#071739]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#0C131C]/60">
                    {step.description}
                  </p>

                  {/* Flèche entre les étapes sur mobile */}
                  {index < process.steps.length - 1 && (
                    <div className="mt-5 flex justify-center sm:hidden">
                      <ArrowDown
                        className="h-4 w-4 text-[#A68868]"
                        strokeWidth={1.7}
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Bloc rassurance */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-2xl bg-[#071739] p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <ClipboardCheck
                  className="h-5 w-5 text-white"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {process.reassurance}
                </p>

                <p className="mt-1 text-sm leading-6 text-white/55">
                  Accès, protections, matériaux, organisation et contraintes
                  éventuelles du site sont anticipés avant l&apos;intervention.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#20548E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#071739] lg:w-auto lg:px-7"
          >
            Parler de mon projet
          </a>
        </div>
      </div>
    </section>
  );
}