import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { ProcessSteps } from "@/components/ProcessSteps";
import { GovernmentAuthorities } from "@/components/GovernmentAuthorities";
import { Calendly } from "@/components/Calendly";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

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
                <li>Company Formation</li>
                <li>Business Licensing</li>
                <li>Visa Services</li>
                <li>Corporate Banking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Countries</h4>
              <ul className="space-y-2 text-white/80">
                <li>Bahrain Setup</li>
                <li>Saudi Arabia Setup</li>
                <li>Regional Expansion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Success Stories</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
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
