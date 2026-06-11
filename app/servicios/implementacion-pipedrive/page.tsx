import { FadeIn } from "@/components/ui/FadeIn";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";
import { Check } from 'lucide-react';
import Image from "next/image";

// METADATA OPTIMIZADA PARA SEO
export const metadata = {
  title: "Implementador Pipedrive en Chile | Consultoría CRM B2B | SalesOps",
  description: "Servicio experto de implementación de Pipedrive para ventas consultivas B2B. Configuramos tu CRM como un sistema de decisión, no como una agenda.",
  alternates: {
    canonical: '/servicios/implementacion-pipedrive',
  },
};

export default function PipedrivePage() {
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
                src="/logos/pipedrive-partner.png" 
                alt="Partner Oficial de Pipedrive en Chile" 
                width={180} 
                height={50} 
                className="object-contain"
                priority
              />
            </div>

            <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-slate-950 font-normal leading-[1.1] mb-6 max-w-3xl">
              Implementación de Pipedrive para <em className="text-[#00a651] not-italic">venta consultiva B2B.</em>
            </h1>
            <p className="font-sans text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              No necesitas un repositorio de contactos; necesitas un motor comercial predictivo. Diseñamos e implementamos tu arquitectura técnica sobre Pipedrive para que tengas control absoluto de tu embudo de ventas B2B en Chile y LATAM.
            </p>
            
            {/* BOTONES DE ACCIÓN (CTA) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/#autoevaluacion" 
                className="bg-[#00a651] text-white px-8 py-3.5 rounded-xl font-sans text-[15px] font-bold shadow-md hover:bg-[#008c44] transition-all w-full sm:w-auto text-center"
              >
                Agendar diagnóstico técnico
              </a>
              
              <a 
                href="https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-sans text-[15px] font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-[#00a651] transition-all w-full sm:w-auto text-center"
              >
                Crear cuenta con días gratis
              </a>
            </div>
          </FadeIn>
        </section>

        {/* DETALLES DEL SERVICIO */}
        <section className="px-6 max-w-[1120px] mx-auto">
          <FadeIn delay={0.2} className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h2 className="font-serif text-3xl text-slate-900 mb-8">¿Qué incluye la implementación?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="text-[#00a651] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Mapeo del Proceso Real</h3>
                    <p className="font-sans text-[15px] text-slate-600">Configuración de pipelines basados en hitos de decisión del cliente, no en actividades del vendedor.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="text-[#00a651] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Automatización de Tareas</h3>
                    <p className="font-sans text-[15px] text-slate-600">Eliminación de trabajo manual. Seguimientos y notificaciones automáticas para que el equipo solo se dedique a vender.</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="text-[#00a651] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Dashboards y Proyecciones</h3>
                    <p className="font-sans text-[15px] text-slate-600">Integración con Looker Studio y tableros nativos para proyectar cierres de mes con precisión.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="text-[#00a651] shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 mb-1">Entrenamiento de Equipo</h3>
                    <p className="font-sans text-[15px] text-slate-600">Capacitación intensiva sobre el nuevo playbook documentado. Tiempo estimado del proyecto: 3 a 5 semanas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
