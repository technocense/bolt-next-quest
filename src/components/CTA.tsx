import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import consultationImage from "@/assets/consultation.jpg";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Gulf Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation with our experts. We'll discuss your goals and create a customized roadmap for your business success in Bahrain or Saudi Arabia.
            </p>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={consultationImage} 
                alt="Professional Business Consultation" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <div className="font-semibold">+973 XXXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-semibold">info@bahrainsetup.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Office</div>
                  <div className="font-semibold">Manama, Kingdom of Bahrain</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-xl border-2">
            <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="+973 XXXX XXXX" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Business Type</label>
                <Input placeholder="e.g., Trading, Consulting, Technology" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your business plans..." 
                  rows={4}
                />
              </div>
              <Button size="lg" className="w-full gradient-primary hover:opacity-90">
                Submit Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
