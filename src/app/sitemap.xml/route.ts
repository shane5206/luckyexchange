import { BlogService } from '@/services/blog-service';

export async function GET() {
  const baseUrl = 'https://luckysports.cloud';
  
  // 获取所有博客文章以生成URL
  const blogPosts = BlogService.getAllPosts();
  
  // 获取所有分类和标签
  const categories = BlogService.getAllCategories();
  const tags = BlogService.getAllTags();
  
  // 创建sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 核心页面 -->
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/product</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact-us</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- 博客相关页面 -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/all-articles</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- 博客文章 -->
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  <!-- 博客分类页面 -->
  ${categories.map(category => `
  <url>
    <loc>${baseUrl}/blog/category/${encodeURIComponent(category)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
  
  <!-- 博客标签页面 -->
  ${tags.map(tag => `
  <url>
    <loc>${baseUrl}/blog/tags/${encodeURIComponent(tag)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`).join('')}
</urlset>`;

  // 返回XML响应
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=86400',
    },
  });
} 