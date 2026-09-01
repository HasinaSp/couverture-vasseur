import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#CDD5DB] text-white">
      <div className="container-site flex h-20 items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-couverture-vasseur.png"
            alt="Couverture Vasseur"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-[#0C131C]">
          <Link href="#services">Services</Link>
          <Link href="#realisations">Réalisations</Link>
          <Link href="#entreprise">L'entreprise</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link href="#contact" className="bg-[#A68868] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A68868]/90 rounded-md">
          Demander un devis
        </Link>
      </div>
    </header>
  );
}