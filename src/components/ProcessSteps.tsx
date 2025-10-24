import { MessageSquare, FileText, CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Initial Consultation",
    description: "Discuss your business vision, goals, and requirements. We'll analyze your needs and recommend the optimal business structure and jurisdiction."
  },
  {
    icon: FileText,
    number: "02",
    title: "Documentation & Application",
    description: "We prepare all required documents, applications, and submissions. Our team handles all paperwork and government liaison on your behalf."
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Approval & Registration",
    description: "Track your application progress in real-time. We coordinate with all relevant authorities to obtain approvals and complete registration."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Ongoing Support",
    description: "Receive your licenses and begin operations. We provide continuous support for compliance, renewals, and business growth."
  }
];

export const ProcessSteps = () => {
  return (
    <section className="py-24 gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-secondary font-semibold">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four Simple Steps to Success
          </h2>
          <p className="text-xl text-white/90">
            A proven methodology that has helped hundreds of businesses establish themselves in the Gulf region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-smooth hover:bg-white/10 hover:border-secondary/50 hover-lift opacity-0 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-bounce">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-6xl font-bold text-secondary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
