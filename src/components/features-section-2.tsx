import Image from "next/image";
import { Check } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-24 pb-10">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/Product-800624-01-0102-04.png"
          width={720}
          height={500}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          placeholder="empty"
          className="rounded-xl border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Market Coverage and Live stream
          </h2>
        </div>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="text-primary" />
            <span className="text-muted-foreground">
              Extensive coverage of international and domestic cricket leagues, including T20 (e.g.,
              IPL, BBL, CPL, The Hundred, T10), ODI, Test Matches, Premier League, and more.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">In-play betting and pre-match betting.</span>
          </li>
          <li className="flex items-center gap-2" />
        </ul>
      </div>
    </section>
  );
}
