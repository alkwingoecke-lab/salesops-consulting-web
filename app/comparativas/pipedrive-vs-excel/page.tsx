import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pipedrive vs Excel (2026): cuándo dejar las planillas de ventas | SalesOps",
  description:
    "Comparación honesta entre gestionar tus ventas en Excel y en Pipedrive. Cuándo conviene cada uno, el costo oculto de las planillas y cómo migrar. Para equipos comerciales en Chile.",
  alternates: { canonical: "/comparativas/pipedrive-vs-excel" },
  openGraph: {
    title: "Pipedrive vs Excel: cuándo dejar las planillas | SalesOps",
    description:
      "Comparación honesta entre gestionar tus ventas en Excel y en Pipedrive. Cuándo conviene cada uno.",
    url: "/comparativas/pipedrive-vs-excel",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Pipedrive reemplaza a Excel por completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para gestionar tus ventas sí: contactos, seguimiento, embudo y proyección. Para análisis financiero o cálculos, Excel sigue siendo mejor, y puedes exportar tus datos de Pipedrive a una planilla cuando lo necesites.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo conviene dejar la planilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si más de una persona toca la misma planilla, o si pierdes negocios por no hacer el seguimiento a tiempo, ya se te quedó chica. Ese es el momento en que la planilla empieza a costarte dinero en vez de ahorrarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se pueden pasar mis datos de Excel a Pipedrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Pipedrive importa directamente desde Excel o CSV. Con un mapeo ordenado de columnas a campos migras contactos, empresas y negocios sin perder el historial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Pipedrive frente a Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excel ya lo pagas dentro de Office. Pipedrive parte en US$14 por usuario al mes. La diferencia real no está en la licencia, sino en los negocios que dejas de perder cuando el seguimiento deja de depender de la memoria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito ayuda para implementarlo o lo hago solo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un equipo pequeño suele partir bien por su cuenta. Cuando ya hay varios vendedores y un proceso que ordenar, un acompañamiento asegura que el equipo lo adopte y que el embudo refleje tu forma real de vender.",
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
    { "@type": "ListItem", position: 3, name: "Pipedrive vs Excel", item: "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-excel" },
  ],
};

const tableData = [
  { need: "Costo de la herramienta", excel: "Ya lo tienes con Office", excelWin: true, pipe: "Desde US$14 usuario/mes", pipeWin: false },
  { need: "Recordar el seguimiento", excel: "Manual, se olvida", excelWin: false, pipe: "Cada negocio con su próxima tarea", pipeWin: true },
  { need: "Ver el embudo de un vistazo", excel: "No existe", excelWin: false, pipe: "Arrastras y ves todo", pipeWin: true },
  { need: "Trabajar en equipo", excel: "Se pisan, versiones sueltas", excelWin: false, pipe: "Un solo lugar, con permisos", pipeWin: true },
  { need: "Historial de cada cliente", excel: "Disperso en correos y hojas", excelWin: false, pipe: "Todo el hilo en un lugar", pipeWin: true },
  { need: "Proyectar las ventas del mes", excel: "A mano, se desactualiza", excelWin: false, pipe: "Automática por etapa", pipeWin: true },
  { need: "Si un vendedor renuncia", excel: "El conocimiento se va con él", excelWin: false, pipe: "Queda en el sistema", pipeWin: true },
  { need: "Análisis y cálculo de números", excel: "Su terreno, imbatible", excelWin: true, pipe: "Exportas cuando lo necesitas", pipeWin: false },
];

