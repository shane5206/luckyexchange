import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BlogService, BlogPost } from '@/services/blog-service';
import { ShareButtons } from '@/components/blog/share-buttons';

// Dynamic metadata generation for SEO optimization
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BlogService.getPostById(params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Lucky Exchange',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Lucky Exchange Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://luckysports.cloud/blog/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://luckysports.cloud/blog/${params.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'Lucky Exchange',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BlogService.getPostById(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related blog posts
  const relatedPosts = BlogService.getRelatedPosts(params.slug);
  
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Blog post header */}
        <section className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-background/70"></div>
          </div>
          <div className="container relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-foreground">
                {post.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-foreground font-medium">{post.author}</div>
                  <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                </div>
                <div className="text-muted-foreground">
                  <span>•</span>
                </div>
                <time dateTime={post.date} className="text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog content */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl" 
                  dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                
                {/* Tags */}
                <div className="mt-10 pt-10 border-t">
                  <h3 className="font-heading font-bold text-lg mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link 
                        key={tag} 
                        href={`/blog/tags/${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-accent/80"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-10 pt-10 border-t">
                  <h3 className="font-heading font-bold text-lg mb-4">Share Article</h3>
                  <ShareButtons 
                    title={post.title} 
                    url={`https://luckysports.cloud/blog/${post.id}`} 
                  />
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Author card */}
                <Card className="p-6 mb-8">
                  <h3 className="font-heading font-bold text-lg mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative size-16 overflow-hidden rounded-full">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{post.author}</div>
                      <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Lucky Exchange team professional, focused on providing industry-leading sports betting solutions and analysis.
                  </p>
                  <Button variant="outline" className="w-full text-white" asChild>
                    <Link href="/blog/all-articles">
                      View All Articles
                    </Link>
                  </Button>
                </Card>
                
                {/* Related articles */}
                <Card className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
                          <Image 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 text-sm">
                            <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(relatedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-accent/30">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Ready to Elevate Your Betting Business?
              </h2>
              <p className="text-muted-foreground mb-8">
                Learn how Lucky Exchange can provide innovative B2B sports betting solutions for your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="destructive" size="lg" asChild>
                  <Link href="/contact-us">Contact Sales</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/product">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 