import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink } from "lucide-react";

const pressReleases = [
  {
    title: "nxtgensec Raises $50M Series B to Accelerate Global Expansion",
    date: "January 12, 2024",
    summary: "Funding round led by top-tier cybersecurity investors to expand AWmate platform and enter new markets.",
  },
  {
    title: "nxtgensec Named a Leader in Gartner Magic Quadrant for Threat Detection",
    date: "December 15, 2023",
    summary: "Recognition for our ability to execute and completeness of vision in the threat detection and response market.",
  },
  {
    title: "Partnership Announcement: nxtgensec and Major Cloud Provider Join Forces",
    date: "November 20, 2023",
    summary: "Strategic partnership to deliver integrated security solutions for cloud-native enterprises.",
  },
  {
    title: "nxtgensec Surpasses 1,000 Enterprise Customers Milestone",
    date: "October 5, 2023",
    summary: "Rapid growth driven by increasing demand for automated security solutions across industries.",
  },
  {
    title: "Launch of nxtgensec Foundation to Support Cybersecurity Education",
    date: "September 15, 2023",
    summary: "New foundation commits $10M to cybersecurity education and workforce development initiatives.",
  },
];

export default function PressReleases() {
  return (
    <PageLayout>
      <PageHeader
        title="Press Releases"
        description="Official announcements and news from nxtgensec."
      />
      <ContentSection>
        {/* Media Contact */}
        <div className="rounded-xl bg-card border border-border p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold mb-1">Media Inquiries</h2>
              <p className="text-muted-foreground text-sm">
                For press inquiries, please contact our communications team.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary font-medium">press@nxtgensec.com</span>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" /> Press Kit
              </Button>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="space-y-6">
          {pressReleases.map((release, i) => (
            <article
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground">{release.summary}</p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2 flex-shrink-0">
                  Read More <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
