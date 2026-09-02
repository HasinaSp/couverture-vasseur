"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const services = [
  "Sélectionnez votre besoin",
  "Couverture neuve",
  "Rénovation de toiture",
  "Recherche de fuite",
  "Réparation de toiture",
  "Zinguerie & gouttières",
  "Démoussage & entretien",
  "Charpente",
  "Fenêtre de toit",
  "Autre demande",
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    // Pour l'instant, le formulaire est uniquement visuel.
    // Nous connecterons ensuite ce formulaire à une API.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);

    alert("Votre demande a bien été envoyée !");
  }

  return (
    <section
      id="contact"
      className="bg-[#071739] py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* Partie gauche */}
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#A68868]">
              Devis gratuit sous 48h
            </p>

            <h2 className="max-w-xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Demandez votre devis, gratuitement et sans engagement.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#CDD5DB]/75 sm:text-lg">
              Décrivez-nous votre besoin. Nous vous recontactons rapidement
              pour échanger sur votre projet et organiser une intervention si
              nécessaire.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#CDD5DB]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A68868]">
                  <Check size={14} strokeWidth={3} />
                </span>
                Devis gratuit et sans engagement
              </div>

              <div className="flex items-center gap-3 text-sm text-[#CDD5DB]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A68868]">
                  <Check size={14} strokeWidth={3} />
                </span>
                Réponse rapide à votre demande
              </div>

              <div className="flex items-center gap-3 text-sm text-[#CDD5DB]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A68868]">
                  <Check size={14} strokeWidth={3} />
                </span>
                Vos données restent confidentielles
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="border border-white/10 bg-white p-6 text-[#0C131C] shadow-2xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#A68868]">
                Une minute suffit
              </p>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Parlez-nous de votre projet
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#0C131C]/60">
                Remplissez le formulaire et nous vous rappellerons dans les
                meilleurs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Besoin */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold"
                >
                  Votre besoin *
                </label>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-14 w-full appearance-none border border-[#0C131C]/15 bg-[#F5F3EE] px-4 pr-12 text-sm outline-none transition focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                  >
                    <option value="" disabled>
                      Sélectionnez votre besoin
                    </option>

                    {services.slice(1).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0C131C]/50"
                  />
                </div>
              </div>

              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Nom et prénom *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  className="h-14 w-full border border-[#0C131C]/15 bg-[#F5F3EE] px-4 text-sm outline-none transition placeholder:text-[#0C131C]/35 focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                />
              </div>

              {/* Adresse */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold"
                >
                  Adresse du chantier *
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Rue et ville, ou uniquement votre commune"
                  className="h-14 w-full border border-[#0C131C]/15 bg-[#F5F3EE] px-4 text-sm outline-none transition placeholder:text-[#0C131C]/35 focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Votre téléphone *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="06 00 00 00 00"
                  className="h-14 w-full border border-[#0C131C]/15 bg-[#F5F3EE] px-4 text-sm outline-none transition placeholder:text-[#0C131C]/35 focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Adresse e-mail{" "}
                  <span className="font-normal text-[#0C131C]/45">
                    (facultative)
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Pour recevoir votre devis par écrit"
                  className="h-14 w-full border border-[#0C131C]/15 bg-[#F5F3EE] px-4 text-sm outline-none transition placeholder:text-[#0C131C]/35 focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Informations complémentaires
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez brièvement votre projet ou votre problème..."
                  className="w-full resize-none border border-[#0C131C]/15 bg-[#F5F3EE] px-4 py-4 text-sm outline-none transition placeholder:text-[#0C131C]/35 focus:border-[#20548E] focus:ring-2 focus:ring-[#20548E]/20"
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-14 w-full items-center justify-center rounded-md bg-[#20548E] px-6 text-sm font-bold text-white transition hover:bg-[#20548E]/80 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Envoi en cours..." : "Être rappelé"}
              </button>

              <p className="text-center text-xs leading-5 text-[#0C131C]/50">
                En envoyant ce formulaire, vous acceptez d'être recontacté
                concernant votre demande. Vos informations ne seront pas
                revendues à des tiers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}