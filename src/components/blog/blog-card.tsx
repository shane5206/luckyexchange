import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export function BlogCard({ id, title, excerpt, date, author, category, imageUrl }: BlogCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
      <div className="relative h-48">
        <div className="absolute inset-0 bg-black/30 z-10">
          <div className="p-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>{author}</span>
          <span>•</span>
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <h2 className="text-xl font-bold mb-3 font-heading line-clamp-2">
          <Link href={`/blog/${id}`} className="hover:text-primary">
            {title}
          </Link>
        </h2>
        <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>
        <Link href={`/blog/${id}`} className="mt-auto">
          <Button variant="outline" className="w-full text-white">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
} 