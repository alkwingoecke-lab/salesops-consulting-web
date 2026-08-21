import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs HubSpot (2026): cuál conviene a tu equipo de ventas | SalesOps",
  description:
    "Comparación honesta entre Pipedrive y HubSpot para pymes en Chile. Dónde gana cada uno, el salto de precio a HubSpot Professional y cuándo conviene cada plataforma.",
  alternates: { canonical: "/comparativas/pipedrive-vs-hubspot" },
  openGraph: {
    title: "Pipedrive vs HubSpot: cuál conviene a tu equipo",
    description:
      "Comparación honesta entre Pipedrive y HubSpot para pymes en Chile. Dónde gana cada uno y cuándo conviene cada plataforma.",
    url: "/comparativas/pipedrive-vs-hubspot",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Pipedrive o HubSpot para una pyme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tu motor. Si vendes y necesitas orden en el proceso, Pipedrive suele convenir por costo y adopción. Si tu core es el marketing y vas a pagar el plan Professional, HubSpot integra más en un solo lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué HubSpot se vuelve caro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El gratis y el Starter son accesibles, pero el salto al plan Professional multiplica el precio por asiento (US$100), exige un mínimo de cinco asientos y suma una implementación de US$1.500.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pipedrive hace marketing como HubSpot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No al mismo nivel. Pipedrive se enfoca en ventas y se conecta con herramientas de marketing o su add-on Campaigns. Si el inbound es el corazón de tu negocio, HubSpot gana en ese terreno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede migrar de HubSpot a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Se exportan contactos, empresas y negocios desde HubSpot y se importan a Pipedrive con su historial, mapeando cada campo a su lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es más fácil de adoptar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipedrive suele adoptarse más rápido por su foco en ventas. HubSpot tiene más superficie que aprender, lo que es una ventaja si la vas a usar completa y un peso si solo querías vender.",
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
    { "@type": "ListItem", position: 3, name: "Pipedrive vs HubSpot", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-hubspot" },
  ],
};

const tableData = [
  { need: "Costo al crecer", hub: "Professional US$100/asiento, mínimo 5, más implementación", hubWin: false, pipe: "Por asiento, sin mínimos ni fee", pipeWin: true },
  { need: "Curva de adopción", hub: "Amplia, más que aprender", hubWin: false, pipe: "Enfocada, rápida de usar", pipeWin: true },
  { need: "Foco en ventas", hub: "Bueno, pero orientado a plataforma", hubWin: false, pipe: "Nativo de ventas", pipeWin: true },
  { need: "Marketing y automatización", hub: "Nativo y potente", hubWin: true, pipe: "Con add-on o integración", pipeWin: false },
  { need: "Todo en uno (mkt, ventas, servicio)", hub: "Una sola plataforma", hubWin: true, pipe: "Foco en ventas", pipeWin: false },
  { need: "Reportería avanzada", hub: "Muy profunda en planes altos", hubWin: true, pipe: "Clara y suficiente", pipeWin: false },
  { need: "Costo total predecible", hub: "Escalona con mínimos y tarifas", hubWin: false, pipe: "Simple, por asiento", pipeWin: true },
  { need: "Tiempo hasta el primer valor", hub: "Depende del alcance", hubWin: false, pipe: "Operativo en días", pipeWin: true },
];

