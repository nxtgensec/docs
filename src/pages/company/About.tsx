import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { Target, Eye, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former CISO at Fortune 500 company with 15+ years in cybersecurity.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO & Co-Founder",
    bio: "Ex-Google security engineer and author of multiple security patents.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Marcus Johnson",
    role: "VP of Engineering",
    bio: "Built security platforms at multiple successful startups.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Research",
    bio: "PhD in Computer Security, published researcher in threat intelligence.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "VP of Sales",
    bio: "15+ years helping enterprises implement security solutions.",
    linkedin: "#",
  },
  {
    name: "Lisa Wang",
    role: "Head of Customer Success",
    bio: "Passionate about helping customers achieve their security goals.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        description="We're on a mission to make world-class cybersecurity accessible to every organization."
      />
      <ContentSection>
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020, nxtgensec was born from a simple observation: cybersecurity 
            was too complex, too expensive, and too inaccessible for most organizations. 
            Our founders, veterans of leading tech companies and government agencies, 
            set out to change that.
          </p>
          <p className="text-muted-foreground">
            Today, we protect thousands of organizations worldwide with our innovative 
            security platform and expert services. We believe that every business, 
            regardless of size, deserves enterprise-grade protection.
          </p>
        </div>

        {/* Mission/Vision/Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Target className="h-8 w-8 text-primary" />,
              title: "Our Mission",
              description: "To democratize cybersecurity and protect the digital world from evolving threats.",
            },
            {
              icon: <Eye className="h-8 w-8 text-primary" />,
              title: "Our Vision",
              description: "A world where every organization can operate securely in the digital age.",
            },
            {
              icon: <Heart className="h-8 w-8 text-primary" />,
              title: "Our Values",
              description: "Innovation, integrity, and unwavering commitment to customer success.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} {...member} />
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
