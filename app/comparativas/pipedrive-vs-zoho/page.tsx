import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs Zoho CRM (2026): barato no es lo mismo que económico | SalesOps",
  description:
    "Comparación honesta entre Pipedrive y Zoho CRM para pymes en Chile. Por qué el más barato no siempre sale más económico, dónde gana cada uno y cuándo conviene.",
  alternates: { canonical: "/comparativas/pipedrive-vs-zoho" },
  openGraph: {
    title: "Pipedrive vs Zoho CRM: barato no es lo mismo que económico",
    description:
      "Comparación honesta entre Pipedrive y Zoho CRM para pymes en Chile. Dónde gana cada uno y cuándo conviene.",
    url: "/comparativas/pipedrive-vs-zoho",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Zoho o Pipedrive para una pyme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zoho si el precio y el ecosistema mandan y tienes quién lo configure y lo mantenga. Pipedrive si quieres rapidez, simpleza y que el equipo lo adopte sin curva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué Zoho, siendo más barato, puede salir más caro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque el costo real incluye el tiempo de configuración y la curva del equipo. Una licencia barata que nadie usa termina siendo cara, porque no genera el retorno que un CRM debería dar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pipedrive se integra con otras herramientas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, tiene un marketplace amplio de integraciones. La diferencia con Zoho no es la conectividad, es el foco: Pipedrive hace ventas simple en vez de ofrecer una suite entera que administrar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede migrar de Zoho a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Se exportan contactos, empresas y negocios desde Zoho y se importan a Pipedrive con su historial, mapeando cada campo a su lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es más fácil para un equipo no técnico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipedrive, por su simplicidad y foco en ventas. Zoho es más potente, pero esa potencia exige configuración y mantenimiento que una pyme no siempre tiene.",
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
    { "@type": "ListItem", position: 3, name: "Pipedrive vs Zoho", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-zoho" },
  ],
};

const tableData = [
  { need: "Precio de licencia", zoho: "El más bajo (Standard US$14)", zohoWin: true, pipe: "Desde US$14, Pro US$59", pipeWin: false },
  { need: "Tiempo hasta que funciona", zoho: "Pide configuración técnica", zohoWin: false, pipe: "Operativo en días", pipeWin: true },
  { need: "Facilidad para un equipo no técnico", zoho: "Denso, mucha opción", zohoWin: false, pipe: "Simple y directo", pipeWin: true },
  { need: "Ecosistema de apps", zoho: "40+ apps integradas", zohoWin: true, pipe: "Foco ventas, con integraciones", pipeWin: false },
  { need: "Soporte y postventa", zoho: "Quejas frecuentes", zohoWin: false, pipe: "Experiencia más fluida", pipeWin: true },
  { need: "Personalización profunda", zoho: "Muy configurable", zohoWin: true, pipe: "Suficiente y más simple", pipeWin: false },
  { need: "Adopción del equipo", zoho: "Curva empinada", zohoWin: false, pipe: "Curva corta", pipeWin: true },
  { need: "Plan gratis", zoho: "Hasta 3 usuarios", zohoWin: true, pipe: "Prueba de 14 días", pipeWin: false },
];

