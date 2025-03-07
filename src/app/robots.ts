import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/blog',
        '/blog/*',
        '/product',
        '/product/*',
        '/contact-us',
        '/about-us',
        '/events',
        '/events/*',
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