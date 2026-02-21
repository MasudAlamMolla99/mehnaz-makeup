import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you travel outside Kolkata?",
    a: "Absolutely! I'm available for bookings across India and internationally. Travel and accommodation costs are discussed during consultation.",
  },
  {
    q: "What brands do you use?",
    a: "I use a curated selection of premium brands including MAC, Bobbi Brown, Charlotte Tilbury, Huda Beauty, and NARS — always ensuring the best for your skin type.",
  },
  {
    q: "Do you offer trials?",
    a: "Yes, bridal trials are highly recommended and can be booked separately. This ensures we perfect your look before the big day.",
  },
  {
    q: "How early should I book?",
    a: "For bridal bookings, I recommend reaching out at least 3–6 months in advance. For other events, 2–4 weeks notice is ideal.",
  },
  {
    q: "Do you offer professional courses?",
    a: "Yes! I offer hands-on professional makeup courses for aspiring artists — covering bridal, editorial, and corrective techniques with certification.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="gold-line mx-auto mt-4 bg-rose-500" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-sm bg-card px-6"
            >
              <AccordionTrigger className="font-heading text-base font-medium text-card-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
