import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogService } from '@/services/blog-service';

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const decodedCategory = decodeURIComponent(params.category);
  const posts = BlogService.getPostsByCategory(decodedCategory);
  
  if (posts.length === 0) {
    return {
      title: 'Category Not Found | Lucky Exchange',
      description: 'The requested blog category could not be found.',
    };
  }
  
  return {
    title: `${decodedCategory} Articles | Lucky Exchange Blog`,
    description: `Explore our collection of articles about ${decodedCategory.toLowerCase()} in the sports betting industry.`,
    keywords: `${decodedCategory.toLowerCase()}, sports betting, betting technology, industry insights`,
    alternates: {
      canonical: `https://luckysports.cloud/blog/category/${params.category}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://luckysports.cloud/blog/category/${params.category}`,
      title: `${decodedCategory} Articles | Lucky Exchange Blog`,
      description: `Explore our collection of articles about ${decodedCategory.toLowerCase()} in the sports betting industry.`,
      siteName: 'Lucky Exchange',
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category);
  const posts = BlogService.getPostsByCategory(decodedCategory);
  
  // Get all categories for the filter
  const categories = BlogService.getAllCategories();
  
  // If no posts found for this category, show 404
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Category page header */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                {decodedCategory}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl text-muted-foreground">
                Explore our collection of articles about {decodedCategory.toLowerCase()} in the sports betting industry.
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
                    <Button 
                      variant={category === decodedCategory ? "default" : "outline"} 
                      className="rounded-full"
                    >
                      {category}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Blog post card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
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
            
            {/* Back to all posts */}
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="text-white" asChild>
                <Link href="/blog">
                  Back to All Posts
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 