const faqs = [
  { q: "¿Pipedrive reemplaza a Excel por completo?", a: "Para gestionar tus ventas, sí: contactos, seguimiento, embudo y proyección. Para análisis financiero o cálculos, Excel sigue siendo mejor, y puedes exportar tus datos de Pipedrive a una planilla cuando lo necesites. No compiten, se complementan." },
  { q: "¿Cuándo conviene dejar la planilla?", a: "Regla simple: si más de una persona toca la misma planilla, o si pierdes negocios por no hacer el seguimiento a tiempo, ya se te quedó chica. Ese suele ser el momento en que la planilla empieza a costarte plata en vez de ahorrártela." },
  { q: "¿Se pueden pasar mis datos de Excel a Pipedrive?", a: "Sí. Pipedrive importa directamente desde Excel o CSV. Con un mapeo ordenado de columnas a campos migras contactos, empresas y negocios sin perder el historial." },
  { q: "¿Cuánto cuesta Pipedrive frente a Excel?", a: "Excel ya lo pagas dentro de Office. Pipedrive parte en US$14 por usuario al mes. La diferencia real no está en la licencia, está en los negocios que dejas de perder cuando el seguimiento deja de depender de la memoria." },
  { q: "¿Necesito ayuda para implementarlo o lo hago solo?", a: "Un equipo pequeño suele partir bien por su cuenta. Cuando ya hay varios vendedores y un proceso que ordenar, un acompañamiento asegura que el equipo lo adopte y que el embudo refleje tu forma real de vender. Ahí está la diferencia entre un CRM que se usa y uno que se abandona." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function PipedriveVsExcelPage() {
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
            Pipedrive <span className="italic text-slate-400 text-3xl sm:text-5xl font-light">vs</span> <span className="text-slate-400">Excel</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Cuándo tu equipo deja de vender en planillas.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span>Comparativas</span>
            <span>/</span>
            <span className="text-slate-200">Pipedrive vs Excel</span>
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
            Para un vendedor solo con pocos negocios al mes, Excel basta y es gratis. Para un equipo comercial que ya pierde oportunidades por falta de seguimiento, gana Pipedrive: recuerda cada tarea, ordena el embudo y proyecta las ventas. La planilla registra lo que pasó; un CRM hace avanzar la venta.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            Casi ninguna pyme compra un CRM el primer día. Parte con una planilla, y funciona, hasta que deja de funcionar. Este es el punto exacto en que la planilla se convierte en un problema, y cómo saber si ya lo pasaste.
          </p>
          <p className="text-slate-600">
            Un CRM (sistema para gestionar tus clientes y ventas) y una planilla resuelven cosas distintas. Excel es una hoja de cálculo: imbatible para sumar, ordenar y analizar números. Pipedrive es un sistema de ventas: su trabajo es que ningún negocio se enfríe, que sepas en qué etapa está cada oportunidad y que puedas proyectar cuánto vas a cerrar. Cuando gestionas ventas en Excel, en el fondo le estás pidiendo a una calculadora que haga el trabajo de un vendedor ordenado.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “La planilla registra lo que pasó. <span className="italic text-[#017737]">Un CRM hace avanzar la venta.”</span>
        </blockquote>

        {/* Tabla Comparativa */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El cara a cara</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Lo que de verdad importa</h2>
          <p className="text-sm text-slate-500 mb-6">
            Olvida la lista de funciones. Estos son los criterios que deciden si tu equipo vende más o pierde negocios.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 bg-slate-50">
                  <th className="p-4 font-mono text-xs uppercase text-slate-500 font-semibold w-1/3">Lo que necesitas</th>
                  <th className="p-4 font-serif text-xl font-normal text-slate-900">Excel</th>
                  <th className="p-4 font-serif text-xl font-normal text-[#017737] bg-emerald-50/50">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="p-4 font-medium text-slate-900 align-top">{row.need}</td>
                    <td className="p-4 text-slate-600 align-top">
                      {row.excelWin && <span className="inline-block w-2 h-2 bg-slate-600 -skew-x-12 mr-2 align-middle"></span>}
                      {row.excel}
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
            <h3 className="font-serif text-2xl text-slate-900 mb-4">En qué gana Excel</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Es gratis y ya está en tu computador.</li>
              <li>Cero curva de aprendizaje, todos lo saben usar.</li>
              <li>Flexible para cálculos y análisis puntuales.</li>
              <li>Perfecto para un negocio de una persona.</li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h3 className="font-serif text-2xl text-[#017737] mb-4">En qué gana Pipedrive</h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>El seguimiento no depende de la memoria de nadie.</li>
              <li>Ves el embudo completo y dónde se atascan los negocios.</li>
              <li>Un solo lugar para el equipo, sin versiones sueltas.</li>
              <li>Proyección automática y nada se pierde con la rotación.</li>
            </ul>
          </div>
        </div>

        {/* Costo Oculto */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El costo oculto</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            La planilla no cobra licencia. Cobra oportunidad.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">72%</span>
              <p className="text-xs text-slate-600 mt-2">del tiempo de un vendedor no se dedica a vender, sino a tareas administrativas y de registro.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce, State of Sales</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+28%</span>
              <p className="text-xs text-slate-600 mt-2">de ingresos logran las empresas con un proceso de ventas formal frente a las que no lo tienen.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Harvard Business Review</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">US$8,71</span>
              <p className="text-xs text-slate-600 mt-2">de retorno promedio por cada dólar invertido en un CRM.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Nucleus Research</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            La pregunta útil no es cuánto cuesta una licencia. Es cuánto te cuesta cada negocio que se enfría porque nadie hizo el seguimiento a tiempo. Basta con recuperar uno o dos al mes para que la herramienta se pague sola.
          </p>
        </section>

        {/* Pasos Migración */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Migración</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">Cómo pasar de Excel a Pipedrive sin perder nada</h2>
          <p className="text-sm text-slate-500 mb-6">Migrar no es empezar de cero. Tus datos de la planilla son el punto de partida.</p>

          <ol className="space-y-4">
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Ordenamos tu planilla</strong>
                <p className="text-sm text-slate-600 m-0">Revisamos las columnas que ya tienes y las dejamos listas para importar como contactos, empresas y negocios.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Diseñamos tu embudo</strong>
                <p className="text-sm text-slate-600 m-0">Definimos las etapas reales de tu venta, no una plantilla genérica. Este es el paso que la mayoría se salta y por el que después el CRM no sirve.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">03</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Importamos todo</strong>
                <p className="text-sm text-slate-600 m-0">Pipedrive carga desde Excel o CSV. Pasan contactos, empresas y negocios con su historial, sin tipear de nuevo.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-2xl text-[#017737] font-semibold">04</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1">Activamos al equipo</strong>
                <p className="text-sm text-slate-600 m-0">Definimos actividades, responsables y recordatorios, y acompañamos las primeras semanas hasta que se vuelve costumbre.</p>
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
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Tu equipo ya no cabe en la planilla?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Calcula en dos minutos cuánto podrías estar dejando sobre la mesa, o conversemos sobre cómo ordenar tu proceso comercial sobre Pipedrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/calculadora-roi-pipedrive" className="bg-[#3E5BD9] hover:bg-[#4A67E6] text-white px-6 py-3.5 rounded-xl font-bold transition-colors text-sm">
              Calcula lo que pierdes con planillas
            </Link>
            <a 
              href={SCHEDULER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold border border-white/20 transition-colors text-sm"
            >
              Agenda un diagnóstico
            </a>
          </div>
          <p className="text-xs text-slate-400">
            ¿Prefieres partir por tu cuenta?{" "}
            <a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-[#7CCB98] underline hover:text-white">
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
