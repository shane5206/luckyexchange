import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialProofLogo2Props {
  image: string;
  className?: string;
}

export function SocialProofLogo2({ image, className }: SocialProofLogo2Props) {
  return (
    <div className={cn("relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1", className)}>
      <Image alt="Company Logo" src={image} fill className="object-contain" />
    </div>
  );
}
