import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogService } from '@/services/blog-service';

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { author: string } }): Promise<Metadata> {
  const authorSlug = params.author;
  const authorName = authorSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const posts = BlogService.getPostsByAuthor(authorName);
  
  if (posts.length === 0) {
    return {
      title: 'Author Not Found | Lucky Exchange',
      description: 'The requested blog author could not be found.',
    };
  }
  
  const author = posts[0].author;
  const authorRole = posts[0].authorRole;
  
  return {
    title: `${author} - ${authorRole} | Lucky Exchange Blog`,
    description: `Read articles by ${author}, ${authorRole} at Lucky Exchange. Expert insights on sports betting technology and industry trends.`,
    keywords: `${author}, ${authorRole}, sports betting, betting technology, industry insights`,
    alternates: {
      canonical: `https://luckysports.cloud/blog/authors/${params.author}`,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: `https://luckysports.cloud/blog/authors/${params.author}`,
      title: `${author} - ${authorRole} | Lucky Exchange Blog`,
      description: `Read articles by ${author}, ${authorRole} at Lucky Exchange. Expert insights on sports betting technology and industry trends.`,
      siteName: 'Lucky Exchange',
    },
  };
}

export default function AuthorPage({ params }: { params: { author: string } }) {
  const authorSlug = params.author;
  const authorName = authorSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const posts = BlogService.getPostsByAuthor(authorName);
  
  // If no posts found for this author, show 404
  if (posts.length === 0) {
    notFound();
  }
  
  const author = posts[0].author;
  const authorRole = posts[0].authorRole;
  const authorImage = posts[0].authorImage;
  
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Author page header */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6">
                <Image
                  src={authorImage}
                  alt={author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-2">
                {author}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {authorRole}
              </p>
              <p className="text-lg mb-8 max-w-2xl text-muted-foreground">
                Lucky Exchange team professional, focused on providing industry-leading sports betting solutions and analysis.
              </p>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-center">
              Articles by {author}
            </h2>
            
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