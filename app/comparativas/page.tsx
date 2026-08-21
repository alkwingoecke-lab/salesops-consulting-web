import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Comparativas de CRM para pymes en Chile (2026) | SalesOps",
  description:
    "Comparativas honestas de Pipedrive frente a los CRM más usados por pymes en Chile: Excel, HubSpot, Zoho y más. Cómo elegir por adopción y costo total, no solo por precio.",
  alternates: { canonical: "/comparativas" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.salesopsconsulting.cl/" },
    { "@type": "ListItem", position: 2, name: "Comparativas", item: "https://www.salesopsconsulting.cl/comparativas" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Comparativas de Pipedrive",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pipedrive vs Excel", url: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-excel" },
    { "@type": "ListItem", position: 2, name: "Pipedrive vs HubSpot", url: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-hubspot" },
    { "@type": "ListItem", position: 3, name: "Pipedrive vs Zoho", url: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-zoho" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el mejor CRM para una pyme en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay uno mejor para todos. Para un equipo de ventas que prioriza adopción y costo controlado, Pipedrive suele ser la mejor relación. Para un negocio movido por marketing con presupuesto, HubSpot. Para el precio más bajo con capacidad técnica interna, Zoho.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debería mirar al elegir un CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo total real (no solo la licencia), qué tan rápido lo adopta el equipo y si resuelve tu proceso de ventas. Un CRM que nadie usa no sirve, por barato o potente que sea.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito ayuda para implementar un CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un equipo chico puede partir por su cuenta. Desde unos seis vendedores, un acompañamiento asegura la adopción y que el CRM refleje tu proceso real de ventas.",
      },
    },
  ],
};

