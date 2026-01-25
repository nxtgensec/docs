import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Terminal, Lightbulb, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const docCategories = [
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Getting Started",
    description: "Quick start guides and tutorials to help you integrate nxtgensec tools into your projects.",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "API Documentation",
    description: "Complete API reference with examples, authentication guides, and best practices.",
  },
  {
    icon: <Terminal className="h-6 w-6 text-primary" />,
    title: "SDK Guides",
    description: "Language-specific SDK documentation for Python, JavaScript, Go, and more.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Tutorials",
    description: "Step-by-step tutorials for common use cases and integration scenarios.",
  },
];

const popularDocs = [
  "Authentication & API Keys",
  "Webhook Integration",
  "Rate Limits & Quotas",
  "Error Handling",
  "SDK Installation",
  "Real-time Threat Feeds",
];

export default function Documentation() {
  return (
    <PageLayout>
      <PageHeader
        title="Documentation"
        description="Everything you need to integrate nxtgensec security tools into your applications."
      />
      <ContentSection>
        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="pl-12 h-12 text-lg bg-card"
          />
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {docCategories.map((cat, i) => (
            <FeatureCard key={i} {...cat} />
          ))}
        </div>

        {/* Popular Docs */}
        <div className="rounded-xl bg-card border border-border p-6">
          <h2 className="text-xl font-semibold mb-6">Popular Documentation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularDocs.map((doc, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted hover:text-primary transition-all group"
              >
                <span>{doc}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
