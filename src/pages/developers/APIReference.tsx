import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/threats",
    description: "Retrieve a list of current threat indicators",
    auth: "API Key",
  },
  {
    method: "POST",
    path: "/api/v1/scan",
    description: "Submit a file or URL for malware analysis",
    auth: "API Key",
  },
  {
    method: "GET",
    path: "/api/v1/advisories",
    description: "Get the latest security advisories",
    auth: "API Key",
  },
  {
    method: "POST",
    path: "/api/v1/report",
    description: "Submit a vulnerability report",
    auth: "Bearer Token",
  },
];

const codeExamples = {
  curl: `curl -X GET "https://api.nxtgensec.com/v1/threats" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
  python: `import requests

response = requests.get(
    "https://api.nxtgensec.com/v1/threats",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
)

threats = response.json()
print(threats)`,
  javascript: `const response = await fetch(
  "https://api.nxtgensec.com/v1/threats",
  {
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    }
  }
);

const threats = await response.json();
console.log(threats);`,
};

export default function APIReference() {
  return (
    <PageLayout>
      <PageHeader
        title="API Reference"
        description="Complete API documentation for integrating nxtgensec services into your applications."
      />
      <ContentSection>
        {/* Base URL */}
        <div className="rounded-xl bg-card border border-border p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Base URL</h2>
          <code className="block p-4 bg-muted rounded-lg text-primary font-mono">
            https://api.nxtgensec.com/v1
          </code>
        </div>

        {/* Code Examples */}
        <div className="rounded-xl bg-card border border-border p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <Tabs defaultValue="curl">
            <TabsList>
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
            {Object.entries(codeExamples).map(([lang, code]) => (
              <TabsContent key={lang} value={lang}>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">{code}</code>
                </pre>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Endpoints */}
        <div className="rounded-xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold mb-6">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Badge
                  className={
                    endpoint.method === "GET"
                      ? "bg-primary/20 text-primary"
                      : "bg-orange-500/20 text-orange-400"
                  }
                >
                  {endpoint.method}
                </Badge>
                <code className="font-mono text-sm flex-1">{endpoint.path}</code>
                <span className="text-sm text-muted-foreground hidden md:block">
                  {endpoint.description}
                </span>
                <Badge variant="outline">{endpoint.auth}</Badge>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
