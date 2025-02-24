import { Header } from "@/components/header";
import { Hero1 } from "@/components/hero1";
import { Hero } from "@/components/hero"; 
import { Technologies } from "@/components/technologies";
import { Section } from "@/components/section";
import { Section2 } from "@/components/section-2";
import { Features } from "@/components/features-section";
import { Testimonials } from "@/components/testimonials";
import { FeaturesSection } from "@/components/features-section-2";
import { FeaturesSection2 } from "@/components/features-section-3";
import { SocialProof } from "@/components/social-proof";
import { Section3 } from "@/components/section-3";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero1 
        title="Lucky Exchange"
        subtitle="Real-Time Odds, Fast Settlements & Seamless API Integration for Bookmakers and Operators"
      />
      <Hero />
      <Technologies />
      <Section />
      <Section2 />
      <Features />
      <Testimonials />
      <FeaturesSection />
      <FeaturesSection2 />
      <SocialProof />
      <Section3 />
      <Faq />
      <Footer />
    </>
  );
}
