"use client";
import { useState } from "react";

const QUESTIONS = [
  { q: "¿Puedes anticipar con precisión cuánto va a cerrar tu equipo este mes?", a: ["Sí, con información actualizada del CRM", "Tengo una idea aproximada", "Recién lo sé cuando termina el mes", "No tengo forma de saberlo"] },
  { q: "¿Tu equipo comercial sigue un proceso de venta documentado y compartido?", a: ["Sí, con guiones y pasos definidos", "Hay lineamientos generales pero no se siguen siempre", "Cada vendedor tiene su propio estilo", "No existe nada formal"] },
  { q: "¿Cómo se usa el CRM (la herramienta donde registran oportunidades)?", a: ["Es nuestra herramienta central de decisión", "Existe pero los datos están incompletos", "Lo tienen pero casi nadie lo usa bien", "No tenemos o usamos planillas sueltas"] },
  { q: "¿Qué porcentaje de tu tiempo como dueño se va en cerrar ventas personalmente?", a: ["Menos del 15%", "Entre 15% y 30%", "Entre 30% y 50%", "Más de la mitad de mi tiempo"] },
  { q: "Si tu mejor vendedor se va mañana, ¿cuánto tarda su reemplazo en alcanzar buen rendimiento?", a: ["Menos de un mes (hay sistema documentado)", "Uno a tres meses", "Tres a seis meses", "No sé, nunca lo hemos medido"] },
];

