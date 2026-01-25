import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, FileText, Scale, Globe } from "lucide-react";

const frameworks = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control certification for security, availability, and confidentiality.",
    status: "Certified",
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems.",
    status: "Certified",
  },
  {
    name: "GDPR",
    description: "European Union's General Data Protection Regulation compliance.",
    status: "Compliant",
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act for healthcare data.",
    status: "Compliant",
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard for payment processing.",
    status: "Certified",
  },
  {
    name: "FedRAMP",
    description: "Federal Risk and Authorization Management Program for government use.",
    status: "In Progress",
  },
];

const riskServices = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Risk Assessment",
    description: "Comprehensive evaluation of your security posture and risk exposure.",
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Compliance Auditing",
    description: "Regular audits to ensure ongoing compliance with relevant regulations.",
  },
  {
    icon: <Scale className="h-6 w-6 text-primary" />,
    title: "Policy Development",
    description: "Create and maintain security policies aligned with industry standards.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Third-Party Risk",
    description: "Evaluate and monitor the security of your vendors and partners.",
  },
];

export default function ComplianceRisk() {
  return (
    <PageLayout>
      <PageHeader
        title="Compliance & Risk"
        description="Meet regulatory requirements and manage security risks with our comprehensive compliance solutions."
      />
      <ContentSection>
        {/* Frameworks */}
        <h2 className="text-2xl font-bold mb-6">Compliance Frameworks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{framework.name}</h3>
                <Badge
                  variant={framework.status === "In Progress" ? "secondary" : "default"}
                  className={framework.status !== "In Progress" ? "bg-primary" : ""}
                >
                  {framework.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{framework.description}</p>
            </div>
          ))}
        </div>

        {/* Risk Services */}
        <h2 className="text-2xl font-bold mb-6">Risk Management Services</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {riskServices.map((service, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-card border border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Compliance?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our compliance experts can help you navigate complex regulatory requirements and build a robust security program.
          </p>
          <Button size="lg" className="hover-glow-green">
            Schedule Consultation
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
