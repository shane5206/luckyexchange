import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card className={cn("shadow-lg lg:basis-1/3 md:basis-1/2", className)}>
      <CardContent className="flex flex-col items-start gap-5 p-7">
        <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
          <Image
            alt={title} // 使用傳入的 title 作為替代文字，更具語義性
            src={icon}
            width={40}
            height={40}
            className="size-10 object-contain" // 確保圖片正確縮放和對齊
          />
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}