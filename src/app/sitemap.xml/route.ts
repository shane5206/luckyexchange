import { NextResponse } from 'next/server'

const baseUrl = 'https://luckysports.cloud'

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel="canonical" href="${baseUrl}"/>
      </url>
      <url>
        <loc>${baseUrl}/product</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
        <xhtml:link rel="canonical" href="${baseUrl}/product"/>
      </url>
      <url>
        <loc>${baseUrl}/contact-us</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        <xhtml:link rel="canonical" href="${baseUrl}/contact-us"/>
      </url>
    </urlset>`
}

export async function GET() {
  const sitemap = generateSiteMap()

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
    }
  })
} 