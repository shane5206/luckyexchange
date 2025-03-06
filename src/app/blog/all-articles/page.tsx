import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogService } from "@/services/blog-service";

export const metadata: Metadata = {
  title: "All Articles | Lucky Exchange Blog",
  description: "Browse all articles from Lucky Exchange, covering sports trading, betting solutions, and industry insights.",
  keywords: ["sports trading", "betting solutions", "Lucky Exchange", "blog", "articles"],
  openGraph: {
    title: "All Articles | Lucky Exchange Blog",
    description: "Browse all articles from Lucky Exchange, covering sports trading, betting solutions, and industry insights.",
    url: "https://luckysports.cloud/blog/all-articles",
    siteName: "Lucky Exchange",
    images: [
      {
        url: "https://luckysports.cloud/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucky Exchange Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AllArticlesPage() {
  const posts = BlogService.getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  All Articles
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse all articles from Lucky Exchange, covering sports trading, betting solutions, and industry insights.
                </p>
              </div>
            </div>
            
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
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
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="text-white" asChild>
                <Link href="/blog">
                  Back to Blog Home
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