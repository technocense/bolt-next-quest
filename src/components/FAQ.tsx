import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';
import { useStrapi } from "@/hooks/useStrapi";
import { FAQItem } from "@/types/strapi";

export const FAQ = () => {
  const { t } = useTranslation();
  const { data: faqData, isLoading } = useStrapi<FAQItem[]>('/faq-items', { 'sort': 'order:asc' });
  
  const defaultFaqs = [
    { question: "Can I set up a company in Bahrain?", answer: "Yes, foreigners can set up companies in Bahrain. New legislation allows 100% foreign ownership for services and manufacturing businesses. However, there are minimum Bahraini shareholding requirements for other sectors: Trade Sector requires 1 Bahraini share (0.01%) minimum ownership, and Construction Businesses require 51% Bahraini ownership." },
    { question: "How much time does it take for Company Formation?", answer: "25-45 business days. This is an estimated timeframe, and the actual processing time can vary depending on several factors, including chosen package, company complexity, and government agency workload. At Setup in Bahrain, we strive for efficiency and can provide a more precise estimate based on your specific situation." },
    { question: "What are requirements for company formation in Bahrain?", answer: "General requirements include: copies of passports for all company owners and directors, a few proposed business names for availability checks, proof of a local business address (virtual or physical), and a basic business plan outlining your activities and goals. Additional considerations include company registration fees, minimum capital deposit (varies by company type), and business licenses." },
    { question: "How many Resident Permits (Visas) will I get after company formation?", answer: "Typically, each shareholder gets a 'Businessman/Investor' visa. Dependent visas (spouse and children) may be available for shareholders. Companies can initially get 2 work permits for employees, with the potential to increase later." },
    { question: "How much does it cost to set up a company?", answer: "BHD 800 – BHD 1,340+. This is a starting range, and the total cost can vary depending on several factors, including chosen company structure, government registration fees, agent fees (optional), and business licenses costs." },
    { question: "What is the legal form of company in Bahrain?", answer: "The most commonly chosen legal form is the Limited Liability Company (WLL), similar to an LLC. Benefits include limited liability (owners' liability is limited to their investment) and relatively easy and affordable setup with a minimum of one partner and low minimum capital requirement. Other options include Branch of a Foreign Company, Partnership Company, and Shareholding Company (Closed or Public)." },
    { question: "What are the benefits of company formation in Bahrain?", answer: "Key benefits include: favorable tax regime with 0% corporate tax for most businesses, strategic location with easy access to regional markets, stable and business-friendly environment, skilled multilingual workforce, modern infrastructure, access to financial services, streamlined formation process, 100% foreign ownership for most sectors, competitive office space costs, and a welcoming multicultural environment." }
  ];
  
  const faqs = faqData?.data?.map(item => ({
    question: item.attributes.question,
    answer: item.attributes.answer
  })) || defaultFaqs;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">{t('faq.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('faq.subtitle')}
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
