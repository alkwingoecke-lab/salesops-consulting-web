import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... si ya tienes otras opciones aquí (como images, etc.), déjalas intactas ...

  async redirects() {
    return [
      {
        source: "/servicios/implementacion-kommo",
        destination: "/servicios/implementacion-pipedrive",
        permanent: true, // Redirección 301 definitiva para traspasar la autoridad SEO
      },
    ];
  },
};

export default nextConfig;
