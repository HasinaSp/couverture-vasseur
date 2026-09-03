"use server";

import { prisma } from "@/lib/prisma";

export type QuoteFormState = {
  success: boolean;
  message: string;
  errors?: {
    service?: string;
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    message?: string;
  };
};

export async function createQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  // Récupération des données
  const service = formData.get("service")?.toString().trim() ?? "";
  const name = formData.get("name")?.toString().trim() ?? "";
  const address = formData.get("address")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // Validation
  const errors: QuoteFormState["errors"] = {};

  if (!service) {
    errors.service = "Veuillez sélectionner une prestation.";
  }

  if (!name || name.length < 2) {
    errors.name = "Veuillez renseigner votre nom.";
  }

  if (!address || address.length < 5) {
    errors.address = "Veuillez renseigner votre adresse.";
  }

  if (!phone || phone.length < 8) {
    errors.phone = "Veuillez renseigner un numéro de téléphone valide.";
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Veuillez renseigner une adresse email valide.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Veuillez corriger les informations indiquées.",
      errors,
    };
  }

  try {
    await prisma.quoteRequest.create({
      data: {
        service,
        name,
        address,
        phone,
        email: email || null,
        message: message || null,
      },
    });

    return {
      success: true,
      message:
        "Votre demande a bien été envoyée. Nous vous recontacterons sous 48h.",
    };
  } catch (error) {
    console.error("Erreur création demande de devis :", error);

    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer dans quelques instants.",
    };
  }
}