import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs monday (2026): CRM de ventas o plataforma de trabajo | SalesOps",
  description:
    "Comparación honesta entre Pipedrive y monday CRM para pymes en Chile. Cuándo conviene un CRM que viene resuelto para vender y cuándo una plataforma flexible que configuras tú.",
  alternates: { canonical: "/comparativas/pipedrive-vs-monday" },
  openGraph: {
    title: "Pipedrive vs monday: CRM de ventas o plataforma",
    description:
      "Comparación honesta entre Pipedrive y monday CRM para pymes en Chile. Cuándo conviene cada herramienta.",
    url: "/comparativas/pipedrive-vs-monday",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿monday o Pipedrive para ventas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "monday si quieres una plataforma para todo y vas a configurar el CRM. Pipedrive si quieres vender ya, con un embudo resuelto y foco en ventas.",
      },
    },
    {
      "@type": "Question",
      name: "¿monday CRM sirve como CRM de ventas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, pero es una plataforma de gestión de trabajo adaptada a ventas. La profundidad nativa y el tiempo de puesta en marcha juegan a favor de Pipedrive.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es más rápido de implementar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipedrive, porque viene con el embudo listo. En monday el CRM lo diseñas tú, lo que toma más tiempo antes de vender.",
      },
    },
    {
      "@type": "Question",
      name: "¿monday es más barato que Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Su plan de entrada parte más bajo (US$12 por asiento, con un mínimo de tres asientos), pero el costo real incluye el tiempo de configurarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede migrar de monday a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar.",
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
    { "@type": "ListItem", position: 3, name: "Pipedrive vs monday", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-monday" },
  ],
};

const tableData = [
  { need: "Listo para vender de fábrica", mon: "Hay que armarlo", monWin: false, pipe: "Viene resuelto", pipeWin: true },
  { need: "Flexibilidad para cualquier flujo", mon: "Altísima", monWin: true, pipe: "Enfocado en ventas", pipeWin: false },
  { need: "Proyectos, tareas y operaciones", mon: "Su terreno", monWin: true, pipe: "Foco en ventas", pipeWin: false },
  { need: "Profundidad nativa de ventas", mon: "Genérica", monWin: false, pipe: "Profunda", pipeWin: true },
  { need: "Tiempo de puesta en marcha", mon: "Lo diseñas tú", monWin: false, pipe: "Días", pipeWin: true },
  { need: "Precio de entrada", mon: "US$12, mínimo 3 asientos", monWin: true, pipe: "US$14, sin mínimo", pipeWin: false },
  { need: "Adopción del equipo de ventas", mon: "Depende de cómo lo armaste", monWin: false, pipe: "Directa", pipeWin: true },
];

