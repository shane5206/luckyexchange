import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', 
        '/admin/',
        '/home',
        '/Home',
        '/about',
        '/About',
        '/service',
        '/news',
        '/Contact Us',
        '/docs',
        '/blog',
        '/pricing',
        '/register',
        '/contact'
      ],
    },
    sitemap: 'https://luckysports.cloud/sitemap.xml',
    host: 'https://luckysports.cloud',
  }
} 