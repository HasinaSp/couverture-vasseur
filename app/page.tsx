import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Artisan from "@/components/home/Artisan";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
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
import TopBar from "@/components/layout/TopBar";



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
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}