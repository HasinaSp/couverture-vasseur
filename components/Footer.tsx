import {
ArrowRight,
Mail,
MapPin,
Phone,
} from "lucide-react";

const services = [
"Couverture",
"Rénovation de toiture",
"Réparation de toiture",
"Recherche de fuite",
"Zinguerie",
"Pose et réparation de gouttières",
"Entretien de toiture",
];

const cities = [
"Angers",
"Avrillé",
"Beaucouzé",
"Bouchemaine",
"Les Ponts-de-Cé",
"Trélazé",
"Saint-Barthélemy-d'Anjou",
"Saint-Sylvain-d'Anjou",
];

const Footer = () => {
return ( <footer className="bg-[#F5F3EE]">
{/* Final reminder */} <div className="border-b border-[#071739]/10"> <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between"> <div> <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A68868]">
Un projet en tête ? </p>

        <h2 className="mt-2 font-editorial text-3xl leading-tight text-[#071739] sm:text-4xl">
          Parlons de votre toiture.
        </h2>
      </div>

      <a
        href="#formulaire-contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#20548E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#071739]"
      >
        Demander un devis gratuit
        <ArrowRight size={18} />
      </a>
    </div>
  </div>

  {/* Main footer */}
  <div className="container-site py-14 sm:py-16">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
      
      {/* Brand */}
      <div>
        {/* Remplace ce texte par ton logo si nécessaire */}
        <a
          href="#"
          className="font-editorial text-3xl text-[#071739]"
        >
          Couverture <span className="text-[#20548E]">Vasseur</span>
        </a>

        <p className="mt-5 max-w-xs text-sm leading-6 text-[#0C131C]/65">
          Votre artisan couvreur à Angers et dans le Maine-et-Loire pour
          vos travaux de couverture, rénovation, réparation et entretien
          de toiture.
        </p>

        <div className="mt-6 flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071739]">
            <MapPin size={16} className="text-white" />
          </span>

          <p className="text-sm leading-6 text-[#0C131C]/65">
            Angers et ses alentours
            <br />
            Maine-et-Loire (49)
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A68868]">
          Nos prestations
        </p>

        <ul className="mt-5 space-y-3">
          {services.map((service) => (
            <li key={service}>
              <a
                href="#prestations"
                className="text-sm text-[#0C131C]/65 transition hover:text-[#20548E]"
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cities */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A68868]">
          Communes desservies
        </p>

        <ul className="mt-5 space-y-3">
          {cities.map((city) => (
            <li key={city}>
              <a
                href="#zone-intervention"
                className="text-sm text-[#0C131C]/65 transition hover:text-[#20548E]"
              >
                Couvreur à {city}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A68868]">
          Contact
        </p>

        <div className="mt-5 space-y-5">
          <a
            href="tel:+33000000000"
            className="group flex items-start gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <Phone
                size={16}
                className="text-[#20548E] transition group-hover:scale-110"
              />
            </span>

            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[#0C131C]/40">
                Téléphone
              </span>
              <span className="mt-1 block text-sm font-medium text-[#071739]">
                00 00 00 00 00
              </span>
            </span>
          </a>

          <a
            href="mailto:contact@couverture-vasseur.fr"
            className="group flex items-start gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <Mail
                size={16}
                className="text-[#20548E] transition group-hover:scale-110"
              />
            </span>

            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[#0C131C]/40">
                E-mail
              </span>
              <span className="mt-1 block text-sm font-medium text-[#071739]">
                contact@couverture-vasseur.fr
              </span>
            </span>
          </a>

          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <MapPin size={16} className="text-[#20548E]" />
            </span>

            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[#0C131C]/40">
                Zone d'intervention
              </span>
              <span className="mt-1 block text-sm font-medium leading-6 text-[#071739]">
                Angers, ses alentours et
                <br />
                le Maine-et-Loire
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-[#071739]/10">
    <div className="container-site flex flex-col gap-4 py-6 text-sm text-[#0C131C]/50 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} Couverture Vasseur. Tous droits
        réservés.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a
          href="/mentions-legales"
          className="transition hover:text-[#071739]"
        >
          Mentions légales
        </a>

        <a
          href="/politique-confidentialite"
          className="transition hover:text-[#071739]"
        >
          Politique de confidentialité
        </a>
      </div>
    </div>
  </div>
</footer>

);
};

export default Footer;