const faqs = [
  { q: "¿Zoho o Pipedrive para una pyme?", a: "Zoho si el precio y el ecosistema mandan y tienes quién lo configure y lo mantenga. Pipedrive si quieres rapidez, simpleza y que el equipo lo adopte sin curva." },
  { q: "¿Por qué Zoho, siendo más barato, puede salir más caro?", a: "Porque el costo real incluye el tiempo de configuración y la curva del equipo. Una licencia barata que nadie usa termina siendo cara, porque no genera el retorno que un CRM debería dar." },
  { q: "¿Pipedrive se integra con otras herramientas?", a: "Sí, tiene un marketplace amplio de integraciones. La diferencia con Zoho no es la conectividad, es el foco: Pipedrive hace ventas simple en vez de ofrecer una suite entera que administrar." },
  { q: "¿Se puede migrar de Zoho a Pipedrive?", a: "Sí. Se exportan contactos, empresas y negocios desde Zoho y se importan a Pipedrive con su historial, mapeando cada campo a su lugar." },
  { q: "¿Cuál es más fácil para un equipo no técnico?", a: "Pipedrive, por su simplicidad y foco en ventas. Zoho es más potente, pero esa potencia exige configuración y mantenimiento que una pyme no siempre tiene." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsZohoPage() {
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
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">Zoho</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Barato en la licencia, caro en el tiempo.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-white transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs Zoho</span>
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
            Zoho CRM es el más barato con todo incluido, y ese es justo su costo: pide configuración y mano técnica para rendir. Si ya vives en el ecosistema Zoho y tienes quién lo configure, es difícil de superar en precio. Si quieres operar rápido y que el equipo lo adopte sin fricción, gana Pipedrive.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            Cuando comparas por precio de lista, Zoho gana casi siempre. El problema es que el precio de lista no es lo que terminas pagando. Lo que pagas de verdad incluye el tiempo hasta que el CRM funciona y la curva del equipo hasta que lo usa.
          </p>
          <p className="text-slate-600">
            Zoho CRM es una herramienta potente y muy configurable, parte de un ecosistema enorme de más de cuarenta aplicaciones. Esa potencia tiene una contra: para rendir necesita que alguien lo configure bien, y esa persona muchas veces no está en una pyme. Pipedrive apuesta por lo contrario: menos opciones, más foco, operativo en días. La pregunta no es cuál es más barato, es cuál te tiene vendiendo antes.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “Barato en la licencia <span className="italic text-[#017737]">no es lo mismo que económico en el tiempo.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            El precio es solo una fila de esta tabla. Estos son los criterios que definen si el CRM te rinde o te pesa.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">Zoho CRM</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.zohoWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.zohoWin ? "font-semibold text-slate-900" : ""}>{row.zoho}</span>
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
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana Zoho</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>El precio de licencia más bajo de la comparación.</li>
              <li>Un ecosistema enorme de apps que se integran entre sí.</li>
              <li>Personalización muy profunda si tienes quién la configure.</li>
              <li>Un plan gratis para partir con hasta tres usuarios.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Estás operando en días, no en un proyecto de configuración.</li>
              <li>Simple de usar: el equipo lo adopta sin fricción.</li>
              <li>Experiencia de soporte más fluida.</li>
              <li>Menos que mantener y menos que se rompe.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Dónde está el valor</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            El retorno no viene de la licencia más barata
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+29%</span>
              <p className="text-xs text-slate-600 mt-2">de aumento en ventas puede lograr un equipo con un CRM que usa de verdad.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+42%</span>
              <p className="text-xs text-slate-600 mt-2">de mejora en la precisión del pronóstico de ventas con un CRM bien usado.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+20%</span>
              <p className="text-xs text-slate-600 mt-2">de productividad de ventas al tomar decisiones con datos y no con intuición.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">McKinsey</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            El retorno viene de un CRM que funciona y que el equipo usa. Una licencia barata que nadie adopta no es económica, es plata dormida. Verifica los precios de Zoho al día de tu evaluación, porque cambian.
          </p>
        </section>

        {/* Postura y Para quién */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Para quién es cada uno</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Elige por el tiempo, no solo por el precio</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              <strong className="text-slate-900 font-semibold">Zoho es para ti</strong> si el precio de licencia manda, ya usas el ecosistema Zoho (Books, Desk, Campaigns) y tienes capacidad técnica interna para configurarlo y mantenerlo en el tiempo. Ahí su precio y su integración son difíciles de superar.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Pipedrive es para ti</strong> si quieres estar operando en días, sin un proyecto de TI, y que el equipo lo use sin una curva empinada. Sobre todo si ya tienes un equipo comercial (del orden de seis vendedores o más) que necesita orden ahora, no en tres meses.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              El CRM más configurable no sirve si el equipo no lo usa. Nuestro método se compromete con la adopción real de Pipedrive, no solo con dejarlo instalado. La capacitación va incluida.
            </p>
          </div>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de Zoho a Pipedrive</h2>
          <p className="text-sm text-slate-500 mb-6">Si Zoho te quedó grande de configurar, mover tus datos a algo más simple es directo.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Exportamos tus módulos</strong>
                <p className="text-sm text-slate-600 m-0">Contactos, empresas y negocios salen de Zoho en un formato limpio.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Rediseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Ajustamos las etapas a tu proceso real, sin arrastrar la complejidad anterior.</p>
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
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Buscas el CRM más económico de verdad?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Económico no es el de licencia más barata, es el que tu equipo usa y te da retorno. Veámoslo con tus números.
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
