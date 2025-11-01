import { CheckCircle2, Globe, Users, TrendingUp, Clock, Award } from "lucide-react";
import bahrainOffice from "@/assets/bahrain-office.jpg";
import { useTranslation } from 'react-i18next';
import { useStrapi } from "@/hooks/useStrapi";
import { WhyChooseItem } from "@/types/strapi";
import * as LucideIcons from "lucide-react";

export const WhyChoose = () => {
  const { t } = useTranslation();
  const { data: whyChooseData, isLoading } = useStrapi<WhyChooseItem[]>('/why-choose-items', { 'sort': 'order:asc' });
  
  const defaultBenefits = [
    { icon: CheckCircle2, title: t('whyChoose.streamlined'), description: t('whyChoose.streamlinedDesc') },
    { icon: Globe, title: t('whyChoose.regional'), description: t('whyChoose.regionalDesc') },
    { icon: Users, title: t('whyChoose.dedicated'), description: t('whyChoose.dedicatedDesc') },
    { icon: TrendingUp, title: t('whyChoose.growth'), description: t('whyChoose.growthDesc') },
    { icon: Clock, title: t('whyChoose.fast'), description: t('whyChoose.fastDesc') },
    { icon: Award, title: t('whyChoose.proven'), description: t('whyChoose.provenDesc') }
  ];
  
  const benefits = whyChooseData?.data?.map(item => {
    const IconComponent = (LucideIcons as any)[item.attributes.icon] || CheckCircle2;
    return {
      icon: IconComponent,
      title: item.attributes.title,
      description: item.attributes.description
    };
  }) || defaultBenefits;

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
