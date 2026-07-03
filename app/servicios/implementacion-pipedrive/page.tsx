import { FadeIn } from "@/components/ui/FadeIn";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Settings, 
  TrendingUp, 
  Users, 
  Repeat, 
  Database, 
  Headphones, 
  DollarSign, 
  Zap, 
  MessageSquare, 
  Target, 
  Clock, 
  Award,
  HelpCircle,
  Calculator,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Implementación Pipedrive en Chile | Consultoría CRM | SalesOps",
  description: "Metodología SalesOps de 5 etapas para escalar ventas B2B, B2C y B2G. Consultoría, automatización de embudos y adopción comercial en Pipedrive.",
  alternates: {
    canonical: "/servicios/implementacion-pipedrive",
  },
};

const FORM_URL_PIPEDRIVE = "https://webforms.pipedrive.com/f/cs71NsC9gaigrHlOs1TdIo7mCaKBAqhSvSeTdi2sAQgmmx4jIJYlZGh2Yc9VazEBqz";
const PARTNER_AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedrivePage() {
  return (
    <div className="bg-[#F3F7F4] text-[#0C1D17] min-h-screen antialiased selection:bg-[#00A651] selection:text-white">
      <HeaderManager />

      <main className="pt-28 pb-20">
        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section className="px-6 max-w-6xl mx-auto mb-16">
          <FadeIn immediate className="bg-white border border-[#D8E2DC] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#D8E2DC]/60">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/logo-salesops-dark.png"
                  alt="SalesOps Consulting"
                  width={200}
                  height={54}
                  className="h-10 sm:h-12 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-2.5 bg-[#F3F7F4] border border-[#0E6A4F]/30 px-4 py-2 rounded-xl">
                <ShieldCheck size={18} className="text-[#0E6A4F] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#0C1D17]">Partner Oficial</span>
                <Image
                  src="/logos/pipedrive-logo.png"
                  alt="Pipedrive CRM"
                  width={90}
                  height={22}
                  className="h-4 w-auto object-contain"
                />
              </div>
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#0E6A4F] font-bold block mb-3">
              Ingeniería de Procesos & CRM
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0C1D17] font-normal leading-[1.1] mb-6 max-w-4xl">
              Estrategia, tecnología y procesos para que tu equipo <em className="text-[#00A651] not-italic font-semibold">venda más y mejor.</em>
            </h1>
            
            <p className="font-sans text-lg sm:text-xl text-[#5B6B63] leading-relaxed max-w-3xl mb-10">
              Transformamos Pipedrive en el motor operativo de tu negocio. Estructuramos embudos de alta conversión para <strong>ventas consultivas B2B, operaciones masivas B2C y licitaciones públicas (B2G)</strong>, eliminando el trabajo manual y garantizando la adopción total de tu equipo.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contacto"
                className="bg-[#00A651] text-white px-8 py-4 rounded-xl font-sans text-base font-semibold shadow-md hover:bg-[#008c44] transition-all text-center flex items-center justify-center gap-2 group"
              >
                Agendar diagnóstico comercial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PARTNER_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0C1D17] border border-[#0C1D17] px-8 py-4 rounded-xl font-sans text-base font-semibold hover:bg-[#0C1D17] hover:text-white transition-all text-center flex flex-col justify-center leading-tight"
              >
                <span>Crear cuenta en Pipedrive</span>
                <span className="text-[11px] font-normal opacity-75">30 días de prueba gratis · Beneficio Partner</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* =========================================================
            BLOQUE POR QUÉ PIPEDRIVE + SALESOPS
        ========================================================== */}
        <section className="px-6 max-w-6xl mx-auto mb-20">
          <div className="bg-[#0A2E22] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#0E6A4F]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8FE3C0] font-bold block mb-2">
                ¿Por qué implementar con SalesOps?
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
                Un CRM configurado para acelerar resultados
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <DollarSign className="text-[#0A2E22]" size={26} />, title: "Aumenta tus cierres", desc: "Mapeamos etapas que impulsan la decisión de compra en menos tiempo y sin fugas de oportunidades." },
                { icon: <Zap className="text-[#0A2E22]" size={26} />, title: "Maximiza la productividad", desc: "Automatiza tareas repetitivas, creación de actividades y asignación de prospectos en segundos." },
                { icon: <MessageSquare className="text-[#0A2E22]" size={26} />, title: "Centraliza tus canales", desc: "Historial unificado de correos, llamadas, reuniones y WhatsApp en la ficha de cada cliente." },
                { icon: <Target className="text-[#0A2E22]" size={26} />, title: "Proyecciones confiables", desc: "Dashboards en tiempo real y forecasting exacto para la toma de decisiones gerenciales." },
                { icon: <Clock className="text-[#0A2E22]" size={26} />, title: "Elimina burocracias", desc: "Destraba etapas sin implementación, contratos técnicos y aprobaciones en procesos B2B o B2G." },
                { icon: <Award className="text-[#0A2E22]" size={26} />, title: "100% Adopción del equipo", desc: "Diseño intuitivo y capacitación táctica para que tus vendedores usen el CRM porque les sirve." },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0E6A4F]/40 border border-[#8FE3C0]/30 rounded-2xl p-6 hover:bg-[#0E6A4F]/60 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#8FE3C0] flex items-center justify-center mb-4 shadow-sm">{item.icon}</div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#DCE8E1] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PARRILLA MODULAR DE SERVICIOS
        ========================================================== */}
        <section className="px-6 max-w-6xl mx-auto mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B6B63] font-bold block mb-2">
              Soluciones especializadas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0C1D17]">
              El servicio exacto para tu etapa comercial
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: "MÁS SOLICITADO", badgeColor: "bg-[#EAF5EF] text-[#00A651] border-[#00A651]/30", icon: <Settings className="text-[#00A651]" size={22} />, title: "Implementación Integral", desc: "Tu equipo obtiene un sistema estructurado donde cada prospecto tiene responsable, seguimiento automático y control de etapas.", meta: "14–21 días hábiles · Para equipos partiendo de cero o planillas Excel" },
              { badge: "REESTRUCTURACIÓN", badgeColor: "bg-slate-100 text-slate-700 border-slate-300", icon: <TrendingUp className="text-[#00A651]" size={22} />, title: "Optimización de Embudo", desc: "Auditamos dónde se escapan los negocios en tu configuración actual y reestructuramos pipelines, campos y alertas para duplicar la conversión.", meta: "7–10 días hábiles · Para empresas que ya utilizan Pipedrive" },
              { badge: "ADOPCIÓN TOTAL", badgeColor: "bg-slate-100 text-slate-700 border-slate-300", icon: <Users className="text-[#00A651]" size={22} />, title: "Capacitación Táctica", desc: "Entrenamos a líderes y ejecutivos con metodología práctica para que dominen la herramienta como un aliado que aumenta sus comisiones directas.", meta: "Sesiones prácticas · Para equipos comerciales de 3 a 50+ usuarios" },
              { badge: "EFICIENCIA", badgeColor: "bg-slate-100 text-slate-700 border-slate-300", icon: <Repeat className="text-[#00A651]" size={22} />, title: "Automatización & Flujos", desc: "Conectamos Pipedrive con tu ecosistema (Webforms, correo, WhatsApp, calendarios) para asignar leads en segundos sin intervención humana.", meta: "5–14 días hábiles · Para escalar operaciones sin sumar personal" },
              { badge: "SIN PÉRDIDA DE DATOS", badgeColor: "bg-slate-100 text-slate-700 border-slate-300", icon: <Database className="text-[#00A651]" size={22} />, title: "Migración de CRM", desc: "Trasladamos todo tu historial, notas, tratos activos y contactos desde Salesforce, HubSpot o planillas Excel manteniendo la trazabilidad intacta.", meta: "7–21 días hábiles · Para empresas cambiando de plataforma" },
              { badge: "ACOMPAÑAMIENTO", badgeColor: "bg-slate-100 text-slate-700 border-slate-300", icon: <Headphones className="text-[#00A651]" size={22} />, title: "Soporte RevOps Continuo", desc: "Un consultor experto dedicado a optimizar tu CRM mes a mes, resolviendo dudas operativas el mismo día y adaptando pipelines a tu crecimiento.", meta: "Retainer mensual · Para operaciones que requieren mejora continua" },
            ].map((srv, idx) => (
              <div key={idx} className="bg-white border border-[#D8E2DC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#00A651] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-md border ${srv.badgeColor}`}>{srv.badge}</span>
                    <div className="p-2 rounded-lg bg-[#F3F7F4]">{srv.icon}</div>
                  </div>
                  <h3 className="font-bold text-xl text-[#0C1D17] mb-2.5">{srv.title}</h3>
                  <p className="text-sm text-[#5B6B63] leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#D8E2DC]/60 font-mono text-xs font-semibold text-[#00A651]">{srv.meta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            METODOLOGÍA SALESOPS (ESTILO VISUAL PIPECON)
        ========================================================== */}
        <section className="px-6 max-w-6xl mx-auto mb-20">
          <div className="bg-[#EEF8F3] border border-[#D5EEDD] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00A651] font-bold block mb-2">
                Metodología SalesOps
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0F172A] tracking-tight mb-4">
                ¿Cómo funciona?
              </h2>
              <p className="text-base sm:text-lg text-[#64748B] font-sans">
                Nuestro proceso estructurado en 5 etapas transforma tu operación de forma limpia, ágil y sin interrumpir tus ventas del día a día.
              </p>
            </div>

            {/* TIMELINE HORIZONTAL VISUAL */}
            <div className="relative mb-16 pt-2">
              {/* Línea conectora de fondo (sólo visible en desktop) */}
              <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#8CE0B1] z-0"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { num: "01", title: "Diagnóstico y Procesos", sub: "Mapeo completo" },
                  { num: "02", title: "Implementación del CRM", sub: "Pipedrive configurado" },
                  { num: "03", title: "Entrenamientos", sub: "Equipo listo para operar" },
                  { num: "04", title: "Reportes y KPIs", sub: "Dashboards y métricas" },
                  { num: "05", title: "Soporte y Evolución", sub: "Acompañamiento continuo" },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#00A651] text-white font-sans font-bold text-lg flex items-center justify-center shadow-md mb-4 border-4 border-[#EEF8F3]">
                      {step.num}
                    </div>
                    <h3 className="font-sans font-bold text-[#0F172A] text-base leading-snug">{step.title}</h3>
                    <p className="font-sans text-sm text-[#64748B] mt-1">{step.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DESGLOSE PROFUNDO DE ENTREGABLES POR ETAPA */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#D5EEDD]">
              {[
                {
                  fase: "Etapa 01",
                  title: "Diagnóstico y Procesos",
                  items: [
                    "Inmersión en tu modelo de negocio (B2B, B2C o B2G).",
                    "Detección de embudos paralelos y cuellos de botella.",
                    "Diseño del flujograma comercial óptimo punta a punta.",
                    "Definición de motivos de pérdida y etapas de calificación."
                  ]
                },
                {
                  fase: "Etapa 02",
                  title: "Implementación del CRM",
                  items: [
                    "Configuración técnica de pipelines, etapas y campos.",
                    "Automatización sin código para asignación y alertas.",
                    "Integración total con correo, calendario y WhatsApp.",
                    "Importación y limpieza de bases de datos o planillas Excel."
                  ]
                },
                {
                  fase: "Etapa 03",
                  title: "Entrenamientos",
                  items: [
                    "Capacitación táctica separada para Jefaturas y Vendedores.",
                    "Sesiones en vivo basadas en tus propios casos de venta.",
                    "Grabación del entrenamiento para inducción de nuevos ingresos.",
                    "Entrega de manual de buenas prácticas y playbook de uso."
                  ]
                },
                {
                  fase: "Etapa 04",
                  title: "Reportes y KPIs",
                  items: [
                    "Montaje de tableros de control en tiempo real en Pipedrive.",
                    "Reporte de conversión por etapa y por vendedor.",
                    "Monitoreo de velocidad del ciclo de cierre comercial.",
                    "Proyección de facturación mensual y anual (Forecasting)."
                  ]
                },
                {
                  fase: "Etapa 05",
                  title: "Soporte y Evolución",
                  items: [
                    "Soporte rápido para resolver dudas operativas del día a día.",
                    "Monitoreo constante de la adopción del sistema por el equipo.",
                    "Reuniones de revisión estratégica y ajustes finos.",
                    "Creación de nuevos embudos a medida que tu empresa crece."
                  ]
                },
              ].map((card, idx) => (
                <div key={idx} className={`bg-white rounded-2xl p-6 border border-[#D5EEDD] shadow-2xs ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                  <span className="font-mono text-xs font-bold text-[#00A651] bg-[#EEF8F3] px-2.5 py-1 rounded-md inline-block mb-3">
                    {card.fase}
                  </span>
                  <h4 className="font-sans font-bold text-lg text-[#0F172A] mb-4">{card.title}</h4>
                  <ul className="space-y-2.5">
                    {card.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#64748B] font-sans">
                        <CheckCircle2 size={16} className="text-[#00A651] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================
            PUENTE HACIA LA CALCULADORA DE ROI
        ========================================================== */}
        <section className="px-6 max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-[#00A651] to-[#0A2E22] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8FE3C0] font-bold block mb-2">
                Simulador financiero
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-3">
                ¿Cuánto capital pierdes cada mes por no tener sistema?
              </h3>
              <p className="text-base text-[#DCE8E1]">
                Simula el retorno de inversión proyectado, la recuperación (Payback) y el impacto financiero exacto de estructurar tu embudo en Pipedrive.
              </p>
            </div>
            <Link
              href="/calculadora-roi-pipedrive"
              className="bg-white text-[#00A651] font-bold px-8 py-4 rounded-xl hover:bg-[#F3F7F4] transition-colors shrink-0 shadow-sm flex items-center gap-2.5 text-base"
            >
              <Calculator size={20} />
              Simular mi ROI ahora
            </Link>
          </div>
        </section>

        {/* =========================================================
            FAQ & COMPARATIVAS
        ========================================================== */}
        <section className="px-6 max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <HelpCircle className="text-[#00A651]" size={26} />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0C1D17]">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-3 mb-12">
            {[
              { q: "¿Cuánto demora un proyecto de implementación estándar?", a: "Una implementación típica para equipos de 5 a 20 usuarios toma entre 14 y 21 días hábiles bajo nuestra Metodología SalesOps. Operamos con plazos cerrados y entregables claros en cada etapa." },
              { q: "¿Cuál es el modelo de inversión del servicio?", a: "Trabajamos con un valor base referencial por proyecto de $600.000 CLP. La propuesta definitiva se cotiza con precio fijo tras realizar el diagnóstico técnico, dependiendo de la complejidad técnica de tus embudos e integraciones, no de la cantidad de vendedores." },
              { q: "¿Qué pasa si ya usamos Pipedrive pero no nos da resultados?", a: "Es un escenario frecuente. Ejecutamos un servicio de Optimización y Reestructuración en 7 a 10 días, donde limpiamos la arquitectura de pipelines, reparamos automatizaciones mal configuradas y re-entrenamos al equipo." },
              { q: "¿Es posible integrar Pipedrive con WhatsApp o nuestro ERP?", a: "Absolutamente. Pipedrive cuenta con un ecosistema robusto que conectamos con canales de mensajería (WhatsApp), formularios web y herramientas de automatización para vincularlo con tus sistemas de facturación." },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#D8E2DC] rounded-2xl p-6 group shadow-xs">
                <summary className="font-bold text-base sm:text-lg text-[#0C1D17] cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-[#00A651] font-mono text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm sm:text-base text-[#5B6B63] leading-relaxed mt-4 pt-4 border-t border-[#D8E2DC]/50">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D8E2DC]">
            <p className="font-mono text-xs uppercase tracking-widest text-[#5B6B63] font-bold mb-4">Sigue comparando soluciones</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/comparativas/pipedrive-vs-hubspot" className="px-5 py-2.5 bg-white border border-[#D8E2DC] rounded-full text-sm font-semibold text-[#0C1D17] hover:border-[#00A651] hover:text-[#00A651] transition-colors shadow-2xs">Pipedrive vs HubSpot</Link>
              <Link href="/comparativas/pipedrive-vs-excel" className="px-5 py-2.5 bg-white border border-[#D8E2DC] rounded-full text-sm font-semibold text-[#0C1D17] hover:border-[#00A651] hover:text-[#00A651] transition-colors shadow-2xs">Pipedrive vs Planillas Excel</Link>
              <Link href="/calculadora-roi-pipedrive" className="px-5 py-2.5 bg-white border border-[#D8E2DC] rounded-full text-sm font-semibold text-[#0C1D17] hover:border-[#00A651] hover:text-[#00A651] transition-colors shadow-2xs">Calculadora de Retorno (ROI)</Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACTO E IFRAME
        ========================================================== */}
        <section id="contacto" className="px-6 max-w-4xl mx-auto">
          <div className="bg-white border border-[#D8E2DC] rounded-3xl p-6 sm:p-10 shadow-sm text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00A651] font-bold block mb-2">Paso inicial</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0C1D17] mb-3">Agendar diagnóstico comercial</h2>
            <p className="font-sans text-sm sm:text-base text-[#5B6B63] mb-8 max-w-xl mx-auto">
              Selecciona un horario en nuestro calendario técnico para evaluar tus procesos y diagramar tu hoja de ruta en Pipedrive.
            </p>

            <div className="w-full min-h-[680px] bg-white border border-[#D8E2DC] rounded-2xl overflow-hidden">
              <iframe src={FORM_URL_PIPEDRIVE} width="100%" height="100%" style={{ minHeight: "680px" }} frameBorder="0" title="Formulario de Diagnóstico Pipedrive" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}