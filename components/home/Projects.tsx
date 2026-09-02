import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Rénovation de toiture",
    title: "Rénovation complète d'une toiture",
    description:
      "Remise en état de la couverture et traitement des différents points nécessaires à la protection durable du bâtiment.",
    image: "/images/projects/projet-01.jpg",
    location: "Angers · Maine-et-Loire",
  },
  {
    number: "02",
    category: "Couverture",
    title: "Réfection de couverture",
    description:
      "Intervention sur une couverture existante avec remplacement des éléments dégradés et reprise des finitions.",
    image: "/images/projects/projet-02.jpg",
    location: "Maine-et-Loire",
  },
  {
    number: "03",
    category: "Zinguerie",
    title: "Travaux de zinguerie",
    description:
      "Réalisation et rénovation des éléments permettant d'assurer une évacuation efficace des eaux pluviales.",
    image: "/images/projects/projet-03.webp",
    location: "Angers · Maine-et-Loire",
  },
];

export default function Projects() {
  return (
    <section
      id="realisations"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Nos réalisations
            </p>

            <h2 className="mt-4 font-editorial text-4xl leading-[1.05] text-[#0C131C] sm:text-5xl lg:text-6xl">
              Des chantiers pensés pour durer.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#0C131C]/60 sm:text-lg sm:leading-8">
              Découvrez quelques exemples de travaux réalisés et les
              différentes problématiques auxquelles une toiture peut être
              confrontée.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#0C131C] pb-2 text-sm font-bold text-[#0C131C] transition-colors hover:border-[#A68868] hover:text-[#A68868]"
          >
            Parler de votre projet
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Featured project */}
        <article className="group mt-14 grid overflow-hidden bg-[#F5F3EE] lg:mt-20 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[620px]">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />

            <div className="absolute left-5 top-5 bg-[#071739] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white sm:left-7 sm:top-7">
              Projet {projects[0].number}
            </div>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A68868]">
                {projects[0].category}
              </p>

              <h3 className="mt-4 font-editorial text-3xl leading-tight text-[#0C131C] sm:text-4xl">
                {projects[0].title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-[#0C131C]/60 sm:text-base">
                {projects[0].description}
              </p>
            </div>

            <div className="mt-10 border-t border-[#0C131C]/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0C131C]/40">
                Localisation
              </p>

              <p className="mt-2 text-sm font-semibold text-[#0C131C]">
                {projects[0].location}
              </p>
            </div>
          </div>
        </article>

        {/* Secondary projects */}
        <div className="mt-px grid gap-px bg-[#0C131C]/10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.slice(1).map((project) => (
            <article
              key={project.number}
              className="group bg-white p-5 sm:p-7 lg:p-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />

                <span className="absolute left-4 top-4 bg-[#071739] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {project.number}
                </span>
              </div>

              <div className="pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A68868]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0C131C] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0C131C]/55">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#0C131C]/10 pt-5">
                  <span className="text-xs font-semibold text-[#0C131C]/40">
                    {project.location}
                  </span>

                  <Link
                    href="#contact"
                    aria-label={`Demander un devis pour ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0C131C]/15 text-[#0C131C] transition-all duration-300 hover:border-[#A68868] hover:bg-[#A68868] hover:text-white"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-16 border-t border-[#0C131C]/10 pt-12 sm:mt-20 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
                Avant / Après
              </p>

              <h3 className="mt-3 font-editorial text-3xl leading-tight text-[#0C131C] sm:text-4xl">
                Voir la différence avant et après intervention.
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#0C131C]/55 sm:text-base">
              Les photos avant et après permettent de comprendre rapidement
              l'état initial d'une toiture et le résultat obtenu après les
              travaux.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#CDD5DB]">
              <Image
                src="/images/projects/avant.jpg"
                alt="Toiture avant intervention"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              <span className="absolute bottom-4 left-4 bg-[#071739] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Avant
              </span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#CDD5DB]">
              <Image
                src="/images/projects/apres.jpg"
                alt="Toiture après intervention"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              <span className="absolute bottom-4 left-4 bg-[#A68868] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Après
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col gap-5 bg-[#071739] p-7 text-white sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Vous avez un projet de toiture ?
            </p>

            <p className="mt-1 text-sm text-[#CDD5DB]/60">
              Échangeons sur votre besoin et les travaux à envisager.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#20548E] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#20548E]/90"
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