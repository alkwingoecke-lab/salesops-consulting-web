import { useState, useEffect, useRef } from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const _f = (() => {
  const l = document.createElement("link");
  l.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700;800&display=swap";
  l.rel = "stylesheet";
  document.head.appendChild(l);
})();
const F = { d: "'Instrument Serif', Georgia, serif", b: "'Outfit', system-ui, sans-serif" };

/* ── Light Theme Brand Colors (OSCURECIDOS PARA LEGIBILIDAD) ── */
const C = {
  bg: "#ffffff", bg2: "#f8fafc", bg3: "#f1f5f9",
  card: "#f8fafc", cardHover: "#f1f5f9",
  border: "#e2e8f0", borderDark: "#cbd5e1",
  blue: "#2d3f8f", blueLight: "#4361c2", blueBright: "#3b5bdb",
  blueSoft: "rgba(45,63,143,0.06)", blueGlow: "rgba(45,63,143,0.15)",
  navy: "#020617",  /* Negro mucho más profundo */
  red: "#dc3545", redSoft: "rgba(220,53,69,0.05)", redBorder: "rgba(220,53,69,0.12)",
  amber: "#b8860b", amberSoft: "rgba(184,134,11,0.06)",
  green: "#017737", greenSoft: "rgba(1,119,55,0.05)", greenBorder: "rgba(1,119,55,0.12)",
  w: "#0f172a",     /* Texto primario: Gris súper oscuro casi negro */
  g: "#334155",     /* Texto secundario: Gris sólido, adiós al gris claro */
  m: "#64748b",     /* Texto terciario: Gris medio visible */
  d: "#cbd5e1",
};

/* ── Hooks ── */
function useVis(th = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: th });
    o.observe(el); return () => o.disconnect();
  }, []); return [ref, v];
}
function FI({ children, delay = 0, style = {} }) {
  const [r, v] = useVis();
  return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(18px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>{children}</div>;
}

/* ── Logo (dark version for light bg) ── */
function Logo({ size = 28 }) {
  return (
    <svg width={size * 1.3} height={size} viewBox="0 0 52 40" fill="none">
      <path d="M8 2 L48 2 L44 12 L4 12 Z" fill={C.navy} />
      <path d="M6 16 L46 16 L42 26 L2 26 Z" fill={C.navy} />
      <path d="M4 30 L44 30 L40 40 L0 40 Z" fill={C.blue} />
    </svg>
  );
}

function Tag({ children, color = C.blue, bg = C.blueSoft }) {
  return <span style={{ fontFamily: F.b, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color, background: bg, padding: "5px 14px", borderRadius: 4, display: "inline-block" }}>{children}</span>;
}

/* ── Social Links ── */
function SocialLinks({ size = 18, gap = 16, color = C.m }) {
  return (
    <div style={{ display: "flex", gap, alignItems: "center" }}>
      <a href="https://www.linkedin.com/company/salesops-consulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color, transition: "color 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.color = C.blue} onMouseLeave={e => e.currentTarget.style.color = color}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a href="https://www.instagram.com/salesopsconsulting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color, transition: "color 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.color = C.blue} onMouseLeave={e => e.currentTarget.style.color = color}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61589963015210&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color, transition: "color 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.color = C.blue} onMouseLeave={e => e.currentTarget.style.color = color}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
    </div>
  );
}

