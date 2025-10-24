import { useEffect, useState } from "react";
import { Shield, Building2, Users, FileCheck } from "lucide-react";

const authorities = [
  {
    name: "Ministry of Industry and Commerce",
    icon: Building2,
    description: "Business registration and commercial licensing authority"
  },
  {
    name: "Economic Development Board (EDB)",
    icon: Shield,
    description: "Investment promotion and business development"
  },
  {
    name: "Labour Market Regulatory Authority",
    icon: Users,
    description: "Work permits and employment regulations"
  },
  {
    name: "Central Bank of Bahrain",
    icon: FileCheck,
    description: "Financial services licensing and oversight"
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
            Involved Authorities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our established relationships with key government bodies ensure smooth and efficient processing of your business setup
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authorities.map((authority, index) => (
            <div
              key={authority.name}
              className={`bg-card rounded-xl p-8 border-2 hover-lift opacity-0 animate-fade-in-up ${
                index === currentIndex ? "border-secondary" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-smooth ${
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
              <h3 className="text-xl font-bold mb-3">{authority.name}</h3>
              <p className="text-muted-foreground">{authority.description}</p>
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
      </div>
    </section>
  );
};
