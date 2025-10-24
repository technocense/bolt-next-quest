import { Building2, FileCheck, CreditCard, Users, Briefcase, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Complete business registration in Bahrain and Saudi Arabia with 100% foreign ownership options. We handle all documentation and government liaison."
  },
  {
    icon: FileCheck,
    title: "Licensing & Permits",
    description: "Obtain all necessary commercial licenses and permits. From trade licenses to industrial permits, we ensure full regulatory compliance."
  },
  {
    icon: Users,
    title: "Investor & Work Visas",
    description: "Secure residency and work permits for you and your team. Fast-track visa processing with complete immigration support."
  },
  {
    icon: CreditCard,
    title: "Corporate Banking",
    description: "Open business bank accounts with leading banks in Bahrain and Saudi Arabia. Multi-currency accounts with online banking facilities."
  },
  {
    icon: Shield,
    title: "Compliance & Renewal",
    description: "Annual CR renewal, license maintenance, and ongoing regulatory compliance. We keep your business compliant year-round."
  },
  {
    icon: Briefcase,
    title: "Office & PRO Services",
    description: "Virtual offices, meeting rooms, and full PRO services. Physical presence without the overhead costs."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Business Setup Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            From initial consultation to full operational status, we provide end-to-end support for your business establishment in the Gulf region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="transition-smooth hover:shadow-xl hover:-translate-y-2 border-2 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-gold transition-smooth">
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
