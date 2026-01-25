import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { 
  Shield, Eye, Zap, Bell, BarChart, Lock, 
  Globe, Database, Terminal, FileSearch, Users, Clock 
} from "lucide-react";

const features = [
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Real-time Monitoring",
    description: "Continuous monitoring of your entire infrastructure with instant visibility into security events.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "AI Threat Detection",
    description: "Machine learning models that identify threats before they impact your business.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Automated Response",
    description: "Instant automated remediation of detected threats without human intervention.",
  },
  {
    icon: <Bell className="h-6 w-6 text-primary" />,
    title: "Smart Alerting",
    description: "Intelligent alert prioritization that reduces noise and highlights critical issues.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reports for security insights and compliance.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Access Control",
    description: "Fine-grained role-based access control and audit logging.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Multi-Cloud Support",
    description: "Unified security across AWS, Azure, GCP, and on-premises environments.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Data Protection",
    description: "Built-in encryption, DLP, and data classification capabilities.",
  },
  {
    icon: <Terminal className="h-6 w-6 text-primary" />,
    title: "API & CLI",
    description: "Full programmatic access for automation and custom integrations.",
  },
  {
    icon: <FileSearch className="h-6 w-6 text-primary" />,
    title: "Threat Intelligence",
    description: "Integration with global threat feeds for proactive protection.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Team Collaboration",
    description: "Built-in workflows for incident response and team coordination.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Historical Analysis",
    description: "Deep dive into historical data for forensics and trend analysis.",
  },
];

export default function AWmateFeatures() {
  return (
    <PageLayout>
      <PageHeader
        title="AWmate Features"
        description="Explore the comprehensive feature set that makes AWmate the most powerful security automation platform."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
