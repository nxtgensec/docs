import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, X, Shield, Layers, Hash } from "lucide-react";

export default function BrandGuidelines() {
  return (
    <PageLayout>
      <PageHeader
        title="Brand Guidelines"
        description="Everything you need to correctly represent the nxtgensec brand in your communications."
      />
      <ContentSection>
        {/* Logo Uniqueness Intro */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">How Unique Is Our Logo?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our logo is not a random design choice — it is a <span className="text-foreground font-medium">carefully engineered identity</span> that reflects our values, vision, and responsibility as an Indian cybersecurity startup. Every colour, shape, number, and alignment in the NxtGenSec logo has a purpose and a story.
          </p>
        </div>

        {/* Logo Display */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Logo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-card border border-border flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 via-white to-green-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-transparent to-green-500/80" />
                  <Shield className="h-10 w-10 text-blue-600 relative z-10" />
                </div>
                <span className="text-2xl font-bold">nxtgensec</span>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-foreground flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 via-white to-green-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-transparent to-green-500/80" />
                  <Shield className="h-10 w-10 text-blue-600 relative z-10" />
                </div>
                <span className="text-2xl font-bold text-background">nxtgensec</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="gap-2">
              <Download className="h-4 w-4" /> Download Logo Pack
            </Button>
          </div>
        </div>

        {/* Colors: Inspired by Nation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">1. Colours: Inspired by the Nation, Designed for Trust</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            As an Indian startup, we believe that our roots should be visible in our work. That belief led us to design our logo using only <span className="text-foreground font-medium">Indian national colours</span>, making it a symbol of both national pride and technological excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Saffron (Orange)", 
                color: "bg-orange-500", 
                hex: "#F97316",
                meaning: "Courage, Sacrifice & Leadership",
                description: "Represents our proactive approach to cybersecurity — standing strong against threats and leading with confidence."
              },
              { 
                name: "White", 
                color: "bg-white", 
                hex: "#FFFFFF",
                meaning: "Transparency & Integrity",
                description: "Reflects our commitment to honest security practices and user trust."
              },
              { 
                name: "Green", 
                color: "bg-green-500", 
                hex: "#22C55E",
                meaning: "Growth, Safety & Resilience",
                description: "Describes soft high-variant security — a flexible yet powerful protection model capable of securing n digital assets, where n is unlimited."
              },
              { 
                name: "Blue", 
                color: "bg-blue-600", 
                hex: "#2563EB",
                meaning: "Technology & Intelligence",
                description: "Reflects our technical foundation, stability, depth, and reliability in the digital ecosystem."
              },
            ].map((c) => (
              <div key={c.name} className="rounded-xl bg-card border border-border overflow-hidden">
                <div className={`h-24 ${c.color} ${c.name === 'White' ? 'border-b border-border' : ''}`} />
                <div className="p-4">
                  <p className="font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{c.hex}</p>
                  <p className="text-sm text-primary font-medium mb-1">{c.meaning}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground italic">
              By restricting ourselves to these colours, we ensured the logo stays pure, meaningful, and deeply Indian, while remaining globally professional.
            </p>
          </div>
        </div>

        {/* Design: Multi-Layered Shield */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">2. Design: A Multi-Layered Shield of Security</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Shield-Like Structure</p>
                  <p className="text-sm text-muted-foreground">The core of our logo represents protection — the fundamental purpose of cybersecurity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Multiple Layers</p>
                  <p className="text-sm text-muted-foreground">Represent defense-in-depth, ensuring security at every level.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Interconnected Nodes</p>
                  <p className="text-sm text-muted-foreground">Symbolize continuous monitoring, intelligent response, and system-wide protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-xs font-bold text-primary-foreground">N</span>
                </div>
                <div>
                  <p className="font-medium">Central "N"</p>
                  <p className="text-sm text-muted-foreground">Stands for Next Generation Security — our focus on future-ready security solutions.</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/20 to-green-500/20 border border-border flex items-center justify-center">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-orange-500/30 via-white/30 to-green-500/30 border border-border flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 via-white to-green-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">N</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-muted-foreground" />
                <div className="absolute top-1/2 -left-4 w-2 h-2 rounded-full bg-muted-foreground" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground">
            This design reflects how modern security is not a single wall, but a <span className="text-foreground font-medium">dynamic, adaptive, and layered system</span>.
          </p>
        </div>

        {/* 9876 Policy */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">3. Principles: The 9876 Policy – Security with Structure</h2>
          <p className="text-muted-foreground mb-6">
            One of the most unique aspects of our logo is the <span className="text-primary font-semibold">9876 naming and tagline principle</span>, which brings mathematical balance and intentional design into our identity.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { word: "NXTGENSEC", count: 9, color: "from-orange-500 to-orange-600" },
              { word: "Securing", count: 8, color: "from-white/80 to-white" },
              { word: "Digital", count: 7, color: "from-green-500 to-green-600" },
              { word: "Assets", count: 6, color: "from-blue-500 to-blue-600" },
            ].map((item) => (
              <div key={item.word} className="rounded-xl bg-card border border-border p-4 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className={`text-xl font-bold ${item.word === 'Securing' ? 'text-background' : 'text-white'}`}>{item.count}</span>
                </div>
                <p className="font-semibold">{item.word}</p>
                <p className="text-xs text-muted-foreground">{item.count} letters</p>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-xl bg-muted/30 border border-border">
            <p className="font-medium mb-3">This descending order represents:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Precision", "Structure", "Discipline", "Progressive Focus"].map((principle) => (
                <div key={principle} className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" />
                  <span className="text-sm">{principle}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Just like cybersecurity itself, our branding follows a <span className="text-foreground">logical, methodical, and intentional framework</span> — nothing is accidental.
            </p>
          </div>
        </div>

        {/* What Makes It Unique */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">4. What Truly Makes Our Logo Unique</h2>
          <p className="text-muted-foreground mb-6">
            What makes the NxtGenSec logo truly unique is not just its design but its <span className="text-primary font-semibold">intent</span>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { represents: "India", note: "without explicitly saying it" },
              { represents: "Security", note: "without fear" },
              { represents: "Technology", note: "without complexity" },
              { represents: "Human Responsibility", note: "not just software" },
            ].map((item) => (
              <div key={item.represents} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">It represents {item.represents}</span>
                  <span className="text-muted-foreground">, {item.note}.</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10 border border-primary/20">
            <p className="text-lg font-medium mb-2">This logo was not created to look modern — it was created to <span className="text-primary">mean something</span>.</p>
            <p className="text-muted-foreground">
              It comes from the belief that: <span className="text-foreground italic">"Security is not just about systems — it is about trust, responsibility, and protecting what matters."</span>
            </p>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>
          <div className="rounded-xl bg-card border border-border p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Headings</p>
                <p className="text-4xl font-bold">Inter Bold</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Body</p>
                <p className="text-lg">Inter Regular - The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Code</p>
                <code className="text-lg font-mono">JetBrains Mono</code>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Do
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use the logo with adequate spacing</li>
                <li>• Maintain the original aspect ratio</li>
                <li>• Use approved color combinations (Indian national colors)</li>
                <li>• Ensure legibility on all backgrounds</li>
                <li>• Respect the 9876 tagline principle</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-destructive mb-4 flex items-center gap-2">
                <X className="h-5 w-5" /> Don't
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Distort or stretch the logo</li>
                <li>• Change the logo colors outside approved palette</li>
                <li>• Add effects like shadows or gradients</li>
                <li>• Place logo on busy backgrounds</li>
                <li>• Separate the logo from the wordmark</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
