import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Github, Users, BookOpen, ArrowRight } from "lucide-react";

const communityLinks = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Discord Community",
    description: "Join 10,000+ security professionals discussing threats, tools, and best practices.",
    members: "10,000+",
    cta: "Join Discord",
    href: "#",
  },
  {
    icon: <Github className="h-8 w-8 text-primary" />,
    title: "GitHub Discussions",
    description: "Contribute to our open-source projects and participate in technical discussions.",
    members: "5,000+",
    cta: "View GitHub",
    href: "#",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Developer Forum",
    description: "Ask questions, share knowledge, and connect with the nxtgensec developer community.",
    members: "8,000+",
    cta: "Visit Forum",
    href: "#",
  },
];

const recentDiscussions = [
  {
    title: "Best practices for API rate limiting implementation",
    author: "SecurityDev42",
    replies: 23,
    category: "Best Practices",
  },
  {
    title: "Integrating AWmate with existing SIEM solutions",
    author: "EnterpriseSec",
    replies: 15,
    category: "Integration",
  },
  {
    title: "Python SDK v2.4 - new async support",
    author: "nxtgensec_team",
    replies: 31,
    category: "Announcements",
  },
  {
    title: "Webhook reliability and retry mechanisms",
    author: "WebhookMaster",
    replies: 8,
    category: "Technical",
  },
];

export default function Community() {
  return (
    <PageLayout>
      <PageHeader
        title="Community"
        description="Connect with security professionals and developers from around the world."
      />
      <ContentSection>
        {/* Community Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {communityLinks.map((link) => (
            <div
              key={link.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
              <p className="text-primary font-medium mb-4">{link.members} members</p>
              <Button className="w-full">{link.cta}</Button>
            </div>
          ))}
        </div>

        {/* Recent Discussions */}
        <div className="rounded-xl bg-card border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Discussions</h2>
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentDiscussions.map((discussion, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    by {discussion.author} • {discussion.replies} replies
                  </p>
                </div>
                <Badge variant="secondary">{discussion.category}</Badge>
              </a>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
