import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AWmateOverview() {
  return (
    <PageLayout>
      <PageHeader
        title="AWmate"
        description="The next-generation security automation and monitoring platform that protects your digital assets 24/7."
      />
      <ContentSection>
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Security Automation <span className="text-primary">Reimagined</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              AWmate combines advanced threat detection, automated response, and comprehensive monitoring 
              into a single platform that keeps your organization secure without the complexity.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2 hover-glow-green" asChild>
                <Link to="/awmate/get-started">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/awmate/features">View Features</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center animate-pulse-glow">
              <Shield className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Shield className="h-6 w-6" />, title: "Real-time Protection", value: "24/7 monitoring" },
            { icon: <Zap className="h-6 w-6" />, title: "Automated Response", value: "<1s response time" },
            { icon: <Globe className="h-6 w-6" />, title: "Global Coverage", value: "150+ countries" },
            { icon: <Lock className="h-6 w-6" />, title: "Threats Blocked", value: "10M+ daily" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Why AWmate */}
        <div className="rounded-xl bg-card border border-border p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose AWmate?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Deploy in minutes, not months",
              "No security expertise required",
              "Integrates with existing tools",
              "Scales with your business",
              "Reduces alert fatigue by 90%",
              "Continuous updates & improvements",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
