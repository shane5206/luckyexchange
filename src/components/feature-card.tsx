import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
          <img alt="Live Sporting Events Year Round" src={icon} width={40} />
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
