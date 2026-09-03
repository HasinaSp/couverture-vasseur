"use client";

import { useState } from "react";
import { HelpCircle, Minus, Plus } from "lucide-react";

const faqs = [
{
question: "Le devis est-il gratuit et sans engagement ?",
answer:
"Oui. Nous étudions votre besoin et, si nécessaire, nous nous déplaçons afin d'évaluer votre projet. Vous recevez ensuite un devis clair et détaillé, gratuitement et sans engagement.",
},
{
question: "Quels types de travaux réalisez-vous ?",
answer:
"Nous intervenons pour vos travaux de couverture, rénovation et réparation de toiture, zinguerie, gouttières ainsi que l'entretien et la protection de votre toiture.",
},
{
question: "Intervenez-vous rapidement en cas de fuite ?",
answer:
"Oui. En cas de fuite ou d'infiltration, contactez-nous rapidement. Nous évaluons la situation afin de vous proposer une intervention adaptée et de limiter les dégâts sur votre habitation.",
},
{
question: "Comment savoir si ma toiture doit être rénovée ?",
answer:
"Des tuiles endommagées, des infiltrations, des traces d'humidité ou une toiture vieillissante peuvent indiquer qu'une intervention est nécessaire. Nous pouvons examiner l'état de votre toiture et vous conseiller sur la solution la plus adaptée.",
},
{
question: "Vos travaux sont-ils couverts par une garantie ?",
answer:
"Nous réalisons nos travaux dans le respect des règles professionnelles applicables. Les garanties associées à votre chantier vous sont précisées en fonction de la nature des travaux réalisés.",
},
{
question: "Dans quelle zone intervenez-vous ?",
answer:
"Couverture Vasseur intervient principalement à Angers, dans ses alentours et plus largement dans le Maine-et-Loire. Contactez-nous pour vérifier rapidement si nous pouvons intervenir à votre adresse.",
},
];

const FAQ = () => {
const [openIndex, setOpenIndex] = useState<number | null>(0);

const toggleFAQ = (index: number) => {
setOpenIndex(openIndex === index ? null : index);
};

return ( <section id="faq" className="bg-white py-20 sm:py-24"> <div className="container-site">
    {/* Header */}
    <div className="max-w-3xl">
      <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
        <HelpCircle size={17} />
        Questions fréquentes
      </span>

      <h2 className="font-editorial text-4xl leading-tight text-[#071739] sm:text-5xl lg:text-6xl">
        Vos questions,
        <br />
        <span className="text-[#20548E]">nos réponses.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#0C131C]/70 sm:text-lg">
        Retrouvez les réponses aux questions les plus fréquentes
        concernant nos prestations, les devis et vos travaux de toiture.
      </p>
    </div>

    {/* FAQ List */}
    <div className="mt-14 border-t border-[#071739]/10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="border-b border-[#071739]/10"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
            >
              {/* Number */}
              <span className="shrink-0 text-sm font-semibold tracking-[0.12em] text-[#A68868]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Question */}
              <span className="flex-1 font-editorial text-xl leading-snug text-[#071739] sm:text-2xl">
                {faq.question}
              </span>

              {/* Icon */}
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-[#20548E] bg-[#20548E] text-white"
                    : "border-[#071739]/15 text-[#071739]"
                }`}
              >
                {isOpen ? (
                  <Minus size={19} />
                ) : (
                  <Plus size={19} />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-10 pr-14 sm:pl-[60px] sm:pr-20">
                  <p className="max-w-3xl text-sm leading-7 text-[#0C131C]/65 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom reassurance */}
    <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#F5F3EE] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="font-editorial text-2xl text-[#071739] sm:text-3xl">
          Vous avez une autre question ?
        </p>

        <p className="mt-2 text-sm leading-6 text-[#0C131C]/65 sm:text-base">
          Notre équipe est à votre disposition pour vous renseigner et vous
          accompagner dans votre projet de toiture.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#20548E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#071739]"
      >
        Nous contacter
      </a>
    </div>

  </div>
</section>

);
};

export default FAQ;
