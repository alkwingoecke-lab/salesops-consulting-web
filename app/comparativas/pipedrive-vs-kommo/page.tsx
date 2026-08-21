import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs Kommo (2026): proceso de ventas o CRM de WhatsApp | SalesOps",
  description:
    "Comparación honesta entre Pipedrive y Kommo para pymes en Chile. Cuándo conviene un CRM de proceso de ventas y cuándo uno conversacional de WhatsApp.",
  alternates: { canonical: "/comparativas/pipedrive-vs-kommo" },
  openGraph: {
    title: "Pipedrive vs Kommo: proceso de ventas o WhatsApp",
    description:
      "Comparación honesta entre Pipedrive y Kommo para pymes en Chile. Cuándo conviene cada herramienta.",
    url: "/comparativas/pipedrive-vs-kommo",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Pipedrive o Kommo para vender por WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu venta es puro chat de alto volumen, Kommo es más nativo. Si vendes con proceso y etapas y quieres además WhatsApp, Pipedrive te da las dos cosas: el embudo y el chat.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pipedrive se integra con WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, de forma nativa y mediante integraciones de su marketplace. Su foco no es el chat sino el proceso de venta, pero WhatsApp queda cubierto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Kommo sirve para ventas B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona, pero está pensado para venta conversacional. Para ciclos largos con varias etapas, seguimiento y pronóstico, Pipedrive es más sólido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede migrar de Kommo a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál tiene mejor reportería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipedrive, con proyección por etapa e informes de ventas más completos. La reportería es una de las limitaciones más mencionadas de Kommo.",
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
    { "@type": "ListItem", position: 3, name: "Pipedrive vs Kommo", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-kommo" },
  ],
};

const tableData = [
  { need: "Vender por WhatsApp e Instagram", ko: "Nativo, en una bandeja", koWin: true, pipe: "Se conecta con WhatsApp", pipeWin: false },
  { need: "Embudo estructurado y etapas", ko: "Básico", koWin: false, pipe: "Su especialidad", pipeWin: true },
  { need: "Reportería y proyección", ko: "Limitada", koWin: false, pipe: "Seria, por etapa", pipeWin: true },
  { need: "Bots de conversación", ko: "Salesbot sin código", koWin: true, pipe: "Automatiza el proceso", pipeWin: false },
  { need: "Procesos B2B con ciclo largo", ko: "Pensado para chat rápido", koWin: false, pipe: "Sólido", pipeWin: true },
  { need: "Escalabilidad y personalización", ko: "Con límites", koWin: false, pipe: "Mayor", pipeWin: true },
  { need: "Soporte", ko: "Quejas frecuentes", koWin: false, pipe: "Más fluido", pipeWin: true },
];

