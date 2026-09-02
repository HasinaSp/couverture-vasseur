import Image from "next/image";
// import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/Rennes-couvreur-MD-Toiture.jpg"
        alt="Professionnel au travail"
        fill 
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[850px] max-w-7xl items-center px-6 py-32">
        <div className="max-w-3xl text-white">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Votre entreprise · Votre ville
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Couvreur Vasseur —
            Rénovation &
            Réparation Toiture à Angers
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-md">
            Un toit, ça se regarde de près. 
            Couverture, rénovation, recherche de fuite, zinguerie,
            charpente : 15 ans passés sur le bâti francilien,
            un devis détaillé sous 24 h et l’attestation décennale jointe.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2  rounded-md bg-[#20548E] px-6 py-3 font-semibold transition hover:bg-[#20548E]/90 text-white backdrop-blur"
            >
              Devis gratuit sous 48h
              {/* <ArrowRight size={18} /> */}
            </a>

            <a
              href="tel:+261000000000"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              {/* <Phone size={18} /> */}
              Nous appeler
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {/* <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-current text-yellow-400"
                />
              ))}
            </div> */}

            <p className="text-sm text-white/80">
              Plus de <strong className="text-white">500 clients satisfaits</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}