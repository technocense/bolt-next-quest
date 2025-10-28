import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { ProcessSteps } from "@/components/ProcessSteps";
import { GovernmentAuthorities } from "@/components/GovernmentAuthorities";
import { Calendly } from "@/components/Calendly";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyChoose />
      <ProcessSteps />
      <GovernmentAuthorities />
      <Calendly />
      <FAQ />
      <CTA />
      
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">{t('footer.services')}</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-secondary transition-colors cursor-pointer">{t('footer.companyFormation')}</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">{t('footer.licensing')}</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">{t('footer.visa')}</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">{t('footer.banking')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">{t('footer.countries')}</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/bahrain-setup" className="hover:text-secondary transition-colors">{t('footer.bahrain')}</Link></li>
                <li><Link to="/saudi-arabia-setup" className="hover:text-secondary transition-colors">{t('footer.saudiArabia')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">{t('footer.company')}</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/about" className="hover:text-secondary transition-colors">{t('footer.about')}</Link></li>
                <li><Link to="/blog" className="hover:text-secondary transition-colors">{t('footer.blog')}</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">{t('footer.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-secondary transition-colors">{t('footer.terms')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2024 BahrainSetup. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
