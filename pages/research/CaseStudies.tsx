import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Financial Services Firm Prevents $50M Ransomware Attack",
    industry: "Financial Services",
    challenge: "A Fortune 500 financial services company was targeted by a sophisticated ransomware gang with demands of $50 million.",
    solution: "Our incident response team detected the attack in its early stages using AWmate's behavioral analysis, isolated affected systems, and prevented data exfiltration.",
    results: ["$50M ransom prevented", "Zero data breach", "4-hour containment time", "Full recovery in 48 hours"],
    image: "/placeholder.svg",
  },
  {
    title: "Healthcare Provider Achieves HIPAA Compliance",
    industry: "Healthcare",
    challenge: "A regional healthcare network struggled to meet HIPAA security requirements across 50+ facilities.",
    solution: "Implemented comprehensive security monitoring, vulnerability management, and automated compliance reporting through our enterprise platform.",
    results: ["100% HIPAA compliance", "60% reduction in vulnerabilities", "Automated reporting", "24/7 monitoring"],
    image: "/placeholder.svg",
  },
  {
    title: "E-Commerce Platform Stops Credential Stuffing",
    industry: "Retail",
    challenge: "A major e-commerce platform experienced millions of credential stuffing attempts daily, leading to account takeovers.",
    solution: "Deployed our advanced bot detection and account protection system, identifying and blocking malicious login attempts in real-time.",
    results: ["99.9% bot detection rate", "80% reduction in ATO", "Zero false positives", "Improved user experience"],
    image: "/placeholder.svg",
  },
];

export default function CaseStudies() {
  return (
    <PageLayout>
      <PageHeader
        title="Case Studies"
        description="Real-world examples of how nxtgensec helps organizations defend against cyber threats."
      />
      <ContentSection>
        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6">
                  <Badge className="mb-4">{study.industry}</Badge>
                  <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-primary mb-1">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <Button className="gap-2">
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-6 flex flex-col justify-center">
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Results
                  </h4>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