const directory = [
  { name: "Excel", desc: "Gratis y familiar, hasta que el equipo crece", link: "/comparativas/pipedrive-vs-excel", linkText: "Pipedrive vs Excel →", active: true },
  { name: "HubSpot", desc: "Todo en uno, con marketing potente", link: "/comparativas/pipedrive-vs-hubspot", linkText: "Pipedrive vs HubSpot →", active: true },
  { name: "Zoho CRM", desc: "El más barato, con un ecosistema enorme", link: "/comparativas/pipedrive-vs-zoho", linkText: "Pipedrive vs Zoho →", active: true },
  { { name: "Kommo", desc: "Nativo en WhatsApp, para ventas por chat", link: "/comparativas/pipedrive-vs-kommo", linkText: "Pipedrive vs Kommo →", active: true },
  { { name: "monday", desc: "Plataforma flexible de gestión de trabajo", link: "/comparativas/pipedrive-vs-monday", linkText: "Pipedrive vs monday →", active: true },
  { { name: "Bitrix24", desc: "Todo en uno gratis, muy amplio", link: "/comparativas/pipedrive-vs-bitrix24", linkText: "Pipedrive vs Bitrix24 →", active: true }, },
];

const faqs = [
  { q: "¿Cuál es el mejor CRM para una pyme en Chile?", a: "No hay uno mejor para todos. Para un equipo de ventas que prioriza adopción y costo controlado, Pipedrive suele ser la mejor relación. Para un negocio movido por marketing con presupuesto, HubSpot. Para el precio más bajo con capacidad técnica interna, Zoho. Por eso conviene comparar por tu caso, no por rankings." },
  { q: "¿Cómo se compara Pipedrive con otros CRM?", a: "En cada comparativa lo vemos criterio por criterio: costo total, adopción, tiempo hasta el primer valor, foco en ventas y soporte, con la concesión honesta a cada competidor. La idea es que decidas con datos, no con marketing." },
  { q: "¿Qué debería mirar al elegir un CRM?", a: "El costo total real (no solo la licencia), qué tan rápido lo adopta el equipo y si resuelve tu proceso de ventas. Un CRM que nadie usa no sirve, por barato o potente que sea." },
  { q: "¿Necesito ayuda para implementarlo?", a: "Un equipo chico puede partir por su cuenta. Desde unos seis vendedores, un acompañamiento asegura la adopción y que el CRM refleje tu proceso real de ventas, que es donde está el retorno." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function ComparativasPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen antialiased font-sans">
      <HeaderManager />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <span>Comparativas · 2026</span>
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
            Comparativas de CRM
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Pipedrive frente a las alternativas más comunes en Chile, sin humo.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-200">Comparativas</span>
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
            Elegir un CRM no se trata de cuál tiene más funciones ni cuál es más barato, sino de cuál va a usar tu equipo. Acá comparamos Pipedrive con las alternativas más comunes, con la concesión honesta a cada una, para que decidas con criterio y no con marketing.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed border-b border-slate-200 pb-12">
          <p className="font-medium text-slate-900">
            La mayoría de las comparativas de CRM son una lista de casillas marcadas donde siempre gana el que tiene más funciones. Sirve para vender software, no para elegirlo.
          </p>
          <p className="text-slate-600">
            Nosotros comparamos por lo que de verdad decide el resultado: el costo total real (no solo la licencia), qué tan rápido el equipo lo adopta y si resuelve tu proceso de ventas. En cada comparativa reconocemos primero dónde gana el competidor, porque un CRM se elige con criterio, no con fe.
          </p>
        </section>

        {/* Criterios */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Cómo elegir</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Los cinco criterios que de verdad importan</h2>
          <ul className="space-y-4 text-base text-slate-600">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
              <strong className="text-slate-900 font-semibold">Costo total real.</strong> No solo la licencia: suma la implementación, los mínimos de asientos y el costo de que nadie lo use.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
              <strong className="text-slate-900 font-semibold">Curva de adopción.</strong> El mejor CRM es el que tu equipo abre todos los días, no el que tiene más botones.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
              <strong className="text-slate-900 font-semibold">Tiempo hasta el primer valor.</strong> Cuántos días pasan entre que lo contratas y que te sirve para vender.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
              <strong className="text-slate-900 font-semibold">Foco en ventas.</strong> Si es un CRM de ventas o una plataforma enorme a la que le pusieron ventas encima.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
              <strong className="text-slate-900 font-semibold">Soporte y acompañamiento.</strong> Quién responde cuando algo falla, y si alguien te ayuda a que el equipo lo adopte.
            </li>
          </ul>
        </section>

        {/* Directorio / Tabla */}
        <section className="mb-14 pt-12 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El mapa rápido</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Pipedrive frente a cada alternativa</h2>
          <p className="text-sm text-slate-500 mb-6">Cada alternativa tiene su terreno. Entra a la comparativa que te haga sentido para verla criterio por criterio.</p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold">Alternativa</th>
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold">Su punto fuerte</th>
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold">Comparativa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {directory.map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-serif text-xl font-normal text-slate-900">{row.name}</td>
                    <td className="p-4 text-slate-600">{row.desc}</td>
                    <td className="p-4">
                      {row.active ? (
                        <Link href={row.link!} className="font-semibold text-[#3E5BD9] hover:text-[#1E3A8A] hover:underline flex items-center gap-1">
                          {row.linkText}
                        </Link>
                      ) : (
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">Próximamente</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14 pt-12 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Por qué importa elegir bien</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Un CRM rinde cuando se usa</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$8,71</span>
              <p className="text-xs text-slate-600 mt-2">de retorno promedio por cada dólar invertido en un CRM.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Nucleus Research</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+29%</span>
              <p className="text-xs text-slate-600 mt-2">de aumento en ventas puede lograr un equipo con un CRM que adopta de verdad.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+42%</span>
              <p className="text-xs text-slate-600 mt-2">de mejora en la precisión del pronóstico con un CRM bien usado.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Ese retorno no lo da la herramienta más barata ni la más completa. Lo da la que tu equipo usa. Por eso comparamos por adopción y no por lista de funciones.
          </p>
        </section>

        {/* Postura */}
        <section className="mb-14 pt-12 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Nuestra postura</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Para quién es Pipedrive</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              Somos partner de Pipedrive, así que no vamos a fingir neutralidad. Pero sí honestidad: Pipedrive no es para todos. Es la mejor opción para un equipo comercial (del orden de seis vendedores o más) que quiere adopción rápida, costo predecible y foco en ventas, sin la complejidad de una suite gigante ni el salto de precio de las plataformas de marketing.
            </p>
            <p>
              Si ese eres tú, en cada comparativa vas a ver por qué. Y si no lo eres, también te lo decimos: la comparativa te va a mostrar cuándo otra herramienta te conviene más.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              Cualquiera instala un CRM. Nuestro método se compromete con que tu equipo efectivamente lo use, con la capacitación incluida. Esa es la diferencia entre comprar software y ordenar tus ventas.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14 pt-12 border-t border-slate-200">
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
        <div className="bg-[#0A1122] text-white rounded-3xl p-8 sm:p-10 border-t-2 border-[#35B06B] text-center mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7CCB98] font-semibold mb-2">El siguiente paso</p>
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿No sabes cuál te conviene?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Cuéntanos cómo vendes hoy y te decimos con franqueza si Pipedrive es lo tuyo o no. Sin compromiso.
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
            ¿Ya lo tienes claro?{" "}
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
