import { Hero1 } from "@/components/hero1";
import { Section3 } from "@/components/section-3";

export default function ContactPage() {
  return (
    <>
      <Hero1 
        title="Contact Us"
        subtitle="Get in touch with our team for any inquiries about our sports trading solutions"
      />
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Whether you have questions about our products, pricing, or need technical support, our team is ready to answer all your questions.
          </p>
        </div>
      </div>
      <Section3 />
    </>
  );
} 