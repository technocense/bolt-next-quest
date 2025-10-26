import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { ProcessSteps } from "@/components/ProcessSteps";
import { GovernmentAuthorities } from "@/components/GovernmentAuthorities";
import { Calendly } from "@/components/Calendly";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Link } from "react-router-dom";

const Index = () => {
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
              <h4 className="font-bold text-lg mb-4 text-secondary">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-secondary transition-colors cursor-pointer">Company Formation</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Business Licensing</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Visa Services</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Corporate Banking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Countries</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/bahrain-setup" className="hover:text-secondary transition-colors">Bahrain Setup</Link></li>
                <li><Link to="/saudi-arabia-setup" className="hover:text-secondary transition-colors">Saudi Arabia Setup</Link></li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Regional Expansion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Our Team</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Success Stories</li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2024 BahrainSetup. Your Gateway to the Gulf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
