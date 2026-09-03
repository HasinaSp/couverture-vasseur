import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function MentionsLegalesPage() {
return ( 
<main className="min-h-screen bg-[#F5F3EE]">
{/* Header */} 
<section className="border-b border-[#071739]/10 bg-white"> <div className="container-site py-16 sm:py-20"> <Link
         href="/"
         className="inline-flex items-center gap-2 text-sm font-semibold text-[#20548E] transition hover:text-[#071739]"
       > <ArrowLeft size={17} />
Retour à l'accueil </Link>

      <div className="mt-8 max-w-3xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
          <Scale size={17} />
          Informations légales
        </span>

        <h1 className="mt-4 font-editorial text-4xl leading-tight text-[#071739] sm:text-5xl lg:text-6xl">
          Mentions
          <br />
          <span className="text-[#20548E]">légales.</span>
        </h1>

        <p className="mt-6 text-base leading-7 text-[#0C131C]/70 sm:text-lg">
          Retrouvez ci-dessous les informations relatives à l'édition et à
          l'utilisation du site internet Couverture Vasseur.
        </p>
      </div>
    </div>
  </section>

  {/* Content */}
  <section className="py-16 sm:py-20">
    <div className="container-site">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#071739]/10 bg-white p-7 sm:p-10 lg:p-14">

        <div className="space-y-12 text-[#0C131C]/75">

          <section>
            <h2 className="font-editorial text-3xl text-[#071739]">
              1. Éditeur du site
            </h2>

            <div className="mt-5 space-y-2 text-sm leading-7 sm:text-base">
              <p>
                <strong className="text-[#071739]">
                  Raison sociale :
                </strong>{" "}
                Couverture Vasseur
              </p>

              <p>
                <strong className="text-[#071739]">
                  Forme juridique :
                </strong>{" "}
                À compléter
              </p>

              <p>
                <strong className="text-[#071739]">
                  Siège social :
                </strong>{" "}
                À compléter
              </p>

              <p>
                <strong className="text-[#071739]">
                  SIREN / SIRET :
                </strong>{" "}
                À compléter
              </p>

              <p>
                <strong className="text-[#071739]">
                  Numéro de TVA intracommunautaire :
                </strong>{" "}
                À compléter si applicable
              </p>

              <p>
                <strong className="text-[#071739]">
                  Directeur de la publication :
                </strong>{" "}
                À compléter
              </p>

              <p>
                <strong className="text-[#071739]">
                  Contact :
                </strong>{" "}
                À compléter
              </p>
            </div>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              2. Hébergement
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Le site est hébergé par :
            </p>

            <div className="mt-4 rounded-xl bg-[#F5F3EE] p-5 text-sm leading-7 sm:text-base">
              <p className="font-semibold text-[#071739]">
                Vercel Inc.
              </p>

              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789</p>
              <p>États-Unis</p>
            </div>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              3. Propriété intellectuelle
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              L'ensemble des contenus présents sur ce site, notamment les
              textes, photographies, illustrations, logos, graphismes,
              éléments visuels et structure du site, sont protégés par les
              dispositions applicables en matière de propriété
              intellectuelle.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Toute reproduction, représentation, modification,
              publication ou adaptation, totale ou partielle, de ces
              éléments sans autorisation préalable est interdite, sauf
              dispositions légales contraires.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              4. Responsabilité
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Couverture Vasseur s'efforce de fournir sur ce site des
              informations aussi précises et à jour que possible.
              Toutefois, l'entreprise ne peut garantir l'exactitude,
              l'exhaustivité ou l'actualité de l'ensemble des informations
              diffusées.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Les informations présentes sur le site sont fournies à titre
              indicatif et peuvent être modifiées à tout moment.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              5. Liens externes
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Le site peut contenir des liens vers des sites internet
              externes. Couverture Vasseur ne saurait être tenue
              responsable du contenu, de la disponibilité ou des pratiques
              de ces sites tiers.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              6. Droit applicable
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Les présentes mentions légales sont régies par le droit
              français. En cas de litige, et sous réserve des dispositions
              légales applicables, les juridictions compétentes seront
              celles désignées par le droit français.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              7. Mise à jour
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Les présentes mentions légales peuvent être modifiées ou
              mises à jour à tout moment afin de refléter les évolutions du
              site ou de la réglementation applicable.
            </p>

            <p className="mt-4 text-sm font-medium text-[#071739]">
              Dernière mise à jour : septembre 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  </section>
</main>

);
}