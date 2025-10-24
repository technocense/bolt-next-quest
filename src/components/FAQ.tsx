import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the requirements for company formation in Bahrain and Saudi Arabia?",
    answer: "Requirements vary by jurisdiction and business type. Generally, you'll need valid passports, proposed business names, a registered address, and a business plan. For Bahrain, 100% foreign ownership is allowed for most sectors. In Saudi Arabia, the requirements depend on your business activity. We guide you through all specific requirements for your situation."
  },
  {
    question: "How long does the business setup process take?",
    answer: "The typical timeline is 3-6 weeks, depending on the jurisdiction, business type, and complexity. Express services are available for faster processing. We provide clear timelines upfront and keep you informed at every stage."
  },
  {
    question: "Can foreigners own 100% of a company in Bahrain and Saudi Arabia?",
    answer: "Yes, Bahrain allows 100% foreign ownership for most business sectors. Saudi Arabia also permits 100% foreign ownership for most activities under the new investment regulations. Some restricted sectors may require local partnership, which we can help structure appropriately."
  },
  {
    question: "What types of business licenses are available?",
    answer: "We can help you obtain commercial, industrial, service, tourism, and professional licenses. The specific license depends on your business activities. We assess your needs and recommend the most suitable license type for your operations."
  },
  {
    question: "Do you provide office space and business address services?",
    answer: "Yes, we offer flexible solutions including virtual offices, serviced offices, and assistance in finding permanent office space. A registered business address is mandatory for company formation, and we can provide this as part of our service packages."
  },
  {
    question: "What ongoing support do you provide after company formation?",
    answer: "We offer comprehensive post-formation support including annual license renewals, visa processing, accounting services, compliance management, and business advisory. Our relationship doesn't end at registration – we're your long-term partner for success in the Gulf."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about business setup in Bahrain and Saudi Arabia.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-xl px-6 data-[state=open]:border-secondary/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
