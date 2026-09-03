import Image from "next/image";
import { Clock, MapPin, Star, TriangleAlert } from "lucide-react";

const TopBar = () => (
  <div className="w-full bg-[#071739] text-[#CDD5DB]">
    <div className="container-site flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] uppercase tracking-wide sm:text-xs">

      {/* Horaires */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Clock
          size={15}
          className="shrink-0 text-[#A68868]"
        />
        <span>
          Lun. – Sam. · 7h00 – 20h00
        </span>
      </div>

      {/* Zone d'intervention */}
      <h1 className="hidden items-center gap-2 md:flex">
        <MapPin
          size={15}
          className="shrink-0 text-[#A68868]"
        />
        <span>
          Angers · Maine-et-Loire 49
        </span>
      </h1>

      {/* Avis Google */}
      <div className="hidden items-center gap-2 lg:flex">
        <Image
                src="/icons/google.svg"
                alt="Google"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
        />
        <span>
          4,9 / 5 · 47 avis Google
        </span>
        <Star
          size={15}
          className="shrink-0 fill-[#A68868] text-[#A68868]"
        />
      </div>

      {/* Urgence */}
      <div className="flex items-center gap-2 whitespace-nowrap border border-[#A68868]/70 bg-[#A68868]/20 px-2 py-1">
        <TriangleAlert
          size={14}
          className="shrink-0 text-[#A68868]"
        />
        <span className="text-white">
          Urgence fuite · 24h/24 · 7j/7
        </span>
      </div>

    </div>
  </div>
);

export default TopBar;