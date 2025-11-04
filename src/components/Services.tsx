import { Building2, FileCheck, CreditCard, Users, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    { icon: Building2, title: "Company Formation in Bahrain", description: "Complete company formation services with 100% foreign ownership options for services and manufacturing businesses." },
    { icon: Users, title: "Investor Visa Bahrain", description: "Businessman/Investor visa for shareholders with options for dependent visas for spouse and children." },
    { icon: RefreshCw, title: "CR Renewal Bahrain", description: "Hassle-free Commercial Registration renewal services to keep your business compliant." },
    { icon: CreditCard, title: "Business Bank Account", description: "Assistance with opening corporate bank accounts for your business transactions in Bahrain." }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold">{t('services.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="transition-smooth hover:shadow-xl hover-lift border-2 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-gold transition-smooth group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