const faqs = [
  { q: "¿Pipedrive o Kommo para vender por WhatsApp?", a: "Si tu venta es puro chat de alto volumen, Kommo es más nativo. Si vendes con proceso y etapas y quieres además WhatsApp, Pipedrive te da las dos cosas: el embudo y el chat." },
  { q: "¿Pipedrive se integra con WhatsApp?", a: "Sí, de forma nativa y mediante integraciones de su marketplace. Su foco no es el chat sino el proceso de venta, pero WhatsApp queda cubierto." },
  { q: "¿Kommo sirve para ventas B2B?", a: "Funciona, pero está pensado para venta conversacional. Para ciclos largos con varias etapas, seguimiento y pronóstico, Pipedrive es más sólido." },
  { q: "¿Se puede migrar de Kommo a Pipedrive?", a: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar." },
  { q: "¿Cuál tiene mejor reportería?", a: "Pipedrive, con proyección por etapa e informes de ventas más completos. La reportería es una de las limitaciones más mencionadas de Kommo." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsKommoPage() {
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
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">Kommo</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            El proceso de ventas contra el CRM de WhatsApp.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-white transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs Kommo</span>
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
            Kommo ordena conversaciones; Pipedrive ordena procesos de venta. Si casi todas tus ventas nacen y mueren en WhatsApp o Instagram, Kommo es más nativo para ese chat. Si vendes con etapas, seguimiento y proyección, y además quieres WhatsApp, gana Pipedrive.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            No es un CRM de ventas contra otro CRM de ventas. Son dos filosofías distintas, y elegir la equivocada te cuesta caro en orden y en negocios perdidos.
          </p>
          <p className="text-slate-600">
            Kommo (antes amoCRM) nació para vender por chat: WhatsApp, Instagram y Messenger en una sola bandeja. Pipedrive nació para ordenar un proceso de ventas con etapas, actividades y pronóstico. La pregunta no es cuál es mejor en abstracto, es cómo vendes tú: por conversación de alto volumen, o por oportunidades que avanzan por un embudo.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “El chat cierra la conversación. <span className="italic text-[#017737]">El proceso cierra la venta.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            Cada uno gana en su terreno. La clave es saber cuál es el tuyo.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">Kommo</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.koWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.koWin ? "font-semibold text-slate-900" : ""}>{row.ko}</span>
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
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana Kommo</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Nativo en WhatsApp, Instagram y Messenger, todo en una bandeja.</li>
              <li>Pensado para vender por chat de alto volumen.</li>
              <li>Bots de conversación (Salesbot) sin código.</li>
              <li>Curva simple para equipos de venta conversacional.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Embudo con etapas, actividades y criterios de avance.</li>
              <li>Reportería y proyección de ventas serias.</li>
              <li>Aguanta procesos B2B y ciclos largos.</li>
              <li>Y también se conecta con WhatsApp cuando lo necesitas.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Por qué el proceso importa</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            El chat trae la conversación, el proceso trae el pronóstico
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+28%</span>
              <p className="text-xs text-slate-600 mt-2">de ingresos logran las empresas con un proceso de ventas formal frente a las que no lo tienen.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Harvard Business Review</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+42%</span>
              <p className="text-xs text-slate-600 mt-2">de mejora en la precisión del pronóstico con un CRM de proceso bien usado.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+20%</span>
              <p className="text-xs text-slate-600 mt-2">de productividad de ventas al decidir con datos y no con intuición.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">McKinsey</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Vender por chat está muy bien para captar. Pero sin un embudo detrás, no sabes cuánto vas a cerrar ni por qué se te caen los negocios. Verifica los precios de Kommo al día de decidir.
          </p>
        </section>

        {/* Postura y Para quién */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Para quién es cada uno</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Depende de cómo vendes</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              <strong className="text-slate-900 font-semibold">Kommo es para ti</strong> si la mayor parte de tus ventas ocurre por chat (B2C, alto volumen, respuesta rápida) y lo que necesitas es ordenar conversaciones, no un embudo con proyección. Ahí su enfoque conversacional rinde.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Pipedrive es para ti</strong> si vendes B2B o con ciclo, con etapas, seguimiento y una meta que proyectar. Y si además quieres WhatsApp, lo tienes, sin renunciar al proceso. Sobre todo si ya tienes un equipo comercial (del orden de seis vendedores o más) que necesita orden.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              Conectar WhatsApp es fácil. Lo difícil es que el equipo trabaje el embudo. Nuestro método se compromete con la adopción real de Pipedrive, con la capacitación incluida.
            </p>
          </div>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de Kommo a Pipedrive</h2>
          <p className="text-sm text-slate-500 mb-6">Si Kommo te ordenó los chats pero no las ventas, mover tus datos es directo.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Exportamos tus datos</strong>
                <p className="text-sm text-slate-600 m-0">Contactos, empresas y negocios salen de Kommo en un formato limpio.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Diseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Definimos las etapas reales de tu venta, más allá de la conversación.</p>
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
                <strong className="block text-slate-900 font-semibold mb-1">Conectamos WhatsApp y activamos al equipo</strong>
                <p className="text-sm text-slate-600 m-0">Para que el chat alimente el embudo y nada se pierda.</p>
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
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Vendes por WhatsApp pero se te escapan los negocios?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Conectamos WhatsApp a un embudo de verdad, para que ninguna conversación se pierda entre tantos chats.
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
