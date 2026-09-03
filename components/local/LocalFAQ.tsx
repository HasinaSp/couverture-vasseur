"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MapPin } from "lucide-react";

import type { LocalCity } from "@/data/local-cities";

type LocalFAQProps = {
  city: LocalCity;
};

export default function LocalFAQ({ city }: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { faq } = city;

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F5F3EE] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20548E] sm:text-xs">
              <HelpCircle className="h-4 w-4" strokeWidth={1.8} />
              FAQ locale
            </span>

            <h2 className="mt-4 font-editorial text-3xl leading-[1.08] text-[#071739] sm:text-4xl lg:text-5xl">
              Vos questions sur les travaux de toiture à {city.name}.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-[#0C131C]/65 sm:text-base sm:leading-8">
              Retrouvez les réponses aux questions les plus fréquentes
              concernant les travaux de toiture, les contraintes locales,
              l&apos;organisation du chantier et les démarches à anticiper.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#071739]/55 sm:text-sm">
              <MapPin
                className="h-4 w-4 text-[#A68868]"
                strokeWidth={1.8}
              />

              <span>{city.name} · Maine-et-Loire</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-4xl lg:mt-16">
          <div className="overflow-hidden rounded-3xl border border-[#071739]/[0.08] bg-white">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={
                    index !== faq.length - 1
                      ? "border-b border-[#071739]/[0.08]"
                      : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    {/* Numéro */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#071739] text-white"
                          : "bg-[#F5F3EE] text-[#071739]/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span className="flex-1 pr-2 text-sm font-semibold leading-6 text-[#071739] sm:text-[15px]">
                      {item.question}
                    </span>

                    {/* Chevron */}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#071739]/40 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#20548E]" : ""
                      }`}
                      strokeWidth={1.7}
                    />
                  </button>

                  {/* Réponse */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 pl-[4.25rem] pr-5 sm:px-7 sm:pb-7 sm:pl-[5.25rem] sm:pr-12">
                        <p className="max-w-3xl text-sm leading-7 text-[#0C131C]/60">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom card */}
        <div className="mx-auto mt-6 max-w-4xl rounded-2xl bg-[#071739] p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Vous avez une situation particulière ?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/50">
                Parlez-nous de votre toiture et de votre projet à {city.name}.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#071739] transition hover:bg-[#F5F3EE] sm:w-auto"
            >
              Demander un devis
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[#0C131C]/45">
          Les démarches administratives dépendent de la nature précise des
          travaux, de l&apos;adresse du bâtiment et des règles qui lui sont
          applicables. Les informations présentées ici sont générales et ne
          remplacent pas la vérification du dossier auprès des services
          compétents.
        </p>
      </div>
    </section>
  );
}