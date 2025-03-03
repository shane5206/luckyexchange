'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductShowcase() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
        <div className="relative order-last lg:order-first">
          <div className="relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-xl bg-gray-100">
            <Image
              alt="Product Showcase"
              className="object-cover"
              fill
              src="/images/product-showcase.png"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -left-6 -top-6 h-64 w-64 rounded-full bg-red-500/20 blur-3xl"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
              Sports Trading Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive Sports Betting solutions
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide complete sports betting solutions, including real-time odds, fast settlements, and scalable B2B services. Whether you&apos;re a small betting company or a large operator, we can meet your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 