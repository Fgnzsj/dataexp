import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fgnzsj.github.io/dataexp'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: '2026-03-19',
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          'pt-BR': `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/privacidade/`,
      lastModified: '2026-03-19',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos/`,
      lastModified: '2026-03-19',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