export function Autoevaluacion() {
  const [step, setStep] = useState(-1);
  const [ans, setAns] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); 
  const [status, setStatus] = useState("idle");

  const score = ans.reduce((s, a) => s + (3 - a) * 5, 0);
  const pct = Math.round((score / 75) * 100);
  
  const getLevel = (p: number) => p >= 75 ? "Maduro" : p >= 55 ? "Mejorable" : p >= 35 ? "Estado Crítico" : "Requiere atención urgente";
  const getColor = (p: number) => p >= 75 ? "#16a34a" : p >= 55 ? "#2d3f8f" : p >= 35 ? "#b8860b" : "#dc3545";
  
  const level = getLevel(pct);
  const lc = getColor(pct);

  const handleAnswer = (index: number) => {
    const nextAns = [...ans, index];
    setAns(nextAns);
    setStep(nextAns.length);
  };

  const handleBack = () => {
    if (step <= 0) { setStep(-1); return; }
    setAns(ans.slice(0, -1));
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || hp) return;
    setStatus("sending");

    const mappedAnswers = ans.map((idx, i) => ({ q: QUESTIONS[i].q, a: QUESTIONS[i].a[idx] }));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, score: pct, level, answers: mappedAnswers, botcheck: hp }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const openIframeModal = () => { window.dispatchEvent(new CustomEvent("open-conversion-modal")); };

  return (
    <section id="eval" className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="text-center mb-10">
        <span className="font-sans text-xs font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/40 px-3.5 py-1.5 rounded uppercase inline-block mb-4">Autoevaluación gratuita</span>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-950 font-normal mb-3">¿Qué tan ordenada está tu operación comercial?</h2>
        <p className="font-sans text-sm text-slate-500 max-w-md mx-auto">Cinco preguntas. Dos minutos. Un primer diagnóstico de dónde estás parado.</p>
      </div>

      <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-8 min-h-[320px] shadow-sm">
        {step === -1 && (
          <div className="text-center py-4">
            <p className="font-sans text-[14px] text-slate-700 leading-relaxed mb-6">Esta evaluación mide el nivel de madurez operativa de tu área de ventas, analizando procesos, predictibilidad y dependencia interna.</p>
            <button onClick={() => setStep(0)} className="font-sans text-sm font-semibold text-white bg-[#2d3f8f] hover:bg-[#202e70] px-8 py-3 rounded-lg transition-colors shadow-sm">Comenzar evaluación</button>
          </div>
        )}

        {step >= 0 && step < QUESTIONS.length && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-xs font-semibold text-slate-500">Pregunta {step + 1} de {QUESTIONS.length}</span>
              <div className="flex gap-1">{QUESTIONS.map((_, i) => (<div key={i} className={`w-5 h-1 rounded-sm ${i <= step ? "bg-[#2d3f8f]" : "bg-slate-200"}`} />))}</div>
            </div>
            <h3 className="font-sans text-base font-semibold text-slate-950 leading-snug mb-5">{QUESTIONS[step].q}</h3>
            <div className="flex flex-col gap-2.5">
              {QUESTIONS[step].a.map((option, i) => (
                <button key={i} onClick={() => handleAnswer(i)} className="font-sans text-sm text-slate-700 bg-white border border-slate-200 hover:border-[#2d3f8f] hover:text-slate-950 text-left px-4 py-3 rounded-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2d3f8f]">{option}</button>
              ))}
            </div>
            <button onClick={handleBack} className="font-sans text-xs font-medium text-slate-500 hover:text-slate-900 mt-6 block">← Atrás</button>
          </div>
        )}

        {step === QUESTIONS.length && (
          <div className="text-center">
            <p className="font-sans text-xs text-slate-500 tracking-wider uppercase mb-3">Resultado Preliminar</p>
            <div className="relative w-32 h-32 mx-auto mb-5">
              <svg width="128" height="128" viewBox="0 0 140 140" className="mx-auto">
                <circle cx="70" cy="70" r="60" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle cx="70" cy="70" r="60" fill="none" stroke={lc} strokeWidth="8" strokeDasharray={`${pct * 3.77} 377`} strokeLinecap="round" transform="rotate(-90 70 70)" className="transition-all duration-1000" />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="font-sans text-3xl font-extrabold" style={{ color: lc }}>{pct}</span>
                <span className="font-sans text-[10px] text-slate-400 font-bold">/100</span>
              </div>
            </div>
            <p className="font-sans text-base font-bold mb-2" style={{ color: lc }}>Nivel: {level}</p>
            <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
              {pct >= 55 ? "Tu operación cuenta con bases iniciales sólidas. Un análisis detallado en conjunto revelará cuellos de botella específicos para dar el siguiente salto con control." : "Se detectan riesgos de control y vulnerabilidad operativa en tu área de ventas. Es crítico estructurar procesos antes de intentar escalar la fuerza comercial."}
            </p>

            <div className="bg-white border border-slate-200 p-5 rounded-lg text-left">
              <p className="font-sans text-xs text-slate-700 leading-normal mb-4">¿Quieres recibir la matriz de análisis completa? Ingresa tu correo para consolidar tus respuestas y habilitar el diagnóstico estratégico de 30 minutos.</p>
              {status === "success" ? (
                <div role="status" className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                  <p className="font-sans text-xs font-bold text-slate-950 mb-3">Respuestas registradas exitosamente.</p>
                  <button onClick={openIframeModal} className="font-sans text-xs font-semibold text-white bg-[#2d3f8f] px-5 py-2.5 rounded-md hover:bg-[#202e70] transition-colors inline-block">Agendar mi diagnóstico ahora →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 relative">
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={hp} onChange={(e) => setHp(e.target.value)} />
                  <input type="email" required placeholder="tu@empresa.cl" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 font-sans text-xs text-slate-900 bg-slate-50 border border-slate-200 focus:border-[#2d3f8f] focus:bg-white p-2.5 rounded focus:outline-none" />
                  <button type="submit" disabled={status === "sending"} className="font-sans text-xs font-semibold text-white bg-[#2d3f8f] px-5 py-2.5 rounded hover:bg-[#202e70] disabled:bg-slate-400 transition-colors">
                    {status === "sending" ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              )}
              {status === "error" && <p className="text-red-600 text-[11px] font-medium mt-2">Error de conexión. Reintenta el envío.</p>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}