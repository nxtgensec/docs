import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { BookOpen, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Advanced Persistent Threats: A 2024 Analysis",
    authors: "Dr. Sarah Chen, James Wilson",
    date: "December 2024",
    abstract: "A comprehensive study of APT groups and their evolving tactics, techniques, and procedures in the modern threat landscape.",
    category: "Threat Research",
  },
  {
    title: "Zero-Day Vulnerability Detection Using Machine Learning",
    authors: "Michael Park, Dr. Emily Rodriguez",
    date: "November 2024",
    abstract: "Novel approaches to identifying zero-day vulnerabilities through advanced machine learning models and behavioral analysis.",
    category: "AI Security",
  },
  {
    title: "Securing Cloud-Native Applications",
    authors: "Alex Thompson, Rachel Kim",
    date: "October 2024",
    abstract: "Best practices and architectural patterns for building secure cloud-native applications in containerized environments.",
    category: "Cloud Security",
  },
  {
    title: "Ransomware Economics: Understanding the Business of Cybercrime",
    authors: "Dr. David Lee",
    date: "September 2024",
    abstract: "An in-depth analysis of ransomware operations, payment trends, and the economic factors driving modern cybercrime.",
    category: "Threat Intelligence",
  },
];

export default function Publications() {
  return (
    <PageLayout>
      <PageHeader
        title="Publications"
        description="Explore our latest research papers, whitepapers, and technical reports from the nxtgensec research team."
      />
      <ContentSection>
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {pub.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    By {pub.authors} • {pub.date}
                  </p>
                  <p className="text-muted-foreground">{pub.abstract}</p>
                </div>
                <div className="flex gap-2 lg:flex-col">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    PDF
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
