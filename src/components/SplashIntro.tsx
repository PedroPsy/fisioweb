"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

export function SplashIntro() {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = window.setTimeout(() => setIsExiting(true), 1300);
    const unmountTimeout = window.setTimeout(() => setIsMounted(false), 1800);

    return () => {
      window.clearTimeout(fadeOutTimeout);
      window.clearTimeout(unmountTimeout);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F8F6] transition-opacity duration-500 ease-in-out ${isExiting ? "opacity-0 pointer-events-none" : ""}`} role="status" aria-label="Carregando Clara Andrade Fisioterapia">
      <div className="animate-logo-reveal splash-intro-logo">
        <BrandLogo variant="full" />
      </div>
      <div className="w-36 h-[2px] bg-slate-200 rounded-full overflow-hidden mt-8" aria-hidden="true">
        <div className="bg-[#7BB2AD] h-full animate-progress-load" />
      </div>
    </div>
  );
}
