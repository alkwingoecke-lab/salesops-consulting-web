import { PartnerLogo } from "@/components/ui/PartnerLogo";



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

    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">

      <div className="max-w-[1120px] mx-auto px-6">

        <div className="text-center mb-14 pb-12 border-b border-slate-200">

          <p className="font-sans text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-6">Partners Tecnológicos Certificados</p>

          <div className="flex justify-center items-center gap-16 flex-wrap">

            <PartnerLogo src="/logos/pipedrive-partner.png" alt="Pipedrive Partner" label="Pipedrive" height={80} maxWidth={280} />

            <div className="hidden sm:block w-px h-12 bg-slate-200" />

            <PartnerLogo src="/logos/kommo-partner-dark.svg" alt="Kommo Partner" label="Kommo" height={80} maxWidth={280} />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left mb-14">

          <div className="flex flex-col items-center md:items-start">

            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">Contacto Directo</p>

            <a href="mailto:contacto@salesopsconsulting.cl" className="font-sans text-base font-semibold text-slate-900 hover:text-[#2d3f8f] transition-colors">contacto@salesopsconsulting.cl</a>

          </div>

          <div className="flex flex-col items-center md:items-end">

            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-3">Canales Corporativos</p>

            <div className="flex gap-5">

              {socials.map(({ Icon, url, label }) => (

                <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-600 hover:text-[#2d3f8f] hover:scale-105 transition-all">

                  <Icon size={32} />

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

