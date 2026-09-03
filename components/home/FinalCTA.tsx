import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

const FinalCTA = () => {
return ( <section
   id="contact"
   className="relative overflow-hidden bg-[#071739] py-20 sm:py-24 lg:py-28"
 >
{/* Decorative background */}
<div
className="absolute inset-0 opacity-[0.06]"
style={{
backgroundImage:
"linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
backgroundSize: "42px 42px",
}}
/>

  {/* Decorative circles */}
  <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/10" />
  <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/10" />

  <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
  <div className="absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border border-white/10" />

  <div className="container-site relative">

    {/* Top label */}
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A68868]">
        <ShieldCheck size={17} />
        Votre projet commence ici
      </span>

      {/* Title */}
      <h2 className="mt-5 font-editorial text-4xl leading-[1.05] text-white sm:text-5xl lg:text-7xl">
        Votre toiture mérite
        <br />
        <span className="text-[#A68868]">
          toute notre attention.
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
        Un projet de rénovation, une réparation ou simplement une question
        concernant votre toiture ? Échangeons ensemble sur votre besoin et
        trouvons la solution la plus adaptée à votre habitation.
      </p>

      {/* CTA buttons */}
      <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#formulaire-contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#A68868] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#B89A79] sm:w-auto"
        >
          Demander un devis gratuit
          <ArrowRight size={18} />
        </a>

        <a
          href="tel:+33000000000"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.08] sm:w-auto"
        >
          <Phone size={18} />
          Nous appeler
        </a>
      </div>

      {/* Reassurance points */}
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="text-lg font-semibold text-white">
            Devis gratuit
          </p>
          <p className="mt-1 text-sm text-white/50">
            Clair et sans engagement
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">
            Intervention locale
          </p>
          <p className="mt-1 text-sm text-white/50">
            Angers et Maine-et-Loire
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">
            Travail soigné
          </p>
          <p className="mt-1 text-sm text-white/50">
            Une attention à chaque détail
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

);
};

export default FinalCTA;