/* ── Nav ── */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => { const h = () => setS(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  
  // 1. CAMBIAMOS "Hablemos" por "Tecnología" y lo apuntamos a "#tecnologia"
  const links = [["El problema", "#problema"], ["Nuestro método", "#metodo"], ["Autoevaluación", "#eval"], ["A quién ayudamos", "#quien"], ["Tecnología", "#tecnologia"]];
  
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: s ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: s ? "blur(16px)" : "none", borderBottom: `1px solid ${s ? C.border : "transparent"}`, transition: "all 0.35s" }}>
      {/* 2. AMPLIAMOS EL ESPACIO: Cambiamos maxWidth a 1300 (antes 1120) y dimos más padding */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          {/* 3. LOGO MÁS GRANDE (size 32) y textos un punto más grandes */}
          <Logo size={32} />
          <span style={{ fontFamily: F.b, fontWeight: 800, fontSize: 19, color: C.w, letterSpacing: "0.04em" }}>SALESOPS</span>
          <span style={{ fontFamily: F.b, fontWeight: 500, fontSize: 13, color: C.g, letterSpacing: "0.1em", marginLeft: -4 }}>CONSULTING</span>
        </a>
        
        {/* 4. MÁS ESPACIO ENTRE PESTAÑAS: Cambiamos el gap a 40 (antes 28) */}
        <div className="nav-links" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {links.map(([l, h]) => (
            <a key={h} href={h} style={{ fontFamily: F.b, fontSize: 15, fontWeight: 500, color: C.w, textDecoration: "none", transition: "color 0.2s" }}
               onMouseEnter={e => e.target.style.color = C.blue}
               onMouseLeave={e => e.target.style.color = C.w}>
              {l}
            </a>
          ))}
          {/* Botón un poco más espacioso */}
          <a href="#contacto" style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: "#fff", background: C.blue, padding: "12px 28px", borderRadius: 6, textDecoration: "none" }}>Conversemos</a>
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,63,143,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ textAlign: "center", maxWidth: 740, position: "relative", zIndex: 1 }}>
        <FI><div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}><Logo size={38} /></div></FI>
        <FI delay={0.1}>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(40px,6vw,64px)", fontWeight: 400, color: C.w, lineHeight: 1.08, margin: "0 0 28px" }}>
            Del caos comercial<br /><em style={{ color: C.blue }}>a un sistema predecible, rentable y escalable.</em>
          </h1>
        </FI>
        <FI delay={0.2}>
          <p style={{ fontFamily: F.b, fontSize: 18, color: C.g, lineHeight: 1.7, margin: "0 auto 44px", fontWeight: 400, maxWidth: 580 }}>
            Consultoría de ventas y tecnología para empresas B2B que buscan optimizar recursos e implementar procesos. Te ayudamos a sistematizar tus ventas para que tu equipo opere con orden, claridad y resultados que puedas anticipar y proyectar.
          </p>
        </FI>
        <FI delay={0.3}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#eval" style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: "#fff", background: C.blue, padding: "15px 36px", borderRadius: 8, textDecoration: "none", boxShadow: `0 4px 24px ${C.blueGlow}` }}>Evalúa gratis tu área comercial</a>
            <a href="#metodo" style={{ fontFamily: F.b, fontSize: 14, fontWeight: 400, color: C.g, border: `1px solid ${C.border}`, padding: "15px 36px", borderRadius: 8, textDecoration: "none" }}>Conocer el método</a>
          </div>
        </FI>
        <FI delay={0.4}>
          <p style={{ fontFamily: F.b, fontSize: 11, color: C.m, marginTop: 52, letterSpacing: "0.1em", fontWeight: 500 }}>ASESORÍA EN GESTIÓN COMERCIAL · CHILE Y LATINOAMÉRICA</p>
        </FI>
      </div>
    </section>
  );
}

