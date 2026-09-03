import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PolitiqueConfidentialitePage() {
return ( 
<main className="min-h-screen bg-[#F5F3EE]">
{/* Header */} 
<section className="border-b border-[#071739]/10 bg-white"> <div className="container-site py-16 sm:py-20"> <Link
         href="/"
         className="inline-flex items-center gap-2 text-sm font-semibold text-[#20548E] transition hover:text-[#071739]"
       > 
       <ArrowLeft size={17} />
        Retour à l'accueil
        </Link>

      <div className="mt-8 max-w-3xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
          <ShieldCheck size={17} />
          Protection des données
        </span>

        <h1 className="mt-4 font-editorial text-4xl leading-tight text-[#071739] sm:text-5xl lg:text-6xl">
          Politique de
          <br />
          <span className="text-[#20548E]">confidentialité.</span>
        </h1>

        <p className="mt-6 text-base leading-7 text-[#0C131C]/70 sm:text-lg">
          Cette politique explique comment Couverture Vasseur collecte et
          utilise vos données personnelles lorsque vous utilisez ce site.
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
              1. Responsable du traitement
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Le responsable du traitement des données personnelles
              collectées sur ce site est :
            </p>

            <div className="mt-5 rounded-xl bg-[#F5F3EE] p-5 text-sm leading-7 sm:text-base">
              <p className="font-semibold text-[#071739]">
                Couverture Vasseur
              </p>
              <p>Adresse : À compléter</p>
              <p>E-mail : À compléter</p>
              <p>Téléphone : À compléter</p>
            </div>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              2. Données collectées
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Dans le cadre de l'utilisation du site et notamment lors
              d'une prise de contact ou d'une demande de devis, nous
              pouvons collecter les données que vous nous transmettez
              volontairement, telles que :
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-7 sm:text-base">
              <li>• Nom et prénom</li>
              <li>• Adresse e-mail</li>
              <li>• Numéro de téléphone</li>
              <li>• Adresse ou commune concernée par votre projet</li>
              <li>• Informations relatives à votre demande de travaux</li>
              <li>• Toute autre information que vous choisissez de nous communiquer</li>
            </ul>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              3. Finalités de la collecte
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Vos données personnelles sont utilisées uniquement dans le
              cadre des finalités suivantes :
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-7 sm:text-base">
              <li>• Répondre à vos demandes de contact</li>
              <li>• Étudier votre demande de devis</li>
              <li>• Vous recontacter concernant votre projet</li>
              <li>• Assurer le suivi de nos échanges</li>
              <li>• Améliorer le fonctionnement et la sécurité du site</li>
            </ul>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              4. Base légale du traitement
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Le traitement de vos données repose, selon la situation, sur
              votre consentement lorsque celui-ci est requis, sur
              l'exécution de mesures précontractuelles prises à votre
              demande, notamment dans le cadre d'une demande de devis, ou
              sur l'intérêt légitime de Couverture Vasseur à répondre à vos
              demandes et assurer le bon fonctionnement du site.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              5. Durée de conservation
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Vos données sont conservées pendant une durée n'excédant pas
              celle nécessaire aux finalités pour lesquelles elles ont été
              collectées et conformément aux obligations légales
              applicables.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Les données issues des demandes de contact ou de devis sont
              conservées pendant la durée nécessaire au traitement de votre
              demande et au suivi de la relation commerciale.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              6. Destinataires des données
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Les données collectées sont destinées uniquement à
              Couverture Vasseur et aux personnes autorisées à traiter
              votre demande.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Certaines données peuvent également être traitées par des
              prestataires techniques intervenant pour le fonctionnement
              du site ou de ses services, dans la limite de ce qui est
              nécessaire à leurs missions.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              7. Vos droits
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Conformément à la réglementation applicable en matière de
              protection des données personnelles, vous disposez notamment
              d'un droit d'accès, de rectification, d'effacement, de
              limitation du traitement et, dans certaines situations, d'un
              droit d'opposition.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Vous pouvez également demander la portabilité de vos données
              lorsque ce droit est applicable.
            </p>

            <p className="mt-4 text-sm leading-7 sm:text-base">
              Pour exercer vos droits, vous pouvez contacter Couverture
              Vasseur à l'adresse suivante :{" "}
              <span className="font-medium text-[#071739]">
                adresse e-mail à compléter
              </span>.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              8. Sécurité des données
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Couverture Vasseur met en œuvre des mesures techniques et
              organisationnelles appropriées afin de protéger vos données
              personnelles contre tout accès non autorisé, toute perte,
              destruction ou divulgation non autorisée.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              9. Cookies
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Le site peut utiliser des cookies ou technologies similaires
              nécessaires à son bon fonctionnement. Si des cookies de
              mesure d'audience, de marketing ou d'autres cookies non
              essentiels sont utilisés, une information spécifique et, le
              cas échéant, votre consentement seront demandés conformément
              à la réglementation applicable.
            </p>
          </section>

          <section className="border-t border-[#071739]/10 pt-10">
            <h2 className="font-editorial text-3xl text-[#071739]">
              10. Modification de cette politique
            </h2>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              La présente politique de confidentialité peut être modifiée à
              tout moment afin de tenir compte des évolutions de nos
              pratiques, des services proposés ou de la réglementation
              applicable.
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
