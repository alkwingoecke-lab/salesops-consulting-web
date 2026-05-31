import { FadeIn } from "@/components/ui/FadeIn";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Autoevaluacion } from "@/components/sections/Autoevaluacion";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { Briefcase, Zap, Landmark } from "lucide-react";
import Image from "next/image";
import { Check, X } from 'lucide-react';

export const metadata = {
  title: "SalesOps Consulting | Estructura e Ingeniería Comercial",
  description: "Especialistas en transformar desorden en sistemas comerciales predecibles y escalables.",
};

export default function Home() {
  const pains = [
    { q: "No sé cuánto vamos a cerrar este mes hasta el día 25.", s: "Proyecciones basadas en intuición, no en información real." },
    { q: "Mis vendedores gastan muchas horas en tareas que no son vender.", s: "Sin un sistema claro, la administración consume al equipo." },
    { q: "Si se va mi mejor vendedor, se lleva la cartera con él.", s: "Cuando el conocimiento vive en las personas y no en el sistema, todo es frágil." },
    { q: "Yo sigo siendo el que cierra los negocios importantes.", s: "El dueño atrapado en la operación diaria de ventas. La operación se come la estratégia." },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen antialiased selection:bg-slate-100 selection:text-slate-900">
      <HeaderManager />
      <a id="top" className="absolute top-0 invisible" />
      
      <main>
        <section className="relative flex items-center justify-center min-h-screen pt-28 px-6 pb-20 overflow-hidden bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(45,63,143,0.03)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl">
            <FadeIn immediate className="flex justify-center mb-8">
              <Logo variant="isotype" width={72} height={72} />
            </FadeIn>
            <FadeIn immediate>
              <h1 className="font-serif text-[clamp(38px,5.5vw,60px)] text-slate-950 font-normal leading-[1.1] mb-6">
                Del caos comercial<br />
                <em className="text-[#2d3f8f] not-italic font-normal">a un sistema predecible, rentable y escalable.</em>
              </h1>
            </FadeIn>
            <FadeIn immediate>
              <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-10">
                Consultoría de procesos e infraestructura técnica para organizaciones complejas que operan en mercados B2B, B2C y B2G. Diseñamos e implementamos motores comerciales predecibles basados en automatización y control de gestión de alto nivel.
              </p>
            </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#autoevaluacion" 
              className="bg-[#2d3f8f] text-white px-10 py-4 rounded-xl font-sans text-[15px] font-bold shadow-md hover:bg-[#1f2c6d] hover:shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Evalúa tu área comercial gratis
            </a>
            <a 
              href="#metodo" 
              className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-sans text-[15px] font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-[#2d3f8f] transition-all w-full sm:w-auto text-center"
            >
              Conocer el método
            </a>
          </FadeIn>
          </div>
        </section>

        <section className="px-6 pb-16 max-w-4xl mx-auto">
          <FadeIn className="border-y border-slate-100 py-10">
            <p className="font-sans text-[11px] font-bold text-slate-400 tracking-widest text-center uppercase mb-8">Partners de Infraestructura en Chile y LATAM</p>
            <div className="flex justify-center items-center gap-16 flex-wrap">
              <PartnerLogo src="/logos/pipedrive-partner.png" alt="Pipedrive" label="Pipedrive Partner" height={80} maxWidth={280} />
              <PartnerLogo src="/logos/kommo-partner-dark.svg" alt="Kommo" label="Kommo Partner" height={80} maxWidth={280} />
            </div>
          </FadeIn>
        </section>

     <section id="problema" className="py-24 bg-slate-950 text-white px-6">
          <div className="max-w-[1120px] mx-auto">
            {/* Encabezado */}
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-widest text-red-400 bg-red-950/30 border border-red-900/50 px-3 py-1 rounded uppercase">El Problema</span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mt-6 mb-5 text-white">
                Tu empresa vende.<br />
                <span className="text-slate-400 italic">Pero no sabes cuánto va a vender mañana.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans text-[15px] text-slate-400 max-w-2xl leading-relaxed mb-14">
                Estas son frases reales de dueños de empresas operando en B2B, B2C y B2G. Si alguna te suena familiar, es probable que tu proceso de ventas necesite más que esfuerzo individual, necesite estructura.
              </p>
            </FadeIn>

            {/* Frase Principal (Destacada) */}
            <FadeIn delay={0.15}>
              <div className="bg-slate-900/40 border border-slate-800 border-l-4 border-l-red-300 p-8 md:p-12 rounded-2xl mb-6 relative overflow-hidden">
                {/* Comilla de fondo */}
                <span className="absolute top-2 left-6 text-8xl text-slate-800/50 font-serif leading-none select-none">&ldquo;</span>
                <div className="relative z-10 pl-2 md:pl-8">
                  <p className="font-serif text-3xl md:text-4xl text-white italic mb-4 font-medium">&ldquo;No sé cuánto vamos a cerrar este mes hasta el día 25.&rdquo;</p>
                  <p className="font-sans text-sm text-slate-400">Proyecciones basadas en intuición, no en información real.</p>
                </div>
              </div>
            </FadeIn>

            {/* Grilla de 3 Frases */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center">
                  <p className="font-serif text-lg text-white italic mb-4 font-medium leading-relaxed">&ldquo;Mis vendedores pierden la mitad del día en tareas que no son vender.&rdquo;</p>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed mt-auto">Sin un sistema claro, la administración consume al equipo.</p>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center">
                  <p className="font-serif text-lg text-white italic mb-4 font-medium leading-relaxed">&ldquo;Si se va mi mejor vendedor, se lleva la cartera con él.&rdquo;</p>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed mt-auto">Cuando el conocimiento vive en las personas y no en el sistema, todo es frágil.</p>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center">
                  <p className="font-serif text-lg text-white italic mb-4 font-medium leading-relaxed">&ldquo;Yo sigo siendo el que cierra los negocios importantes.&rdquo;</p>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed mt-auto">El dueño atrapado en la operación diaria de ventas.</p>
                </div>
              </div>
            </FadeIn>

          {/* Conclusión / Transición */}
            <FadeIn delay={0.3} className="text-center border-t border-slate-800/80 pt-20 pb-8 max-w-4xl mx-auto">
              <h3 className="font-serif text-3xl md:text-5xl text-white font-normal leading-tight mb-8">
                El esfuerzo individual no compensa <br className="hidden md:block" />
                <span className="italic text-slate-500">lo que la estructura no sostiene.</span>
              </h3>
              
              <p className="font-sans text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                El desorden y la falta de cierres son solo síntomas. Las causas reales —<strong className="text-white font-medium">procesos rotos y cero control operativo</strong>— permanecerán invisibles hasta que audites el sistema.
              </p>
            </FadeIn>
          </div>
        </section>

        <section id="metodo" className="py-24 px-6 max-w-[1120px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-wider text-[#2d3f8f] bg-slate-100 px-3 py-1 rounded uppercase">Garantía de Entrega</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-950 font-normal mt-5">Método de Implementación por Fases Cerradas</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Diagnóstico Completo", s: "Evaluación preliminar de arquitectura", d: "Determinamos cuellos de botella mediante una llamada estratégica inicial y un diagnóstico técnico posterior. Obtienes un informe de vulnerabilidades operacionales y el alcance idóneo." },
              { n: "02", t: "Construcción del Sistema", s: "Modelamiento e infraestructura técnica", d: "Instalamos la arquitectura sobre Pipedrive o Kommo adaptada a tus mercados reales. Diseñamos playbooks de proceso, dashboards ejecutivos y entrenamiento intensivo al equipo." },
              { n: "03", t: "Acompañamiento Operacional", s: "Control y mejora continua", d: "Garantizamos que la disciplina comercial no se degrade. Sesiones mensuales de auditoría de datos, refinamiento de automatizaciones e informes estratégicos de control de gestión." }
            ].map((fase, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white border border-slate-200 hover:border-[#2d3f8f]/40 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col transition-colors">
                <span className="font-serif text-4xl text-[#2d3f8f] opacity-40 font-bold block mb-5">{fase.n}</span>
                <h3 className="font-sans text-xl font-bold text-slate-950 mb-2">{fase.t}</h3>
                <p className="font-sans text-sm font-semibold text-[#2d3f8f] mb-5">{fase.s}</p>
                <p className="font-sans text-[15px] text-slate-600 leading-relaxed">{fase.d}</p>
              </FadeIn>
            ))}
          </div>
        </section>

      {/* SERVICIOS */}
        <section id="servicios" className="py-24 px-6 max-w-[1120px] mx-auto">
          <FadeIn className="mb-14">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-950 font-normal leading-tight mb-4">
              Ocho servicios.<br />
              <em className="text-[#2d3f8f] not-italic">Cero ambigüedad sobre qué entregamos.</em>
            </h2>
            <p className="font-sans text-[15px] text-slate-600 max-w-3xl leading-relaxed">
              Cada servicio resuelve una conversación específica con el cliente. Sin scope flexible, sin &quot;depende de la situación&quot;, sin servicios que se inflan en el camino. Precios cerrados en UF disponibles en propuesta personalizada.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Grupo 1 */}
            <FadeIn>
              <div className="flex items-baseline gap-4 mb-6 pb-3 border-b border-slate-200 flex-wrap">
                <span className="font-sans text-sm font-bold text-amber-500 tracking-widest uppercase">Servicios puntuales</span>
                <span className="font-sans text-sm text-slate-500">Para resolver un dolor específico antes de comprometer un proyecto mayor</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Análisis de Margen Comercial</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Auditoría forense de cotizaciones y descuentos de los últimos 12 meses. Matriz de descuentos autorizados. Calculadora viva de margen.</p>
                  <span className="font-sans text-[11px] font-bold text-amber-500 tracking-wider uppercase">3 semanas</span>
                </div>
                <div className="bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Reactivación de CRM</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Tu CRM ya pagado (HubSpot, Zoho, Pipedrive) vuelto a la vida. Limpieza, configuración real y manual de higiene post-limpieza.</p>
                  <span className="font-sans text-[11px] font-bold text-amber-500 tracking-wider uppercase">2 semanas</span>
                </div>
                <div className="bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Setup WhatsApp Comercial</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">WhatsApp Business API conectado a Kommo. Protocolos de handoff. Cartera comercial centralizada y respaldada.</p>
                  <span className="font-sans text-[11px] font-bold text-amber-500 tracking-wider uppercase">10 días</span>
                </div>
              </div>
            </FadeIn>

            {/* Grupo 2 */}
            <FadeIn delay={0.1}>
              <div className="flex items-baseline gap-4 mb-6 pb-3 border-b border-slate-200 flex-wrap">
                <span className="font-sans text-sm font-bold text-[#2d3f8f] tracking-widest uppercase">Proyectos núcleo</span>
                <span className="font-sans text-sm text-slate-500">El sistema comercial completo construido de cero o reconstruido</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white border border-slate-200 border-l-4 border-l-[#2d3f8f] rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Auditoría Comercial</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Diagnóstico profundo con blueprint de implementación priorizado a 12 meses. Para empresas que quieren evaluar antes de comprometer, o que necesitan documento para directorio.</p>
                  <span className="font-sans text-[11px] font-bold text-[#2d3f8f] tracking-wider uppercase">Desde 2 semanas</span>
                </div>
                <div className="bg-white border border-slate-200 border-l-4 border-l-[#2d3f8f] rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Implementación Comercial</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Sistema completo sobre Pipedrive. Pipelines configurados, playbook documentado, dashboards Looker Studio, matriz de compensación, capacitación del equipo. Dos tiers según tamaño.</p>
                  <span className="font-sans text-[11px] font-bold text-[#2d3f8f] tracking-wider uppercase">4 a 8 semanas</span>
                </div>
                <div className="bg-white border border-slate-200 border-l-4 border-l-[#2d3f8f] rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-3">Plan Comercial Mensual</h3>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Mantención del sistema implementado. Reporte ejecutivo mensual, sesión de revisión con equipo, ajustes operacionales continuos. Add-ons modulares según necesidad.</p>
                  <span className="font-sans text-[11px] font-bold text-[#2d3f8f] tracking-wider uppercase">Mensual</span>
                </div>
              </div>
            </FadeIn>

            {/* Grupo 3 */}
            <FadeIn delay={0.2}>
              <div className="flex items-baseline gap-4 mb-6 pb-3 border-b border-slate-200 flex-wrap">
                <span className="font-sans text-sm font-bold text-slate-600 tracking-widest uppercase">Implementación y Mantención de CRM</span>
                <span className="font-sans text-sm text-slate-500">Cada plataforma como servicio independiente, según el modelo de venta de tu negocio</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white border border-slate-200 border-l-4 border-l-[#00a651] rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-6 mb-4 relative w-28">
                    <Image src="/logos/pipedrive-logo.png" alt="Pipedrive" fill className="object-contain object-left" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-sans text-lg font-bold text-slate-900">Implementación Pipedrive</h3>
                    <span className="font-sans text-[10px] font-bold tracking-wider text-[#00a651] bg-green-50 px-2 py-0.5 rounded uppercase">Servicio Independiente</span>
                  </div>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Para venta B2B consultiva. Configuramos Pipedrive como sistema de decisión, no como agenda de contactos: pipelines según tu proceso real, automatizaciones, dashboards de proyección y capacitación del equipo. Incluye mantención opcional para que el sistema no se degrade.</p>
                  <span className="font-sans text-[11px] font-bold text-[#00a651] tracking-wider uppercase">3 a 5 semanas</span>
                </div>
                <div className="bg-white border border-slate-200 border-l-4 border-l-[#ff6b00] rounded-lg p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-6 mb-4 relative w-28">
                    <Image src="/logos/kommo-logo.png" alt="Kommo" fill className="object-contain object-left" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-sans text-lg font-bold text-slate-900">Implementación Kommo</h3>
                    <span className="font-sans text-[10px] font-bold tracking-wider text-[#ff6b00] bg-orange-50 px-2 py-0.5 rounded uppercase">Servicio Independiente</span>
                  </div>
                  <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 flex-1">Para venta multicanal y WhatsApp. Plataforma para gestionar WhatsApp, Instagram, Facebook y Telegram desde un solo lugar: WhatsApp Business API oficial, bots de calificación, plantillas con variables e integración con Pipedrive si tu modelo es híbrido.</p>
                  <span className="font-sans text-[11px] font-bold text-[#ff6b00] tracking-wider uppercase">2 a 4 semanas</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


  {/* SECCIÓN: A QUIÉN AYUDAMOS (DARK MODE CONTRASTADO) */}
        <section id="quien" className="py-24 bg-slate-900 px-6 border-t border-slate-800">
          <div className="max-w-[1120px] mx-auto">
            {/* Encabezado */}
            <FadeIn>
              <span className="font-sans text-[11px] font-bold tracking-widest text-indigo-300 bg-indigo-900/30 border border-indigo-500/30 px-3 py-1 rounded uppercase">A quién ayudamos</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mt-6 mb-6 leading-tight">
                No nos define tu industria.<br />
                <span className="italic text-indigo-400">Te define el momento en que estás.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans text-[15px] md:text-base text-slate-300 max-w-3xl leading-relaxed mb-16">
                Construimos infraestructura para venta consultiva B2B, alta transaccionalidad B2C y licitaciones B2G. Casi nunca lo que comparten nuestros mejores clientes es el rubro; lo que comparten es una etapa. Preferimos ser brutalmente claros sobre con quién hacemos buen trabajo y con quién no maximizará resultados nuestra metodología.
              </p>
            </FadeIn>

            {/* Matriz de Cualificación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Columna Izquierda: Fit (Sí) - Destacada hacia adelante */}
              <FadeIn delay={0.2} className="bg-indigo-950/20 border-2 border-indigo-400 rounded-2xl p-8 md:p-10 shadow-xl shadow-indigo-900/10 h-full relative overflow-hidden">
                {/* Brillo sutil de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <Check className="text-indigo-400" strokeWidth={3} size={28} />
                  </div>
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white">Trabajamos bien contigo si...</h3>
                </div>
                <ul className="space-y-8">
                  <li className="border-b border-indigo-500/20 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-white mb-2">Ya validaste tu negocio</h4>
                    <p className="font-sans text-[15px] text-slate-300 leading-relaxed">Tienes clientes, ingresos que se sostienen y un equipo comercial trabajando. La demanda existe; lo que falta es estructura.</p>
                  </li>
                  <li className="border-b border-indigo-500/20 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-white mb-2">Quieres dejar de ser el cuello de botella</h4>
                    <p className="font-sans text-[15px] text-slate-300 leading-relaxed">Buscas que la operación funcione aunque tú no estés en cada negocio, no un parche que te mantenga al centro de todo.</p>
                  </li>
                  <li className="border-b border-indigo-500/20 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-white mb-2">Estás dispuesto a mirar tus procesos</h4>
                    <p className="font-sans text-[15px] text-slate-300 leading-relaxed">Entiendes que ordenar la base —procesos, datos, personas— es lo que vuelve predecible el resultado, y estás abierto a hacerlo.</p>
                  </li>
                  <li className="border-b border-indigo-500/20 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-white mb-2">Decidir con datos te importa</h4>
                    <p className="font-sans text-[15px] text-slate-300 leading-relaxed">Te cansaste de proyectar a ojo. Quieres que las decisiones comerciales se tomen sobre información real, no sobre intuición.</p>
                  </li>
                </ul>
              </FadeIn>

              {/* Columna Derecha: No Fit (No) - Hundida visualmente */}
              <FadeIn delay={0.3} className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-10 opacity-70">
                  <X className="text-slate-500" strokeWidth={3} size={28} />
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-slate-400">Nuestra metodología no es el mejor fit si...</h3>
                </div>
                <ul className="space-y-8">
                  <li className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-slate-400 mb-2">Estás en etapa de validación inicial</h4>
                    <p className="font-sans text-[15px] text-slate-500 leading-relaxed">Nuestro foco es escalar sistemas que ya tienen tracción. Si recién estás probando tu producto en el mercado, te sugerimos enfocarte en generar tus primeras ventas antes de invertir en infraestructura.</p>
                  </li>
                  <li className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-slate-400 mb-2">Buscas delegar el 100% de la operación</h4>
                    <p className="font-sans text-[15px] text-slate-500 leading-relaxed">No operamos bajo el modelo de agencia tradicional o outsourcing. El sistema se construye en conjunto con tu equipo interno para que el conocimiento y el control queden en tu empresa, no en la nuestra.</p>
                  </li>
                  <li className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                    <h4 className="font-sans text-base md:text-lg font-bold text-slate-400 mb-2">Solo requieres ejecución operativa</h4>
                    <p className="font-sans text-[15px] text-slate-500 leading-relaxed">Parte fundamental de nuestro valor es auditar y rediseñar procesos. Si ya tienes la estrategia técnica 100% definida y solo buscas &quot;manos extra&quot; para implementarla sin cuestionamientos, existen alternativas más eficientes para ti.</p>
                  </li>
                </ul>
              </FadeIn>
            </div>

            {/* Mensaje de Cierre */}
            <FadeIn delay={0.4} className="text-center max-w-3xl mx-auto bg-slate-950 border border-slate-800 p-8 rounded-2xl">
              <p className="font-serif text-xl md:text-2xl text-slate-200 italic leading-relaxed">
                Si te reconociste en la columna izquierda, <span className="text-white font-medium not-italic">deberíamos hablar</span>. <br className="hidden md:block" />
                <span className="text-slate-400">Y si tu realidad está en la derecha, felices de orientarte en una llamada corta hacia el camino o proveedor adecuado.</span>
              </p>
            </FadeIn>
          </div>
        </section>
          <Autoevaluacion />
      </main>
      <Footer />
    </div>
  );
}
