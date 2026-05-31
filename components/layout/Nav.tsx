"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "El problema", href: "#problema" },
    { label: "Método", href: "#metodo" },
    { label: "Servicios", href: "#servicios" },
    { label: "A quién ayudamos", href: "#quien" },
    { label: "Autoevaluación", href: "#eval" },
        
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a href="#top" className="flex items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2d3f8f] rounded-md hover:opacity-90 transition-opacity">
          <Logo variant="full-dark" width={280} height={64} />
        </a>

        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-sans text-[14px] font-medium text-slate-900 hover:text-[#2d3f8f] transition-colors">
              {link.label}
            </a>
          ))}
          <button onClick={onOpenModal} className="font-sans text-[13px] font-semibold text-white bg-[#2d3f8f] hover:bg-[#202e70] px-6 py-2.5 rounded-md transition-colors">
            Conversemos
          </button>
        </div>

        <button className="lg:hidden p-2 text-slate-950" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 flex flex-col px-6 pb-6 shadow-inner">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-sans text-[15px] font-medium text-slate-900 py-3.5 border-b border-slate-100">
              {link.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onOpenModal(); }} className="mt-4 font-sans text-[14px] font-semibold text-white bg-[#2d3f8f] py-3 rounded-lg w-full text-center">
            Conversemos
          </button>
        </div>
      )}
    </nav>
  );
}