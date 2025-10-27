import { useEffect, useState } from "react";
import { Shield, Building2, Users, FileCheck, Landmark, ScrollText, Banknote, Scale } from "lucide-react";

const authorities = [
  // Bahrain Authorities
  {
    name: "Ministry of Industry and Commerce",
    country: "Bahrain",
    icon: Building2,
    description: "Business registration and commercial licensing authority"
  },
  {
    name: "Economic Development Board (EDB)",
    country: "Bahrain",
    icon: Shield,
    description: "Investment promotion and business development"
  },
  {
    name: "Labour Market Regulatory Authority",
    country: "Bahrain",
    icon: Users,
    description: "Work permits and employment regulations"
  },
  {
    name: "Central Bank of Bahrain",
    country: "Bahrain",
    icon: Landmark,
    description: "Financial services licensing and oversight"
  },
  {
    name: "National Bureau for Revenue (NBR)",
    country: "Bahrain",
    icon: FileCheck,
    description: "Tax registration and VAT compliance"
  },
  {
    name: "Ministry of Interior - Nationality, Passports & Residence Affairs",
    country: "Bahrain",
    icon: ScrollText,
    description: "Visa processing and residency permits"
  },
  // Saudi Arabia Authorities
  {
    name: "Ministry of Investment (MISA)",
    country: "Saudi Arabia",
    icon: Shield,
    description: "Investment licensing and foreign investment facilitation"
  },
  {
    name: "Ministry of Commerce",
    country: "Saudi Arabia",
    icon: Building2,
    description: "Commercial registration and business licensing"
  },
  {
    name: "Ministry of Human Resources & Social Development",
    country: "Saudi Arabia",
    icon: Users,
    description: "Work permits, Saudization compliance, and labor regulations"
  },
  {
    name: "Saudi Central Bank (SAMA)",
    country: "Saudi Arabia",
    icon: Landmark,
    description: "Financial sector licensing and monetary authority"
  },
  {
    name: "Zakat, Tax and Customs Authority (ZATCA)",
    country: "Saudi Arabia",
    icon: Banknote,
    description: "Tax registration, VAT, Zakat, and customs compliance"
  },
  {
    name: "Ministry of Investment - Legal Affairs",
    country: "Saudi Arabia",
    icon: Scale,
    description: "Legal framework and investment protection services"
  }
];

export const GovernmentAuthorities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            We Work Closely With All Government Authorities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted Partnerships Across GCC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our established relationships and close collaboration with key government bodies in Bahrain and Saudi Arabia ensure seamless, efficient, and compliant business setup processes
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full border border-secondary/20">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Officially Recognized Partners</span>
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
            With years of experience navigating regulatory requirements, we maintain direct communication channels with all relevant authorities, ensuring your company formation is handled with expertise and credibility you can trust.
          </p>
        </div>
      </div>
    </section>
  );
};
