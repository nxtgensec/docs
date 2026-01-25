import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", description: "Primary UI library for building interactive interfaces", usage: "Core" },
      { name: "Next.js", description: "Full-stack React framework for production applications", usage: "Core" },
      { name: "TypeScript", description: "Type-safe JavaScript for robust code", usage: "Core" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", usage: "Core" },
      { name: "Framer Motion", description: "Production-ready animation library", usage: "Secondary" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime for server-side applications", usage: "Core" },
      { name: "Go", description: "High-performance language for microservices", usage: "Core" },
      { name: "Python", description: "Versatile language for security tools and ML", usage: "Core" },
      { name: "FastAPI", description: "Modern Python web framework for APIs", usage: "Secondary" },
      { name: "Express.js", description: "Minimalist Node.js web framework", usage: "Secondary" },
    ],
  },
  {
    category: "Database & Storage",
    technologies: [
      { name: "PostgreSQL", description: "Primary relational database for structured data", usage: "Core" },
      { name: "MongoDB", description: "Document database for flexible schemas", usage: "Secondary" },
      { name: "Redis", description: "In-memory data store for caching", usage: "Core" },
      { name: "Elasticsearch", description: "Search and analytics engine for log data", usage: "Secondary" },
      { name: "Supabase", description: "Open source Firebase alternative", usage: "Core" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    technologies: [
      { name: "Docker", description: "Containerization for consistent deployments", usage: "Core" },
      { name: "Kubernetes", description: "Container orchestration at scale", usage: "Core" },
      { name: "Terraform", description: "Infrastructure as code for cloud resources", usage: "Core" },
      { name: "GitHub Actions", description: "CI/CD automation and workflows", usage: "Core" },
      { name: "AWS/GCP/Azure", description: "Multi-cloud infrastructure providers", usage: "Core" },
    ],
  },
  {
    category: "Security Tools",
    technologies: [
      { name: "OWASP ZAP", description: "Web application security scanner", usage: "Core" },
      { name: "Burp Suite", description: "Web security testing toolkit", usage: "Core" },
      { name: "Trivy", description: "Container vulnerability scanner", usage: "Core" },
      { name: "SonarQube", description: "Code quality and security analysis", usage: "Secondary" },
      { name: "Snyk", description: "Developer security platform", usage: "Secondary" },
    ],
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "TensorFlow", description: "Machine learning framework for threat detection", usage: "Core" },
      { name: "PyTorch", description: "Deep learning research and production", usage: "Secondary" },
      { name: "Gemini API", description: "Google's AI for intelligent features", usage: "Core" },
      { name: "LangChain", description: "LLM application framework", usage: "Secondary" },
      { name: "Hugging Face", description: "ML model hub and tools", usage: "Secondary" },
    ],
  },
];

export default function TechStack() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Tech Stack"
        description="The technologies and tools we use to build secure, scalable, and performant applications. We continuously evaluate and adopt best-in-class solutions."
      />
      <ContentSection>
        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{tech.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        tech.usage === "Core"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {tech.usage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
