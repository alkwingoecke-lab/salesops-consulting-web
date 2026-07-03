"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "/#servicios", highlight: "none" },
    { label: "Metodología", href: "/#metodo", highlight: "none" },
    { label: "Pipedrive CRM", href: "/servicios/implementacion-pipedrive", highlight: "pipedrive" },
    { label: "Calculadora ROI", href: "/calculadora-roi-pipedrive", highlight: "calc" },
  ];

  const getDesktopLinkStyle = (type: string) => {
    const baseStyle = "font-sans text-[15px] font-medium transition-all px-3.5 py-2 rounded-lg whitespace-nowrap";
    if (type === "pipedrive") return `${baseStyle} text-[#0E6A4F] bg-[#EAF5EF] hover:bg-[#DCE8E1] font-semibold border border-[#0E6A4F]/25`;
    if (type === "calc") return `${baseStyle} text-slate-700 hover:text-[#0E6A4F] font-semibold`;
    return `${baseStyle} text-slate-700 hover:text-slate-950 hover:bg-slate-50`;
  };

  const getMobileLinkStyle = (type: string) => {
    const baseStyle = "font-sans text-[16px] font-medium py-3.5 border-b border-slate-100 flex items-center";
    if (type === "pipedrive") return `${baseStyle} text-[#0E6A4F] font-bold`;
    if (type === "calc") return `${baseStyle} text-slate-900 font-semibold`;
    return `${baseStyle} text-slate-700`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1350px] mx-auto px-4 md:px-8 py-2.5 flex justify-between items-center">
        
        {/* LOGO EN TAMAÑO EXTREMO (80px de altura en escritorio) */}
        <Link 
          href="/" 
          className="flex items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2D3F8F] rounded-md hover:opacity-90 transition-opacity shrink-0"
        >
          <Image
            src="/logos/logo-salesops-dark.png"
            alt="SalesOps Consulting"
            width={400}
            height={100}
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex gap-3 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={getDesktopLinkStyle(link.highlight)}>
              {link.label}
            </Link>
          ))}
          <button onClick={onOpenModal} className="font-sans text-[15px] font-bold text-white bg-[#2D3F8F] hover:bg-[#202e70] px-6 py-3 rounded-xl transition-colors ml-3 shadow-sm whitespace-nowrap cursor-pointer">
            Agendar Diagnóstico
          </button>
        </div>

        <button className="lg:hidden p-2 text-slate-950" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 flex flex-col px-6 pb-6 shadow-inner">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={getMobileLinkStyle(link.highlight)}>
              {link.label}
            </Link>
          ))}
          <button onClick={() => { setOpen(false); onOpenModal(); }} className="mt-5 font-sans text-[16px] font-bold text-white bg-[#2D3F8F] py-3.5 rounded-xl w-full text-center shadow-sm">
            Agendar Diagnóstico
          </button>
        </div>
      )}
    </nav>
  );
}