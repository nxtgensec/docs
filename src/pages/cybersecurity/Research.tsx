import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, BookOpen, Users } from "lucide-react";

const researchPapers = [
  {
    title: "Advanced Persistent Threats: A 2026 Analysis",
    authors: "Dr. Sarah Chen, James Wilson",
    date: "January 2026",
    abstract: "A comprehensive study of APT groups and their evolving tactics, techniques, and procedures in the modern threat landscape, including analysis of state-sponsored campaigns.",
    category: "Threat Research",
    citations: 45,
  },
  {
    title: "Zero-Day Vulnerability Detection Using Machine Learning",
    authors: "Michael Park, Dr. Emily Rodriguez",
    date: "December 2025",
    abstract: "Novel approaches to identifying zero-day vulnerabilities through advanced machine learning models and behavioral analysis, achieving 94% detection accuracy.",
    category: "AI Security",
    citations: 78,
  },
  {
    title: "Securing Cloud-Native Applications at Scale",
    authors: "Alex Thompson, Rachel Kim",
    date: "November 2025",
    abstract: "Best practices and architectural patterns for building secure cloud-native applications in containerized environments, with case studies from Fortune 500 deployments.",
    category: "Cloud Security",
    citations: 120,
  },
  {
    title: "Ransomware Economics: Understanding the Business of Cybercrime",
    authors: "Dr. David Lee",
    date: "October 2025",
    abstract: "An in-depth analysis of ransomware operations, payment trends, and the economic factors driving modern cybercrime organizations.",
    category: "Threat Intelligence",
    citations: 89,
  },
  {
    title: "Supply Chain Security: Lessons from Major Breaches",
    authors: "Jennifer Wang, Mark Stevens",
    date: "September 2025",
    abstract: "Analysis of software supply chain attacks including SolarWinds and Log4j, with recommendations for building resilient development pipelines.",
    category: "Supply Chain",
    citations: 156,
  },
  {
    title: "Post-Quantum Cryptography: Preparing for the Future",
    authors: "Dr. Robert Chen, Lisa Park",
    date: "August 2025",
    abstract: "Evaluation of NIST-approved post-quantum algorithms and migration strategies for enterprise cryptographic infrastructure.",
    category: "Cryptography",
    citations: 67,
  },
];

const researchTeam = [
  { name: "Dr. Sarah Chen", role: "Director of Research", focus: "Threat Intelligence" },
  { name: "Dr. Emily Rodriguez", role: "AI Security Lead", focus: "Machine Learning" },
  { name: "Dr. David Lee", role: "Senior Researcher", focus: "Cybercrime Economics" },
  { name: "Dr. Robert Chen", role: "Cryptography Lead", focus: "Post-Quantum Security" },
];

export default function Research() {
  return (
    <PageLayout>
      <PageHeader
        title="Security Research"
        description="Pioneering research in cybersecurity, from threat intelligence to advanced detection methodologies. Our team publishes cutting-edge findings to advance the security community."
      />
      <ContentSection>
        {/* Research Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Research Team</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {researchTeam.map((member, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-primary">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <h2 className="text-2xl font-bold mb-6">Recent Publications</h2>
        <div className="grid gap-6">
          {researchPapers.map((paper, index) => (
            <article
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    By {paper.authors} • {paper.date}
                  </p>
                  <p className="text-muted-foreground mb-3">{paper.abstract}</p>
                  <p className="text-sm text-primary flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {paper.citations} citations
                  </p>
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
