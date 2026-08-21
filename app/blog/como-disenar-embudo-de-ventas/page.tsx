import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cómo diseñar tu embudo de ventas (y montarlo en Pipedrive) | SalesOps",
  description:
    "Guía práctica para diseñar las etapas de tu embudo de ventas según cómo compra tu cliente, los errores que lo arruinan y cómo montarlo en Pipedrive.",
  alternates: { canonical: "/blog/como-disenar-embudo-de-ventas" },
  openGraph: {
    title: "Cómo diseñar tu embudo de ventas (y montarlo en Pipedrive)",
    description:
      "Guía práctica para diseñar las etapas de tu embudo de ventas según cómo compra tu cliente y los errores que lo arruinan.",
    url: "/blog/como-disenar-embudo-de-ventas",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuántas etapas debe tener un embudo de ventas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre cinco y siete en la mayoría de los casos. Con menos pierdes control del avance; con más, se llena de etapas que nadie mantiene y el embudo deja de reflejar la realidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el error más común al diseñar un embudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definir las etapas por lo que hace el vendedor (llamar, cotizar, hacer seguimiento) en vez de por dónde está el cliente en su decisión. Ese error hace que el embudo se vea lleno pero no sirva para proyectar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar una plantilla de embudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como punto de partida sí, pero copiarla tal cual es la razón principal por la que un CRM termina abandonado. Tu embudo debe reflejar cómo compra tu cliente, no cómo vende una empresa cualquiera.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito un CRM para tener un embudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes diseñarlo en papel, y de hecho conviene diseñarlo antes de tocar ningún software. Pero sin un CRM como Pipedrive no tienes recordatorios, proyección ni visibilidad para el equipo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cada cuánto se revisa el embudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al menos una vez por trimestre, y cada vez que cambian tus tasas de conversión o tu forma de vender. El embudo es un mapa vivo, no un dibujo que se hace una vez.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.salesopsconsulting.cl/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.salesopsconsulting.cl/blog" },
    { "@type": "ListItem", position: 3, name: "Cómo diseñar tu embudo de ventas", item: "https://www.salesopsconsulting.cl/blog/como-disenar-embudo-de-ventas" },
  ],
};

