import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const openSourceProjects = [
  {
    name: "ngs-security-headers",
    description: "Middleware library for implementing security headers in Node.js applications. Supports Express, Fastify, and Koa.",
    stars: 1250,
    forks: 180,
    language: "TypeScript",
    topics: ["security", "nodejs", "middleware", "http-headers"],
    lastUpdate: "January 2026",
  },
  {
    name: "react-auth-guard",
    description: "Comprehensive authentication HOC and hooks for React applications with support for multiple providers.",
    stars: 890,
    forks: 145,
    language: "TypeScript",
    topics: ["react", "authentication", "security", "hooks"],
    lastUpdate: "January 2026",
  },
  {
    name: "devsecops-pipeline",
    description: "Complete CI/CD pipeline templates with integrated security scanning, SAST, DAST, and compliance checks.",
    stars: 2100,
    forks: 420,
    language: "YAML",
    topics: ["devsecops", "cicd", "security", "github-actions"],
    lastUpdate: "December 2025",
  },
  {
    name: "vuln-db-api",
    description: "REST API for querying vulnerability databases including CVE, NVD, and custom threat intel feeds.",
    stars: 560,
    forks: 89,
    language: "Python",
    topics: ["vulnerability", "api", "cve", "security"],
    lastUpdate: "January 2026",
  },
  {
    name: "k8s-security-policies",
    description: "Collection of Kubernetes security policies using OPA Gatekeeper and Kyverno.",
    stars: 780,
    forks: 156,
    language: "Rego",
    topics: ["kubernetes", "security", "opa", "policies"],
    lastUpdate: "November 2025",
  },
  {
    name: "threat-intel-collector",
    description: "Automated threat intelligence collector aggregating data from multiple OSINT sources.",
    stars: 1450,
    forks: 290,
    language: "Go",
    topics: ["threat-intelligence", "osint", "security", "automation"],
    lastUpdate: "December 2025",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  Python: "bg-yellow-500",
  Go: "bg-cyan-500",
  YAML: "bg-red-500",
  Rego: "bg-purple-500",
};

export default function OpenSource() {
  return (
    <PageLayout>
      <PageHeader
        title="Open Source"
        description="We believe in giving back to the community. Explore our open-source projects and contribute to making the internet more secure."
      />
      <ContentSection>
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contribute to Our Projects</h3>
              <p className="text-muted-foreground">
                Join our community of contributors and help us build better security tools for everyone.
              </p>
            </div>
            <Button className="gap-2" asChild>
              <a href="https://github.com/nxtgensec" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {openSourceProjects.map((project, index) => (
            <article
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span className={`w-3 h-3 rounded-full ${languageColors[project.language]}`} />
                  <span className="text-xs text-muted-foreground">{project.language}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {project.forks}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">Updated {project.lastUpdate}</span>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
