import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.salesopsconsulting.cl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si en el futuro agregas más páginas (ej. /servicios), las agregas aquí debajo
  ]
}
