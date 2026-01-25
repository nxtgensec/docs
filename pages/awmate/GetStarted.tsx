import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Download, Terminal, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your AWmate account in seconds. No credit card required for the free trial.",
  },
  {
    number: "02",
    title: "Connect Your Infrastructure",
    description: "Use our simple setup wizard to connect your cloud accounts, endpoints, and networks.",
  },
  {
    number: "03",
    title: "Configure Policies",
    description: "Choose from pre-built security policies or customize them for your needs.",
  },
  {
    number: "04",
    title: "Start Monitoring",
    description: "AWmate immediately begins monitoring and protecting your environment.",
  },
];

const deploymentOptions = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Cloud (SaaS)",
    description: "Fully managed cloud deployment with automatic updates and scaling.",
    popular: true,
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "On-Premises",
    description: "Deploy within your own data center for complete data sovereignty.",
    popular: false,
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Hybrid",
    description: "Combine cloud management with on-premises data processing.",
    popular: false,
  },
];

export default function AWmateGetStarted() {
  return (
    <PageLayout>
      <PageHeader
        title="Get Started with AWmate"
        description="Deploy enterprise-grade security protection in minutes, not months."
      />
      <ContentSection>
        {/* CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium">14-day free trial • No credit card required</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 hover-glow-green">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Deployment Options */}
        <h2 className="text-2xl font-bold mb-8 text-center">Deployment Options</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {deploymentOptions.map((option, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-xl bg-card border ${
                option.popular ? "border-primary" : "border-border"
              } text-center`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Recommended
                </Badge>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="rounded-xl bg-card border border-border p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">What's Included in Your Trial</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Full platform access",
              "Unlimited endpoints",
              "All integrations",
              "24/7 support",
              "Onboarding assistance",
              "No commitment required",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
