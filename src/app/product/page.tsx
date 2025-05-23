import { Hero1 } from "@/components/hero1";
import { Features } from "@/components/features-section";
import { Faq } from "@/components/faq";
import { ProductShowcase } from "@/components/blocks/product-showcase";
import { ProductFeatures } from "@/components/blocks/product-features";
import { ProductPricing } from "@/components/blocks/product-pricing";

export default function ProductPage() {
  return (
    <>
      <Hero1 
        title="Our Product Solutions"
        subtitle="Comprehensive sports trading solutions for betting operators, including real-time odds, fast settlements, and scalable B2B services"
      />
      <ProductShowcase />
      <ProductFeatures />
      <Features />
      <Faq />
    </>
  );
} 