const faqs = [
  { q: "¿Cuántas etapas debe tener un embudo de ventas?", a: "Entre cinco y siete en la mayoría de los casos. Con menos pierdes control del avance; con más, se llena de etapas que nadie mantiene y el embudo deja de reflejar la realidad." },
  { q: "¿Cuál es el error más común al diseñar un embudo?", a: "Definir las etapas por lo que hace el vendedor (llamar, cotizar, hacer seguimiento) en vez de por dónde está el cliente en su decisión. Ese error hace que el embudo se vea lleno pero no sirva para proyectar." },
  { q: "¿Puedo usar una plantilla de embudo?", a: "Como punto de partida sí, pero copiarla tal cual es la razón principal por la que un CRM termina abandonado. Tu embudo debe reflejar cómo compra tu cliente, no cómo vende una empresa cualquiera." },
  { q: "¿Necesito un CRM para tener un embudo?", a: "Puedes diseñarlo en papel, y de hecho conviene diseñarlo antes de tocar ningún software. Pero sin un CRM como Pipedrive no tienes recordatorios, proyección ni visibilidad para el equipo." },
  { q: "¿Cada cuánto se revisa el embudo?", a: "Al menos una vez por trimestre, y cada vez que cambian tus tasas de conversión o tu forma de vender. El embudo es un mapa vivo, no un dibujo que se hace una vez." },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";
const AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

export default function DisenarEmbudoBlogPage() {
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
            <span>Guía de ventas · 2026</span>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-[#7CCB98] font-semibold mb-3">
            Gestión comercial
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white mb-4">
            Cómo diseñar tu embudo de ventas
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-xl mb-6">
            Y montarlo en Pipedrive sin copiar una plantilla genérica.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-200">Cómo diseñar tu embudo</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Respuesta Corta */}
        <div className="bg-white border border-slate-200 border-l-4 border-l-[#017737] rounded-xl p-6 shadow-sm mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#017737] font-bold block mb-2">
            En una frase
          </span>
          <p className="text-base text-slate-700 leading-relaxed m-0">
            Un embudo de ventas es el mapa de etapas por las que pasa una oportunidad, del primer contacto al cierre. La clave está en definir esas etapas según cómo compra tu cliente, no según lo que hace el vendedor. Ese detalle separa un CRM que se usa de uno que se abandona.
          </p>
        </div>

        {/* Intro */}
        <section className="space-y-4 mb-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            Todos tienen un embudo de ventas, aunque nunca lo hayan dibujado. El problema es que la mayoría lo tiene en la cabeza de una sola persona, y ahí no sirve para proyectar, delegar ni mejorar.
          </p>
          <p className="text-slate-600">
            Un embudo (también llamado pipeline) es la secuencia de etapas que recorre un negocio hasta cerrarse. Diseñarlo bien es lo que hace que un CRM sirva de verdad. Y la razón número uno por la que un CRM termina abandonado es justo esta: alguien copió un embudo de plantilla que no tenía nada que ver con su forma real de vender.
          </p>
        </section>

        {/* Pullquote */}
        <blockquote className="my-12 py-8 border-y border-slate-200 text-center font-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
          “Un embudo no se copia. <span className="italic text-[#017737]">Se diseña a partir de cómo compra tu cliente.”</span>
        </blockquote>

        {/* El Principio */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">El principio</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Un embudo es un mapa de decisiones, no una lista de tareas</h2>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed">
            <p>
              Cada etapa debería representar un cambio en la decisión del cliente, no una tarea que hace el vendedor. Es la diferencia entre una etapa llamada "enviar cotización" (algo que tú haces) y una llamada "propuesta en evaluación" (dónde está el cliente). La primera no te dice nada: puedes haber enviado la cotización a alguien que nunca la va a mirar. La segunda te dice en qué punto real de la decisión está el negocio.
            </p>
            <p>
              Cuando las etapas describen tus tareas y no la decisión del cliente, el embudo miente. Se ve lleno, pero no puedes proyectar con él, porque estar "cotizado" no significa estar cerca de cerrar.
            </p>
          </div>
        </section>

        {/* Gráfico del Embudo SVG */}
        <section className="mb-14 pt-8 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Un ejemplo</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-8">Así se ve un embudo por decisiones</h2>
          
          <figure className="my-10 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <svg viewBox="0 0 660 410" role="img" aria-label="Embudo de ventas de ejemplo con cinco etapas nombradas por la decision del cliente" className="w-full h-auto max-w-xl mx-auto block drop-shadow-sm">
              {/* Etapas normales */}
              <polygon className="fill-[#E8ECF7] stroke-[#1E3A8A] stroke-[1.2]" points="80,28 580,28 548,100 112,100"/>
              <polygon className="fill-[#E8ECF7] stroke-[#1E3A8A] stroke-[1.2]" points="112,102 548,102 516,174 144,174"/>
              <polygon className="fill-[#E8ECF7] stroke-[#1E3A8A] stroke-[1.2]" points="144,176 516,176 484,248 176,248"/>
              <polygon className="fill-[#E8ECF7] stroke-[#1E3A8A] stroke-[1.2]" points="176,250 484,250 452,322 208,322"/>
              {/* Etapa Ganado */}
              <polygon className="fill-[#E4F0E9] stroke-[#017737] stroke-[1.6]" points="208,324 452,324 420,396 240,396"/>
              {/* Textos */}
              <text className="fill-slate-900 font-sans text-[15px] font-medium" x="330" y="69" textAnchor="middle">Prospecto</text>
              <text className="fill-slate-900 font-sans text-[15px] font-medium" x="330" y="143" textAnchor="middle">Contactado</text>
              <text className="fill-slate-900 font-sans text-[15px] font-medium" x="330" y="217" textAnchor="middle">Necesidad confirmada</text>
              <text className="fill-slate-900 font-sans text-[15px] font-medium" x="330" y="291" textAnchor="middle">Propuesta enviada</text>
              <text className="fill-slate-900 font-sans text-[15px] font-bold" x="330" y="365" textAnchor="middle">Ganado</text>
            </svg>
            <figcaption className="text-sm text-slate-500 mt-8 max-w-xl mx-auto text-center leading-relaxed">
              Un embudo de ejemplo. Cada etapa nombra un cambio en la decisión del cliente, no una tarea del vendedor. Se estrecha porque no todas las oportunidades avanzan: arriba entran muchas, abajo quedan las que de verdad van a cerrar.
            </figcaption>
          </figure>
        </section>

        {/* Paso a paso */}
        <section className="mb-14 pt-8 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Paso a paso</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Cómo diseñar tus etapas</h2>

          <ol className="space-y-4">
            <li className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-serif text-3xl text-[#017737] font-semibold leading-none">01</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1 text-lg">Mapea cómo compra tu cliente, no cómo vendes tú</strong>
                <p className="text-sm text-slate-600 m-0">Dibuja el camino desde que aparece un interesado hasta que firma, mirándolo desde su lado.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-serif text-3xl text-[#017737] font-semibold leading-none">02</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1 text-lg">Define cada etapa como un hito verificable</strong>
                <p className="text-sm text-slate-600 m-0">Algo cambió en la decisión del cliente, no algo que tú hiciste. "Necesidad confirmada", no "primera llamada".</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-serif text-3xl text-[#017737] font-semibold leading-none">03</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1 text-lg">Ponle un criterio de avance a cada etapa</strong>
                <p className="text-sm text-slate-600 m-0">Qué tiene que ser verdad para pasar a la siguiente. Sin ese criterio, todo se queda "en proceso" para siempre.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-serif text-3xl text-[#017737] font-semibold leading-none">04</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1 text-lg">Limita el número de etapas</strong>
                <p className="text-sm text-slate-600 m-0">Entre cinco y siete bastan. Más etapas es humo que nadie mantiene y que hace ver el embudo más ordenado de lo que está.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-serif text-3xl text-[#017737] font-semibold leading-none">05</span>
              <div>
                <strong className="block text-slate-900 font-semibold mb-1 text-lg">Define qué es un lead calificado y qué es perdido</strong>
                <p className="text-sm text-slate-600 m-0">Y por qué. Sin esas dos fronteras, el embudo se llena de negocios que nunca fueron reales.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Lo que evitar & Pipedrive (Dos Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-2xl border border-slate-200 mb-14 shadow-sm">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Lo que evitar</span>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Los errores que lo arruinan</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
                Etapas basadas en tus tareas (llamar, cotizar) en vez de en la decisión del cliente.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
                Demasiadas etapas: nadie las mantiene y el embudo termina mintiendo.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
                No definir el criterio de avance, así que todo vive "en proceso" sin salida.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
                Usar el embudo como archivo muerto y no como herramienta diaria.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#1E3A8A] -skew-x-12"></span>
                No cerrar los negocios perdidos, que inflan el embudo y arruinan el pronóstico.
              </li>
            </ul>
          </div>
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#017737] font-bold block mb-2">En la herramienta</span>
            <h3 className="font-serif text-2xl text-[#017737] mb-4">Cómo se monta en Pipedrive</h3>
            <p className="text-sm text-slate-600 mb-4">Con las etapas ya definidas, Pipedrive las vuelve operables sin complicaciones. El trabajo real de diseño es previo.</p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#017737] -skew-x-12"></span>
                Cada etapa es una columna que arrastras, ves todo de un vistazo.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#017737] -skew-x-12"></span>
                Actividades obligatorias para que ningún negocio quede sin próximo paso.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#017737] -skew-x-12"></span>
                Solo campos clave, para que el equipo lo llene en vez de evitarlo.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#017737] -skew-x-12"></span>
                Probabilidad por etapa, que convierte tu embudo en pronóstico.
              </li>
            </ul>
          </div>
        </div>

        {/* Estadísticas */}
        <section className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Por qué vale la pena</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">
            Un embudo bien diseñado no es burocracia
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+28%</span>
              <p className="text-xs text-slate-600 mt-2">de ingresos logran las empresas con un proceso de ventas formal frente a las que no lo tienen.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Harvard Business Review</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">72%</span>
              <p className="text-xs text-slate-600 mt-2">del tiempo de un vendedor no se dedica a vender; un proceso claro recupera parte de eso.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce, State of Sales</span>
            </div>
            <div className="border-t-2 border-slate-900 pt-3">
              <span className="font-serif text-4xl sm:text-5xl text-slate-900 block leading-tight">+42%</span>
              <p className="text-xs text-slate-600 mt-2">de mejora en la precisión del pronóstico con un CRM bien usado.</p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mt-2">Salesforce</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Diseñar el embudo es lo que separa a quien proyecta de quien adivina. No es llenar casillas, es saber, a mitad de mes, cuánto vas a cerrar.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-14 pt-8 border-t border-slate-200">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Preguntas frecuentes</p>
          <h2 className="font-serif text-3xl font-normal text-slate-900 mb-6">Dudas habituales</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-2xl p-6 group shadow-sm">
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
        <div className="bg-[#0A1122] text-white rounded-3xl p-8 sm:p-10 border-t-2 border-[#35B06B] text-center shadow-lg">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7CCB98] font-semibold mb-2">El siguiente paso</p>
          <h2 className="font-serif text-3xl font-normal mb-3 text-white">¿Quieres que tu embudo refleje cómo vendes de verdad?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Diseñamos tu proceso comercial y lo montamos en Pipedrive, con tu equipo usándolo desde el primer día. Partamos por un diagnóstico.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a 
              href={SCHEDULER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#3E5BD9] hover:bg-[#4A67E6] text-white px-6 py-3.5 rounded-xl font-bold transition-colors text-sm shadow-md"
            >
              Agenda un diagnóstico
            </a>
            <Link href="/calculadora-roi-pipedrive" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold border border-white/20 transition-colors text-sm">
              Calcula tu retorno
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            ¿Aún no tienes Pipedrive?{" "}
            <a 
              href={AFFILIATE_URL} 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              className="text-[#7CCB98] underline hover:text-white"
            >
              Créalo aquí
            </a>{" "}
            y parte con una prueba extendida.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
