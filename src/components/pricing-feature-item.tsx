import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeatureItemProps {
  text: string;
  className?: string;
}

export function PricingFeatureItem({ text, className }: PricingFeatureItemProps) {
  return (
    <li className={cn("flex items-center gap-2", className)}>
      <Check size={20} className="text-primary" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </li>
  );
}
