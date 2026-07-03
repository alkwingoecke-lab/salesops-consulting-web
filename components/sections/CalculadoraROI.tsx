"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarClock, ExternalLink, ChevronDown, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { ConversionModal } from "@/components/ui/ConversionModal";

/* ============================================================
   ENLACES EXACTOS Y OFICIALES DE SALESOPS CONSULTING
   ============================================================ */
const FORM_URL_PIPEDRIVE = "https://webforms.pipedrive.com/f/cs71NsC9gaigrHlOs1TdIo7mCaKBAqhSvSeTdi2sAQgmmx4jIJYlZGh2Yc9VazEBqz";
const PARTNER_AFFILIATE_URL = "https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc";

const clp = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 1 });

const PLANES = [
  { id: "lite", nombre: "Lite", usd: 14 },
  { id: "growth", nombre: "Growth", usd: 24 },
  { id: "premium", nombre: "Premium", usd: 49 },
  { id: "ultimate", nombre: "Ultimate", usd: 69 },
];

const BASE_IMPL = 600000;

const clamp = (v: number, min: number, max: number) => {
  const n = Number(v);
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
};

const compacto = (v: number) =>
  Math.abs(v) >= 1000000
    ? `${(v / 1000000).toLocaleString("es-CL", { maximumFractionDigits: 1 })} M`
    : `${Math.round(v / 1000)} k`;

function Field({ label, hint, value, onChange, min, max, step, suffix, money }: any) {
  return (
    <div className="py-3 border-b border-[#D8E2DC] last:border-b-0">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <label className="text-sm font-medium leading-snug text-[#0C1D17]">
          {label}
          {hint && <span className="block text-xs font-normal text-[#5B6B63]">{hint}</span>}
        </label>
        <span className="font-mono text-sm font-semibold whitespace-nowrap text-[#0C1D17]">
          {money ? clp.format(value) : `${num.format(value)}${suffix || ""}`}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="range"
          className="flex-1 h-1 bg-[#D8E2DC] rounded-full appearance-none accent-[#0E6A4F] cursor-pointer"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
        />
        <input
          type="number"
          className="w-24 text-right font-mono text-xs p-1.5 border border-[#D8E2DC] rounded-md bg-white text-[#0C1D17] focus:outline-none focus:border-[#0E6A4F]"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
        />
      </div>
    </div>
  );
}

function TinyNum({ label, value, onChange, min, max, prefix, suffix }: any) {
  return (
    <label className="flex items-center justify-between gap-2 text-xs py-1.5 text-[#5B6B63]">
      <span>{label}</span>
      <span className="flex items-center gap-1 font-mono font-semibold text-[#0C1D17]">
        {prefix}
        <input
          type="number"
          className="w-16 text-right font-mono text-xs p-1 border border-[#D8E2DC] rounded bg-white text-[#0C1D17]"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
        />
        {suffix}
      </span>
    </label>
  );
}

