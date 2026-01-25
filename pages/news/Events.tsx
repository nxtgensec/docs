import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "nxtgensec Summit 2024",
    type: "Conference",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    description: "Our annual flagship conference bringing together security professionals from around the world.",
    featured: true,
  },
  {
    title: "Webinar: AI in Cybersecurity",
    type: "Webinar",
    date: "February 20, 2024",
    location: "Virtual",
    description: "Join our experts for a deep dive into how AI is transforming threat detection and response.",
    featured: false,
  },
  {
    title: "RSA Conference 2024",
    type: "Industry Event",
    date: "May 6-9, 2024",
    location: "San Francisco, CA",
    description: "Visit us at booth #1234 to see the latest AWmate features and meet our team.",
    featured: false,
  },
  {
    title: "Security Workshop: Zero Trust Implementation",
    type: "Workshop",
    date: "February 28, 2024",
    location: "New York, NY",
    description: "Hands-on workshop on implementing zero trust architecture in enterprise environments.",
    featured: false,
  },
  {
    title: "Black Hat USA 2024",
    type: "Industry Event",
    date: "August 3-8, 2024",
    location: "Las Vegas, NV",
    description: "Our research team will be presenting new findings on advanced persistent threats.",
    featured: false,
  },
];

export default function Events() {
  return (
    <PageLayout>
      <PageHeader
        title="Events"
        description="Join us at conferences, webinars, and workshops around the world."
      />
      <ContentSection>
        {/* Featured Event */}
        {events.filter(e => e.featured).map((event, i) => (
          <div
            key={i}
            className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 mb-12"
          >
            <Badge className="mb-4">Featured Event</Badge>
            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            </div>
            <p className="text-muted-foreground mb-6">{event.description}</p>
            <Button size="lg" className="gap-2 hover-glow-green">
              Register Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ))}

        {/* All Events */}
        <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {events.filter(e => !e.featured).map((event, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{event.type}</Badge>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
