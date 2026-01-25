import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, ExternalLink } from "lucide-react";

const sdks = [
  {
    name: "Python SDK",
    version: "2.4.1",
    description: "Official Python client library for the nxtgensec API. Supports Python 3.8+.",
    installCmd: "pip install nxtgensec",
    github: "https://github.com/nxtgensec/python-sdk",
    docs: "/developers/documentation",
  },
  {
    name: "JavaScript/TypeScript SDK",
    version: "3.1.0",
    description: "Full-featured SDK for Node.js and browser environments with TypeScript support.",
    installCmd: "npm install @nxtgensec/sdk",
    github: "https://github.com/nxtgensec/js-sdk",
    docs: "/developers/documentation",
  },
  {
    name: "Go SDK",
    version: "1.2.0",
    description: "Lightweight and performant Go client for high-throughput applications.",
    installCmd: "go get github.com/nxtgensec/go-sdk",
    github: "https://github.com/nxtgensec/go-sdk",
    docs: "/developers/documentation",
  },
  {
    name: "Ruby SDK",
    version: "1.0.3",
    description: "Ruby gem for seamless integration with Rails and other Ruby applications.",
    installCmd: "gem install nxtgensec",
    github: "https://github.com/nxtgensec/ruby-sdk",
    docs: "/developers/documentation",
  },
];

const tools = [
  {
    name: "nxtgensec CLI",
    description: "Command-line interface for managing scans, retrieving threat data, and automating security workflows.",
    platforms: ["macOS", "Linux", "Windows"],
  },
  {
    name: "VS Code Extension",
    description: "Real-time security scanning and vulnerability detection directly in your IDE.",
    platforms: ["VS Code", "VSCodium"],
  },
  {
    name: "GitHub Action",
    description: "Automated security scanning in your CI/CD pipeline with detailed reports.",
    platforms: ["GitHub Actions"],
  },
];

export default function SDKsTools() {
  return (
    <PageLayout>
      <PageHeader
        title="SDKs & Tools"
        description="Official client libraries and developer tools for integrating with nxtgensec services."
      />
      <ContentSection>
        {/* SDKs */}
        <h2 className="text-2xl font-semibold mb-6">Client Libraries</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sdks.map((sdk) => (
            <div
              key={sdk.name}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{sdk.name}</h3>
                <Badge variant="outline">v{sdk.version}</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{sdk.description}</p>
              <div className="p-3 bg-muted rounded-lg mb-4">
                <code className="text-sm font-mono text-primary">{sdk.installCmd}</code>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={sdk.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" /> Docs
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 className="text-2xl font-semibold mb-6">Developer Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
