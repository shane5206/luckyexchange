"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Hero() {
  const desktopNextRef = useRef<HTMLButtonElement | null>(null);
  const mobileNextRef = useRef<HTMLButtonElement | null>(null);

  // 自動輪播功能
  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopNextRef.current) {
        desktopNextRef.current.click(); // 自動觸發桌面版下一步按鈕
      }
      if (mobileNextRef.current) {
        mobileNextRef.current.click(); // 自動觸發行動版下一步按鈕
      }
    }, 3000); // 每 3 秒切換一次

    return () => clearInterval(interval); // 清除計時器，防止記憶體洩漏
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 sm:gap-6 pb-5">
      <div className="w-full object-center justify-center container mb-8 md:mb-12">
        {/* 桌面版輪播 */}
        <Carousel orientation="horizontal" className="hidden md:block" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full aspect-[1920/1280]">
                <Image
                  alt="Carousel image 1"
                  src="/images/Official-Website-Banner-19201280--01.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(min-width: 1280px) 1920px, 100vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full aspect-[1920/1280]">
                <Image
                  alt="Carousel image 3"
                  src="/images/Official-Website-Banner-19201280--03.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(min-width: 1280px) 1920px, 100vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full aspect-[1920/1280]">
                <Image
                  alt="Carousel image 2"
                  src="/images/Official-Website-Banner-19201280--02.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(min-width: 1280px) 1920px, 100vw"
                  priority
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <CarouselPrevious className="relative left-0 h-12 w-12" />
            <CarouselNext ref={desktopNextRef} className="relative right-0 h-12 w-12" />
          </div>
        </Carousel>

        {/* 行動版輪播 */}
        <Carousel orientation="horizontal" className="md:hidden container" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full aspect-[1080/1620]">
                <Image
                  alt="Carousel image 2"
                  src="/images/0103-10801620.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full aspect-[1080/1620]">
                <Image
                  alt="Carousel image 1"
                  src="/images/Banner-10801620-03.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full aspect-[1080/1620]">
                <Image
                  alt="Carousel image 3"
                  src="/images/Banner-10801620-02.png"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw"
                  priority
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <CarouselPrevious className="relative left-0 h-12 w-12" />
            <CarouselNext ref={mobileNextRef} className="relative right-0 h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}