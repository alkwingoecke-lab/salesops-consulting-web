import type { Metadata } from "next";
import Link from "next/link";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

const FORM_URL = "https://webforms.pipedrive.com/f/cs71NsC9gaigrHlOs1TdIo7mCaKBAqhSvSeTdi2sAQgmmx4jIJYlZGh2Yc9VazEBqz";

export const metadata: Metadata = {
  title: "Pipedrive vs Excel: cuándo dejar las planillas de ventas | SalesOps",
  description:
    "Excel sirve para vender, hasta que deja de servir. Cuándo una planilla te está costando ventas y cuándo conviene pasar a Pipedrive. Guía honesta para pymes en Chile.",
  alternates: { canonical: "/comparativas/pipedrive-vs-excel" },
  openGraph: {
    title: "Pipedrive vs Excel: cuándo dejar las planillas",
    description: "Cuándo una planilla de ventas te está costando negocios.",
    url: "/comparativas/pipedrive-vs-excel",
    type: "article",
  },
};

const faqs = [
  { q: "¿Está mal llevar las ventas en Excel?", a: "No al principio. Con uno o dos vendedores y pocos negocios, una planilla puede bastar. El problema aparece cuando el equipo crece, se pierden seguimientos y el conocimiento vive en la cabeza de cada persona en vez de en un sistema." },
  { q: "¿Cuándo conviene pasar de Excel a un CRM?", a: "Cuando ya se te escapan oportunidades por falta de seguimiento, cuando no sabes cuánto vas a cerrar hasta fin de mes, o cuando si se va un vendedor se lleva su cartera. Esos son los tres síntomas clásicos de que la planilla llegó a su techo." },
  { q: "¿Qué gano con Pipedrive que Excel no me da?", a: "Seguimiento automático con recordatorios, historial completo por cliente, proyección de cierres basada en datos, y visibilidad para la gerencia en tiempo real. Todo lo que en Excel depende de que alguien lo actualice a mano." },
  { q: "¿Es caro migrar de Excel a Pipedrive?", a: "La licencia de Pipedrive es de bajo costo por usuario, y la implementación se cotiza según la complejidad. Importar tu planilla histórica es parte estándar del proceso." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.salesopsconsulting.cl" },
        { "@type": "ListItem", "position": 2, "name": "Comparativas", "item": "https://www.salesopsconsulting.cl/comparativas/pipedrive-vs-excel" },
        { "@type": "ListItem", "position": 3, "name": "Pipedrive vs Excel" },
      ],
    },
  ],
};

const filas = [
  ["Costo directo", "Gratis (ya lo tienes)", "Licencia por usuario + implementación"],
  ["Seguimiento", "Manual, depende de la memoria", "Automático, con recordatorios"],
  ["Historial por cliente", "Disperso o inexistente", "Completo y centralizado"],
  ["Proyección de cierres", "A ojo", "Basada en datos del embudo"],
  ["Si se va un vendedor", "Se lleva la información", "La cartera queda en el sistema"],
  ["Al crecer el equipo", "Se rompe y se duplica", "Escala sin perder control"],
];

export default function Page() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen antialiased font-sans">
      <HeaderManager />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-[#2D3F8F] font-bold mb-3">Comparativa · CRM</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight mb-6">
          Pipedrive vs Excel: cuándo dejar las planillas
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Seamos justos: Excel es una herramienta extraordinaria y muchas empresas empezaron a vender con una planilla. El punto no es que Excel sea malo, es que no fue hecho para gestionar ventas, y llega un momento en que sostenerlo cuesta más de lo que ahorra.
        </p>

        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight mb-6">Frente a frente</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0F172A] text-white text-left">
                <th className="p-4 font-semibold">Dimensión</th>
                <th className="p-4 font-semibold">Excel / planillas</th>
                <th className="p-4 font-semibold">Pipedrive</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) => (
                <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="p-4 font-semibold text-[#0F172A] align-top">{f[0]}</td>
                  <td className="p-4 text-slate-700 align-top">{f[1]}</td>
                  <td className="p-4 text-slate-700 align-top">{f[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight mb-4">Los tres síntomas de que la planilla llegó a su techo</h2>
        <p className="text-base text-slate-600 leading-relaxed mb-8">
          No sabes cuánto vas a cerrar hasta el día 25. Tus vendedores pierden la mitad del día en tareas que no son vender. Y si se va tu mejor vendedor, se lleva la cartera con él. Si alguna de estas te suena, no necesitas una planilla mejor, necesitas un sistema.
        </p>

        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight mb-4">Nuestra recomendación honesta</h2>
        <p className="text-base text-slate-600 leading-relaxed mb-10">
          Si recién partes y vendes tú solo, quédate en Excel un rato más, no gastes de más. Pero si ya tienes equipo y estás perdiendo oportunidades por desorden, cada mes en planilla es dinero que se queda en la mesa. Ahí Pipedrive se paga solo, y por eso construimos una calculadora para que veas el número con tus propios datos.
        </p>
        <div className="mb-12">
          <Link href="/calculadora-roi-pipedrive" className="inline-flex items-center gap-2 bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold text-[#0F172A] hover:border-[#2D3F8F] transition-colors">
            Calcular cuánto pierdo hoy
          </Link>
        </div>

        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight mb-6">Preguntas frecuentes</h2>
        <div className="space-y-3 mb-12">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-slate-200 rounded-2xl p-6 group">
              <summary className="font-bold text-base cursor-pointer list-none flex justify-between items-center">
                <span>{f.q}</span>
                <span className="text-[#2D3F8F] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-3">¿Tu planilla ya te queda chica?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Agenda un diagnóstico de 30 minutos y evaluamos si es momento de dar el salto.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={FORM_URL} className="bg-[#2D3F8F] text-white px-8 py-3.5 rounded-xl font-bold">Agendar diagnóstico</a>
            <Link href="/servicios/implementacion-pipedrive" className="bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold border border-white/20">Ver implementación de Pipedrive</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
