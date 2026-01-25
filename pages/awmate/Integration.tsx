import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

const integrations = [
  {
    category: "Cloud Providers",
    items: [
      { name: "AWS", status: "Available" },
      { name: "Microsoft Azure", status: "Available" },
      { name: "Google Cloud", status: "Available" },
      { name: "DigitalOcean", status: "Available" },
    ],
  },
  {
    category: "SIEM & SOAR",
    items: [
      { name: "Splunk", status: "Available" },
      { name: "Elastic SIEM", status: "Available" },
      { name: "Microsoft Sentinel", status: "Available" },
      { name: "IBM QRadar", status: "Coming Soon" },
    ],
  },
  {
    category: "Identity Providers",
    items: [
      { name: "Okta", status: "Available" },
      { name: "Azure AD", status: "Available" },
      { name: "Auth0", status: "Available" },
      { name: "OneLogin", status: "Available" },
    ],
  },
  {
    category: "Communication",
    items: [
      { name: "Slack", status: "Available" },
      { name: "Microsoft Teams", status: "Available" },
      { name: "PagerDuty", status: "Available" },
      { name: "Opsgenie", status: "Available" },
    ],
  },
];

export default function AWmateIntegration() {
  return (
    <PageLayout>
      <PageHeader
        title="AWmate Integrations"
        description="Connect AWmate with your existing tools and infrastructure for seamless security operations."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {integrations.map((category) => (
            <div
              key={category.category}
              className="rounded-xl bg-card border border-border p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item.name}</span>
                    </div>
                    <Badge
                      variant={item.status === "Coming Soon" ? "secondary" : "default"}
                      className={item.status !== "Coming Soon" ? "bg-primary" : ""}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Integration */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Need a Custom Integration?</h2>
              <p className="text-muted-foreground mb-6">
                Our team can help you build custom integrations with any platform or tool. 
                We also offer a powerful API for building your own integrations.
              </p>
              <div className="flex gap-4">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" /> View API Docs
                </Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Pre-built Integrations</div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
