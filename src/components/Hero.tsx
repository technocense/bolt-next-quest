import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";
import logo from "@/assets/bahrain-setup-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logo} alt="BahrainSetup - Your Gateway to the Gulf!" className="h-16 md:h-20" />
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold">Serving Bahrain & Saudi Arabia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Gateway to <span className="text-secondary">Gulf Business</span> Excellence
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Launch and grow your business in Bahrain and Saudi Arabia with 100% ownership. Expert guidance through every step of company formation, licensing, and compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 shadow-gold">
              Start Your Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
              <Mail className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/80">Companies Formed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">48hr</div>
              <div className="text-white/80">Average Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
