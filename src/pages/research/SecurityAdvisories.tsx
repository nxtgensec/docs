import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Clock, ExternalLink } from "lucide-react";

const advisories = [
  {
    id: "NXGS-2024-001",
    title: "Critical RCE Vulnerability in Popular Web Framework",
    severity: "Critical",
    cvss: 9.8,
    date: "December 15, 2024",
    affected: "WebFramework Pro 3.x - 4.2",
    status: "Patch Available",
    description: "A remote code execution vulnerability was discovered that allows unauthenticated attackers to execute arbitrary code on affected systems.",
  },
  {
    id: "NXGS-2024-002",
    title: "SQL Injection in Enterprise CRM Platform",
    severity: "High",
    cvss: 8.1,
    date: "December 10, 2024",
    affected: "CRMaster Enterprise 5.0 - 5.4",
    status: "Patch Available",
    description: "Multiple SQL injection vulnerabilities were identified in the reporting module, potentially exposing sensitive customer data.",
  },
  {
    id: "NXGS-2024-003",
    title: "Authentication Bypass in IoT Device Firmware",
    severity: "High",
    cvss: 7.5,
    date: "December 5, 2024",
    affected: "SmartDevice Hub v2.x",
    status: "Mitigation Available",
    description: "An authentication bypass vulnerability allows attackers on the local network to gain administrative access without credentials.",
  },
  {
    id: "NXGS-2024-004",
    title: "Cross-Site Scripting in E-Commerce Plugin",
    severity: "Medium",
    cvss: 6.1,
    date: "November 28, 2024",
    affected: "ShopEasy Plugin 1.0 - 2.3",
    status: "Patch Available",
    description: "Stored XSS vulnerability in the product review section could be exploited to steal session tokens from administrators.",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-destructive text-destructive-foreground";
    case "High":
      return "bg-orange-500 text-white";
    case "Medium":
      return "bg-yellow-500 text-black";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function SecurityAdvisories() {
  return (
    <PageLayout>
      <PageHeader
        title="Security Advisories"
        description="Stay informed about the latest security vulnerabilities and threats discovered by our research team."
      />
      <ContentSection>
        <div className="grid gap-6">
          {advisories.map((advisory) => (
            <article
              key={advisory.id}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={getSeverityColor(advisory.severity)}>
                  {advisory.severity}
                </Badge>
                <Badge variant="outline">CVSS: {advisory.cvss}</Badge>
                <Badge variant="secondary">{advisory.status}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {advisory.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{advisory.title}</h3>
              <p className="text-sm text-primary mb-2">{advisory.id}</p>
              <p className="text-muted-foreground mb-4">{advisory.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm">
                  <strong className="text-foreground">Affected:</strong>{" "}
                  <span className="text-muted-foreground">{advisory.affected}</span>
                </span>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
