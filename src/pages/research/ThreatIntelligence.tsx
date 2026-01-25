import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Globe, AlertTriangle, TrendingUp, Database, Target, Shield } from "lucide-react";

const threatCategories = [
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: "Active Threat Groups",
    description: "Track 150+ active threat actors including state-sponsored APT groups and cybercriminal organizations.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Monitoring",
    description: "24/7 monitoring of global threat activity across dark web forums, malware repositories, and attack infrastructure.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Trend Analysis",
    description: "Identify emerging attack patterns and predict future threats through advanced analytics and machine learning.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "IOC Database",
    description: "Access our comprehensive database of indicators of compromise including IPs, domains, file hashes, and TTPs.",
  },
];

const recentThreats = [
  {
    name: "BlackShadow Ransomware",
    type: "Ransomware",
    severity: "Critical",
    lastSeen: "2 hours ago",
  },
  {
    name: "PhantomLoader Malware",
    type: "Loader/Dropper",
    severity: "High",
    lastSeen: "5 hours ago",
  },
  {
    name: "SilentPhish Campaign",
    type: "Phishing",
    severity: "Medium",
    lastSeen: "12 hours ago",
  },
];

export default function ThreatIntelligence() {
  return (
    <PageLayout>
      <PageHeader
        title="Threat Intelligence"
        description="Real-time threat intelligence to help you stay ahead of cyber adversaries and protect your organization."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {threatCategories.map((cat, i) => (
            <FeatureCard key={i} {...cat} />
          ))}
        </div>

        <div className="rounded-xl bg-card border border-border p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Recent Threat Activity
          </h2>
          <div className="space-y-4">
            {recentThreats.map((threat, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{threat.name}</h3>
                    <p className="text-sm text-muted-foreground">{threat.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      threat.severity === "Critical"
                        ? "bg-destructive/20 text-destructive"
                        : threat.severity === "High"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {threat.severity}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{threat.lastSeen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
