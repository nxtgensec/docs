import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Lock, Target, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Threat Detection & Response",
    description: "Real-time monitoring and automated response to security threats across your infrastructure.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Identity & Access Management",
    description: "Secure authentication, authorization, and identity governance for your organization.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Cloud Security",
    description: "Comprehensive protection for multi-cloud and hybrid environments.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Vulnerability Management",
    description: "Continuous scanning, prioritization, and remediation of security vulnerabilities.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Security Analytics",
    description: "Advanced analytics and reporting for security operations and compliance.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Incident Response",
    description: "Rapid incident investigation and response with expert support available 24/7.",
  },
];

export default function Solutions() {
  return (
    <PageLayout>
      <PageHeader
        title="Solutions Overview"
        description="Comprehensive security solutions designed to protect businesses of all sizes from modern cyber threats."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, i) => (
            <FeatureCard key={i} {...solution} />
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Strengthen Your Security?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our security experts to discuss your specific needs and get a customized solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 hover-glow-green" asChild>
              <Link to="/business/pricing">
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
