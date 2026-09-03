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
      <div className="hidden items-center gap-2 md:flex">
        <MapPin
          size={15}
          className="shrink-0 text-[#A68868]"
        />
        <span>
          Angers · Maine-et-Loire 49
        </span>
      </div>

      {/* Avis Google */}
      <div className="hidden items-center gap-2 lg:flex">
        <Star
          size={15}
          className="shrink-0 fill-[#A68868] text-[#A68868]"
        />
        <span>
          4,9 / 5 · 47 avis Google
        </span>
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