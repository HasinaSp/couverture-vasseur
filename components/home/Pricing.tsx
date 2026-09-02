import Link from "next/link";
import {
  ArrowUpRight,
  Maximize,
  SearchCheck,
  Construction,
  Layers,
  Ruler,
  Accessibility,
  Trash2,
} from "lucide-react";

const factors = [
  {
    number: "01",
    icon: Maximize,
    title: "La surface",
    description:
      "La surface totale à couvrir influence directement la quantité de matériaux et le temps nécessaire aux travaux.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "L'état de la toiture",
    description:
      "Une simple intervention d'entretien ne demande pas les mêmes travaux qu'une rénovation complète.",
  },
  {
    number: "03",
    icon: Construction,
    title: "L'état de la charpente",
    description:
      "Si la structure nécessite des réparations ou un renforcement, ces travaux doivent être pris en compte dans le projet.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Les matériaux",
    description:
      "Le choix entre différents matériaux de couverture et de finition peut faire varier le coût global.",
  },
  {
    number: "05",
    icon: Ruler,
    title: "La complexité du toit",
    description:
      "La pente, les ouvertures, les cheminées et les différents raccords peuvent rendre une intervention plus technique.",
  },
  {
    number: "06",
    icon: Accessibility,
    title: "L'accès au chantier",
    description:
      "L'accessibilité du bâtiment et les équipements nécessaires pour travailler en sécurité peuvent influencer l'organisation.",
  },
  {
    number: "07",
    icon: Trash2,
    title: "Les travaux annexes",
    description:
      "La dépose de matériaux existants, l'évacuation des déchets ou des travaux complémentaires peuvent être nécessaires.",
  },
];

export default function Pricing() {
  return (
    <section
      id="prix"
      className="bg-[#F5F3EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* En-tête */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Comprendre le prix
            </p>

            <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
              Chaque toiture a ses propres contraintes.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-[#0C131C]/60 sm:text-lg sm:leading-8">
              Le coût d'une intervention dépend de nombreux éléments. Deux
              bâtiments qui semblent similaires peuvent nécessiter des travaux
              très différents. C'est pourquoi un projet doit être étudié avant
              de pouvoir établir une proposition adaptée.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mt-14 grid gap-8 border-y border-[#0C131C]/10 py-8 sm:mt-16 sm:grid-cols-[0.8fr_1.2fr] sm:gap-12 lg:mt-20 lg:py-10">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#A68868]">
            Pourquoi le prix varie ?
          </p>

          <p className="max-w-2xl text-xl leading-8 text-[#0C131C] sm:text-2xl sm:leading-9">
            Un devis précis ne se limite pas à une surface en mètres carrés.
            Il prend en compte l'ensemble des caractéristiques du chantier.
          </p>
        </div>

        {/* Grille des facteurs */}
        <div className="mt-10 grid gap-px border border-[#0C131C]/10 bg-[#0C131C]/10 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => {
            const Icon = factor.icon;

            return (
              <article
                key={factor.number}
                className="group relative min-h-[270px] bg-[#F5F3EE] p-6 transition-colors duration-300 hover:bg-white sm:p-7 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#A68868]">
                    {factor.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="text-[#0C131C]/35 transition-colors duration-300 group-hover:text-[#A68868]"
                  />
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#0C131C]">
                    {factor.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#0C131C]/60">
                    {factor.description}
                  </p>
                </div>
              </article>
            );
          })}

          {/* Carte CTA */}
          <div className="flex min-h-[270px] flex-col justify-between bg-[#071739] p-6 text-white sm:p-7 lg:p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#A68868]">
                Votre projet
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight">
                Obtenez une estimation adaptée à votre toiture.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#CDD5DB]/65">
                Décrivez-nous votre projet afin que nous puissions mieux
                comprendre vos besoins.
              </p>
            </div>

            <Link
              href="#contact"
              className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#A68868]"
            >
              Demander un devis
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 flex flex-col gap-6 border-l-2 border-[#A68868] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-[#0C131C]/60 sm:text-base">
            Chaque demande est étudiée selon les caractéristiques réelles du
            bâtiment et la nature des travaux envisagés. Un échange permet de
            mieux définir votre besoin avant l'établissement d'un devis.
          </p>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-bold text-[#0C131C] transition-colors hover:text-[#A68868]"
          >
            Parlons de votre projet
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}