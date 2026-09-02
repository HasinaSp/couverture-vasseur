import { Phone, Search, FileText, Hammer } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de contact",
    description:
      "Vous nous expliquez votre besoin, votre projet ou le problème rencontré sur votre toiture.",
  },
  {
    number: "02",
    icon: Search,
    title: "Visite & diagnostic",
    description:
      "Nous examinons la situation afin de mieux comprendre les travaux nécessaires et les contraintes du chantier.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Devis détaillé",
    description:
      "Vous recevez une proposition claire présentant les travaux envisagés et les éléments nécessaires au projet.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Réalisation",
    description:
      "Après validation, nous planifions l'intervention et réalisons les travaux avec attention portée à chaque détail.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#071739] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* En-tête */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Comment ça se passe ?
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Un projet clair,
              <br />
              étape par étape.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#CDD5DB]/70 sm:text-lg sm:leading-8">
            De votre première demande jusqu'à la réalisation des travaux,
            nous vous accompagnons à chaque étape pour que votre projet soit
            compris, préparé et réalisé dans les meilleures conditions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 lg:mt-20">
          {/* Ligne horizontale desktop */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative">
                  {/* Numéro */}
                  <span className="text-xs font-bold tracking-[0.2em] text-[#A68868]">
                    {step.number}
                  </span>

                  {/* Icône */}
                  <div className="relative z-10 mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#071739] text-[#A68868]">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  {/* Contenu */}
                  <div className="mt-7">
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#CDD5DB]/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Note finale */}
        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16">
          <p className="max-w-3xl text-sm leading-7 text-[#CDD5DB]/55 sm:text-base">
            Chaque chantier est différent. Le déroulement peut donc être
            adapté selon la nature des travaux, l'état de la toiture et les
            contraintes spécifiques de votre projet.
          </p>
        </div>
      </div>
    </section>
  );
}