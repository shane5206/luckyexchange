"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";

export function Testimonials() {
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click(); // 自動觸發下一步按鈕
      }
    }, 3000);

    return () => clearInterval(interval); // 清除計時器
  }, []);

  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-10">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Testimonials</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          What our users say
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Hear from our satisfied users who trust <br />
        Lucky Exchange for their sports betting needs.
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious variant="ghost" className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="John"
            text="The most important thing that this website are on my favourite list"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/worldface-pakistani-guy-white-background_1f0a1733-5deb-4e05-b5a4-ca71d40f0447.jpg"
            username="johndoe"
          />
          <CarouselTestimonialCard
            name="Max"
            text="Easy to play"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/handsome-smiling-hipster-model-sexy-unshaven-man-dressed-white-summer-tshirt-jeans-clothes-fashion-male-posing-near-blue-wall-studio-isolated_e9339127-9842-467c-8a12-0c32e9db4a63.jpg"
            username="maxcook"
          />
          <CarouselTestimonialCard
            name="Bob"
            text="Solid choice for anyone looking to dive into the world of betting, balancing fun and strategy effectively."
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/handsome-man-with-beard-smiles_eb7bc688-59f3-48c3-96ae-4bcf768a2086.jpg"
            username="thisisbob"
          />
          <CarouselTestimonialCard
            name="Micheal"
            text="An enjoyable option for both casual bettors and seasoned players,offering a balanced mix of strategy and excitement"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_998355b8-5a0a-42ad-a3ca-5885cf14f48b.jpg"
            username="michael"
          />
          <CarouselTestimonialCard
            name="Mahendra"
            text="You get to play online betting games at the choice of your place which is very convenient for everyone"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/image-OXzvLe38w-transformed_eb808d00-38c0-44b4-bdbb-84b9a326266c.png"
            username="Mammen"
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" ref={nextButtonRef} />
      </Carousel>
    </section>
  );
}