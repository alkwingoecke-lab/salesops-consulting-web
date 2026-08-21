import type { Metadata } from "next";
import CalculadoraROI from "@/components/sections/CalculadoraROI";

export const metadata: Metadata = {
  title: "Calculadora de ROI de un CRM | Cuánto pierdes sin sistema | SalesOps",
  description:
    "Simula el retorno de ordenar tu embudo en Pipedrive: recupero (payback), impacto financiero y oportunidades que hoy se escapan. Herramienta gratis para empresas en Chile.",
  alternates: { canonical: "/calculadora-roi-pipedrive" },
  openGraph: {
    title: "Calculadora de ROI de un CRM | SalesOps",
    description: "Simula el retorno de implementar Pipedrive en tu operación comercial.",
    url: "/calculadora-roi-pipedrive",
    type: "website",
  },
};

export default function Page() {
  return <CalculadoraROI />;
}
