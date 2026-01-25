import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Shield, Code, Building2, ArrowRight, Zap, Lock, Globe, Target } from "lucide-react";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Next Generation Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Securing the Digital
            <span className="block text-gradient">Future Together</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
            We provide cutting-edge cybersecurity solutions and development services 
            to protect your business from evolving threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="group hover-glow-green" asChild>
              <Link to="/awmate/overview">
                Explore AWmate
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/company/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity and development solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Security Research",
                description: "Cutting-edge threat intelligence and vulnerability research",
                href: "/research/publications",
              },
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Developer Tools",
                description: "SDKs, APIs, and documentation for seamless integration",
                href: "/developers/documentation",
              },
              {
                icon: <Building2 className="h-6 w-6 text-primary" />,
                title: "Enterprise Solutions",
                description: "Scalable security solutions for businesses of all sizes",
                href: "/business/solutions",
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "AWmate Platform",
                description: "Our flagship security automation and monitoring tool",
                href: "/awmate/overview",
              },
            ].map((feature) => (
              <Link
                key={feature.title}
                to={feature.href}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow-green"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Clients Protected" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Security Monitoring" },
              { value: "50+", label: "Security Experts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">nxtgensec</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine deep cybersecurity expertise with modern development practices 
                to deliver solutions that truly protect your digital assets.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <Lock className="h-5 w-5" />, text: "Zero-trust security architecture" },
                  { icon: <Globe className="h-5 w-5" />, text: "Global threat intelligence network" },
                  { icon: <Target className="h-5 w-5" />, text: "Proactive threat detection & response" },
                  { icon: <Zap className="h-5 w-5" />, text: "Rapid deployment & integration" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center animate-pulse-glow">
                <Shield className="h-32 w-32 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Future?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get in touch with our security experts and discover how nxtgensec can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow-green" asChild>
              <Link to="/business/solutions">View Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/company/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
