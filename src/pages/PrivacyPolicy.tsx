import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BahrainSetup ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fill out contact forms or request consultations</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Use our services for company formation</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information may include: name, email address, phone number, business details, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process your business formation requests</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you administrative information, updates, and marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Prevent fraudulent transactions and protect against security threats</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Government Authorities:</strong> With relevant government bodies in Bahrain and Saudi Arabia for business registration and licensing purposes</li>
                  <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating our business and providing services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your jurisdiction where data protection laws may differ. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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

export default PrivacyPolicy;
