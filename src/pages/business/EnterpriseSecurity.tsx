import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import { Shield, Users, Server, Lock, Eye, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Advanced Threat Protection",
    description: "Multi-layered defense against malware, ransomware, and advanced persistent threats.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Endpoint Security",
    description: "Protect all endpoints including desktops, laptops, and mobile devices across your organization.",
  },
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    title: "Network Security",
    description: "Comprehensive network monitoring, segmentation, and intrusion prevention.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Data Protection",
    description: "Encryption, DLP, and access controls to secure sensitive business data.",
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Security Operations Center",
    description: "24/7 monitoring and response from our expert security analysts.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Automated Response",
    description: "AI-powered threat detection and automated incident response capabilities.",
  },
];

const benefits = [
  "Reduce security incidents by up to 90%",
  "Meet compliance requirements effortlessly",
  "Protect against zero-day threats",
  "Reduce mean time to detect and respond",
  "Scale security with your business",
  "Dedicated security advisor",
];

export default function EnterpriseSecurity() {
  return (
    <PageLayout>
      <PageHeader
        title="Enterprise Security"
        description="Enterprise-grade security solutions designed to protect large organizations and critical infrastructure."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Enterprise Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">
              Contact Enterprise Sales
            </Button>
          </div>
          <div className="rounded-xl bg-card border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
            <p className="text-muted-foreground mb-6">
              See our enterprise security platform in action. Schedule a personalized demo with our security experts.
            </p>
            <Button className="w-full" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
