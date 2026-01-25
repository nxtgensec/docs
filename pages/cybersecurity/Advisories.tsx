import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, ExternalLink, Clock } from "lucide-react";

const advisories = [
  {
    id: "NGS-2026-001",
    title: "Critical RCE Vulnerability in Popular Web Framework",
    severity: "Critical",
    cvss: 9.8,
    date: "January 23, 2026",
    affected: "Framework X versions < 4.2.1",
    description: "A critical remote code execution vulnerability has been identified that allows unauthenticated attackers to execute arbitrary code on affected servers.",
    status: "Patch Available",
    cve: "CVE-2026-12345",
  },
  {
    id: "NGS-2026-002",
    title: "SQL Injection in Enterprise CMS Platform",
    severity: "High",
    cvss: 8.6,
    date: "January 20, 2026",
    affected: "CMS Platform v3.x - v5.2",
    description: "SQL injection vulnerability in the search functionality allows attackers to extract sensitive data from the database.",
    status: "Patch Available",
    cve: "CVE-2026-12346",
  },
  {
    id: "NGS-2025-089",
    title: "Authentication Bypass in SSO Solutions",
    severity: "Critical",
    cvss: 9.1,
    date: "December 2025",
    affected: "Multiple SSO providers",
    description: "Critical flaw in SAML implementation allows attackers to forge authentication tokens and bypass SSO controls.",
    status: "Mitigation Available",
    cve: "CVE-2025-98765",
  },
  {
    id: "NGS-2025-088",
    title: "Privilege Escalation in Container Runtime",
    severity: "High",
    cvss: 7.8,
    date: "December 2025",
    affected: "Container Runtime v1.x",
    description: "Local privilege escalation vulnerability allows container escape and host system compromise.",
    status: "Patch Available",
    cve: "CVE-2025-98764",
  },
  {
    id: "NGS-2025-087",
    title: "Cross-Site Scripting in JavaScript Library",
    severity: "Medium",
    cvss: 6.1,
    date: "November 2025",
    affected: "JS Library v2.0.0 - v2.5.3",
    description: "Stored XSS vulnerability in DOM manipulation functions allows injection of malicious scripts.",
    status: "Patch Available",
    cve: "CVE-2025-98763",
  },
  {
    id: "NGS-2025-086",
    title: "Information Disclosure in API Gateway",
    severity: "Medium",
    cvss: 5.3,
    date: "November 2025",
    affected: "API Gateway v4.x",
    description: "Verbose error messages expose internal system information and configuration details.",
    status: "Patch Available",
    cve: "CVE-2025-98762",
  },
];

export default function Advisories() {
  return (
    <PageLayout>
      <PageHeader
        title="Security Advisories"
        description="Official security advisories from the nxtgensec security research team. Stay updated on vulnerabilities discovered through our research and responsible disclosure program."
      />
      <ContentSection>
        {/* Advisory Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
            <div className="text-2xl font-bold text-red-400">2</div>
            <div className="text-sm text-muted-foreground">Critical</div>
          </div>
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center">
            <div className="text-2xl font-bold text-orange-400">2</div>
            <div className="text-sm text-muted-foreground">High</div>
          </div>
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center">
            <div className="text-2xl font-bold text-yellow-400">2</div>
            <div className="text-sm text-muted-foreground">Medium</div>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
            <div className="text-2xl font-bold text-green-400">5</div>
            <div className="text-sm text-muted-foreground">Patched</div>
          </div>
        </div>

        {/* Advisories List */}
        <div className="space-y-4">
          {advisories.map((advisory, index) => (
            <article
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm font-mono text-primary">{advisory.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      advisory.severity === "Critical"
                        ? "bg-red-500/20 text-red-400"
                        : advisory.severity === "High"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {advisory.severity}
                    </span>
                    <span className="text-sm text-muted-foreground">CVSS: {advisory.cvss}</span>
                    {advisory.cve && (
                      <span className="text-sm font-mono text-muted-foreground">{advisory.cve}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advisory.title}</h3>
                  <p className="text-muted-foreground mb-3">{advisory.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {advisory.date}
                    </span>
                    <span className="text-muted-foreground">
                      <strong>Affected:</strong> {advisory.affected}
                    </span>
                    <span className={`flex items-center gap-1 ${
                      advisory.status === "Patch Available"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}>
                      <Shield className="h-4 w-4" />
                      {advisory.status}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 shrink-0">
                  <ExternalLink className="h-4 w-4" />
                  Full Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
