import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCardCopy } from "@/components/carousel-testimonial-card-copy";
import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-10">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Overview</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Why Choose Lucky Exchange?
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Your Gateway to Seamless Sports Betting
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:hidden">
        <CarouselPrevious variant="ghost" className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCardCopy
            name="Low Stakes, High Potential"
            text="Accessible for both beginners and experienced bettors with flexible betting limits."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/profit_1de29297-66cc-4915-907a-8f4444b75351.png"
            username="johndoe"
          />
          <CarouselTestimonialCardCopy
            name="Unmatched Liquidity"
            text="Enjoy seamless betting with high liquidity across cricket and other popular sports."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
            username="johndoe"
          />
          <CarouselTestimonialCardCopy
            name="Localized User Experience"
            text="Platforms designed to match regional preferences, ensuring a familiar and intuitive interface."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
            username="johndoe"
          />
          <CarouselTestimonialCardCopy
            name="Swift Transactions"
            text="Enjoy quick bet settlements and secure payment options meeting the demands for fast-paced betting action."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
            username="johndoe"
          />
          <CarouselTestimonialCardCopy
            name="Comprehensive Market Coverage"
            text="From IPL to Test Matches, access pre-match and in-play betting markets globally."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
            username="johndoe"
          />
          <CarouselTestimonialCardCopy
            name="Peer-to-Peer Betting Community"
            text="Engage with other users directly through interactive peer-to-peer betting features."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
            username="johndoe"
          />
        </CarouselContent>
        <CarouselNext className="size-7 xl:-right-12 xl:size-8 -right-6" />
      </Carousel>
      <div className="hidden md:block">
        <div className="hidden md:block">
          <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/profit_1de29297-66cc-4915-907a-8f4444b75351.png"
              title="Low Stakes, High Potential"
              description="Accessible for both beginners and experienced bettors with flexible betting limits."
              className="m-2"
            />
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/cash-flow_f4d998c9-54a6-421f-8551-7fd3c80e3e05.png"
              title="Unmatched Liquidity"
              description="Enjoy seamless betting with high liquidity across cricket and other popular sports."
              className="m-2"
            />
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/user-friendly_5c2bb8a0-25c0-4df1-ba51-3fb2f92cfdfc.png"
              title="Localized User Experience"
              description="Platforms designed to match regional preferences, ensuring a familiar and intuitive interface."
              className="m-2"
            />
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/credit_c50911f5-5493-4192-9d39-fae7f95a3ab2.png"
              title="Swift Transactions"
              description="Enjoy quick bet settlements and secure payment options meeting the demands for fast-paced betting action."
              className="m-2"
            />
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/market-positioning_08947f5b-ae65-48fd-8b08-d17c0d084abf.png"
              title="Comprehensive Market Coverage"
              description="From IPL to Test Matches, access pre-match and in-play betting markets globally."
              className="m-2"
            />
            <FeatureCard
              icon="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/lending_e3779c5d-6492-4e3b-9908-6023938aac42.png"
              title="Peer-to-Peer Betting Community"
              description="Engage with other users directly through interactive peer-to-peer betting features."
              className="m-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
