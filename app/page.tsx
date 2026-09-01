import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";

const Span = () => (
  <header>
    <nav aria-label="Main navigation">
      <span className="flex w-full justify-between bg-[#071739] px-8 py-2 text-center text-sm font-semibold text-[#CDD5DB]">
        <p>Lundi – Samedi · 7h00 – 20h00</p>
        <p>Couvreur, zingueur à Angers Maine-et-Loire 49</p>
        <p>5,0 / 5 · 16 avis Google</p>
        <p>Urgence fuite : 24/24 · 7j/7</p>
      </span>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>© 2026 Couverture Vasseur</p>
  </footer>
);

export default function Home() {
  return (
    <>
      <Span />

      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
}