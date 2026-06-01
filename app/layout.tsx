import { Metadata } from 'next';
import { Outfit, Instrument_Serif } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  // 1. Agrega el dominio base de tu sitio web
  metadataBase: new URL('https://salesopsconsulting.cl'), 
  
  title: 'SalesOps Consulting | Ordenamos y Sistematizamos tus Ventas',
  description: 'Consultoría en sistematización comercial, implementación de CRM y Revenue Operations. Auditamos procesos de venta B2B, B2C y B2G para que tu empresa crezca con control.',
  keywords: [
    'consultoría de ventas chile', 
    'asesoría comercial pymes', 
    'ordenar proceso de ventas', 
    'implementación CRM', 
    'consultor pipedrive',
    'revenue operations', 
    'revops latam', 
    'sistematización comercial', 
    'optimización embudo b2b'
  ],
  
  // 2. Define la ruta canónica basada en el metadataBase
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`scroll-smooth ${outfit.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
