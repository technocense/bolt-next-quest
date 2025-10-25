import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using BahrainSetup's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BahrainSetup provides business formation, company setup, licensing, and related consulting services for businesses establishing operations in Bahrain and Saudi Arabia. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Company formation and registration</li>
                  <li>Business licensing assistance</li>
                  <li>Visa and immigration services</li>
                  <li>Corporate banking setup</li>
                  <li>Office space solutions</li>
                  <li>Ongoing compliance and support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, complete, and current information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Promptly notify us of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations in Bahrain and Saudi Arabia</li>
                  <li>Provide all necessary documentation required for business formation</li>
                  <li>Pay all fees and charges on time</li>
                  <li>Cooperate with us in completing your business setup</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Fees and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Service fees will be clearly communicated before you engage our services. Payment terms include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>All fees are quoted in the relevant currency and exclude government fees unless stated otherwise</li>
                  <li>Payment may be required in full or in installments as agreed</li>
                  <li>Government fees, translation fees, and third-party costs are additional</li>
                  <li>Refund policies are subject to the specific service agreement</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Service Timelines</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to complete services within the estimated timeframes, actual completion times may vary based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Government processing times</li>
                  <li>Completeness and accuracy of submitted documents</li>
                  <li>Complexity of the business structure</li>
                  <li>Responsiveness to requests for additional information</li>
                  <li>Public holidays and government schedules</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of BahrainSetup or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, BahrainSetup shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Delays or rejections by government authorities</li>
                  <li>Changes in laws, regulations, or government policies</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Events beyond our reasonable control (force majeure)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our total liability shall not exceed the fees paid for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality of all client information except where disclosure is:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Required by law or regulation</li>
                  <li>Necessary for providing our services (e.g., to government authorities)</li>
                  <li>Authorized by you in writing</li>
                  <li>Already publicly available</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service agreement with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>You remain responsible for fees for services already rendered</li>
                  <li>We will return original documents in our possession</li>
                  <li>Confidentiality obligations continue</li>
                  <li>Refunds, if any, will be determined based on work completed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the Kingdom of Bahrain. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bahrain.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BahrainSetup provides business formation services but does not provide legal, tax, or financial advice. We recommend consulting with qualified professionals for such advice specific to your situation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-muted rounded-lg">
                  <p className="font-semibold">BahrainSetup</p>
                  <p className="text-muted-foreground">Email: info@bahrainsetup.com</p>
                  <p className="text-muted-foreground">Phone: +973 XXXX XXXX</p>
                  <p className="text-muted-foreground">Address: Manama, Kingdom of Bahrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
