import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialProofLogo3Props {
  image: string;
  className?: string;
}

export function SocialProofLogo3({ image, className }: SocialProofLogo3Props) {
  return (
    <div className={cn("relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1", className)}>
      <Image alt="Company Logo" src={image} fill className="object-contain" />
    </div>
  );
}
