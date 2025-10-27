import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";
import logo from "@/assets/bahrain-setup-logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Hero = () => {
  const { t } = useTranslation();
  return <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logo} alt="BahrainSetup - Your Gateway to the Gulf!" className="h-16 md:h-20" />
          <div className="flex gap-3">
            <LanguageSwitcher />
            <a 
              href="https://wa.me/973XXXXXXXX?text=Hello%2C%20I%27m%20interested%20in%20setting%20up%20my%20business%20in%20Bahrain" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t('nav.whatsapp')}
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                {t('nav.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full opacity-0 animate-fade-in-up">
            <span className="text-secondary font-semibold">Serving Bahrain & Saudi Arabia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in-up animate-delay-100">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 shadow-gold transition-bounce hover:scale-105">
              {t('hero.startBusiness')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm transition-bounce hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.bookConsultation')}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 opacity-0 animate-fade-in-up animate-delay-400">
            <div className="hover-lift cursor-default">
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-white/80">{t('hero.companiesFormed')}</div>
            </div>
            <div className="hover-lift cursor-default">
              <div className="text-4xl font-bold text-secondary mb-2">48</div>
              <div className="text-white/80">{t('hero.avgSetupTime')} ({t('hero.days')})</div>
            </div>
            <div className="hover-lift cursor-default">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/80">{t('hero.successRate')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};