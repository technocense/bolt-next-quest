import { CheckCircle2, Globe, Users, TrendingUp, Clock, Award } from "lucide-react";
import bahrainOffice from "@/assets/bahrain-office.jpg";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Streamlined Process",
    description: "We simplify complex bureaucracy into clear, manageable steps."
  },
  {
    icon: Globe,
    title: "Regional Expertise",
    description: "Deep understanding of both Bahrain and Saudi Arabia markets."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager throughout your setup journey."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic advice to position your business for success."
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Expedited services to get you operational quickly."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Hundreds of successful business formations across industries."
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner for Gulf Business Setup
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We go beyond registration. Our comprehensive approach ensures you have everything needed to thrive in Bahrain and Saudi Arabia's dynamic markets.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
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

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={bahrainOffice} 
                alt="Modern Business District in Bahrain" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border-2">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
