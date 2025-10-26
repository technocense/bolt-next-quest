import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Starting a Business in Bahrain",
    description: "Everything you need to know about Bahrain's business environment, company types, and setup process.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Bahrain",
    content: [
      {
        subtitle: "Why Choose Bahrain?",
        text: "Bahrain has established itself as one of the Middle East's premier business destinations. With its strategic location, progressive regulations, and 100% foreign ownership policies, the kingdom offers unparalleled opportunities for international entrepreneurs."
      },
      {
        subtitle: "Key Business Advantages",
        text: "The kingdom boasts zero corporate tax for most sectors, making it highly attractive for businesses. The setup process is streamlined, with minimal bureaucracy and efficient government support. Bahrain's modern infrastructure and connectivity to Saudi Arabia via the King Fahd Causeway provide access to larger GCC markets."
      },
      {
        subtitle: "Popular Company Structures",
        text: "The most common business structure is the WLL (With Limited Liability), which allows 100% foreign ownership in most sectors. Branch offices of foreign companies are also permitted, ideal for established businesses looking to expand into the region."
      },
      {
        subtitle: "Setup Timeline",
        text: "Company formation in Bahrain typically takes 2-4 weeks, depending on the business activity and documentation completeness. The process includes name reservation, license application, commercial registration, and opening a corporate bank account."
      }
    ],
    link: "/bahrain-setup"
  },
  {
    id: 2,
    title: "Saudi Arabia Vision 2030: Business Opportunities",
    description: "Explore the massive business potential in Saudi Arabia's transforming economy under Vision 2030.",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Saudi Arabia",
    content: [
      {
        subtitle: "Vision 2030 Overview",
        text: "Saudi Arabia's Vision 2030 is one of the world's most ambitious economic transformation programs. The initiative aims to diversify the economy away from oil dependency, creating unprecedented opportunities across various sectors including tourism, entertainment, technology, and renewable energy."
      },
      {
        subtitle: "Foreign Investment Incentives",
        text: "The Kingdom has introduced significant reforms to attract foreign investment, including 100% foreign ownership in many sectors, streamlined business setup processes, and substantial investment in infrastructure. Special economic zones offer additional benefits such as tax holidays and customs exemptions."
      },
      {
        subtitle: "Thriving Sectors",
        text: "Key growth sectors include technology and digital transformation, tourism and hospitality, entertainment and culture, renewable energy, healthcare, and education. The Kingdom is investing billions in mega-projects like NEOM, The Red Sea Project, and Qiddiya entertainment city."
      },
      {
        subtitle: "Market Access",
        text: "Saudi Arabia is the largest economy in the Middle East with a population of over 35 million and high purchasing power. It serves as a gateway to the broader GCC market of 60+ million consumers. The strategic location provides access to markets in Europe, Asia, and Africa."
      }
    ],
    link: "/saudi-arabia-setup"
  },
  {
    id: 3,
    title: "Bahrain vs Saudi Arabia: Which is Right for Your Business?",
    description: "A comprehensive comparison to help you choose the best Gulf location for your business expansion.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Comparison",
    content: [
      {
        subtitle: "Market Size Considerations",
        text: "Saudi Arabia offers a significantly larger domestic market with over 35 million people and higher GDP. Bahrain has a smaller population of 1.5 million but serves as a financial hub with sophisticated infrastructure and easier access to regional markets."
      },
      {
        subtitle: "Setup Costs and Speed",
        text: "Bahrain generally offers lower setup costs and faster company formation (2-4 weeks vs 4-6 weeks in Saudi Arabia). Both countries now allow 100% foreign ownership in most sectors, but Bahrain has historically been more liberal in this regard."
      },
      {
        subtitle: "Taxation Comparison",
        text: "Bahrain has no corporate income tax for most business activities, making it extremely tax-efficient. Saudi Arabia introduced corporate tax for foreign companies but offers competitive rates and various exemptions. Both countries have zero personal income tax."
      },
      {
        subtitle: "Business Environment",
        text: "Bahrain is known for its flexible regulations, English-speaking workforce, and cosmopolitan culture. Saudi Arabia offers massive infrastructure projects and government spending but has more conservative business practices. Both countries are actively modernizing their business ecosystems."
      }
    ],
    link: "/contact"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Business Insights & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights on starting and growing your business in Bahrain and Saudi Arabia
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {post.content.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{section.subtitle}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                  </div>
                ))}
                <Link to={post.link}>
                  <Button className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance on company formation in Bahrain or Saudi Arabia
          </p>
          <Link to="/contact">
            <Button size="lg" className="min-w-[200px]">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
