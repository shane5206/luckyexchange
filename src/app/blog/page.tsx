import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogService } from '@/services/blog-service';

// SEO optimized metadata
export const metadata: Metadata = {
  title: 'Professional Blog | Lucky Exchange',
  description: 'Read Lucky Exchange\'s latest insights, technical updates, and market trend analysis for the sports betting industry, providing professional knowledge and solutions for betting operators.',
  keywords: 'sports betting, betting market, B2B solutions, betting technology, real-time odds',
  alternates: {
    canonical: 'https://luckysports.cloud/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luckysports.cloud/blog',
    title: 'Professional Blog | Lucky Exchange',
    description: 'Read Lucky Exchange\'s latest insights, technical updates, and market trend analysis for the sports betting industry, providing professional knowledge and solutions for betting operators.',
    siteName: 'Lucky Exchange',
  },
};

export default function BlogPage() {
  // Get blog posts from service
  const blogPosts = BlogService.getAllPosts();
  
  // Get all categories
  const categories = BlogService.getAllCategories();
  
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Blog page header */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Professional Blog & Insights
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl text-muted-foreground">
                Explore the latest trends, insights, and innovations in the sports betting industry to help your business stay ahead of the competition.
              </p>
              
              {/* Category filter buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Link href="/blog">
                  <Button variant="outline" className="rounded-full">
                    All
                  </Button>
                </Link>
                {categories.map((category) => (
                  <Link key={category} href={`/blog/category/${encodeURIComponent(category)}`}>
                    <Button variant="outline" className="rounded-full">
                      {category}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Blog post card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 