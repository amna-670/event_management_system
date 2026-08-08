import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mockFAQs } from "@/data/mockData";

const FAQ = () => {
  return (
    <section id="faq" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-foreground mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {mockFAQs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-surface border border-border rounded-xl px-5"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;