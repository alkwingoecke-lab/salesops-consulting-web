"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
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
    { label: "El problema", href: "/#problema", highlight: "none" },
    { label: "Método", href: "/#metodo", highlight: "none" },
    { label: "Servicios", href: "/#servicios", highlight: "none" },
    { label: "Pipedrive", href: "/servicios/implementacion-pipedrive", highlight: "pipedrive" },
    { label: "Kommo", href: "/servicios/implementacion-kommo", highlight: "kommo" },
    { label: "A quién ayudamos", href: "/#quien", highlight: "none" },
    { label: "Autoevaluación", href: "/#eval", highlight: "none" },
  ];

  // FUNCIÓN PARA ESTILOS DINÁMICOS EN ESCRITORIO
  const getDesktopLinkStyle = (type: string) => {
    const baseStyle = "font-sans text-[15px] font-medium transition-all px-3 py-1.5 rounded-md whitespace-nowrap";
    if (type === "pipedrive") return `${baseStyle} text-[#00a651] bg-green-50 hover:bg-green-100 font-semibold`;
    
    // NUEVO COLOR MORADO/ÍNDIGO DE KOMMO (#5C45D3)
    if (type === "kommo") return `${baseStyle} text-[#5C45D3] bg-[#5C45D3]/10 hover:bg-[#5C45D3]/20 font-semibold`;
    
    return `${baseStyle} text-slate-800 hover:text-[#2d3f8f] bg-transparent`;
  };

  // FUNCIÓN PARA ESTILOS DINÁMICOS EN MÓVIL
  const getMobileLinkStyle = (type: string) => {
    const baseStyle = "font-sans text-[16px] font-medium py-3.5 border-b border-slate-100 flex items-center";
    if (type === "pipedrive") return `${baseStyle} text-[#00a651] font-bold`;
    
    // NUEVO COLOR MORADO/ÍNDIGO DE KOMMO EN VERSIÓN MÓVIL
    if (type === "kommo") return `${baseStyle} text-[#5C45D3] font-bold`;
    
    return `${baseStyle} text-slate-900`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        <Link href="/" className="flex items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2d3f8f] rounded-md hover:opacity-90 transition-transform origin-left scale-[1.15] md:scale-[1.25] lg:ml-2">
          <Logo variant="full-dark" width={280} height={64} />
        </Link>

        <div className="hidden lg:flex gap-2 xl:gap-4 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={getDesktopLinkStyle(link.highlight)}>
              {link.label}
            </Link>
          ))}
          <button onClick={onOpenModal} className="font-sans text-[15px] font-bold text-white bg-[#2d3f8f] hover:bg-[#202e70] px-6 py-2.5 rounded-md transition-colors ml-2 shadow-sm whitespace-nowrap">
            Conversemos
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
          <button onClick={() => { setOpen(false); onOpenModal(); }} className="mt-5 font-sans text-[16px] font-bold text-white bg-[#2d3f8f] py-3.5 rounded-lg w-full text-center shadow-md">
            Conversemos
          </button>
        </div>
      )}
    </nav>
  );
}
