"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Sector = "enterprise" | "education";

interface SectorContextType {
  sector: Sector;
  setSector: (sector: Sector) => void;
}

const SectorContext = createContext<SectorContextType | undefined>(undefined);

export function SectorProvider({ children }: { children: React.ReactNode }) {
  const [sector, setSector] = useState<Sector>("enterprise");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes("/education")) {
      setSector("education");
    } else if (pathname.includes("/entreprise")) {
      setSector("enterprise");
    } else if (
      pathname !== "/home" &&
      pathname !== "/" &&
      !pathname.startsWith("/mention-legal") &&
      !pathname.startsWith("/politics")
    ) {
      router.push("/home");
    }
  }, [pathname, router]);

  return (
    <SectorContext.Provider value={{ sector, setSector }}>
      {children}
    </SectorContext.Provider>
  );
}

export function useSector() {
  const context = useContext(SectorContext);
  if (context === undefined) {
    throw new Error("useSector must be used within a SectorProvider");
  }
  return context;
}
