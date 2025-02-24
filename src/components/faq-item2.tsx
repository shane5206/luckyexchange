import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem2Props {
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem2({ question, answer, className }: FaqItem2Props) {
  return (
    <AccordionItem value={question} className={cn("border-b-0", className)}>
      <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-lg text-muted-foreground">{answer}</AccordionContent>
    </AccordionItem>
  );
}
