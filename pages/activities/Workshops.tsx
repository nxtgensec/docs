import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Clock, Users, Video, Code, Shield, Globe } from "lucide-react";

const upcomingWorkshops = [
  {
    title: "Introduction to Web Application Security",
    date: "February 5, 2026",
    time: "2:00 PM - 5:00 PM UTC",
    instructor: "Alex Thompson",
    level: "Beginner",
    format: "Live Online",
    topics: ["OWASP Top 10", "Burp Suite Basics", "XSS & SQLi"],
    registrationOpen: true,
  },
  {
    title: "Advanced Kubernetes Security",
    date: "February 12, 2026",
    time: "3:00 PM - 6:00 PM UTC",
    instructor: "Rachel Kim",
    level: "Advanced",
    format: "Live Online",
    topics: ["Pod Security", "Network Policies", "Runtime Security"],
    registrationOpen: true,
  },
  {
    title: "Building Secure React Applications",
    date: "February 19, 2026",
    time: "2:00 PM - 4:00 PM UTC",
    instructor: "Michael Park",
    level: "Intermediate",
    format: "Live Online",
    topics: ["Auth Patterns", "XSS Prevention", "Secure State Management"],
    registrationOpen: false,
  },
];

const pastWorkshops = [
  {
    title: "AI Security Fundamentals",
    date: "January 15, 2026",
    instructor: "Dr. Emily Rodriguez",
    attendees: 156,
    rating: 4.9,
    recordingAvailable: true,
  },
  {
    title: "Cloud Security Essentials (AWS)",
    date: "January 8, 2026",
    instructor: "James Wilson",
    attendees: 189,
    rating: 4.8,
    recordingAvailable: true,
  },
  {
    title: "Secure Coding in Python",
    date: "December 2025",
    instructor: "Sarah Chen",
    attendees: 142,
    rating: 4.7,
    recordingAvailable: true,
  },
  {
    title: "Introduction to Threat Modeling",
    date: "December 2025",
    instructor: "David Lee",
    attendees: 128,
    rating: 4.8,
    recordingAvailable: true,
  },
];

const workshopSeries = [
  {
    title: "Security Foundations",
    description: "Perfect for beginners starting their cybersecurity journey",
    icon: Shield,
    workshops: 8,
  },
  {
    title: "Secure Development",
    description: "Learn to build secure applications from the ground up",
    icon: Code,
    workshops: 12,
  },
  {
    title: "Cloud Security",
    description: "Master security across AWS, Azure, and GCP",
    icon: Globe,
    workshops: 10,
  },
];

export default function Workshops() {
  return (
    <PageLayout>
      <PageHeader
        title="Workshops & Training"
        description="Hands-on workshops covering security and development topics. Learn from industry experts and enhance your skills."
      />
      <ContentSection>
        {/* Workshop Series */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Workshop Series</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {workshopSeries.map((series, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <series.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{series.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{series.description}</p>
                <p className="text-sm text-primary font-medium">{series.workshops} workshops</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Workshops</h2>
          <div className="space-y-4">
            {upcomingWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        workshop.level === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : workshop.level === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {workshop.level}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        {workshop.format}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {workshop.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {workshop.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {workshop.instructor}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {workshop.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-secondary text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button disabled={!workshop.registrationOpen}>
                    {workshop.registrationOpen ? "Register Free" : "Coming Soon"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Workshops with Recordings */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Past Workshops (Recordings Available)</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pastWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold">{workshop.title}</h3>
                  {workshop.recordingAvailable && (
                    <span className="flex items-center gap-1 text-primary text-xs">
                      <Video className="h-3 w-3" />
                      Recording
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {workshop.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {workshop.instructor} • {workshop.attendees} attendees
                  </p>
                  <p className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Rating: {workshop.rating}/5
                  </p>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Video className="h-4 w-4" />
                  Watch Recording
                </Button>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
