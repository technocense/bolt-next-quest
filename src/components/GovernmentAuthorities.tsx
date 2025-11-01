import { useEffect, useState } from "react";
import { Shield, Building2, Users, FileCheck, Landmark, ScrollText, Banknote, Scale } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useStrapi } from "@/hooks/useStrapi";
import { GovernmentAuthority } from "@/types/strapi";
import * as LucideIcons from "lucide-react";

export const GovernmentAuthorities = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: authoritiesData, isLoading } = useStrapi<GovernmentAuthority[]>('/government-authorities', { 'sort': 'order:asc', 'populate': '*' });

  const defaultAuthorities = [
    { name: t('governmentAuthorities.moic'), country: t('governmentAuthorities.bahrain'), icon: Building2, description: t('governmentAuthorities.moicDesc') },
    { name: t('governmentAuthorities.edb'), country: t('governmentAuthorities.bahrain'), icon: Shield, description: t('governmentAuthorities.edbDesc') },
    { name: t('governmentAuthorities.lmra'), country: t('governmentAuthorities.bahrain'), icon: Users, description: t('governmentAuthorities.lmraDesc') },
    { name: t('governmentAuthorities.cbb'), country: t('governmentAuthorities.bahrain'), icon: Landmark, description: t('governmentAuthorities.cbbDesc') },
    { name: t('governmentAuthorities.nbr'), country: t('governmentAuthorities.bahrain'), icon: FileCheck, description: t('governmentAuthorities.nbrDesc') },
    { name: t('governmentAuthorities.moi'), country: t('governmentAuthorities.bahrain'), icon: ScrollText, description: t('governmentAuthorities.moiDesc') },
    { name: t('governmentAuthorities.misa'), country: t('governmentAuthorities.saudiArabia'), icon: Shield, description: t('governmentAuthorities.misaDesc') },
    { name: t('governmentAuthorities.moc'), country: t('governmentAuthorities.saudiArabia'), icon: Building2, description: t('governmentAuthorities.mocDesc') },
    { name: t('governmentAuthorities.mhrsd'), country: t('governmentAuthorities.saudiArabia'), icon: Users, description: t('governmentAuthorities.mhrsdDesc') },
    { name: t('governmentAuthorities.sama'), country: t('governmentAuthorities.saudiArabia'), icon: Landmark, description: t('governmentAuthorities.samaDesc') },
    { name: t('governmentAuthorities.zatca'), country: t('governmentAuthorities.saudiArabia'), icon: Banknote, description: t('governmentAuthorities.zatcaDesc') },
    { name: t('governmentAuthorities.misaLegal'), country: t('governmentAuthorities.saudiArabia'), icon: Scale, description: t('governmentAuthorities.misaLegalDesc') }
  ];
  
  const authorities = authoritiesData?.data?.map(authority => {
    const IconComponent = (LucideIcons as any)[authority.attributes.name.split(' ')[0]] || Shield;
    return {
      name: authority.attributes.name,
      country: 'Bahrain/KSA',
      icon: IconComponent,
      description: authority.attributes.description
    };
  }) || defaultAuthorities;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % authorities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            {t('governmentAuthorities.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('governmentAuthorities.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('governmentAuthorities.description')}
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full border border-secondary/20">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">{t('governmentAuthorities.badge')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authorities.map((authority, index) => (
            <div
              key={authority.name}
              className={`bg-card rounded-xl p-8 border-2 hover-lift opacity-0 animate-fade-in-up ${
                index === currentIndex ? "border-secondary" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-smooth ${
                    index === currentIndex
                      ? "bg-secondary/20 scale-110"
                      : "bg-muted"
                  }`}
                >
                  <authority.icon
                    className={`h-8 w-8 transition-smooth ${
                      index === currentIndex ? "text-secondary" : "text-primary"
                    }`}
                  />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {authority.country}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight">{authority.name}</h3>
              <p className="text-sm text-muted-foreground">{authority.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {authorities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-smooth ${
                index === currentIndex
                  ? "w-8 bg-secondary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`View authority ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t('governmentAuthorities.closing')}
          </p>
        </div>
      </div>
    </section>
  );
};
