import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/blog',
        '/blog/*',
      ],
      disallow: [
        '/api/', 
        '/admin/',
        '/admin/*',
      ],
    },
    sitemap: 'https://luckysports.cloud/sitemap.xml',
    host: 'https://luckysports.cloud',
  }
} 