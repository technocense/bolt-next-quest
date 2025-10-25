import { ArrowLeft, CheckCircle, Building2, FileText, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BahrainSetup = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Company Setup in Bahrain</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Establish your business in Bahrain with 100% foreign ownership. Fast, efficient, and compliant company formation services in one of the Gulf's most business-friendly environments.
            </p>
          </div>
        </div>
      </section>

      {/* Why Bahrain */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Bahrain?</h2>
            <p className="text-lg text-muted-foreground">
              Bahrain offers unique advantages for international businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Foreign Ownership</h3>
              <p className="text-muted-foreground">
                Own your business entirely without local sponsor requirements in most sectors
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Location</h3>
              <p className="text-muted-foreground">
                Gateway to GCC markets with excellent connectivity to Saudi Arabia and beyond
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Personal Taxes</h3>
              <p className="text-muted-foreground">
                Zero personal income tax and competitive corporate tax rates
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Setup</h3>
              <p className="text-muted-foreground">
                Company formation in as little as 48 hours with streamlined processes
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business-Friendly</h3>
              <p className="text-muted-foreground">
                Modern regulations, efficient government services, and strong legal framework
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality of Life</h3>
              <p className="text-muted-foreground">
                Excellent infrastructure, international schools, and vibrant expat community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Company Types in Bahrain</h2>
            <p className="text-lg text-muted-foreground">
              Choose the right business structure for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <Building2 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Limited Liability Company (WLL)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Minimum 1 shareholder, maximum unlimited</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>100% foreign ownership available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Minimum capital: BHD 20,000 (approx. $53,000)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Most popular choice for small to medium businesses</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <Briefcase className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Branch Office</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Extension of foreign parent company</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>100% foreign ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>No minimum capital requirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Ideal for international companies entering Bahrain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Setup Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and efficient company formation
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-6 p-6 rounded-xl bg-card shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-xl flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  Discuss your business goals, choose the right company structure, and understand requirements
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-card shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-xl flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Document Preparation</h3>
                <p className="text-muted-foreground">
                  We prepare all necessary documents, agreements, and applications on your behalf
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-card shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-xl flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Government Submission</h3>
                <p className="text-muted-foreground">
                  Submit applications to Ministry of Industry and Commerce and other relevant authorities
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-card shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-xl flex items-center justify-center">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">License Issuance</h3>
                <p className="text-muted-foreground">
                  Receive your commercial registration and business license - you're ready to operate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Required Documents</h2>
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 text-secondary mb-6" />
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Passport copies of all shareholders and directors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Proof of residential address for all shareholders and directors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Business plan outlining company activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bank reference letters (for shareholders/directors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Professional reference letters or CVs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Proposed company name (Arabic and English)</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                * All documents must be notarized and attested. We can assist with this process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Bahrain Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts guide you through every step of the company formation process
          </p>
          <Link to="/">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BahrainSetup;
