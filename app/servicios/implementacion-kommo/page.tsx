import { FadeIn } from "@/components/ui/FadeIn";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";
import { Check } from 'lucide-react';
import Image from "next/image";

// METADATA OPTIMIZADA PARA SEO
export const metadata = {
  title: "Partner e Implementador Kommo en Chile | CRM WhatsApp B2C | SalesOps",
  description: "Implementación experta de Kommo CRM para alta transaccionalidad. Centralizamos WhatsApp, Instagram y Facebook con bots de calificación.",
  alternates: {
    canonical: '/servicios/implementacion-kommo',
  },
};

export default function KommoPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen antialiased">
      <HeaderManager />
      
      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="px-6 max-w-[1120px] mx-auto mb-20">
          <FadeIn immediate>
            
            {/* LOGO OFICIAL DE PARTNER */}
            <div className="mb-8">
              <Image 
                src="/logos/kommo-logo.png" 
                alt="Partner Oficial de Kommo CRM" 
                width={180} 
                height={50} 
                className="object-contain"
                priority
              />
            </div>

            <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-slate-950 font-normal leading-[1.1] mb-6 max-w-3xl">
              Implementación de Kommo para <em className="text-[#ff6b00] not-italic">alta transaccionalidad B2C.</em>
            </h1>
            <p className="font-sans text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Centraliza la gestión comercial de WhatsApp, Instagram y Facebook. Diseñamos sistemas para mercados B2C, B2G y modelos híbridos, ordenando flujos masivos de leads para que ninguna oportunidad quede sin respuesta.
            </p>
            
            {/* BOTONES DE ACCIÓN (CTA) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#contacto" 
                className="bg-[#ff6b00] text-white px-8 py-3.5 rounded-xl font-sans text-[15px] font-bold shadow-md hover:bg-[#e66000] transition-all w-full sm:w-auto text-center"
              >
                Agendar diagnóstico técnico
              </a>
              
              <a 
                href="AQUI_TU_LINK_DE_REFERIDO" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-sans text-[15px] font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-[#ff6b00] transition-all w-full sm:w-auto text-center"
              >
                Crear cuenta con días gratis
              </a>
            </div>
          </FadeIn>
        </section>

        {/* DETALLES DEL SERVICIO */}
        <section className="px-6 max-w-[1120px] mx-auto">
          <FadeIn delay={0.2} className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h2 className="font-serif text-3xl text-slate-900 mb-8">Estructura del Sistema</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="text-[#ff6b00] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">WhatsApp Business API Oficial</h3>
                    <p className="font-sans text-[15px] text-slate-600">Conectamos tu número a la API oficial para tener múltiples usuarios operando en simultáneo sin riesgo de bloqueos.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="text-[#ff6b00] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Bots de Calificación (Salesbots)</h3>
                    <p className="font-sans text-[15px] text-slate-600">Filtramos y derivamos leads automáticamente antes de que lleguen a un vendedor humano.</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="text-[#ff6b00] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Integración Híbrida</h3>
                    <p className="font-sans text-[15px] text-slate-600">Capacidad de enviar leads calificados de Kommo hacia Pipedrive si tu modelo de negocio lo requiere.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="text-[#ff6b00] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Implementación Ágil</h3>
                    <p className="font-sans text-[15px] text-slate-600">Plantillas con variables, respuestas rápidas y puesta en marcha del proyecto entre 2 a 4 semanas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>
        {/* SECCIÓN DE CONTACTO EN LA MISMA PÁGINA */}
        <section id="contacto" className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-slate-900 mb-4">Hablemos de tu operación</h2>
            <p className="font-sans text-slate-600 mb-10">Completa el formulario y agendaremos una llamada de diagnóstico técnico de 30 minutos.</p>
            
           {/* AQUÍ ESTÁ EL IFRAME DEL FORMULARIO */}
            <div className="w-full min-h-[650px] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <iframe 
                src="https://webforms.pipedrive.com/f/ccHQZz5aqpfgKhc23WQtXw6c16WvVb7Kzj2DjzD9Rmse275FVbeenOwRDJps2eexy3" 
                width="100%" 
                height="100%" 
                style={{ minHeight: '650px' }}
                frameBorder="0"
                title="Formulario de Contacto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
