import { ArrowLeft, CheckCircle, Building2, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SaudiArabiaSetup = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Company Setup in Saudi Arabia</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Enter the largest economy in the Middle East with 100% foreign ownership. Comprehensive support for business setup in the Kingdom of Saudi Arabia under Vision 2030 reforms.
            </p>
          </div>
        </div>
      </section>

      {/* Why Saudi Arabia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Saudi Arabia?</h2>
            <p className="text-lg text-muted-foreground">
              The Kingdom offers unprecedented opportunities for international businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Largest GCC Market</h3>
              <p className="text-muted-foreground">
                Access to 35+ million consumers and the region's largest economy
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vision 2030</h3>
              <p className="text-muted-foreground">
                Benefit from massive economic diversification and investment programs
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Foreign Ownership</h3>
              <p className="text-muted-foreground">
                Own your business entirely in most sectors without local sponsorship
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tax Advantages</h3>
              <p className="text-muted-foreground">
                Competitive corporate tax rates and no personal income tax
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mega Projects</h3>
              <p className="text-muted-foreground">
                Opportunities in NEOM, Red Sea Project, and other trillion-dollar initiatives
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-md hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Leading the region in digital infrastructure and innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Company Types in Saudi Arabia</h2>
            <p className="text-lg text-muted-foreground">
              Select the optimal business structure for your operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <Building2 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Limited Liability Company (LLC)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>2 to 50 shareholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>100% foreign ownership in eligible sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Minimum capital: SAR 1 (flexible requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Most common structure for SMEs and foreign investors</span>
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
                  <span>Parent company liable for branch obligations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Suitable for contractors and service providers</span>
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
              Streamlined company formation with expert guidance
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
                <h3 className="text-xl font-bold mb-2">Business Planning</h3>
                <p className="text-muted-foreground">
                  Consultation on business activities, licensing requirements, and optimal structure
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
                <h3 className="text-xl font-bold mb-2">MISA Registration</h3>
                <p className="text-muted-foreground">
                  Register with Ministry of Investment of Saudi Arabia (MISA) for investment license
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
                <h3 className="text-xl font-bold mb-2">Commercial Registration</h3>
                <p className="text-muted-foreground">
                  Obtain CR from Ministry of Commerce and complete MOCI procedures
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
                <h3 className="text-xl font-bold mb-2">Final Setup</h3>
                <p className="text-muted-foreground">
                  GOSI registration, chamber of commerce membership, and municipality license
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
                  <span>Valid passport copies of all shareholders and managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Company profile and board resolution (for corporate shareholders)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Detailed business plan with financial projections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bank statements or reference letters</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>CVs and professional qualifications of key personnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Proof of registered office address in Saudi Arabia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Power of attorney (notarized and attested)</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                * Documents must be attested by Saudi embassy/consulate in your country. We provide full support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enter the Saudi Market?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you navigate Saudi Arabia's business setup process efficiently
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

export default SaudiArabiaSetup;
