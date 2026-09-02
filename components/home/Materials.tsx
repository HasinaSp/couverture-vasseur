import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const materials = [
  {
    number: "01",
    name: "L'ardoise",
    description:
      "Naturelle et élégante, l'ardoise s'intègre particulièrement bien aux architectures traditionnelles. Sa longévité et son caractère en font un matériau apprécié pour les toitures à forte identité.",
  },
  {
    number: "02",
    name: "La tuile",
    description:
      "Très présente dans l'habitat, la tuile offre de nombreuses possibilités de formes et de finitions. Elle permet d'adapter la couverture au style du bâtiment tout en assurant une protection efficace contre les intempéries.",
  },
  {
    number: "03",
    name: "Le zinc",
    description:
      "Léger, durable et particulièrement adapté aux travaux de zinguerie, le zinc permet de réaliser des finitions précises autour des points sensibles de la toiture et des évacuations d'eau.",
  },
];

export default function Materials() {
  return (
    <section
      id="materiaux"
      className="bg-[#F5F3EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
            Les matériaux
          </p>

          <h2 className="mt-4 font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
            Le bon matériau pour le bon bâtiment.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#0C131C]/60 sm:text-lg sm:leading-8">
            Le choix d'une couverture ne dépend pas uniquement de son aspect
            esthétique. Le type de bâtiment, la pente, l'exposition et les
            contraintes techniques doivent être pris en compte pour obtenir
            une toiture cohérente et durable.
          </p>
        </div>

        {/* Main composition */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Image */}
          <div className="relative min-h-[500px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">
            <Image
              src="/images/materials-couverture-vasseur.jpg"
              alt="Détail d'une toiture réalisée avec des matériaux de couverture"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071739]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
                Savoir-faire
              </p>

              <p className="mt-3 max-w-md font-editorial text-2xl leading-tight text-white sm:text-3xl">
                Une toiture se pense dans son ensemble, jusque dans les
                moindres détails.
              </p>
            </div>
          </div>

          {/* Materials */}
          <div className="flex flex-col">
            {materials.map((material, index) => (
              <article
                key={material.number}
                className={`group border-t border-[#0C131C]/15 py-8 sm:py-10 ${
                  index === materials.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <div className="grid gap-5 sm:grid-cols-[70px_1fr] sm:gap-7">
                  {/* Number */}
                  <span className="text-xs font-bold tracking-[0.15em] text-[#A68868]">
                    {material.number}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#0C131C] transition-colors duration-300 group-hover:text-[#A68868] sm:text-3xl">
                      {material.name}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#0C131C]/60 sm:text-base">
                      {material.description}
                    </p>

                    <Link
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0C131C] transition-colors hover:text-[#A68868]"
                    >
                      Parler de mon projet

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Bottom note */}
            <div className="mt-8 flex gap-4 bg-white p-6 sm:p-7">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#A68868]" />

              <p className="text-sm leading-6 text-[#0C131C]/60">
                Le matériau adapté dépend toujours des caractéristiques de
                votre toiture et de votre projet. Une étude de l'existant
                permet de déterminer la solution la plus pertinente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}