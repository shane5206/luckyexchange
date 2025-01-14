import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-10 pb-10">
      <div className="w-full object-center justify-center container">
        <Carousel orientation="horizontal" className="hidden md:block">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
                <Image
                  alt="Carousel image 1"
                  src="/images/Official-Website-Banner-19201280--01.png"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
                <Image
                  alt="Carousel image 3"
                  src="/images/Official-Website-Banner-19201280--03.png"
                  fill
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
                <Image
                  alt="Carousel image 2"
                  src="/images/Official-Website-Banner-19201280--02.png"
                  fill
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute left-0 right-0 flex justify-center gap-2">
            <CarouselPrevious className="relative translate-y-0 left-0 mr-2" />
            <CarouselNext className="relative translate-y-0 right-0" />
          </div>
        </Carousel>
        <Carousel orientation="horizontal" className="md:hidden container">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full">
                <Image
                  alt="Carousel image 2"
                  src="/images/0103-10801620.png"
                  fill={false}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full">
                <Image
                  alt="Carousel image 1"
                  src="/images/Banner-10801620-03.png"
                  fill={false}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
                <Image
                  alt="Carousel image 3"
                  src="/images/Banner-10801620-02.png"
                  fill={false}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute left-0 right-0 flex justify-center gap-2">
            <CarouselPrevious className="relative translate-y-0 left-0 mr-2" />
            <CarouselNext className="relative translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
