import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Materials from "@/components/home/Materials";
import QuoteForm from "@/components/home/QuoteForm";
import Services from "@/components/home/Services";
import Header from "@/components/layout/Header";

const TopBar = () => (
<div className="w-full bg-[#071739] text-[#CDD5DB]">
   <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs uppercase sm:px-6 sm:text-sm lg:px-8"> 
    {/* Horaires */} 
    <p className="whitespace-nowrap"> Lundi – Samedi · 7h00 – 20h00 </p>
     {/* Zone d'intervention */}
    <h1 className="hidden md:block"> Couvreur, zingueur à Angers Maine-et-Loire 49 </h1> 
     {/* Avis */} 
    <p className="hidden lg:block"> 4,9 / 5 · 47 avis Google </p> 
     {/* Urgence */} 
    <p className="whitespace-nowrap text-right text-[#A6886] border-[1px] border-[#A68868] px-2 py-1 bg-[#A68868]/50"> Urgence fuite : 24/24 · 7j/7 </p> 
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
      </main>

      <Footer />
    </>
  );
}