/* ── Problema ── */
function Problema() {
  const pains = [
    { q: "No sé cuánto vamos a cerrar este mes hasta el día 25.", s: "Proyecciones basadas en intuición, no en información real." },
    { q: "Mis vendedores pierden la mitad del día en tareas que no son vender.", s: "Sin un sistema claro, la administración consume al equipo." },
    { q: "Si se va mi mejor vendedor, se lleva la cartera con él.", s: "Cuando el conocimiento vive en las personas y no en el sistema, todo es frágil." },
    { q: "Yo sigo siendo el que cierra los negocios importantes.", s: "El dueño atrapado en la operación diaria de ventas." },
  ];
  return (
    <section id="problema" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><Tag color={C.red} bg={C.redSoft}>El problema</Tag></FI>
      <FI delay={0.08}>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(28px,4.5vw,44px)", color: C.w, lineHeight: 1.12, margin: "18px 0 10px", fontWeight: 400 }}>
          Tu empresa vende.<br /><span style={{ color: C.m }}>Pero no sabes cuánto va a vender mañana.</span>
        </h2>
      </FI>
      <FI delay={0.12}><p style={{ fontFamily: F.b, fontSize: 16, color: C.g, margin: "0 0 40px", maxWidth: 580, fontWeight: 400, lineHeight: 1.65 }}>
        Estas son frases reales de dueños de empresas B2B. Si alguna te suena familiar, es probable que tu proceso de ventas necesite más que esfuerzo individual, necesite estructura.
      </p></FI>
      
      {/* AQUÍ ESTÁ LA SOLUCIÓN: Cambiamos a "1fr 1fr" para forzar 2 columnas exactas */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {pains.map((p, i) => (
          <FI key={i} delay={0.06 + i * 0.05}>
            <div style={{ background: C.redSoft, border: `1px solid ${C.redBorder}`, borderRadius: 12, padding: "26px 24px", height: "100%", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <p style={{ fontFamily: F.d, fontSize: 19, color: C.w, fontStyle: "italic", lineHeight: 1.4, margin: "0 0 12px", fontWeight: 500 }}>"{p.q}"</p>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.w, margin: 0, fontWeight: 400, lineHeight: 1.5 }}>{p.s}</p>
            </div>
          </FI>
        ))}
      </div>
      
     <FI delay={0.35}>
        <div style={{ marginTop: 36, padding: "30px 34px", borderRadius: 12, background: C.bg2, border: `1px solid ${C.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
          {/* Aumentamos el tamaño a 18 y el interlineado a 1.7 para que se lea perfecto */}
          <p style={{ fontFamily: F.b, fontSize: 18, color: C.w, margin: 0, lineHeight: 1.7, fontWeight: 400 }}>
            <strong style={{ color: C.w, fontWeight: 700 }}>Ves el desorden de tu equipo y la falta de cierres, pero esos son solo los síntomas. </strong>
            Las verdaderas causas de tu estancamiento son invisibles a simple vista: procesos rotos y falta de control operativo. 
            <strong style={{ color: C.w, fontWeight: 700 }}> Antes de exigir más ventas, necesitas reparar la estructura.</strong>
          </p>
        </div>
      </FI>
    </section>
  );
}

/* ── Valor ── */
/* ── Valor ── */
function Valor() {
  const L = ["No sé cuánto vamos a cerrar este mes.", "Los vendedores pierden medio día en tareas administrativas.", "Si se va alguien clave, el negocio sufre.", "Yo sigo cerrando los negocios importantes."];
  const R = ["La proyección del trimestre tiene menos de 15% de desviación.", "Cada vendedor recuperó 8 horas semanales para dedicar a vender.", "Un vendedor nuevo opera al 80% en un mes, gracias al sistema documentado.", "Mi equipo cierra negocios sin que yo esté presente."];
  
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><div style={{ textAlign: "center", marginBottom: 44 }}>
        <Tag>El cambio concreto</Tag>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(28px,4vw,40px)", color: C.w, lineHeight: 1.12, margin: "18px 0 8px", fontWeight: 400 }}>
          La diferencia entre depender de personas<br /><em style={{ color: C.blue }}>y confiar en un sistema.</em>
        </h2>
      </div></FI>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <FI delay={0.1}><div>
          <p style={{ fontFamily: F.b, fontSize: 13, fontWeight: 700, color: C.red, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Sin sistema</p>
          {L.map((t, i) => (
            <div key={i} style={{ padding: "18px 22px", borderRadius: 10, marginBottom: 12, background: C.redSoft, borderLeft: "4px solid rgba(220,53,69,0.4)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              {/* TAMAÑO 16px, COLOR NAVY (NEGRO), PESO 500 */}
              <p style={{ fontFamily: F.b, fontSize: 16, color: C.navy, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>"{t}"</p>
            </div>
          ))}
        </div></FI>
        
        <FI delay={0.2}><div>
          <p style={{ fontFamily: F.b, fontSize: 13, fontWeight: 700, color: C.blue, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Con sistema</p>
          {R.map((t, i) => (
            <div key={i} style={{ padding: "18px 22px", borderRadius: 10, marginBottom: 12, background: C.blueSoft, borderLeft: "4px solid rgba(45,63,143,0.4)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              {/* TAMAÑO 16px, COLOR NAVY (NEGRO), PESO 600 PARA DESTARCAR LO POSITIVO */}
              <p style={{ fontFamily: F.b, fontSize: 16, color: C.navy, margin: 0, lineHeight: 1.5, fontWeight: 600 }}>"{t}"</p>
            </div>
          ))}
        </div></FI>
      </div>
      
      <FI delay={0.3}>
        <div style={{ marginTop: 40, background: C.bg, border: `1px solid ${C.border}`, borderTop: `6px solid ${C.blue}`, borderRadius: 12, padding: "32px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          {/* CIERRE GIGANTE: TAMAÑO 19px, COLOR NAVY (NEGRO), PESO 600 */}
          <p style={{ fontFamily: F.b, fontSize: 19, color: C.navy, margin: 0, lineHeight: 1.5, fontWeight: 600 }}>
            Con esta transición dejarás de quemar plata en esfuerzos comerciales desarticulados y construyes un motor de ingresos predecible, sostenido por una estructura comercial sólida y rentable.
          </p>
        </div>
      </FI>
      
    </section>
  );
}

/* ── Método TAG ── */
function Metodo() {
  const ps = [
    { l: "T", t: "Análisis", sub: "Diagnosticamos profundamente antes de operar", desc: "Revisamos a fondo tres dimensiones: las personas del equipo, los procesos que siguen y las herramientas que usan. Entregamos un informe completo, con la descripción por área, con puntos de dolor, puntuación de 0 a 100 y las acciones necesarias para optimizar tu operación.", foot: " ", c: C.blue },
    { l: "A", t: "Arquitectura", sub: "Construimos y Optimizamos tu sistema operativo de ventas", desc: "Ordenamos tu CRM para que sea una herramienta de decisión, no un archivo muerto. Documentamos guiones de venta reales, armamos tableros de proyección claros y te ayudamos a definir la compensación de tu equipo.", foot: "Seis a ocho semanas. CRM Principal: Pipedrive, pero nos adaptamos a tu stack.", c: "#6366f1" },
    { l: "G", t: "Gobernanza", sub: "Lideramos la ejecución del día a día", desc: "Te ofrecemos un Líder Comercial Externo a tiempo parcial que lidera al equipo, acompaña a cada vendedor y se asegura de que cada proceso del sistema funcione y se cumplan las proyecciones. A una fracción del costo de una contratación directa.", foot: "Te acompañamos y preparamos el camino para que un día no nos necesites", c: C.amber },
  ];
  return (
    <section id="metodo" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><div style={{ textAlign: "center", marginBottom: 48 }}>
        <Tag>Nuestro método</Tag>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(32px,5vw,50px)", color: C.w, margin: "18px 0 6px", fontWeight: 400 }}>Método TAG</h2>
        <p style={{ fontFamily: F.b, fontSize: 16, color: C.g, fontWeight: 400 }}>Tres etapas consecutivas. Cada una prepara el terreno para la siguiente.</p>
      </div></FI>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {ps.map((p, i) => (
          <FI key={i} delay={0.06 + i * 0.07}>
            {/* Sombras mejoradas y bordes más notorios */}
            <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderTop: `4px solid ${p.c}`, borderRadius: 12, padding: "32px 26px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
              <span style={{ fontFamily: F.d, fontSize: 48, color: p.c, lineHeight: 1, opacity: 0.8 }}>{p.l}</span>
              <h3 style={{ fontFamily: F.b, fontSize: 22, fontWeight: 700, color: C.w, margin: "12px 0 6px" }}>{p.t}</h3>
              {/* Subtítulos más gruesos y oscuros */}
              <p style={{ fontFamily: F.b, fontSize: 14, color: p.c, margin: "0 0 16px", fontWeight: 600 }}>{p.sub}</p>
              {/* Texto principal en color negro (C.w) y peso 400 en vez de 300 */}
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.w, lineHeight: 1.65, margin: "0 0 16px", fontWeight: 400, flex: 1 }}>{p.desc}</p>
              {/* Footer de tarjeta más oscuro */}
              <p style={{ fontFamily: F.b, fontSize: 12, color: C.g, margin: 0, fontStyle: "italic", borderTop: `1px solid ${C.border}`, paddingTop: 14, fontWeight: 400 }}>{p.foot}</p>
            </div>
          </FI>
        ))}
      </div>
    </section>
  );
}

/* ── Autoevaluación ── */
const QS = [
  { q: "¿Puedes anticipar con precisión cuánto va a cerrar tu equipo este mes?", a: ["Sí, con información actualizada del CRM", "Tengo una idea aproximada", "Recién lo sé cuando termina el mes", "No tengo forma de saberlo"] },
  { q: "¿Tu equipo comercial sigue un proceso de venta documentado y compartido?", a: ["Sí, con guiones y pasos definidos", "Hay lineamientos generales pero no se siguen siempre", "Cada vendedor tiene su propio estilo", "No existe nada formal"] },
  { q: "¿Cómo se usa el CRM (la herramienta donde registran oportunidades)?", a: ["Es nuestra herramienta central de decisión", "Existe pero los datos están incompletos", "Lo tienen pero casi nadie lo usa bien", "No tenemos o usamos planillas sueltas"] },
  { q: "¿Qué porcentaje de tu tiempo como dueño se va en cerrar ventas personalmente?", a: ["Menos del 15%", "Entre 15% y 30%", "Entre 30% y 50%", "Más de la mitad de mi tiempo"] },
  { q: "Si tu mejor vendedor se va mañana, ¿cuánto tarda su reemplazo en alcanzar buen rendimiento?", a: ["Menos de un mes (hay sistema documentado)", "Uno a tres meses", "Tres a seis meses", "No sé, nunca lo hemos medido"] },
];

function Eval() {
  const [step, setStep] = useState(-1);
  const [ans, setAns] = useState([]);
  const [email, setEmail] = useState("");
  const [statusEnvio, setStatusEnvio] = useState("idle");
  const score = ans.reduce((s, a) => s + (3 - a) * 5, 0);
  const mx = 75, pct = Math.round((score / mx) * 100);
  const level = pct >= 75 ? "Maduro" : pct >= 55 ? "Mejorable" : pct >= 35 ? "Estado Crítico" : "Requiere atención urgente";
  const lc = pct >= 75 ? "#16a34a" : pct >= 55 ? C.blue : pct >= 35 ? "#b8860b" : C.red;
  const answer = (v) => { const na = [...ans, v]; setAns(na); na.length >= QS.length ? setStep(QS.length) : setStep(step + 1); };
  const enviarDiagnostico = async () => {
    if (!email) return;
    setStatusEnvio("enviando");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          // ¡ATENCIÓN! Reemplaza "TU_ACCESS_KEY_AQUI" por el código que te llegó al correo
          access_key: "811360",
          subject: "🔥 Nuevo Lead - Autoevaluación Web",
          Correo_Cliente: email,
          Puntaje_Obtenido: `${pct}/100`,
          Nivel_Madurez: level,
          from_name: "SalesOps Evaluador"
        })
      });
      const data = await res.json();
      if (data.success) setStatusEnvio("exito");
      else setStatusEnvio("error");
    } catch (error) {
      setStatusEnvio("error");
    }
  };

  return (
    <section id="eval" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><div style={{ textAlign: "center", marginBottom: 36 }}>
        <Tag color={C.amber} bg={C.amberSoft}>Autoevaluación gratuita</Tag>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(28px,4vw,40px)", color: C.w, margin: "18px 0 8px", fontWeight: 400 }}>¿Qué tan ordenada está tu operación comercial?</h2>
        <p style={{ fontFamily: F.b, fontSize: 15, color: C.m, fontWeight: 400 }}>Cinco preguntas. Dos minutos. Un primer diagnóstico de dónde estás.</p>
      </div></FI>
      <FI delay={0.1}>
        <div style={{ maxWidth: 640, margin: "0 auto", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 14, padding: "34px 30px", minHeight: 300, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          {step === -1 && (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: F.b, fontSize: 15, color: C.g, lineHeight: 1.7, marginBottom: 24 }}>
                Esta evaluación te dará un puntaje preliminar de madurez comercial. No reemplaza un diagnóstico profesional, pero te ayudará a identificar dónde están las oportunidades más claras de mejora.
              </p>
              <button onClick={() => setStep(0)} style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: "#fff", background: C.blue, padding: "14px 36px", borderRadius: 8, border: "none", cursor: "pointer" }}>Comenzar evaluación</button>
            </div>
          )}
          {step >= 0 && step < QS.length && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
                <span style={{ fontFamily: F.b, fontSize: 12, color: C.m }}>Pregunta {step + 1} de {QS.length}</span>
                <div style={{ display: "flex", gap: 4 }}>{QS.map((_, i) => <div key={i} style={{ width: 24, height: 3, borderRadius: 2, background: i <= step ? C.blue : C.border }} />)}</div>
              </div>
              <h3 style={{ fontFamily: F.b, fontSize: 17, color: C.w, fontWeight: 600, lineHeight: 1.4, marginBottom: 22 }}>{QS[step].q}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {QS[step].a.map((a, i) => (
                  <button key={i} onClick={() => answer(i)} style={{ fontFamily: F.b, fontSize: 14, color: C.g, background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, padding: "13px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.target.style.borderColor = C.blue; e.target.style.color = C.w; }}
                    onMouseLeave={e => { e.target.style.borderColor = C.border; e.target.style.color = C.g; }}
                  >{a}</button>
                ))}
              </div>
            </div>
          )}
          {step === QS.length && (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: F.b, fontSize: 12, color: C.m, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Tu puntaje de madurez comercial</p>
              <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 18px" }}>
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <circle cx="70" cy="70" r="60" fill="none" stroke={C.border} strokeWidth="8" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke={lc} strokeWidth="8" strokeDasharray={`${pct * 3.77} 377`} strokeLinecap="round" transform="rotate(-90 70 70)" style={{ transition: "stroke-dasharray 1s ease" }} />
                </svg>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                  <span style={{ fontFamily: F.b, fontSize: 34, fontWeight: 800, color: lc }}>{pct}</span>
                  <span style={{ fontFamily: F.b, fontSize: 12, color: C.m, display: "block" }}>/100</span>
                </div>
              </div>
              <p style={{ fontFamily: F.b, fontSize: 15, fontWeight: 600, color: lc, marginBottom: 4 }}>Nivel: {level}</p>
              <p style={{ fontFamily: F.b, fontSize: 13, color: C.g, lineHeight: 1.6, marginBottom: 22, maxWidth: 420, margin: "0 auto 22px" }}>
                {pct >= 55 ? "Tu operación tiene una base sólida. Un diagnóstico profesional revelaría los puntos específicos para dar el siguiente paso con confianza." : "Hay oportunidades importantes de mejora en tu operación comercial. Un diagnóstico de una semana te mostraría exactamente dónde están y cómo abordarlas."}
              </p>
             <div style={{ background: C.bg2, borderRadius: 8, padding: "18px", marginBottom: 14 }}>
  <p style={{ fontFamily: F.b, fontSize: 13, color: C.g, marginBottom: 12 }}>¿Quieres el diagnóstico completo? Déjanos tu correo y coordinamos una conversación de 30 minutos sin compromiso.</p>
  
  {statusEnvio === "exito" ? (
    <div style={{ padding: "10px", background: C.blueSoft, borderRadius: 6, color: C.blue, textAlign: "center", fontWeight: 600, fontSize: 13 }}>
      ¡Recibido! Te contactaremos pronto al correo indicado.
    </div>
  ) : (
    <div style={{ display: "flex", gap: 8 }}>
      <input type="email" placeholder="tu@empresa.cl" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1, fontFamily: F.b, fontSize: 13, color: C.w, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, padding: "10px 14px", outline: "none" }} />
      <button onClick={enviarDiagnostico} disabled={statusEnvio === "enviando"} style={{ fontFamily: F.b, fontSize: 12, fontWeight: 600, color: "#fff", background: C.blue, border: "none", borderRadius: 6, padding: "10px 18px", cursor: statusEnvio === "enviando" ? "not-allowed" : "pointer", whiteSpace: "nowrap", opacity: statusEnvio === "enviando" ? 0.7 : 1 }}>
        {statusEnvio === "enviando" ? "Enviando..." : "Enviar"}
      </button>
    </div>
  )}
  {statusEnvio === "error" && (
    <p style={{ color: C.red, fontSize: 12, marginTop: 8, fontWeight: 500 }}>Hubo un error de conexión. Por favor intenta de nuevo.</p>
  )}
</div>
              <button onClick={() => { setStep(-1); setAns([]); setEmail(""); }} style={{ fontFamily: F.b, fontSize: 12, color: C.m, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Repetir evaluación</button>
            </div>
          )}
        </div>
      </FI>
    </section>
  );
}

/* ── A quién ayudamos ── */
function Quien() {
  const icp = [
    { i: "⚓", n: "El crecimiento depende de pocos", e: "Es natural que al principio los socios cierren las ventas clave. Pero ahora buscas que el equipo adquiera esa autonomía para que tú puedas enfocarte en la estrategia y la visión del negocio." },
    { i: "🌫️", n: "Falta de un proceso compartido", e: "Cuentas con un buen equipo, pero cada vendedor tiene su propia forma de operar. Esto hace que las proyecciones a veces se sientan inciertas y sea difícil replicar el éxito de tus mejores talentos." },
    { i: "⚙️", n: "Tecnología desaprovechada", e: "Se ha invertido en herramientas o CRM, pero a menudo se perciben como una carga administrativa. La información aún se dispersa en correos o planillas, limitando la visibilidad del día a día." }
  ];
  
  return (
    <section id="quien" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><Tag>A quién ayudamos</Tag></FI>
      
      <FI delay={0.08}>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(28px,4vw,42px)", color: C.w, lineHeight: 1.12, margin: "18px 0 16px", fontWeight: 400 }}>
          Empresas B2B que están listas para crecer, pero sienten que su estructura comercial necesita evolucionar.
        </h2>
      </FI>
      
      <FI delay={0.12}>
        <p style={{ fontFamily: F.b, fontSize: 16, color: C.g, margin: "0 0 48px", fontWeight: 400, lineHeight: 1.65, maxWidth: 840 }}>
          Más que limitarnos a un rubro específico (acompañamos a empresas de tecnología, servicios, distribución y más), nos enfocamos en tu etapa operativa. Trabajamos con empresas que ya validaron su negocio y tienen un equipo, pero sienten que llegaron a un punto donde "vender más fuerte" ya no es suficiente. Es el momento de estructurar un motor de ventas escalable, medible y predecible.
        </p>
      </FI>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {icp.map((v, i) => (
          <FI key={i} delay={0.06 + i * 0.05}>
            <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderTop: `4px solid ${C.blue}`, borderRadius: 12, padding: "30px 26px", height: "100%", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <span style={{ fontSize: 32, display: "block", marginBottom: 16 }}>{v.i}</span>
              <h3 style={{ fontFamily: F.b, fontSize: 18, fontWeight: 700, color: C.w, margin: "0 0 10px", lineHeight: 1.3 }}>{v.n}</h3>
              <p style={{ fontFamily: F.b, fontSize: 15, color: C.g, margin: 0, lineHeight: 1.6, fontWeight: 400 }}>{v.e}</p>
            </div>
          </FI>
        ))}
      </div>
    </section>
  );
}

/* ── Pipedrive ── */
function PipeSec() {
  return (
    <section id="tecnologia" style={{ padding: "80px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI>
        <div style={{ background: C.greenSoft, border: `1px solid ${C.greenBorder}`, borderRadius: 14, padding: "48px 36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <Tag color={C.green} bg={C.greenSoft}>Nuestra herramienta central</Tag>
              <div style={{ margin: "18px 0 20px" }}>
                <span style={{ fontFamily: F.b, fontSize: 32, fontWeight: 700, color: C.green, letterSpacing: "-0.02em" }}>pipedrive</span>
              </div>
              <h3 style={{ fontFamily: F.d, fontSize: 26, color: C.w, margin: "0 0 16px", fontWeight: 400 }}>
                El CRM que tu equipo realmente va a usar.
              </h3>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.g, lineHeight: 1.7, margin: "0 0 20px", fontWeight: 400 }}>
                La mayoría de las empresas que llegan a nosotros ya pagaron por un CRM que nadie usa. El problema nunca fue la herramienta, fue que nadie la configuró como sistema de decisión.
              </p>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.g, lineHeight: 1.7, margin: "0 0 20px", fontWeight: 400 }}>
                Elegimos Pipedrive porque es la plataforma que mejor se adapta a equipos comerciales de empresas medianas: es visual, intuitiva, y tiene una curva de adopción que permite que tu equipo esté operando en semanas, no en meses.
              </p>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.w, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                No vendemos la herramienta. La configuramos para que funcione como el centro de operaciones de tu área comercial, donde tu equipo registra, donde tú decides, y donde las proyecciones se construyen con datos reales.
              </p>
            </div>
            <div style={{ minWidth: 240 }}>
              <div style={{ background: "#fff", border: `1px solid ${C.greenBorder}`, borderRadius: 10, padding: "24px 20px" }}>
                <p style={{ fontFamily: F.b, fontSize: 11, fontWeight: 600, color: C.green, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px" }}>Por qué Pipedrive</p>
                {["Tu equipo lo adopta en semanas, no meses", "Más económico que alternativas complejas", "Visual e intuitivo para vendedores no técnicos", "Proyecciones y embudos claros desde el día uno", "Se integra con las herramientas que ya usas"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: C.green, fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: F.b, fontSize: 13, color: C.g, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FI>
    </section>
  );
}

/* ── Fricción ── */
function Friction() {
  return (
    <section style={{ padding: "60px 24px", maxWidth: 700, margin: "0 auto" }}>
      <FI>
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 14, padding: "40px 32px", textAlign: "center" }}>
          <p style={{ fontFamily: F.d, fontSize: 21, color: C.w, fontStyle: "italic", lineHeight: 1.4, margin: "0 0 16px" }}>"¿Y si mis vendedores se resisten al cambio?"</p>
          <div style={{ width: 36, height: 1, background: C.border, margin: "0 auto 16px" }} />
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.g, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
            El vendedor que es bueno de verdad agradece la estructura porque le facilita el trabajo. El que se resiste a la transparencia, generalmente es porque se beneficia de la falta de orden. Ayudar al dueño a distinguir entre los dos es, en sí mismo, una de las cosas más valiosas que entregamos.
          </p>
        </div>
      </FI>
    </section>
  );
}

/* ── Blog ── */
function Blog() {
  const posts = [
    { tag: "Diagnóstico", title: "Por qué el CRM de tu empresa es un archivo muerto (y cómo cambiarlo)", desc: "El problema no es la herramienta. Es que nadie la configuró como sistema de decisión." },
    { tag: "Fundadores", title: "El costo oculto de que el dueño siga cerrando los negocios importantes", desc: "Tu hora vale mucho más en estrategia que en ventas. Los números que lo demuestran." },
    { tag: "Equipos", title: "Cómo ordenar un equipo comercial sin generar una crisis interna", desc: "La estructura no es el enemigo del vendedor bueno. Es su mejor aliado." },
  ];
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><div style={{ marginBottom: 32 }}>
        <Tag>Contenido</Tag>
        <h2 style={{ fontFamily: F.d, fontSize: 30, color: C.w, margin: "14px 0 0", fontWeight: 400 }}>Ideas para dueños de empresa que quieren vender con sistema.</h2>
      </div></FI>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {posts.map((p, i) => (
          <FI key={i} delay={0.05 + i * 0.05}>
            <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "26px 22px", height: "100%", cursor: "pointer", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.blueLight; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)"; }}>
              <span style={{ fontFamily: F.b, fontSize: 10, fontWeight: 600, color: C.blue, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.tag}</span>
              <h3 style={{ fontFamily: F.b, fontSize: 15, fontWeight: 600, color: C.w, margin: "8px 0", lineHeight: 1.35 }}>{p.title}</h3>
              <p style={{ fontFamily: F.b, fontSize: 13, color: C.m, margin: 0, lineHeight: 1.5, fontWeight: 400 }}>{p.desc}</p>
              <p style={{ fontFamily: F.b, fontSize: 12, color: C.blue, marginTop: 14, fontWeight: 500 }}>Próximamente →</p>
            </div>
          </FI>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section id="contacto" style={{ padding: "100px 24px 120px", maxWidth: 1120, margin: "0 auto" }}>
      <FI><div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: F.d, fontSize: "clamp(30px,4.5vw,46px)", color: C.w, lineHeight: 1.1, margin: "0 0 16px", fontWeight: 400 }}>
          Empezamos con una conversación,<br /><em style={{ color: C.blue }}>no con un contrato.</em>
        </h2>
        <p style={{ fontFamily: F.b, fontSize: 16, color: C.g, lineHeight: 1.65, margin: "0 auto 10px", fontWeight: 400, maxWidth: 540 }}>
          Una reunión de 30 minutos para entender tu situación. Si tiene sentido avanzar, te proponemos un diagnóstico de una semana. Si no somos lo que necesitas, te lo decimos nosotros primero.
        </p>
        <p style={{ fontFamily: F.b, fontSize: 12, color: C.m, margin: "0 0 36px" }}>Sin compromiso. Sin presión. Sin letra chica.</p>
        <a href="https://webforms.pipedrive.com/f/5VQRZL0MsGJQiok9MG29Iz5dQy7aUyM1lHSPnRiSTEamMlDrYtjcCI9yLJJIKTWpb5" target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.b, fontSize: 15, fontWeight: 600, color: "#fff", background: C.blue, padding: "16px 44px", borderRadius: 8, textDecoration: "none", display: "inline-block", boxShadow: `0 4px 24px ${C.blueGlow}` }}>Agendar una conversación</a>
       
      </div></FI>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  // 1. PEGA AQUÍ TUS ENLACES REALES ENTRE LAS COMILLAS:
  const linkedinUrl = "https://www.linkedin.com/company/salesops-consulting/"; 
  const instagramUrl = "https://www.instagram.com/salesopsconsulting/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61589963015210&locale=es_LA";

  return (
    <footer style={{ background: C.bg, paddingTop: 80, paddingBottom: 40, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        
        {/* BLOQUE SUPERIOR: Correo y Redes Sociales grandes y centrados */}
        <div style={{ display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap", marginBottom: 60, textAlign: "center" }}>
          
          {/* CORREO */}
          <div>
            <p style={{ fontFamily: F.b, fontSize: 12, fontWeight: 700, color: C.m, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Correo</p>
            <a href="mailto:contacto@salesopsconsulting.cl" style={{ fontFamily: F.b, fontSize: 16, color: C.w, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = C.blue} onMouseLeave={e => e.target.style.color = C.w}>
              contacto@salesopsconsulting.cl
            </a>
          </div>

          {/* SÍGUENOS - Íconos grandes e interactivos */}
          <div>
            <p style={{ fontFamily: F.b, fontSize: 12, fontWeight: 700, color: C.m, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Síguenos</p>
            <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" style={{ color: C.g, transition: "all 0.2s", display: "inline-block" }} onMouseEnter={e => { e.target.style.color = C.blue; e.target.style.transform = "scale(1.1)"; }} onMouseLeave={e => { e.target.style.color = C.g; e.target.style.transform = "scale(1)"; }}><Linkedin size={32} /></a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" style={{ color: C.g, transition: "all 0.2s", display: "inline-block" }} onMouseEnter={e => { e.target.style.color = C.blue; e.target.style.transform = "scale(1.1)"; }} onMouseLeave={e => { e.target.style.color = C.g; e.target.style.transform = "scale(1)"; }}><Instagram size={32} /></a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" style={{ color: C.g, transition: "all 0.2s", display: "inline-block" }} onMouseEnter={e => { e.target.style.color = C.blue; e.target.style.transform = "scale(1.1)"; }} onMouseLeave={e => { e.target.style.color = C.g; e.target.style.transform = "scale(1)"; }}><Facebook size={32} /></a>
            </div>
          </div>

        </div>

        {/* LÍNEA DIVISORIA Y COPYRIGHT INFERIOR (SIN ÍCONOS REPETIDOS) */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontFamily: F.b, fontSize: 13, color: C.m, margin: 0 }}>© 2026 SalesOps Consulting SpA · Santiago, Chile</p>
        </div>

      </div>
    </footer>
  );
}

/* ── App ── */
export default function SalesOpsWeb() {
  return (
    <div style={{ background: C.bg, color: C.w, minHeight: "100vh" }}>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::selection{background:rgba(45,63,143,0.15);color:#0f172a}
        body{overflow-x:hidden;background:#ffffff}
        @media(max-width:768px){
          section{padding:60px 16px!important}
          div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr!important}
          div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
          .nav-links{display:none!important}
        }
        input::placeholder{color:${C.d}}
      `}</style>
      <Nav />
      <Hero />
      <Problema />
      <Valor />
      <Metodo />
      <Eval />
      <Quien />
      <PipeSec />
      <Friction />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
