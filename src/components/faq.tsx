import { Accordion } from "@/components/ui/accordion";
import { FaqItem2 } from "@/components/faq-item2";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <FaqItem2
          question="What is Lucky Exchange?"
          answer="Lucky Exchange is a leading sports trading platform offering real-time odds, fast settlements, and 99% market uptime for cricket, football, tennis, basketball, and kabaddi."
        />
        <FaqItem2
          question="What sports and markets are available?"
          answer="We cover 3,250+ live matches, 3,600+ pre-match events, and 150+ betting markets, including Match Odds, Fancy Bets, and Premium Trading options."
        />
        <FaqItem2
          question="How do I register an account?"
          answer="Click 'Sign Up,' fill in your details, complete verification, and start trading instantly."
        />
        <FaqItem2
          question="How fast are settlements and market updates?"
          answer="We provide instant results with rolling settlements, and markets reopen within 10 seconds after key events."
        />
        <FaqItem2
          question="Does Lucky Exchange support mobile trading?"
          answer="Yes, our platform is fully optimized for both desktop and mobile devices for seamless trading anytime, anywhere."
        />
        <FaqItem2
          question="What currencies are supported?"
          answer="We support INR, PKR, BDT, NPR, and LKR for convenient transactions."
        />
        <FaqItem2
          question="How can I deposit and withdraw?"
          answer="Use bank transfers, e-wallets, or cryptocurrency for fast and secure transactions."
        />
        <FaqItem2
          question="Is Lucky Exchange safe and reliable?"
          answer="Yes, we have a stable IT infrastructure, professional risk management, and real-time data security."
        />
        <FaqItem2
          question="Does Lucky Exchange offer virtual sports?"
          answer="Yes, we provide 2,000+ virtual cricket matches, including IPL, BBL, and CPL simulations, available 24/7."
        />
        <FaqItem2
          question="How do I contact customer support?"
          answer="We offer 24/7 live chat, WhatsApp, and email support for all inquiries."
        />
      </Accordion>
    </section>
  );
}
