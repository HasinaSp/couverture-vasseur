import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllLocalCities,
  getLocalCity,
  getLocalCityParams,
} from "@/data/local-cities";

import LocalHero from "@/components/local/LocalHero";
import LocalPathologies from "@/components/local/LocalPathologies";
import LocalAccess from "@/components/local/LocalAccess";
import LocalExpertise from "@/components/local/LocalExpertise";
import LocalProcess from "@/components/local/LocalProcess";
import LocalUrbanisme from "@/components/local/LocalUrbanisme";
import LocalFAQ from "@/components/local/LocalFAQ";
import LocalNearby from "@/components/local/LocalNearby";
import LocalFinalCTA from "@/components/local/LocalFinalCTA";
import Footer from "@/components/Footer";
import TopBar from "@/components/layout/TopBar";

type PageProps = {
  params: Promise<{
    ville: string;
  }>;
};

export function generateStaticParams() {
  return getLocalCityParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { ville } = await params;

  const city = getLocalCity(ville);

  if (!city) {
    return {};
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.will-couvreur.com";

  const canonicalUrl = `${baseUrl}/couvreur/${city.slug}`;

  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: canonicalUrl,
      siteName: "Couverture Vasseur",
      locale: "fr_FR",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocalCityPage({
  params,
}: PageProps) {
  const { ville } = await params;

  const city = getLocalCity(ville);

  if (!city) {
    notFound();
  }

  return (
    <main>
    <div className="fixed top-0 left-0 z-50 w-full">
      <TopBar />
    </div>
      <LocalHero city={city} />

      <LocalPathologies city={city} />

      <LocalAccess city={city} />

      <LocalExpertise city={city} />

      <LocalProcess city={city} />

      <LocalUrbanisme city={city} />

      <LocalFAQ city={city} />

      <LocalNearby city={city} />

      <LocalFinalCTA city={city} />

      <Footer />
    </main>
  );
}