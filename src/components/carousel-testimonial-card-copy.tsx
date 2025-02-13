import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CarouselTestimonialCardCopyProps {
  name: string;
  username: string;
  image: string;
  text: string;
  className?: string;
}

export function CarouselTestimonialCardCopy({
  name,
  username,
  image,
  text,
  className,
}: CarouselTestimonialCardCopyProps) {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      <div className="h-full p-1">
        <Card className="shadow-md h-full">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              {/* 圖片容器 */}
              <div className="relative size-10 rounded-full">
              </div>
              {/* 名稱與使用者名稱 */}
              <div>
                <p className="font-semibold leading-none text-foreground">{name}</p>
              </div>
            </div>
            {/* 評論文字 */}
            <p className="text-foreground">{text}</p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}