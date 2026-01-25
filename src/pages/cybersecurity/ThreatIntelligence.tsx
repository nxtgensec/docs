import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { AlertTriangle, Shield, Globe, TrendingUp, Activity } from "lucide-react";

const threatActors = [
  {
    name: "APT-SHADOW",
    origin: "Unknown",
    type: "Nation-State",
    targets: ["Government", "Defense", "Critical Infrastructure"],
    lastActive: "January 2026",
    threatLevel: "Critical",
  },
  {
    name: "DarkForge Collective",
    origin: "Eastern Europe",
    type: "Cybercrime Group",
    targets: ["Financial Services", "Healthcare", "Retail"],
    lastActive: "January 2026",
    threatLevel: "High",
  },
  {
    name: "PhantomGrid",
    origin: "Unknown",
    type: "Nation-State",
    targets: ["Energy Sector", "Telecommunications"],
    lastActive: "December 2025",
    threatLevel: "High",
  },
  {
    name: "RansomCartel",
    origin: "CIS Region",
    type: "Ransomware-as-a-Service",
    targets: ["Enterprise", "Healthcare", "Education"],
    lastActive: "January 2026",
    threatLevel: "Critical",
  },
];

const currentThreats = [
  {
    title: "New Zero-Day in Enterprise VPN Solutions",
    severity: "Critical",
    date: "January 22, 2026",
    description: "Active exploitation of unpatched vulnerability affecting major VPN vendors. Immediate patching recommended.",
  },
  {
    title: "Supply Chain Attack Targeting NPM Packages",
    severity: "High",
    date: "January 20, 2026",
    description: "Malicious packages discovered in npm registry targeting cryptocurrency wallets and credentials.",
  },
  {
    title: "Phishing Campaign Impersonating Cloud Providers",
    severity: "Medium",
    date: "January 18, 2026",
    description: "Sophisticated phishing emails targeting IT administrators with fake Azure/AWS notifications.",
  },
  {
    title: "New Ransomware Variant with Data Exfiltration",
    severity: "High",
    date: "January 15, 2026",
    description: "Evolved ransomware strain with built-in data theft capabilities before encryption.",
  },
];

const stats = [
  { label: "Active Threat Actors", value: "150+", icon: AlertTriangle },
  { label: "IOCs Tracked", value: "2.5M+", icon: Activity },
  { label: "Global Coverage", value: "180+", icon: Globe },
  { label: "Detection Rate", value: "99.7%", icon: Shield },
];

export default function ThreatIntelligence() {
  return (
    <PageLayout>
      <PageHeader
        title="Threat Intelligence"
        description="Real-time threat intelligence and analysis from our global security operations center. Stay informed about emerging threats and active threat actors."
      />
      <ContentSection>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Current Threats */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Current Threats
          </h2>
          <div className="grid gap-4">
            {currentThreats.map((threat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        threat.severity === "Critical"
                          ? "bg-red-500/20 text-red-400"
                          : threat.severity === "High"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {threat.severity}
                      </span>
                      <span className="text-xs text-muted-foreground">{threat.date}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{threat.title}</h3>
                    <p className="text-sm text-muted-foreground">{threat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Actors */}
        <h2 className="text-2xl font-bold mb-6">Active Threat Actors</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {threatActors.map((actor, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{actor.name}</h3>
                  <p className="text-sm text-muted-foreground">{actor.type}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  actor.threatLevel === "Critical"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-orange-500/20 text-orange-400"
                }`}>
                  {actor.threatLevel}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Origin:</span> {actor.origin}</p>
                <p><span className="text-muted-foreground">Last Active:</span> {actor.lastActive}</p>
                <div>
                  <span className="text-muted-foreground">Targets: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {actor.targets.map((target, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
