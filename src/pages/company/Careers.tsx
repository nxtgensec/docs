import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const openPositions = [
  {
    title: "Senior Security Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Threat Intelligence Analyst",
    department: "Research",
    location: "New York, NY",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Product Manager - AWmate",
    department: "Product",
    location: "Austin, TX",
    type: "Full-time",
    remote: false,
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "London, UK",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Security Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
];

const benefits = [
  "Competitive salary & equity",
  "Unlimited PTO",
  "Remote-first culture",
  "Health, dental & vision",
  "401(k) matching",
  "Learning & development budget",
  "Home office stipend",
  "Wellness programs",
];

export default function Careers() {
  return (
    <PageLayout>
      <PageHeader
        title="Careers"
        description="Join our team and help protect organizations worldwide from cyber threats."
      />
      <ContentSection>
        {/* Culture */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Why Join nxtgensec?</h2>
          <p className="text-muted-foreground">
            We're a team of passionate security professionals, engineers, and innovators 
            working together to make the digital world safer. We value diversity, 
            continuous learning, and work-life balance.
          </p>
        </div>

        {/* Benefits */}
        <div className="rounded-xl bg-card border border-border p-8 mb-16">
          <h2 className="text-xl font-bold mb-6 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map((position, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {position.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {position.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {position.remote && (
                  <Badge variant="secondary">Remote Available</Badge>
                )}
                <Button className="gap-2">
                  Apply <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Match CTA */}
        <div className="mt-12 rounded-xl bg-muted p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Don't see a perfect match?</h3>
          <p className="text-muted-foreground mb-4">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind.
          </p>
          <Button variant="outline">Submit General Application</Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
