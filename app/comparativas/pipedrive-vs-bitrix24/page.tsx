import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs Bitrix24 (2026): enfocado o todo en uno gratis | SalesOps",
  description:
    "Comparación honesta entre Pipedrive y Bitrix24 para pymes en Chile. Cuándo conviene un CRM enfocado y adoptado y cuándo una suite todo en uno gratis.",
  alternates: { canonical: "/comparativas/pipedrive-vs-bitrix24" },
  openGraph: {
    title: "Pipedrive vs Bitrix24: enfocado o todo en uno gratis",
    description:
      "Comparación honesta entre Pipedrive y Bitrix24 para pymes en Chile. Cuándo conviene cada herramienta.",
    url: "/comparativas/pipedrive-vs-bitrix24",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Bitrix24 o Pipedrive para una pyme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitrix24 si el costo cero y la amplitud mandan y puedes con su complejidad. Pipedrive si quieres foco en ventas y que el equipo lo adopte sin curva.",
      },
    },
    {
      "@type": "Question",
      name: "¿El plan gratis de Bitrix24 es suficiente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En alcance, muchas veces sí. El problema no es cuánto trae, sino cuánto de eso el equipo termina usando. La adopción es donde suele fallar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué elegir Pipedrive si Bitrix24 es más barato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque un CRM que nadie usa no es económico, por gratis que sea. Pipedrive apuesta por foco y adopción, que es de donde sale el retorno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede migrar de Bitrix24 a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es más fácil de usar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipedrive, por lejos, en lo que es ventas. Bitrix24 es potente, pero su amplitud recarga la interfaz y empina la curva de aprendizaje.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.salesopsconsulting.cl/" },
    { "@type": "ListItem", position: 2, name: "Comparativas", item: "https://www.salesopsconsulting.cl/comparativas" },
    { "@type": "ListItem", position: 3, name: "Pipedrive vs Bitrix24", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-bitrix24" },
  ],
};

const tableData = [
  { need: "Precio de entrada", bx: "Plan gratis amplio", bxWin: true, pipe: "Desde US$14, prueba 14 días", pipeWin: false },
  { need: "Amplitud de funciones", bx: "Sitio, telefonía, tareas y más", bxWin: true, pipe: "Foco en ventas", pipeWin: false },
  { need: "Precio a muchos usuarios", bx: "Plano por organización", bxWin: true, pipe: "Por asiento", pipeWin: false },
  { need: "Simplicidad y foco", bx: "Abruma", bxWin: false, pipe: "Claro y directo", pipeWin: true },
  { need: "Adopción del equipo", bx: "Curva empinada", bxWin: false, pipe: "Rápida", pipeWin: true },
  { need: "Tiempo hasta el primer valor", bx: "Mucho que configurar", bxWin: false, pipe: "Días", pipeWin: true },
  { need: "Soporte", bx: "Lento, según reportes", bxWin: false, pipe: "Más fluido", pipeWin: true },
];

