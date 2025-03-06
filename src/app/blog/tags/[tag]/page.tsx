import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogService } from '@/services/blog-service';

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag);
  const posts = BlogService.getPostsByTag(decodedTag);
  
  if (posts.length === 0) {
    return {
      title: 'Tag Not Found | Lucky Exchange',
      description: 'The requested blog tag could not be found.',
    };
  }
  
  return {
    title: `${decodedTag} Articles | Lucky Exchange Blog`,
    description: `Explore our collection of articles tagged with ${decodedTag.toLowerCase()} in the sports betting industry.`,
    keywords: `${decodedTag.toLowerCase()}, sports betting, betting technology, industry insights`,
    alternates: {
      canonical: `https://luckysports.cloud/blog/tags/${params.tag}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://luckysports.cloud/blog/tags/${params.tag}`,
      title: `${decodedTag} Articles | Lucky Exchange Blog`,
      description: `Explore our collection of articles tagged with ${decodedTag.toLowerCase()} in the sports betting industry.`,
      siteName: 'Lucky Exchange',
    },
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);
  const posts = BlogService.getPostsByTag(decodedTag);
  
  // Get all tags for the filter
  const tags = BlogService.getAllTags();
  
  // If no posts found for this tag, show 404
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Tag page header */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                Tag
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                {decodedTag}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl text-muted-foreground">
                Explore our collection of articles tagged with {decodedTag.toLowerCase()} in the sports betting industry.
              </p>
              
              {/* Popular tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tags.slice(0, 10).map((tag) => (
                  <Link key={tag} href={`/blog/tags/${encodeURIComponent(tag)}`}>
                    <Button 
                      variant={tag === decodedTag ? "default" : "outline"} 
                      className="rounded-full"
                    >
                      {tag}
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
      <Footer />
    </>
  );
} 