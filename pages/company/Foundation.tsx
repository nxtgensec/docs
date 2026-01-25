import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Shield, BookOpen, Leaf } from "lucide-react";

const initiatives = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Security Education",
    description: "Free cybersecurity training programs for students and underrepresented communities.",
    impact: "10,000+ students trained",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Non-Profit Protection",
    description: "Providing free security services to non-profit organizations and NGOs.",
    impact: "500+ organizations protected",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Open Source Security",
    description: "Contributing to and maintaining critical open-source security projects.",
    impact: "50+ projects supported",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Diversity in Tech",
    description: "Scholarships and mentorship programs for diverse talent in cybersecurity.",
    impact: "$500K in scholarships",
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: "Sustainable Operations",
    description: "Carbon-neutral data centers and sustainable business practices.",
    impact: "100% carbon neutral",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Community Support",
    description: "Employee volunteering and matching donation programs.",
    impact: "5,000+ volunteer hours",
  },
];

export default function Foundation() {
  return (
    <PageLayout>
      <PageHeader
        title="nxtgensec Foundation"
        description="Giving back to the community through education, protection, and sustainable practices."
      />
      <ContentSection>
        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground">
            The nxtgensec Foundation was established to extend our mission beyond commercial success. 
            We believe that cybersecurity is a fundamental right, and we're committed to making 
            the digital world safer for everyone, especially those who need it most.
          </p>
        </div>

        {/* Initiatives */}
        <h2 className="text-2xl font-bold mb-8 text-center">Our Initiatives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {initiatives.map((initiative, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {initiative.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
              <span className="text-primary font-medium text-sm">{initiative.impact}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or partner with us, there are many ways to 
            support our mission of making cybersecurity accessible to all.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="hover-glow-green">Partner With Us</Button>
            <Button size="lg" variant="outline">Donate</Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
