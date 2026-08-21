import Link from "next/link";

// SVGs nativos para no depender de librerías de terceros en logos de marcas
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export function Footer() {
  const socials = [
    { Icon: LinkedinIcon, url: "https://www.linkedin.com/company/salesops-consulting/", label: "LinkedIn" },
    { Icon: InstagramIcon, url: "https://www.instagram.com/salesopsconsulting/", label: "Instagram" },
    { Icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=61589963015210&locale=es_LA", label: "Facebook" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          
          {/* Contacto Directo */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">Contacto Directo</p>
            <a href="mailto:contacto@salesopsconsulting.cl" className="font-sans text-base font-semibold text-slate-900 hover:text-[#2d3f8f] transition-colors mb-3">
              contacto@salesopsconsulting.cl
            </a>
            <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xs">
              Asesoría e implementación comercial para estructurar tu equipo de ventas.
            </p>
          </div>

          {/* Navegación y Recursos */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">Recursos y Soluciones</p>
            <div className="flex flex-col gap-2 font-sans text-sm text-slate-600">
              <Link href="/servicios/implementacion-pipedrive" className="hover:text-[#2d3f8f] transition-colors">
                Pipedrive CRM
              </Link>
              <Link href="/calculadora-roi-pipedrive" className="hover:text-[#2d3f8f] transition-colors">
                Calculadora ROI
              </Link>
              <Link href="/comparativas" className="hover:text-[#2d3f8f] transition-colors">
                Comparativas de CRM
              </Link>
              <Link href="/blog" className="hover:text-[#2d3f8f] transition-colors">
                Blog de Ventas y Operaciones
              </Link>
            </div>
          </div>

          {/* Canales Corporativos */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-3">Canales Corporativos</p>
            <div className="flex gap-5">
              {socials.map(({ Icon, url, label }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-600 hover:text-[#2d3f8f] hover:scale-105 transition-all">
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-6 text-center">
          <p className="font-sans text-xs text-slate-400">© 2026 SalesOps Consulting SpA · Santiago, Chile</p>
        </div>
      </div>
    </footer>
  );
}