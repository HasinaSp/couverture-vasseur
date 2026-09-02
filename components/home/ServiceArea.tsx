import { MapPin, ArrowRight, Navigation } from "lucide-react";

const zones = [
  "Angers",
  "Angers et alentours",
  "Maine-et-Loire (49)",
];

const ServiceArea = () => {
  return (
    <section
      id="zone-intervention"
      className="bg-[#F5F3EE] py-20 sm:py-24"
    >
      <div className="container-site">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
            <MapPin size={17} />
            Zone d'intervention
          </span>

          <h2 className="font-editorial text-4xl leading-tight text-[#071739] sm:text-5xl lg:text-6xl">
            Votre couvreur à Angers
            <br />
            <span className="text-[#20548E]">et dans le Maine-et-Loire.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#0C131C]/70 sm:text-lg">
            Couverture Vasseur intervient à Angers et dans les secteurs
            environnants pour vos travaux de couverture, rénovation,
            réparation, zinguerie et entretien de toiture.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Map visual */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#071739] p-6 sm:p-8">

            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative flex h-full min-h-[360px] flex-col justify-between">

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Navigation size={15} className="text-[#A68868]" />
                  Angers · 49
                </span>
              </div>

              {/* Center marker */}
              <div className="flex flex-1 items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 animate-pulse rounded-full border border-[#A68868]/30" />
                  <div className="absolute -inset-5 rounded-full border border-[#A68868]/40" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#A68868] shadow-2xl">
                    <MapPin
                      size={34}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-md">
                <p className="text-sm uppercase tracking-[0.15em] text-[#A68868]">
                  Secteur principal
                </p>

                <h3 className="mt-2 font-editorial text-3xl text-white sm:text-4xl">
                  Angers & alentours
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Une intervention de proximité pour vous accompagner au plus
                  près de votre projet.
                </p>
              </div>
            </div>
          </div>

          {/* Zones */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#071739]/10 bg-white p-7 sm:p-9">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A68868]">
                Où intervenons-nous ?
              </p>

              <h3 className="mt-3 font-editorial text-3xl text-[#071739] sm:text-4xl">
                Une présence locale,
                <br />
                <span className="text-[#20548E]">
                  au plus proche de vous.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-6 text-[#0C131C]/65 sm:text-base">
                Vous avez un projet de rénovation, une fuite ou besoin d'un
                entretien de votre toiture ? Contactez-nous pour vérifier la
                possibilité d'intervention dans votre secteur.
              </p>

              <div className="mt-8 space-y-3">
                {zones.map((zone) => (
                  <div
                    key={zone}
                    className="flex items-center gap-3 border-b border-[#071739]/10 pb-3 last:border-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#071739]">
                      <MapPin size={15} className="text-white" />
                    </span>

                    <span className="text-sm font-medium text-[#0C131C] sm:text-base">
                      {zone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 border-t border-[#071739]/10 pt-7">
              <p className="mb-4 text-sm text-[#0C131C]/60">
                Vous n'êtes pas certain d'être dans notre secteur ?
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#20548E] px-6 py-3 font-semibold text-white transition hover:bg-[#20548E]/90"
              >
                Vérifier ma zone
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#071739]/10 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-semibold text-[#071739]">
              Un projet de toiture dans le 49 ?
            </p>

            <p className="mt-1 text-sm text-[#0C131C]/60">
              Parlons de votre besoin et vérifions ensemble la faisabilité de
              votre intervention.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-semibold text-[#20548E] transition hover:text-[#071739]"
          >
            Demander un devis
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceArea;