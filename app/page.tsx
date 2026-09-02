import About from "@/components/home/About";
import Artisan from "@/components/home/Artisan";
import Guarantees from "@/components/home/Guarantees";
import Hero from "@/components/home/Hero";
import Materials from "@/components/home/Materials";
import Pricing from "@/components/home/Pricing";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import QuoteForm from "@/components/home/QuoteForm";
import ServiceArea from "@/components/home/ServiceArea";
import Services from "@/components/home/Services";
import Header from "@/components/layout/Header";
import { Clock, MapPin, Star, TriangleAlert } from "lucide-react";

const TopBar = () => (
  <div className="w-full bg-[#071739] text-[#CDD5DB]">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs uppercase sm:px-6 sm:text-sm lg:px-8">

      {/* Horaires */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Clock size={16} className="shrink-0 text-[#A68868]" />
        <p>Lundi – Samedi · 7h00 – 20h00</p>
      </div>

      {/* Zone d'intervention */}
      <div className="hidden items-center gap-2 md:flex">
        <MapPin size={16} className="shrink-0 text-[#A68868]" />
        <h1>
          Couvreur, zingueur à Angers | Maine-et-Loire 49
        </h1>
      </div>

      {/* Avis Google */}
      <div className="hidden items-center gap-2 lg:flex">
        <Star
          size={16}
          className="shrink-0 fill-[#A68868] text-[#A68868]"
        />
        <p>4,9 / 5 · 47 avis Google</p>
      </div>

      {/* Urgence */}
      <div className="flex items-center gap-2 whitespace-nowrap border border-[#A68868] bg-[#A68868]/50 px-2 py-1 text-right">
        <TriangleAlert size={15} className="shrink-0 text-white" />
        <p className="text-white">
          Urgence fuite : 24/24 · 7j/7
        </p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#071739] px-4 py-6 text-center text-sm text-[#CDD5DB]">
    <p>© 2026 Couverture Vasseur</p>
  </footer>
);

export default function Home() {
  return (
    <>
    <div className="fixed top-0 left-0 z-50 w-full">
      <TopBar />
      <Header />
    </div>

      <main className="pt-[120px]">
        <Hero />
        <QuoteForm />
        <About />
        <Services />
        <Materials />
        <Projects />
        <Artisan/>
        <Process />
        <Pricing />
        <Guarantees />
        <ServiceArea />
      </main>

      <Footer />
    </>
  );
}