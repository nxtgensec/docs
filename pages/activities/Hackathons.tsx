import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Globe, Trophy, Clock, Code, ExternalLink, CheckCircle } from "lucide-react";

const upcomingHackathons = [
  {
    name: "Vibe Coding Competition - February 2026",
    date: "February 20-22, 2026",
    format: "Online",
    participation: "Individual",
    theme: "AI-Powered Healthcare Platform",
    registrationOpen: true,
    link: "#",
  },
  {
    name: "Secure Code Challenge",
    date: "March 15-17, 2026",
    format: "Online",
    participation: "Teams of 2-3",
    theme: "Secure Authentication System",
    registrationOpen: false,
    link: "#",
  },
];

const pastHackathons = [
  {
    name: "Vibe Coding Competition 2K26",
    date: "January 20-22, 2026",
    format: "Online",
    participation: "Individual",
    website: "https://vibecoding.nxtgensec.org",
    participants: 150,
    theme: "Adaptive Relationship Engagement Platform",
    description: "Build and deploy a full-stack SaaS application that helps couples stay emotionally engaged through adaptive daily activities, powered by intelligent intent understanding and continuous feedback.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Gemini API"],
    highlights: [
      "3-day intensive development challenge",
      "AI-powered task generation using Gemini API",
      "Full-stack SaaS application requirement",
      "Bronze to Platinum ranking system based on user stories completed",
      "Free certificates for all participants",
      "Expert mentorship and support",
    ],
    schedule: [
      { day: "Day 1 - Jan 20", title: "Kickoff & Foundation", description: "Project initialization, architecture planning, and core development begins" },
      { day: "Day 2 - Jan 21", title: "Core Development", description: "Build main features, implement AI integration, create feedback loops" },
      { day: "Day 3 - Jan 22", title: "Polish & Submit", description: "Final testing, deployment, documentation, and submission" },
    ],
    requirements: [
      "Working hosted link",
      "GitHub repository with meaningful commits",
      "README with tech stack, user stories completed, and AI usage explanation",
    ],
    judging: [
      { criteria: "Functionality", impact: "High" },
      { criteria: "Adaptivity & Intelligence", impact: "High" },
      { criteria: "Design & UX", impact: "Medium" },
      { criteria: "Code Quality", impact: "Medium" },
      { criteria: "Deployment & Stability", impact: "Essential" },
    ],
    winners: [
      { rank: "Platinum", team: "TechVerse", project: "CoupleSync AI" },
      { rank: "Gold", team: "CodeCraft", project: "LoveLoop" },
      { rank: "Silver", team: "DevDuo", project: "PartnerPulse" },
    ],
  },
  {
    name: "SecureHack 2025",
    date: "December 10-12, 2025",
    format: "Hybrid",
    participation: "Teams of 3-5",
    website: "#",
    participants: 200,
    theme: "Zero Trust Security Architecture",
    description: "Design and implement zero trust security solutions for modern enterprise environments.",
    techStack: ["Go", "Kubernetes", "Terraform", "AWS"],
    highlights: [
      "Focus on enterprise security",
      "Real-world security scenarios",
      "Industry expert judges",
    ],
    winners: [
      { rank: "1st", team: "ZeroTrust Warriors", project: "TrustGate" },
      { rank: "2nd", team: "SecureStack", project: "PolicyMesh" },
      { rank: "3rd", team: "CloudGuardians", project: "AccessZero" },
    ],
  },
];

export default function Hackathons() {
  return (
    <PageLayout>
      <PageHeader
        title="Monthly Hackathons"
        description="Join our monthly hackathon series where developers build innovative solutions, learn new technologies, and compete for recognition. 100% free to participate!"
      />
      <ContentSection>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">12+</div>
            <div className="text-sm text-muted-foreground">Events Hosted</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Participants</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Code className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">150+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>

        {/* Upcoming Hackathons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Hackathons</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingHackathons.map((hackathon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{hackathon.name}</h3>
                  {hackathon.registrationOpen ? (
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                      Registration Open
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {hackathon.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {hackathon.format} • {hackathon.participation}
                  </p>
                  <p><strong>Theme:</strong> {hackathon.theme}</p>
                </div>
                <Button disabled={!hackathon.registrationOpen}>
                  {hackathon.registrationOpen ? "Register Now" : "Notify Me"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Past Hackathon - Vibe Coding */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured: Vibe Coding Competition 2K26</h2>
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Completed
                  </span>
                  <span className="text-muted-foreground text-sm">January 20-22, 2026</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Build an Adaptive Relationship Engagement Platform
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pastHackathons[0].description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {pastHackathons[0].techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <ul className="space-y-1">
                    {pastHackathons[0].highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="gap-2" asChild>
                  <a href="https://vibecoding.nxtgensec.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Visit Event Website
                  </a>
                </Button>
              </div>

              {/* Schedule */}
              <div className="lg:w-80">
                <h4 className="font-semibold mb-4">3-Day Journey</h4>
                <div className="space-y-3">
                  {pastHackathons[0].schedule?.map((day, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{day.day}</span>
                      </div>
                      <h5 className="font-medium text-sm">{day.title}</h5>
                      <p className="text-xs text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>

                {/* Judging Criteria */}
                <h4 className="font-semibold mt-6 mb-3">Judging Criteria</h4>
                <div className="space-y-2">
                  {pastHackathons[0].judging?.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span>{item.criteria}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        item.impact === "High" 
                          ? "bg-primary/20 text-primary"
                          : item.impact === "Essential"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Winners */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4">Top Performers</h4>
              <div className="grid gap-4 md:grid-cols-3">
                {pastHackathons[0].winners.map((winner, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className={`h-5 w-5 ${
                        winner.rank === "Platinum" ? "text-purple-400" :
                        winner.rank === "Gold" ? "text-yellow-400" :
                        "text-gray-400"
                      }`} />
                      <span className="font-medium">{winner.rank}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>{winner.team}</strong> - {winner.project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Past Hackathons */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Past Events</h2>
          <div className="grid gap-4">
            {pastHackathons.slice(1).map((hackathon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{hackathon.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {hackathon.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {hackathon.participants} participants
                      </span>
                      <span>{hackathon.format} • {hackathon.participation}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{hackathon.description}</p>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
