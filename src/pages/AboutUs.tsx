import { ArrowLeft, Users, Target, Award, Globe, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - Leading Business Setup Consultancy in Bahrain & Saudi Arabia</title>
        <meta name="description" content="Learn about our expert team providing comprehensive business setup services in Bahrain and Saudi Arabia. 8+ years of experience, 500+ successful company formations across the GCC region." />
        <meta name="keywords" content="business setup consultancy, company formation Bahrain, Saudi Arabia business consultants, GCC business services" />
        <link rel="canonical" href="https://yoursite.com/about" />
      </Helmet>
      {/* Navigation */}
      <nav className="bg-primary text-white py-6" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.backToHome')}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.heroTitle')}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('about.heroSubtitle')}
            </p>
            <p className="text-lg text-white/80 mt-4">
              {t('about.heroDescription')}
            </p>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card shadow-lg hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('about.mission')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card shadow-lg hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('about.vision')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('about.values')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('about.valuesSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.excellence')}</h3>
              <p className="text-muted-foreground">
                {t('about.excellenceDesc')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.trust')}</h3>
              <p className="text-muted-foreground">
                {t('about.trustDesc')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.results')}</h3>
              <p className="text-muted-foreground">
                {t('about.resultsDesc')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.innovation')}</h3>
              <p className="text-muted-foreground">
                {t('about.innovationDesc')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.compliance')}</h3>
              <p className="text-muted-foreground">
                {t('about.complianceDesc')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.globalPerspective')}</h3>
              <p className="text-muted-foreground">
                {t('about.globalPerspectiveDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{t('about.whyChooseTitle')}</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('about.expertKnowledge')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.expertKnowledgeDesc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('about.endToEnd')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.endToEndDesc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('about.fastProcessing')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.fastProcessingDesc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('about.successRate')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.successRateDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.ctaSubtitle')}
          </p>
          <Link to="/">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              {t('about.ctaButton')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
