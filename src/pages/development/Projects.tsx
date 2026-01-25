import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers, Shield, Globe, Zap } from "lucide-react";

const projects = [
  {
    name: "AWmate",
    description: "AI-powered security monitoring and threat detection platform that provides real-time protection for modern web applications.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "TensorFlow", "Docker"],
    category: "Security Platform",
    status: "Production",
    icon: Shield,
    link: "/awmate/overview",
    github: "https://github.com/nxtgensec/awmate",
  },
  {
    name: "SecureAPI Gateway",
    description: "Enterprise-grade API gateway with built-in security features including rate limiting, authentication, and threat detection.",
    techStack: ["Go", "Redis", "gRPC", "Kubernetes", "Prometheus"],
    category: "Infrastructure",
    status: "Production",
    icon: Globe,
    link: "#",
    github: "https://github.com/nxtgensec/secure-api-gateway",
  },
  {
    name: "VulnScanner Pro",
    description: "Comprehensive vulnerability scanning tool for web applications, supporting OWASP Top 10 detection and custom rule creation.",
    techStack: ["Python", "FastAPI", "Celery", "MongoDB", "Docker"],
    category: "Security Tools",
    status: "Beta",
    icon: Zap,
    link: "#",
    github: "https://github.com/nxtgensec/vulnscanner-pro",
  },
  {
    name: "CloudGuard",
    description: "Multi-cloud security posture management tool that continuously monitors AWS, Azure, and GCP for misconfigurations.",
    techStack: ["TypeScript", "Next.js", "Terraform", "AWS SDK", "GraphQL"],
    category: "Cloud Security",
    status: "Production",
    icon: Layers,
    link: "#",
    github: "https://github.com/nxtgensec/cloudguard",
  },
  {
    name: "DevSecOps Pipeline",
    description: "Complete CI/CD pipeline template with integrated security scanning, SAST, DAST, and compliance checks.",
    techStack: ["GitHub Actions", "Docker", "Trivy", "SonarQube", "OWASP ZAP"],
    category: "DevOps",
    status: "Open Source",
    icon: Globe,
    link: "#",
    github: "https://github.com/nxtgensec/devsecops-pipeline",
  },
  {
    name: "ThreatMap",
    description: "Real-time global threat intelligence visualization platform showing active cyber attacks and threat actor activities.",
    techStack: ["React", "D3.js", "WebSocket", "Elasticsearch", "Kafka"],
    category: "Threat Intelligence",
    status: "Production",
    icon: Globe,
    link: "#",
    github: "https://github.com/nxtgensec/threatmap",
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of security-focused development projects. Each project combines cutting-edge technology with robust security practices."
      />
      <ContentSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      project.status === "Production" 
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Beta"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground mb-3">
                    {project.category}
                  </span>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-primary/5 text-xs text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2" asChild>
                      <a href={project.link}>
                        <ExternalLink className="h-4 w-4" />
                        View
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
