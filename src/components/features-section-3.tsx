import Image from "next/image";

export function FeaturesSection2() {
  return (
    <section className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-24 pb-10">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/Product-800624-03.png"
          width={720}
          height={497.7}
          className="rounded-xl border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Betting Options
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Multiple betting markets, including Match Winner, Top Batsman, Total Runs, Overs, Wickets,
          and more.<p>Flexible stake sizes catering to casual and seasoned bettors.</p>
        </p>
        <p>Flexible stake sizes catering to casual and seasoned bettors.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2" />
          <li className="flex items-center gap-2" />
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3" />
      </div>
    </section>
  );
}