const faqs = [
  { q: "¿Bitrix24 o Pipedrive para una pyme?", a: "Bitrix24 si el costo cero y la amplitud mandan y puedes con su complejidad. Pipedrive si quieres foco en ventas y que el equipo lo adopte sin curva." },
  { q: "¿El plan gratis de Bitrix24 es suficiente?", a: "En alcance, muchas veces sí. El problema no es cuánto trae, sino cuánto de eso el equipo termina usando. La adopción es donde suele fallar." },
  { q: "¿Por qué elegir Pipedrive si Bitrix24 es más barato?", a: "Porque un CRM que nadie usa no es económico, por gratis que sea. Pipedrive apuesta por foco y adopción, que es de donde sale el retorno." },
  { q: "¿Se puede migrar de Bitrix24 a Pipedrive?", a: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar." },
  { q: "¿Cuál es más fácil de usar?", a: "Pipedrive, por lejos, en lo que es ventas. Bitrix24 es potente, pero su amplitud recarga la interfaz y empina la curva de aprendizaje." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsBitrix24Page() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen antialiased font-sans">
      <HeaderManager />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero / Masthead */}
      <header className="bg-gradient-to-b from-[#0A1026] to-[#06070F] text-[#EEF1F6] border-b-2 border-[#35B06B] pt-32 pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center pb-4 mb-8 border-b border-slate-700/50 text-xs font-mono uppercase tracking-widest text-slate-400">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/logo-salesops-light.png"
                alt="SalesOps Consulting"
                width={140}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <span>Comparativa de CRM · 2026</span>
          </div>

          <div className="mb-4 inline-block">
            <Image
              src="/logos/pipedrive-partner.png"
              alt="Pipedrive Authorized Partner"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white mb-4">
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">Bitrix24</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Enfocado y adoptado, o todo en uno y gratis.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-white transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs Bitrix24</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Respuesta Corta */}
        <div className="bg-white border border-slate-200 border-l-4 border-l-[#017737] rounded-xl p-6 shadow-sm mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">
            La respuesta corta
          </span>
          <p className="text-base text-slate-700 leading-relaxed m-0">
            Bitrix24 te da casi todo (CRM, sitio, telefonía, tareas, intranet) por poco o nada, y ahí está su trampa: tanto, que nadie lo usa bien. Si el presupuesto es cero y necesitas muchas funciones bajo un techo, su plan gratis es difícil de igualar. Si te importa que el equipo lo adopte, gana Pipedrive.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            Bitrix24 gratis suena irresistible: un CRM que además trae sitio web, telefonía, tareas y hasta intranet, sin pagar un peso. La pregunta que nadie hace es si tu equipo va a usar todo eso.
          </p>
          <p className="text-slate-600">
            Bitrix24 es una suite enorme que mete decenas de herramientas en una sola cuenta. Pipedrive hace una cosa, ventas, y la hace simple. El plan gratis de Bitrix24 es genuinamente amplio; el costo aparece después, en la complejidad, la curva y una interfaz que abruma. Y un CRM que abruma es un CRM que el equipo termina evitando.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “Tener todas las funciones no sirve <span className="italic text-[#017737]">si nadie las usa.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            Amplitud contra foco. La decisión depende de qué vas a usar de verdad.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">Bitrix24</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.bxWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.bxWin ? "font-semibold text-slate-900" : ""}>{row.bx}</span>
                    </td>
                    <td className="p-4 text-slate-700 bg-emerald-50/30 align-top">
                      {row.pipeWin && <span className="inline-block w-2 h-2 bg-[#017737] -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.pipeWin ? "font-semibold text-[#017737]" : ""}>{row.pipe}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dos Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-2xl border border-slate-200 mb-14">
          <div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana Bitrix24</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Un plan gratis genuinamente amplio.</li>
              <li>Decenas de herramientas en una cuenta (CRM, sitio, telefonía, tareas).</li>
              <li>Precio plano por organización, económico por usuario a escala.</li>
              <li>Difícil de igualar si necesitas mucho y no puedes pagar.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Claridad y foco: hace ventas y lo hace simple.</li>
              <li>El equipo lo adopta rápido, sin abrumarse.</li>
              <li>Operativo en días, no un proyecto de configuración.</li>
              <li>Una interfaz limpia que la gente sí abre a diario.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El costo de la amplitud</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            Tener todas las funciones no es tenerlas usándose
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+28%</span>
              <p className="text-xs text-slate-600 mt-2">de ingresos logran las empresas con un proceso de ventas formal frente a las que no lo tienen.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Harvard Business Review</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$8,71</span>
              <p className="text-xs text-slate-600 mt-2">de retorno promedio por cada dólar invertido en un CRM que efectivamente se usa.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Nucleus Research</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+20%</span>
              <p className="text-xs text-slate-600 mt-2">de productividad de ventas al decidir con datos y no con intuición.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">McKinsey</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            El valor de un CRM no está en cuántas funciones trae, sino en cuántas usa tu equipo. Gratis y amplio no sirve si termina abandonado. Verifica los planes de Bitrix24 al día de decidir.
          </p>
        </section>

        {/* Postura y Para quién */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Para quién es cada uno</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Amplitud o foco</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              <strong className="text-slate-900 font-semibold">Bitrix24 es para ti</strong> si el presupuesto es cero, necesitas muchas funciones bajo un mismo techo y tienes la paciencia (o el equipo) para domar su complejidad. Ahí su alcance por poca plata es difícil de superar.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Pipedrive es para ti</strong> si prefieres una herramienta que el equipo realmente use, enfocada en vender y operativa en días. Sobre todo si ya tienes un equipo comercial (del orden de seis vendedores o más) que necesita orden en las ventas, no una navaja suiza que administrar.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              Instalar una suite enorme es fácil. Que el equipo la use es lo difícil. Nuestro método se enfoca en la adopción real de Pipedrive, con la capacitación incluida.
            </p>
          </div>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de Bitrix24 a Pipedrive</h2>
          <p className="text-sm text-slate-500 mb-6">Si Bitrix24 te dio de todo menos un equipo que lo use, simplificar es directo.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Exportamos tus datos</strong>
                <p className="text-sm text-slate-600 m-0">Contactos, empresas y negocios salen de Bitrix24 en un formato limpio.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Diseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Nos quedamos con lo que importa para vender y dejamos fuera el ruido.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">03</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Importamos con historial</strong>
                <p className="text-sm text-slate-600 m-0">Todo entra a Pipedrive mapeado a su campo, sin volver a tipear.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">04</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Activamos al equipo</strong>
                <p className="text-sm text-slate-600 m-0">Definimos actividades, responsables y recordatorios, y acompañamos hasta que se vuelve costumbre.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Preguntas frecuentes</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Dudas habituales</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-2xl p-6 group">
                <summary className="font-bold text-base cursor-pointer list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-[#017737] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#0A1122] text-white rounded-3xl p-8 sm:p-10 border-t-2 border-[#35B06B] text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7CCB98] font-semibold mb-2">El siguiente paso</p>
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Tienes Bitrix24 pero el equipo no lo usa?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            A veces menos es más. Te mostramos cómo un CRM enfocado se adopta donde una suite gigante se abandona.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a 
              href={SCHEDULER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#3E5BD9] hover:bg-[#4A67E6] text-white px-6 py-3.5 rounded-xl font-bold transition-colors text-sm"
            >
              Agenda un diagnóstico
            </a>
            <Link href="/calculadora-roi-pipedrive" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold border border-white/20 transition-colors text-sm">
              Calcula tu retorno
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            ¿Prefieres partir por tu cuenta?{" "}
            <a 
              href={AFFILIATE_URL} 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              className="text-[#7CCB98] underline hover:text-white"
            >
              Crea tu cuenta de Pipedrive aquí
            </a>{" "}
            y parte con una prueba extendida.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
