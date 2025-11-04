import { CheckCircle2, Globe, Users, Award, Zap, MapPin, Headphones } from "lucide-react";
import bahrainOffice from "@/assets/bahrain-office.jpg";
import { useTranslation } from 'react-i18next';

export const WhyChoose = () => {
  const { t } = useTranslation();
  
  const benefits = [
    { icon: Zap, title: "Streamlined Process", description: "We navigate the intricacies of business formation in Bahrain, ensuring a smooth and efficient experience." },
    { icon: Award, title: "Expert Guidance", description: "Our team offers invaluable insights and strategies tailored to your specific business goals and industry." },
    { icon: MapPin, title: "Local Knowledge", description: "We leverage our extensive understanding of the Bahraini market to guide you through regulations and requirements." },
    { icon: Headphones, title: "Ongoing Support", description: "We don't disappear after registration. We provide ongoing support to address any challenges you may face." }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">{t('whyChoose.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('whyChoose.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('whyChoose.description')}
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group opacity-0 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth group-hover:scale-110">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative opacity-0 animate-slide-in-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={bahrainOffice} 
                alt="Modern Business District in Bahrain" 
                className="w-full h-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border-2 hover-lift">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">{t('whyChoose.yearsOfExcellence')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
