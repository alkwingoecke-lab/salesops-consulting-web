"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ConversionModal } from "@/components/ui/ConversionModal";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Calculator, 
  CheckCircle2, 
  BarChart3, 
  Briefcase, 
  Building2, 
  Landmark,
  Cpu
} from "lucide-react";
import Link from "next/link";

const FORM_URL_PIPEDRIVE = "https://webforms.pipedrive.com/f/cs71NsC9gaigrHlOs1TdIo7mCaKBAqhSvSeTdi2sAQgmmx4jIJYlZGh2Yc9VazEBqz";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen antialiased selection:bg-[#2D3F8F] selection:text-white font-sans">
      <Nav onOpenModal={() => setIsModalOpen(true)} />

      <main className="pt-36 pb-24">
        {/* =========================================================
            HERO CONSULTIVO: DIRECTO Y LIMPIO
        ========================================================== */}
        <section className="px-6 max-w-5xl mx-auto mb-28 pt-4">
          <FadeIn immediate>
            <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              Arquitectura de procesos comerciales para empresas que buscan <span className="text-[#2D3F8F]">crecimiento predecible.</span>
            </h1>
            
            <p className="font-sans text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
              Alineamos tu estrategia directiva, tus procesos y tus herramientas de venta. Ayudamos a gerencias generales y direcciones comerciales a eliminar el trabajo administrativo manual, ordenar sus embudos y tomar decisiones basadas en datos reales en ventas <strong>entre empresas (B2B), operaciones masivas (B2C) y ventas al Estado o compras públicas (B2G)</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2D3F8F] text-white px-8 py-4 rounded-xl font-sans text-base font-bold shadow-sm hover:bg-[#202e70] transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                Agendar Diagnóstico Comercial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/calculadora-roi-pipedrive"
                className="bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-sans text-base font-bold hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
              >
                <Calculator size={18} className="text-[#2D3F8F]" />
                Simular impacto financiero
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* =========================================================
            EL DIAGNÓSTICO: FRASES REALES Y ESTRUCTURA
        ========================================================== */}
        <section id="problema" className="px-6 max-w-5xl mx-auto mb-32 border-t border-slate-200 pt-20">
          <div className="max-w-3xl mb-14">
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Tu empresa vende. <span className="text-[#2D3F8F] block sm:inline">Pero no sabes cuánto va a vender mañana.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Estas son frases reales de dueños de empresas y directores operando en B2B, B2C y B2G. Si alguna te suena familiar, es probable que tu proceso comercial necesite más que esfuerzo individual: necesita estructura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="border-l-2 border-[#2D3F8F] pl-6">
              <p className="font-sans font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
                “No sé cuánto vamos a cerrar este mes hasta el día 25.”
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Proyecciones basadas en intuición y esperanza, no en información real ni seguimiento medible.
              </p>
            </div>

            <div className="border-l-2 border-[#2D3F8F] pl-6">
              <p className="font-sans font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
                “Mis vendedores pierden la mitad del día en tareas que no son vender.”
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sin un sistema claro y automatizado, el desorden administrativo y la digitación consumen al equipo.
              </p>
            </div>

            <div className="border-l-2 border-[#2D3F8F] pl-6">
              <p className="font-sans font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
                “Si se va mi mejor vendedor, se lleva la cartera con él.”
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cuando el conocimiento y el historial viven en la memoria de las personas y no en el sistema, todo el negocio es frágil.
              </p>
            </div>

            <div className="border-l-2 border-[#2D3F8F] pl-6">
              <p className="font-sans font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
                “Yo sigo siendo el que cierra los negocios importantes.”
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                El dueño o gerente comercial atrapado en la operación diaria, incapaz de delegar por falta de un proceso estandarizado.
              </p>
            </div>
          </div>

          <div className="bg-slate-100/70 rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto border border-slate-200/60">
            <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F172A] tracking-tight mb-3">
              El esfuerzo individual no compensa lo que la estructura no sostiene.
            </p>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              El desorden y la falta de cierres son solo síntomas. Las causas reales —<strong>procesos rotos y cero control operativo</strong>— permanecerán invisibles hasta que audites el sistema.
            </p>
          </div>
        </section>

        {/* =========================================================
            ÁREAS DE ESPECIALIDAD OPERATIVA
        ========================================================== */}
        <section id="servicios" className="px-6 max-w-5xl mx-auto mb-32">
          <div className="max-w-3xl mb-14">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight mb-4">
              Nuestras áreas de especialidad operativa
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Intervenimos el motor comercial de tu empresa desde el diseño del proceso hasta la herramienta tecnológica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. AUDITORÍA Y DISEÑO DE PROCESOS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#2D3F8F] mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-2xl text-[#0F172A] mb-3">Consultoría y Auditoría de Procesos</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Analizamos tu operación comercial de punta a punta. Diseñamos la arquitectura del embudo de ventas, definimos criterios objetivos para calificar oportunidades y estructuramos modelos de comisiones alineados a la rentabilidad real de la empresa.
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-6 mb-8">
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Diagnóstico y rediseño del flujo completo de ventas
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Acuerdos de tiempos de respuesta entre Marketing y Ventas
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Estructuración de indicadores claves y comisiones
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full border border-slate-300 text-slate-800 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer"
              >
                Solicitar auditoría estratégica
              </button>
            </div>

            {/* 2. IMPLEMENTACIÓN TECNOLÓGICA & CRM */}
            <div className="bg-white border-2 border-[#2D3F8F] rounded-2xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#2D3F8F] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-bl-lg">
                Pipedrive
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#2D3F8F] mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="font-bold text-2xl text-[#0F172A] mb-3">Implementación Tecnológica y CRM</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Seleccionamos y configuramos el software que tu empresa necesita. Somos Partners Oficiales de Pipedrive en Chile y conectamos tus plataformas en automático (correo corporativo, WhatsApp, formularios web y sistemas de facturación).
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-6 mb-8">
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Configuración llave en mano de Pipedrive CRM
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Automatización de seguimientos y asignación de prospectos
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Limpieza y rescate de bases de datos históricas
                  </li>
                </ul>
              </div>
              <Link
                href="/servicios/implementacion-pipedrive"
                className="w-full bg-[#2D3F8F] text-white py-3 rounded-xl font-bold text-sm text-center hover:bg-[#202e70] transition-colors flex items-center justify-center gap-2"
              >
                Ver servicio especializado <ArrowRight size={16} />
              </Link>
            </div>

            {/* 3. REPORTABILIDAD Y PROYECCIONES */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#2D3F8F] mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-bold text-2xl text-[#0F172A] mb-3">Reportabilidad y Proyecciones</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Construimos tableros de control para la dirección comercial y gerencia general. Podrás medir el rendimiento en tiempo real, conocer la velocidad de cierre de tu equipo y proyectar la facturación de los próximos meses con base estadística.
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-6 mb-8">
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Tableros gerenciales de conversión en tiempo real
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Proyección de cierres mensuales y facturación esperada
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Detección de motivos de pérdida por vendedor o producto
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full border border-slate-300 text-slate-800 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer"
              >
                Evaluar reportabilidad
              </button>
            </div>

            {/* 4. FORMACIÓN Y MANUALES DE VENTA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#2D3F8F] mb-6">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-2xl text-[#0F172A] mb-3">Estandarización y Formación Comercial</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Documentamos la forma correcta de vender en tu empresa para no depender de individualidades. Creamos manuales operativos prácticos y capacitamos tanto a jefaturas en supervisión como a vendedores en técnica y uso del sistema.
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-6 mb-8">
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Creación de manuales y guías prácticas de venta
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Aceleración de la adaptación de nuevos vendedores
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2D3F8F] shrink-0" /> Formación práctica para directores y supervisores
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full border border-slate-300 text-slate-800 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer"
              >
                Cotizar formación de equipo
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTORES DE ESPECIALIDAD
        ========================================================== */}
        <section id="quien" className="bg-[#0F172A] text-white py-24 px-6 mb-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mb-16">
              Diseñados para ciclos de venta con desafíos reales
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <Briefcase className="text-blue-400 mb-5" size={26} />
                <h3 className="font-bold text-xl text-white mb-3">Empresas B2B</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tecnología, consultoría, servicios industriales y suministros. Optimizamos negociaciones de largo plazo, toma de decisiones con múltiples gerencias y cotizaciones técnicas de alto valor.
                </p>
              </div>

              <div>
                <Building2 className="text-blue-400 mb-5" size={26} />
                <h3 className="font-bold text-xl text-white mb-3">Operaciones B2C</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Inmobiliarias, automotriz, servicios educativos y financieros. Automatizamos la respuesta rápida a prospectos entrantes, la distribución equitativa al equipo y el seguimiento constante sin perder cercanía.
                </p>
              </div>

              <div>
                <Landmark className="text-blue-400 mb-5" size={26} />
                <h3 className="font-bold text-xl text-white mb-3">Proveedores B2G</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Empresas que venden al sector público, municipalidades y organismos estatales. Ordenamos el seguimiento de licitaciones, Convenio Marco, compras directas, boletas de garantía y firma de contratos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MÉTODO DE INTERVENCIÓN EN 4 ETAPAS
        ========================================================== */}
        <section id="metodo" className="px-6 max-w-5xl mx-auto mb-32">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight max-w-2xl mb-14">
            Cómo ordenamos tu operación
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#2D3F8F] pt-6">
              <span className="font-bold text-2xl text-[#2D3F8F] block mb-2">01</span>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Diagnóstico operativo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Revisamos tus datos actuales, conversamos con tu equipo y mapeamos el paso a paso real de tus ventas.
              </p>
            </div>

            <div className="border-t-2 border-[#2D3F8F] pt-6">
              <span className="font-bold text-2xl text-[#2D3F8F] block mb-2">02</span>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Diseño del proceso</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Definimos las etapas objetivas del embudo, los datos obligatorios a registrar y las reglas claras de gestión.
              </p>
            </div>

            <div className="border-t-2 border-[#2D3F8F] pt-6">
              <span className="font-bold text-2xl text-[#2D3F8F] block mb-2">03</span>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Configuración técnica</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ajustamos tu CRM, conectamos tus correos o canales de atención y dejamos funcionando los seguimientos automáticos.
              </p>
            </div>

            <div className="border-t-2 border-[#2D3F8F] pt-6">
              <span className="font-bold text-2xl text-[#2D3F8F] block mb-2">04</span>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Puesta en marcha</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Capacitamos a tu equipo con ejemplos de su propio día a día y encendemos los tableros de control para gerencia.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            BANNER PUENTE HACIA LA CALCULADORA ROI
        ========================================================== */}
        <section className="px-6 max-w-5xl mx-auto mb-32">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xs">
            <div className="max-w-2xl">
              <h3 className="font-sans font-bold text-3xl text-[#0F172A] tracking-tight mb-3">
                ¿Cuánto capital deja en la mesa tu empresa cada mes?
              </h3>
              <p className="text-base text-slate-600">
                Simula el impacto de ordenar tu proceso comercial. Evalúa tu retorno de inversión estimado y las oportunidades que puedes recuperar.
              </p>
            </div>
            <Link
              href="/calculadora-roi-pipedrive"
              className="bg-[#2D3F8F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#202e70] transition-colors shrink-0 shadow-sm flex items-center gap-2 text-base"
            >
              <Calculator size={20} /> Ir a la calculadora
            </Link>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN FINAL DE CONTACTO
        ========================================================== */}
        <section className="px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-[#0F172A] tracking-tight mb-4">
            Hablemos de tus metas comerciales
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 mb-8">
            Agenda una conversación técnica de 30 minutos para evaluar cómo podemos acelerar y ordenar las ventas en tu empresa.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2D3F8F] text-white px-10 py-4 rounded-xl font-bold text-base shadow-sm hover:bg-[#202e70] transition-colors cursor-pointer"
          >
            Agendar Diagnóstico Técnico
          </button>
        </section>
      </main>

      <Footer />

      <ConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formUrl={FORM_URL_PIPEDRIVE}
      />
    </div>
  );
}