const faqs = [
  { q: "¿monday o Pipedrive para ventas?", a: "monday si quieres una plataforma para todo y vas a configurar el CRM. Pipedrive si quieres vender ya, con un embudo resuelto y foco en ventas." },
  { q: "¿monday CRM sirve como CRM de ventas?", a: "Sí, pero es una plataforma de gestión de trabajo adaptada a ventas. La profundidad nativa y el tiempo de puesta en marcha juegan a favor de Pipedrive." },
  { q: "¿Cuál es más rápido de implementar?", a: "Pipedrive, porque viene con el embudo listo. En monday el CRM lo diseñas tú, lo que toma más tiempo antes de vender." },
  { q: "¿monday es más barato que Pipedrive?", a: "Su plan de entrada parte más bajo (US$12 por asiento, con un mínimo de tres asientos), pero el costo real incluye el tiempo de configurarlo. Verifica los precios al día de decidir." },
  { q: "¿Se puede migrar de monday a Pipedrive?", a: "Sí. Se exportan contactos, empresas y negocios y se importan a Pipedrive con su historial, mapeando cada campo a su lugar." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsMondayPage() {
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
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">monday</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Viene resuelto para vender, o un lienzo en blanco.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/comparativas" className="hover:text-white transition-colors">Comparativas</Link>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs monday</span>
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
            monday es una plataforma de gestión de trabajo con un CRM encima: su fuerza es la flexibilidad total y su trampa es que el CRM lo armas tú. Pipedrive viene resuelto para vender. Si quieres una suite para proyectos y ventas y tienes quién la configure, monday. Si quieres vender ya, Pipedrive.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            monday se ve espectacular en la demo. El problema aparece después, cuando descubres que esa flexibilidad significa que el CRM lo tienes que construir tú.
          </p>
          <p className="text-slate-600">
            monday.com es una plataforma de gestión de trabajo que sirve para casi todo: proyectos, tareas, operaciones y, con configuración, ventas. Pipedrive hace una sola cosa y la trae resuelta: un embudo de ventas listo para usar. La flexibilidad de monday es real, pero también es trabajo, y ese trabajo cae en ti antes de vender el primer negocio.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “La flexibilidad no vende. <span className="italic text-[#017737]">El foco sí.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            Una plataforma para todo o una herramienta para vender. Estos criterios lo definen.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">monday</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.monWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      <span className={row.monWin ? "font-semibold text-slate-900" : ""}>{row.mon}</span>
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
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana monday</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Flexibilidad casi total para modelar cualquier flujo.</li>
              <li>Una sola plataforma para proyectos, operaciones y ventas.</li>
              <li>Precio de entrada bajo (desde US$12 por asiento, mínimo 3).</li>
              <li>Interfaz visual y atractiva.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Viene resuelto para vender, sin diseñar tu CRM primero.</li>
              <li>Profundidad nativa de ventas: embudo, actividades, proyección.</li>
              <li>Operativo en días, no en un proyecto de configuración.</li>
              <li>El equipo de ventas lo adopta sin curva.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto (Estadísticas) */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El costo de armarlo tú</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            Vender ya, no dentro de tres meses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$8,71</span>
              <p className="text-xs text-slate-600 mt-2">de retorno promedio por cada dólar invertido en un CRM que efectivamente se usa.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Nucleus Research</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+29%</span>
              <p className="text-xs text-slate-600 mt-2">de aumento en ventas puede lograr un equipo con un CRM de ventas que adopta de verdad.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">72%</span>
              <p className="text-xs text-slate-600 mt-2">del tiempo de un vendedor no se dedica a vender; un CRM enfocado recupera parte de eso.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce, State of Sales</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            La flexibilidad de monday es una ventaja cuando tienes quién la aproveche. Cuando no, se convierte en un CRM a medio construir que nadie termina de usar. Verifica los precios al día de decidir.
          </p>
        </section>

        {/* Postura y Para quién */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Para quién es cada uno</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-4">Depende de tu prioridad</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
            <p>
              <strong className="text-slate-900 font-semibold">monday es para ti</strong> si quieres una sola plataforma para proyectos, operaciones y ventas, y tienes a alguien que la configure y la mantenga. Ahí su flexibilidad rinde y te evita tener varias herramientas.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Pipedrive es para ti</strong> si tu prioridad es vender, quieres estar operando en días y que el equipo de ventas lo use sin curva. Sobre todo si ya tienes un equipo comercial (del orden de seis vendedores o más) que necesita orden ahora, no un proyecto de configuración.
            </p>
          </div>

          <div className="border-l-4 border-[#017737] pl-6 py-2 bg-slate-50 rounded-r-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">Garantía de adopción</span>
            <p className="text-sm text-slate-600 m-0">
              Un lienzo en blanco no vende solo. Nuestro método deja tu embudo montado y se compromete con que el equipo lo use, con la capacitación incluida.
            </p>
          </div>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de monday a Pipedrive</h2>
          <p className="text-sm text-slate-500 mb-6">Si armaste tu CRM en monday y se volvió difícil de mantener, mover tus datos es directo.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Exportamos tus tableros</strong>
                <p className="text-sm text-slate-600 m-0">Contactos, empresas y negocios salen de monday en un formato limpio.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Diseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Aprovechamos un embudo de ventas resuelto en vez de uno armado a mano.</p>
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
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Cansado de configurar tu CRM en vez de vender?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Te dejamos un embudo listo en Pipedrive, con tu equipo usándolo en días, no en meses.
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