export default function CalculadoraROI() {
  const [vendedores, setVendedores] = useState(6);
  const [leadsMes, setLeadsMes] = useState(90);
  const [conversion, setConversion] = useState(14);
  const [ticket, setTicket] = useState(1800000);
  const [planId, setPlanId] = useState("growth");

  const [margen, setMargen] = useState(40);
  const [tipoCambio, setTipoCambio] = useState(950);
  const [implManual, setImplManual] = useState(false);
  const [implementacion, setImplementacion] = useState(BASE_IMPL);
  const [up1, setUp1] = useState(15);
  const [up2, setUp2] = useState(30);
  const [up3, setUp3] = useState(50);

  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const plan = PLANES.find((p) => p.id === planId) || PLANES[1];
  const implEfectiva = implManual ? implementacion : BASE_IMPL;

  const r = useMemo(() => {
    const negociosMes = leadsMes * (conversion / 100);
    const ventaMes = negociosMes * ticket;
    const esc = [up1, up2, up3].map((u) => {
      const adicionalMes = ventaMes * (u / 100);
      return { u, adicionalMes, adicionalAnio: adicionalMes * 12 };
    });
    const medio = esc[1];

    const licMes = vendedores * plan.usd * tipoCambio;
    const licAnual = licMes * 12;
    const costoAnio1 = implEfectiva + licAnual;

    const margenAdicionalMes = medio.adicionalMes * (margen / 100);
    const margenAdicionalAnio = margenAdicionalMes * 12;

    const netoMes = margenAdicionalMes - licMes;
    const payback = netoMes > 0 ? implEfectiva / netoMes : Infinity;
    const roi = costoAnio1 > 0 ? ((margenAdicionalAnio - costoAnio1) / costoAnio1) * 100 : 0;
    const fugaPorSegundo = medio.adicionalAnio / (365 * 24 * 3600);

    const chart = Array.from({ length: 13 }, (_, m) => ({
      m,
      acumulado: Math.round(m * netoMes - implEfectiva),
    }));

    return { negociosMes, ventaMes, esc, medio, licMes, licAnual, costoAnio1, netoMes, payback, roi, fugaPorSegundo, chart };
  }, [vendedores, leadsMes, conversion, ticket, margen, tipoCambio, planId, implEfectiva, up1, up2, up3, plan.usd]);

  const t0 = useRef(Date.now());
  const [ahora, setAhora] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setAhora(Date.now()), 100);
    return () => clearInterval(id);
  }, []);
  const fugaAcumulada = ((ahora - t0.current) / 1000) * r.fugaPorSegundo;

  const escLabels = ["Conservador", "Medio", "Agresivo"];
  const paybackTexto = r.netoMes <= 0 ? "—" : r.payback < 1 ? "el 1er mes" : r.payback > 36 ? "36+ meses" : `${num.format(r.payback)} meses`;

  return (
    <div className="min-h-screen w-full bg-[#F3F7F4] text-[#0C1D17] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
       {/* Cabecera con Logo Maxi-Escalado y Enlace de Retorno a Inicio */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#D8E2DC]">
          <Link
            href="/"
            className="flex items-center hover:opacity-85 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#0E6A4F] rounded-lg"
            title="Volver a la página principal de SalesOps Consulting"
          >
            <Image
              src="/logos/logo-salesops-dark.png"
              alt="SalesOps Consulting - Volver al inicio"
              width={360}
              height={96}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-3.5 bg-white px-5 py-3 rounded-2xl border border-[#D8E2DC] shadow-sm">
            <ShieldCheck size={24} className="text-[#0E6A4F] shrink-0" />
            <span className="font-mono text-sm sm:text-base font-bold text-[#0C1D17] tracking-tight whitespace-nowrap">
              Partner Oficial de
            </span>
            <Image
              src="/logos/pipedrive-logo.png"
              alt="Pipedrive"
              width={140}
              height={38}
              className="h-6 sm:h-7 w-auto object-contain shrink-0"
            />
          </div>
        </header>

        <section className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#5B6B63] mb-2"></p>
          <h1 className="font-bold text-3xl sm:text-5xl leading-tight mb-4">
            ¿Cuánto te cuesta vender <span className="text-[#0E6A4F]">sin sistema</span>?
          </h1>
          <p className="text-base sm:text-lg text-[#5B6B63]">
            Proyecta el impacto financiero de estructurar tus procesos y automatizar tu embudo en Pipedrive. Todo en pesos chilenos y con supuestos transparentes.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Entradas */}
          <section className="bg-white border border-[#D8E2DC] rounded-2xl p-6 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#5B6B63] mb-1">E · Parámetros de tu operación</p>
            <h2 className="font-bold text-xl mb-4">Volumen y Ticket</h2>

            <Field label="Vendedores" value={vendedores} onChange={setVendedores} min={1} max={30} step={1} />
            <Field label="Oportunidades nuevas al mes" hint="Consultas o leads efectivos que ingresan al embudo" value={leadsMes} onChange={setLeadsMes} min={5} max={1000} step={5} />
            <Field label="Tasa de conversión actual" hint="Porcentaje de cierre punta a punta" value={conversion} onChange={setConversion} min={1} max={60} step={0.5} suffix="%" />
            <Field label="Ticket promedio (CLP)" value={ticket} onChange={setTicket} min={100000} max={50000000} step={100000} money />

            <div className="pt-4">
              <p className="text-sm font-medium mb-2">Plan Pipedrive Requerido</p>
              <div className="grid grid-cols-4 gap-2">
                {PLANES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`py-2 px-1 border rounded-lg text-center transition-all ${
                      planId === p.id ? "border-[#0E6A4F] bg-[#EAF5EF] text-[#0C1D17] font-semibold ring-1 ring-[#0E6A4F]" : "border-[#D8E2DC] text-[#5B6B63]"
                    }`}
                  >
                    <span className="block text-xs">{p.nombre}</span>
                    <span className="font-mono block text-xs mt-0.5">US${p.usd}</span>
                  </button>
                ))}
              </div>
            </div>

            <details className="mt-6 rounded-xl border border-[#D8E2DC] group">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none">
                <span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#5B6B63] block">P · Supuestos y Costos</span>
                  <span className="text-sm font-medium">Implementación, margen y escenarios</span>
                </span>
                <ChevronDown size={18} className="text-[#5B6B63] group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-4 pb-4 pt-1 grid sm:grid-cols-2 gap-x-6">
                <div className="sm:col-span-2 py-2 border-b border-[#D8E2DC] mb-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">Inversión Mínima en Implementación</span>
                    <span className="font-mono font-bold text-sm text-[#0E6A4F]">{clp.format(implEfectiva)}</span>
                  </div>
                  <p className="text-xs mt-1 text-[#5B6B63] leading-relaxed">
                    *Precio base referencial por proyecto ($600.000 CLP). El valor final no depende del número de licencias/usuarios, sino exclusivamente de la complejidad técnica de la arquitectura comercial.
                  </p>
                  <label className="flex items-center gap-2 text-xs pt-2 cursor-pointer text-[#5B6B63]">
                    <input
                      type="checkbox"
                      checked={implManual}
                      onChange={(e) => {
                        setImplManual(e.target.checked);
                        if (!e.target.checked) setImplementacion(BASE_IMPL);
                      }}
                      className="accent-[#0E6A4F]"
                    />
                    Ajustar costo de implementación manualmente
                  </label>
                  {implManual && <TinyNum label="Valor manual" value={implementacion} onChange={setImplementacion} min={0} max={30000000} prefix="$" />}
                </div>
                <div>
                  <TinyNum label="Tipo de cambio" value={tipoCambio} onChange={setTipoCambio} min={700} max={1300} prefix="$" suffix="/USD" />
                  <TinyNum label="Margen bruto" value={margen} onChange={setMargen} min={5} max={100} suffix="%" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#5B6B63] pt-1">Mejora conversión</p>
                  <TinyNum label="Escenario Medio" value={up2} onChange={setUp2} min={1} max={150} prefix="+" suffix="%" />
                </div>
              </div>
            </details>
          </section>

          {/* Resultados */}
          <section className="flex flex-col gap-5">
            <div className="bg-[#0A2E22] border border-[#0A2E22] text-white rounded-2xl p-6 shadow-md">
              <p className="font-mono text-xs text-[#8FE3C0]">S · Retorno Proyectado · Escenario Medio</p>
              <h2 className="font-bold text-lg mt-1 mb-3 text-[#E8F5EE]">Facturación adicional con proceso optimizado</h2>
              <p className="font-mono font-bold text-4xl sm:text-5xl text-[#8FE3C0]">
                {clp.format(r.medio.adicionalAnio)} <span className="text-base font-normal text-[#BFE8D4]">/año</span>
              </p>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/15">
                <div>
                  <p className="font-mono text-xs text-[#9DBFAF]">Payback</p>
                  <p className="font-mono font-semibold text-lg">{paybackTexto}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#9DBFAF]">ROI Año 1</p>
                  <p className="font-mono font-semibold text-lg">{num.format(r.roi)}%</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#9DBFAF]">Inversión Año 1</p>
                  <p className="font-mono font-semibold text-lg">{clp.format(r.costoAnio1)}</p>
                </div>
              </div>
            </div>

            {/* Gráfico */}
            <div className="bg-white border border-[#D8E2DC] rounded-2xl p-5 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#5B6B63] mb-2">Flujo Neto Acumulado (12 meses)</p>
              <div className="w-full h-44">
                <ResponsiveContainer>
                  <AreaChart data={r.chart} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <XAxis dataKey="m" type="number" domain={[0, 12]} tick={{ fontSize: 10, fill: "#5B6B63" }} axisLine={false} />
                    <YAxis tickFormatter={compacto} tick={{ fontSize: 10, fill: "#5B6B63" }} width={46} axisLine={false} />
                    <Tooltip formatter={(v: any) => [clp.format(v), "Flujo acumulado"]} />
                    <ReferenceLine y={0} stroke="#5B6B63" strokeDasharray="4 4" />
                    <Area type="monotone" dataKey="acumulado" stroke="#0E6A4F" strokeWidth={2} fill="#0E6A4F" fillOpacity={0.15} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Por qué se mueve este número (RESTAURADO) */}
            <div className="bg-white border border-[#D8E2DC] rounded-2xl p-5 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#5B6B63] mb-2">Por qué se mueve este número</p>
              <p className="text-sm leading-relaxed text-[#5B6B63] mb-3">
                Sin sistema, una parte del embudo se pierde por gestión — no por precio ni por producto. Un CRM bien implementado recupera esa venta por tres vías:
              </p>
              <ul className="space-y-2 text-sm leading-snug">
                <li className="flex gap-2.5 items-start">
                  <span className="font-mono font-bold text-[#0E6A4F] mt-0.5">▸</span>
                  <span><strong className="text-[#0C1D17]">Seguimiento sin fugas:</strong> cada lead queda con dueño y próximo paso agendado; nada se enfría por olvido.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="font-mono font-bold text-[#0E6A4F] mt-0.5">▸</span>
                  <span><strong className="text-[#0C1D17]">Velocidad de respuesta:</strong> contactar en horas y no en días aumenta la probabilidad de cierre frente a la competencia.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="font-mono font-bold text-[#0E6A4F] mt-0.5">▸</span>
                  <span><strong className="text-[#0C1D17]">Foco del equipo:</strong> con el embudo visible, los vendedores priorizan los negocios de mayor probabilidad y ticket.</span>
                </li>
              </ul>
            </div>

            {/* Ticker de pérdida */}
            <div className="bg-[#FDF6F2] border border-[#EAD5CB] rounded-2xl px-5 py-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C4491D] animate-pulse shrink-0"></span>
              <p className="text-xs sm:text-sm">
                Fuga estimada desde que abriste esta página:{" "}
                <span className="font-mono font-bold text-[#C4491D]">{clp.format(fugaAcumulada)}</span>
              </p>
            </div>

            {/* Tarjeta de Informe PDF (RESTAURADA - Conectada al Modal) */}
            <div className="bg-white border border-[#D8E2DC] rounded-2xl p-5 shadow-sm">
              {!enviado ? (
                <>
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={16} className="text-[#0E6A4F]" />
                    <p className="font-semibold text-sm">Informe detallado en PDF</p>
                  </div>
                  <p className="text-xs text-[#5B6B63] mb-3">
                    Desglose completo del cálculo, supuestos y plan de implementación sugerido para tu escenario.
                  </p>
                  <form
                    className="flex flex-col sm:flex-row gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (emailValido) {
                        setEnviado(true);
                        setIsModalOpen(true); // Abre tu modal nativo para agendar/ingresar datos
                      }
                    }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 text-sm px-3.5 py-2.5 rounded-xl border border-[#D8E2DC] bg-white text-[#0C1D17] focus:outline-none focus:border-[#0E6A4F]"
                    />
                    <button type="submit" className="bg-[#0E6A4F] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0A2E22] transition-colors disabled:opacity-50" disabled={!emailValido}>
                      Enviar informe
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 size={18} className="text-[#0E6A4F] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0C1D17]">Solicitud registrada para {email}</p>
                    <p className="text-xs text-[#5B6B63] mt-1">Completa el agendamiento en la ventana emergente para enviarte el informe personalizado a tu correo.</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs Exactos conectados a tus Enlaces Reales */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-[#0E6A4F] text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0A2E22] transition-colors shadow-sm"
              >
                <CalendarClock size={18} /> Agendar Diagnóstico Comercial
              </button>
              
              <a
                href={PARTNER_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-[#0C1D17] text-[#0C1D17] py-2.5 px-4 rounded-xl flex flex-col items-center justify-center hover:bg-[#0C1D17] hover:text-white transition-colors text-center"
              >
                <span className="flex items-center gap-1.5 font-semibold text-sm">
                  <ExternalLink size={15} /> Crear Cuenta en Pipedrive
                </span>
                <span className="text-[11px] opacity-80 mt-0.5">30 días de prueba gratis (Beneficio Partner)</span>
              </a>
            </div>
          </section>
        </div>

        {/* Sección de Preguntas Frecuentes (RESTAURADA) */}
        <section className="mt-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#5B6B63] mb-3">Preguntas frecuentes</p>
          {[
            {
              q: "¿Cuánto cuesta Pipedrive en Chile?",
              a: "Pipedrive tiene cuatro planes que se pagan en dólares por usuario al mes con facturación anual: Lite (US$14), Growth (US$24), Premium (US$49) y Ultimate (US$69). La calculadora los convierte a pesos chilenos con el tipo de cambio que tú definas. La mayoría de los equipos B2B parte en Growth, que incluye correo sincronizado y automatizaciones.",
            },
            {
              q: "¿De dónde salen los porcentajes de mejora?",
              a: "Piénsalo con 100 leads. Si hoy de cada 100 consultas cierras 14 ventas, una mejora del 15% significa cerrar 16; del 30%, cerrar 18; del 50%, cerrar 21. No es que las ventas suban por arte de magia: es dejar de perder negocios que ya tenías en la mano — el lead que nadie llamó de vuelta, la cotización que quedó sin seguimiento, el cliente que compró donde le contestaron primero. Son rangos referenciales para equipos que pasan de la planilla o de un CRM abandonado a un embudo gestionado, y por eso puedes editarlos: evalúa con el conservador.",
            },
            {
              q: "¿Cómo se estima el costo de implementación?",
              a: "Con una fórmula de autoatención: $600.000 base referencial por proyecto. El valor final no depende del número de licencias o vendedores, sino de la complejidad técnica de la arquitectura comercial (integraciones, embudos B2G o automatizaciones avanzadas). La propuesta real de SalesOps se cotiza con alcance cerrado y precio fijo en UF después del diagnóstico técnico.",
            },
            {
              q: "¿Por qué el ROI usa margen y no venta?",
              a: "Porque comparar venta adicional contra costo infla el retorno. Un peso de venta no es un peso de utilidad; el modelo descuenta tu margen bruto antes de calcular el retorno y el plazo en que la inversión se paga sola.",
            },
            {
              q: "¿Qué incluye una implementación con SalesOps?",
              a: "Auditoría del proceso actual, diseño de arquitectura de embudo, configuración de Pipedrive, migración limpia de datos, automatizaciones de correos/alertas, dashboards directivos de control y capacitación táctica del equipo comercial en fases estructuradas.",
            },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-[#D8E2DC] rounded-xl mb-2.5 group shadow-sm">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold cursor-pointer list-none">
                <span>{f.q}</span>
                <ChevronDown size={16} className="text-[#5B6B63] shrink-0 ml-3 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-[#5B6B63] border-t border-[#D8E2DC]/50 pt-3">
                {f.a}
              </p>
            </details>
          ))}
        </section>

        {/* Sigue Comparando (RESTAURADO + Rutas Listas para Poblar) */}
        <section className="mt-12 pt-8 border-t border-[#D8E2DC]">
          <p className="font-mono text-xs uppercase tracking-widest text-[#5B6B63] mb-4">Sigue comparando</p>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/comparativas/pipedrive-vs-hubspot"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-[#D8E2DC] rounded-full bg-white text-[#0C1D17] hover:border-[#0E6A4F] hover:text-[#0E6A4F] transition-colors shadow-sm"
            >
              Pipedrive vs HubSpot
            </Link>
            <Link
              href="/comparativas/pipedrive-vs-excel"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-[#D8E2DC] rounded-full bg-white text-[#0C1D17] hover:border-[#0E6A4F] hover:text-[#0E6A4F] transition-colors shadow-sm"
            >
              Pipedrive vs planilla Excel
            </Link>
            <Link
              href="/servicios/implementacion-pipedrive"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-[#D8E2DC] rounded-full bg-white text-[#0C1D17] hover:border-[#0E6A4F] hover:text-[#0E6A4F] transition-colors shadow-sm"
            >
              Qué incluye una implementación
            </Link>
          </div>
        </section>
      </div>

      {/* TU MODAL NATIVO DE PIPEDRIVE CON TU LINK EXACTO */}
      <ConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formUrl={FORM_URL_PIPEDRIVE}
      />
    </div>
  );
}