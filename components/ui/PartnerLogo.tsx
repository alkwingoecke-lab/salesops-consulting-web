"use client";
import React, { useState } from "react";
import Image from "next/image";

export function PartnerLogo({ src, alt, label, height = 50, maxWidth = 200 }: { src: string; alt: string; label: string; height?: number; maxWidth?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <span className="font-sans font-bold text-slate-700 tracking-tight" style={{ fontSize: Math.round(height * 0.42) }}>{label}</span>;

  return (
    <div 
      className="relative flex items-center justify-center transition-opacity duration-300 opacity-90 hover:opacity-100" 
      style={{ height: height, width: maxWidth }}
    >
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-contain" 
        sizes="(max-width: 768px) 100vw, 200px" 
        onError={() => setFailed(true)} 
        priority={false}
      />
    </div>
  );
}
