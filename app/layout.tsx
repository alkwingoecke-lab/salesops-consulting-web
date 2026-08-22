import type { Metadata } from "next";
import { Outfit, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

// Configuración de fuentes de Google para Next.js
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500", "600"], 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Configuración global de Metadata y Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://www.salesopsconsulting.cl"),
  title: {
    default: "SalesOps Consulting | Estrategia Comercial y CRM en Chile",
    template: "%s | SalesOps Consulting"
  },
  description: "Consultoría en estrategia comercial y adopción de CRM. Estructuramos equipos de ventas y operaciones para empresas B2B, B2C y B2G.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.salesopsconsulting.cl",
    siteName: "SalesOps Consulting",
    title: "SalesOps Consulting | Estrategia Comercial y CRM",
    description: "Estructuramos equipos de ventas y operaciones comerciales para escalar tus resultados sin humo.",
    images: [
      {
        url: "/og-image.png", // Asegúrate de subir esta imagen a tu carpeta public/
        width: 1200,
        height: 630,
        alt: "SalesOps Consulting - Portada",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesOps Consulting",
    description: "Estructuramos equipos de ventas y operaciones comerciales.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  }
};

// Schema.org para identificar la empresa frente a Google y las IAs
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SalesOps Consulting",
  "url": "https://www.salesopsconsulting.cl",
  "logo": "https://www.salesopsconsulting.cl/logos/logo-salesops-dark.png",
  "description": "Consultoría experta en estrategia comercial, automatización de CRM y RevOps. Asesoramos a empresas de diversos sectores en sus canales de venta B2B, B2C y B2G desde nuestra sede en Santiago, Chile.",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Alkwin Goecke Llewelling"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "addressCountry": "CL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contacto@salesopsconsulting.cl",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
        />
        <GoogleTagManager gtmId="GTM-WP88J289" />
      </head>
      <body className="font-sans antialiased bg-[#F1F3F7] text-[#0B1020]">
        {children}
      </body>
    </html>
  );
}
