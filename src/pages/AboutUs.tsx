import { ArrowLeft, Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About BahrainSetup</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your trusted partner for establishing and growing businesses in the Gulf region. With years of expertise and a commitment to excellence, we make business setup simple, efficient, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card shadow-lg hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower entrepreneurs and businesses to establish their presence in the Gulf region by providing comprehensive, transparent, and efficient company formation services that ensure 100% ownership and full compliance.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card shadow-lg hover-lift">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading business setup consultancy in the Gulf region, recognized for our expertise, integrity, and commitment to helping businesses thrive in Bahrain and Saudi Arabia's dynamic markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering the highest quality service in every interaction and transaction
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-muted-foreground">
                Building lasting relationships through transparency and integrity
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results</h3>
              <p className="text-muted-foreground">
                Focused on achieving your business goals with proven strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Choose BahrainSetup?</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Knowledge</h3>
                  <p className="text-muted-foreground">
                    Deep understanding of Bahrain and Saudi Arabia's business regulations, legal requirements, and market dynamics
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Service</h3>
                  <p className="text-muted-foreground">
                    From initial consultation to final license approval, we handle every aspect of your business setup
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Processing</h3>
                  <p className="text-muted-foreground">
                    Streamlined processes ensure your business is up and running in as little as 48 hours
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card shadow-md">
                <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Success Rate</h3>
                  <p className="text-muted-foreground">
                    Every client we've worked with has successfully established their business in the Gulf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Business Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you establish your business in Bahrain or Saudi Arabia
          </p>
          <Link to="/">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
