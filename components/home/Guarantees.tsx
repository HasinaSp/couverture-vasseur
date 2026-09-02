import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ClipboardCheck,
  FileText,
  HardHat,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const commitments = [
  {
    icon: ClipboardCheck,
    title: "Étude du projet",
    description:
      "Chaque demande est étudiée en fonction de la toiture, du bâtiment et de la nature des travaux.",
  },
  {
    icon: FileText,
    title: "Devis détaillé",
    description:
      "Une proposition claire pour vous permettre de comprendre les travaux envisagés.",
  },
  {
    icon: UserRound,
    title: "Un interlocuteur",
    description:
      "Un échange direct pour suivre votre projet et répondre à vos questions.",
  },
  {
    icon: HardHat,
    title: "Travail soigné",
    description:
      "Une attention portée à la qualité d'exécution et aux finitions du chantier.",
  },
  {
    icon: Sparkles,
    title: "Chantier propre",
    description:
      "Les travaux sont réalisés avec le souci de limiter les désagréments sur votre propriété.",
  },
  {
    icon: ShieldCheck,
    title: "Engagement",
    description:
      "Une approche transparente, avec des solutions adaptées aux besoins réels du bâtiment.",
  },
];

const badges = [
  "Devis gratuit",
  "Sans engagement",
  "Étude personnalisée",
  "Devis détaillé",
  "Interlocuteur unique",
  "Travail soigné",
  "Finitions maîtrisées",
  "Accompagnement",
];

function BadgeRow() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {badges.map((badge) => (
        <div
          key={badge}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A68868]/40">
            <Check size={14} strokeWidth={2.5} />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.16em]">
            {badge}
          </span>

          <span className="ml-4 h-1.5 w-1.5 rounded-full bg-[#A68868]" />
        </div>
      ))}
    </div>
  );
}

export default function Guarantees() {
  return (
    <section
      id="engagements"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Nos garanties & engagements
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
              La confiance se construit aussi dans les détails.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#0C131C]/60 sm:text-lg sm:leading-8">
            Un chantier de toiture ne repose pas uniquement sur la réalisation
            des travaux. La qualité des échanges, la clarté du devis et le
            suivi du projet comptent tout autant.
          </p>
        </div>

        {/* Badges défilants */}
        <div className="relative mt-14 -mx-6 overflow-hidden border-y border-[#0C131C]/10 bg-[#071739] py-5 text-[#CDD5DB] sm:mt-16 sm:-mx-8 lg:mt-20 lg:-mx-10">
          <div className="flex w-max animate-marquee">
            <BadgeRow />
            <BadgeRow />
          </div>
        </div>

        {/* Engagements */}
        <div className="mt-14 grid gap-px border border-[#0C131C]/10 bg-[#0C131C]/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {commitments.map((commitment) => {
            const Icon = commitment.icon;

            return (
              <article
                key={commitment.title}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-[#F5F3EE] sm:p-8 lg:p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#0C131C]/10 text-[#A68868] transition-all duration-300 group-hover:border-[#A68868] group-hover:bg-[#A68868] group-hover:text-white">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#0C131C]">
                  {commitment.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#0C131C]/55">
                  {commitment.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-12 grid gap-8 bg-[#071739] p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A68868]">
              Un projet en toute transparence
            </p>

            <h3 className="mt-3 max-w-2xl font-editorial text-2xl leading-tight sm:text-3xl">
              Avant de commencer, vous savez ce qui est prévu.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#CDD5DB]/60">
              Notre objectif est de vous permettre de prendre votre décision
              avec une vision claire des travaux nécessaires et de leur
              organisation.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-md bg-[#A68868] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8E7358]"
          >
            Demander un devis
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