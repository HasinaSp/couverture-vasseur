import Link from "next/link";
import {
  ArrowUpRight,
  Hammer,
  House,
  Droplets,
  ShieldCheck,
  Wrench,
  Wind,
  Ruler,
  SearchCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: House,
    title: "Couverture",
    description:
      "Pose, rénovation et remplacement de couverture pour assurer l'étanchéité et la protection durable de votre bâtiment.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Rénovation de toiture",
    description:
      "Remise en état des toitures anciennes, remplacement des éléments dégradés et amélioration de leur durabilité.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Recherche de fuite",
    description:
      "Identification de l'origine des infiltrations et recherche des zones susceptibles de compromettre l'étanchéité.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Réparation de toiture",
    description:
      "Interventions ciblées sur les tuiles, ardoises, raccords et autres éléments endommagés de votre toiture.",
  },
  {
    number: "05",
    icon: Droplets,
    title: "Zinguerie & gouttières",
    description:
      "Création, réparation et remplacement des éléments de zinguerie pour assurer une bonne évacuation des eaux pluviales.",
  },
  {
    number: "06",
    icon: Wind,
    title: "Entretien & démoussage",
    description:
      "Entretien régulier de la toiture et nettoyage des dépôts afin de préserver son état dans le temps.",
  },
  {
    number: "07",
    icon: Ruler,
    title: "Charpente",
    description:
      "Interventions sur les éléments de charpente et vérification de leur état lors des projets de rénovation.",
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Fenêtres de toit",
    description:
      "Pose, remplacement et traitement de l'étanchéité autour des fenêtres de toit et ouvertures en toiture.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#071739] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Nos prestations
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Des solutions adaptées à chaque toiture.
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-base leading-7 text-[#CDD5DB]/70 sm:text-lg sm:leading-8">
              De l'entretien courant à la rénovation complète, Couverture
              Vasseur intervient sur les différents besoins liés à la toiture.
              Chaque projet est étudié selon l'état du bâtiment, ses
              contraintes et vos objectifs.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex min-h-[330px] flex-col justify-between bg-[#071739] p-6 transition-colors duration-300 hover:bg-[#10234B] sm:p-7 lg:p-8"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#CDD5DB]/40">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#A68868] transition-all duration-300 group-hover:border-[#A68868] group-hover:bg-[#A68868] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#CDD5DB]/60">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <Link
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#CDD5DB]/60 transition-colors hover:text-[#A68868]"
                >
                  Demander un devis
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                {/* Decorative number */}
                <span className="pointer-events-none absolute bottom-3 right-5 text-7xl font-bold text-white/[0.025]">
                  {service.number}
                </span>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[#CDD5DB]/50">
            Vous ne savez pas exactement quelle intervention est nécessaire ?
            Décrivez-nous simplement votre problème, nous vous orienterons
            vers la solution adaptée.
          </p>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#A68868] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8E7358]"
          >
            Parler de mon projet
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}