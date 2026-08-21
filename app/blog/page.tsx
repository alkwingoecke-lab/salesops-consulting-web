import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeaderManager } from "@/components/layout/HeaderManager";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog de Ventas y Operaciones B2B | SalesOps Consulting",
  description:
    "Artículos, estrategias y recursos sobre operaciones comerciales, diseño de embudos, CRM y cómo escalar tu equipo de ventas en Chile sin humo.",
  alternates: { canonical: "/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog de SalesOps",
  "description": "Estrategias de ventas y operaciones B2B para pymes",
  "publisher": {
    "@type": "Organization",
    "name": "SalesOps Consulting"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.salesopsconsulting.cl/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.salesopsconsulting.cl/blog" },
  ],
};

const activePosts = [
  {
    title: "Cómo diseñar un embudo de ventas que tu equipo sí quiera usar",
    excerpt: "Las etapas no se nombran por lo que hace el vendedor, sino por la decisión que toma el cliente. Aprende a mapear un proceso comercial que genere pronósticos reales y no fricción.",
    slug: "/blog/como-disenar-embudo-de-ventas",
    tag: "Estrategia CRM",
    date: "Agosto 2026",
  }
];

const upcomingPosts = [
  { title: "Por qué tu CRM no funciona (y no es culpa del software)", tag: "Operaciones" },
  { title: "El costo oculto de un vendedor haciendo tareas administrativas", tag: "Productividad" },
  { title: "Cuándo es el momento exacto para contratar un gerente de ventas", tag: "Escalamiento" },
];

const SCHEDULER_URL = "https://rf-salesopsconsultingspa.pipedrive.com/scheduler/x1JkBrCY/reunion-de-asesoria";

export default function BlogIndexPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen antialiased font-sans">
      <HeaderManager />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero / Cabecera */}
      <header className="bg-gradient-to-b from-[#0A1026] to-[#06070F] text-[#EEF1F6] border-b-2 border-[#35B06B] pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
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
            <span>Recursos y Estrategia</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white mb-4">
            Operaciones y Ventas B2B
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mb-6">
            Estrategias comprobadas para ordenar tu equipo comercial, implementar CRM con adopción real y dejar de perder negocios por falta de seguimiento.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Artículo Destacado */}
        <section className="mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Artículo Destacado</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="md:col-span-5 bg-slate-100 border-r border-slate-200 flex items-center justify-center p-8 relative overflow-hidden">
               {/* Gráfico decorativo de embudo para el destacado */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1E3A8A] to-transparent"></div>
               <div className="flex flex-col gap-2 w-full max-w-[200px] z-10">
                 <div className="h-6 w-full bg-[#1E3A8A] rounded-sm"></div>
                 <div className="h-6 w-[80%] mx-auto bg-[#3E5BD9] rounded-sm"></div>
                 <div className="h-6 w-[60%] mx-auto bg-[#8FA9E8] rounded-sm"></div>
                 <div className="h-6 w-[40%] mx-auto bg-[#35B06B] rounded-sm"></div>
               </div>
            </div>
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#3E5BD9] mb-3">
                {activePosts[0].tag} · {activePosts[0].date}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4 leading-tight">
                <Link href={activePosts[0].slug} className="hover:text-[#1E3A8A] transition-colors">
                  {activePosts[0].title}
                </Link>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {activePosts[0].excerpt}
              </p>
              <Link href={activePosts[0].slug} className="inline-block font-semibold text-[#017737] hover:text-[#35B06B] hover:underline transition-colors w-max">
                Leer artículo completo →
              </Link>
            </div>
          </div>
        </section>

        {/* Próximamente / Grilla de artículos */}
        <section className="mb-20">
          <div className="flex items-end justify-between border-b-2 border-slate-900 pb-2 mb-8">
            <h2 className="font-serif text-3xl font-normal text-slate-900">En el radar</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Próximas publicaciones</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingPosts.map((post, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-6 flex flex-col h-full opacity-70">
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 bg-slate-200 px-2 py-1 rounded w-max">
                  {post.tag}
                </span>
                <h3 className="font-serif text-2xl text-slate-600 mb-4 leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <span className="text-sm font-semibold text-slate-400">
                    Próximamente...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque CTA inferior */}
        <section className="bg-[#0A1122] text-white rounded-3xl p-8 sm:p-12 border-t-2 border-[#35B06B] text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7CCB98] font-semibold mb-3">
            De la teoría a la práctica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4 text-white">
            ¿Tu proceso comercial existe solo en el papel?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Leer sobre operaciones es el primer paso. El segundo es aplicarlo. Conversemos sobre los cuellos de botella de tu equipo y diseñemos un sistema que tus vendedores realmente quieran usar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={SCHEDULER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#3E5BD9] hover:bg-[#4A67E6] text-white px-8 py-3.5 rounded-xl font-bold transition-colors text-sm shadow-md"
            >
              Agenda un diagnóstico de tus ventas
            </a>
            <Link 
              href="/comparativas" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold border border-white/20 transition-colors text-sm"
            >
              Ver comparativas de CRM
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