const faqs = [
  { q: "¿Pipedrive o HubSpot para una pyme?", a: "Depende de tu motor. Si vendes y necesitas orden en el proceso, Pipedrive suele convenir por costo y adopción. Si tu core es el marketing y vas a pagar el plan Professional, HubSpot integra más en un solo lugar." },
  { q: "¿Por qué HubSpot se vuelve caro?", a: "El gratis y el Starter son accesibles, pero el salto al plan Professional multiplica el precio por asiento (US$100), exige un mínimo de cinco asientos y suma una implementación de US$1.500. Ahí es donde muchas pymes frenan." },
  { q: "¿Pipedrive hace marketing como HubSpot?", a: "No al mismo nivel. Pipedrive se enfoca en ventas y se conecta con herramientas de marketing o su add-on Campaigns. Si el inbound es el corazón de tu negocio, HubSpot gana en ese terreno." },
  { q: "¿Se puede migrar de HubSpot a Pipedrive?", a: "Sí. Se exportan contactos, empresas y negocios desde HubSpot y se importan a Pipedrive con su historial, mapeando cada campo a su lugar." },
  { q: "¿Cuál es más fácil de adoptar?", a: "Pipedrive suele adoptarse más rápido por su foco en ventas. HubSpot tiene más superficie que aprender, lo que es una ventaja si la vas a usar completa y un peso si solo querías vender." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsHubspotPage() {
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
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">HubSpot</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            El CRM de ventas contra la plataforma de marketing.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-white transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs HubSpot</span>
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
            HubSpot es una plataforma de marketing con un CRM adentro; Pipedrive es un CRM de ventas. Si tu motor es el marketing y vas a pagar el plan Professional, HubSpot integra más en un solo lugar. Si lideras con ventas y quieres costo predecible y adopción rápida, gana Pipedrive.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            La comparación no es cuál es más potente. Es qué problema tienes hoy. Y la mayoría de las pymes que evalúan HubSpot no tienen un problema de marketing todavía, tienen un problema de ventas.
          </p>
          <p className="text-slate-600">
            HubSpot nació como una plataforma de marketing y le fue sumando ventas, servicio y hasta un sitio web. Pipedrive nació como un CRM de ventas y se quedó ahí, haciéndolo simple. Por eso el plan gratis de HubSpot engancha tan bien: entras fácil. El punto de quiebre aparece cuando necesitas automatización de verdad y tienes que saltar al plan Professional, donde el precio por asiento se multiplica y aparece una tarifa de implementación obligatoria.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “El plan gratis engancha. <span className="italic text-[#017737]">El salto a Professional es donde se siente el costo real.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            Ni el más completo ni el más barato ganan solos. Estos son los criterios que definen tu decisión.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">HubSpot</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.hubWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.hubWin ? "font-semibold text-slate-900" : ""}>{row.hub}</span>
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
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana HubSpot</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Marketing, ventas y servicio en una sola plataforma.</li>
              <li>Automatización de marketing e inbound de primer nivel.</li>
              <li>Un plan gratis muy generoso para partir.</li>
              <li>Reportería y personalización profundas en planes altos.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Costo por asiento predecible, sin mínimos ni fee obligatorio.</li>
              <li>Enfocado en vender: el equipo lo adopta rápido.</li>
              <li>Menos que aprender y menos que configurar.</li>
              <li>No pagas por módulos de marketing que no vas a usar.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El costo oculto</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            El salto de precio que casi nadie te muestra
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">5&times;</span>
              <p className="text-xs text-slate-600 mt-2">sube el precio por asiento al pasar del plan Starter (US$20) al Professional (US$100) de HubSpot.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">HubSpot, precios 2026</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$500</span>
              <p className="text-xs text-slate-600 mt-2">al mes es el piso real del plan Professional: exige un mínimo de cinco asientos.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">HubSpot, precios 2026</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$1.500</span>
              <p className="text-xs text-slate-600 mt-2">de implementación obligatoria que HubSpot suma al Professional en el primer año.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">HubSpot, precios 2026</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Nada de esto hace a HubSpot malo. Lo hace caro para una pyme que solo quería ordenar sus ventas. Verifica siempre las cifras al día de tu evaluación, porque los planes cambian.
          </p>
        </section>

        {/* Postura y Para quién */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Para quién es cada uno</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Depende de cuál es tu motor</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              <strong className="text-slate-900 font-semibold">HubSpot es para ti</strong> si el marketing mueve tu negocio (inbound, campañas, nutrición de leads), si vas a usar de verdad la automatización y tienes presupuesto para el plan Professional. Ahí todo junto en una plataforma rinde.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Pipedrive es para ti</strong> si lideras con ventas, quieres un costo controlado y que el equipo lo use desde la primera semana. Sobre todo si ya tienes un equipo comercial (del orden de seis vendedores o más) que necesita orden y proceso, no una suite gigante que configurar.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              La herramienta más completa no sirve si el equipo no la usa. Nuestro método se compromete con la adopción real de Pipedrive, no solo con dejarlo instalado. La capacitación va incluida.
            </p>
          </div>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de HubSpot a Pipedrive</h2>
          <p className="text-sm text-slate-500 mb-6">Si partiste en el gratis de HubSpot y se te quedó corto o caro, mover tus datos es directo.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Exportamos tus datos</strong>
                <p className="text-sm text-slate-600 m-0">Contactos, empresas y negocios salen de HubSpot en un formato limpio, listos para importar.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Rediseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Ajustamos las etapas a tu proceso real de ventas, no a una plantilla heredada.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">03</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Importamos con historial</strong>
                <p className="text-sm text-slate-600 m-0">Todo entra a Pipedrive con su información, sin volver a tipear.</p>
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
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Estás evaluando HubSpot para tu equipo?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Veamos si Pipedrive te ordena las ventas por una fracción del costo total, o calcula tu retorno antes de decidir.
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
