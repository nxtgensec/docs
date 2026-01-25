import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArticleCard } from "@/components/shared/ArticleCard";

const articles = [
  {
    title: "The Rise of AI-Powered Cyber Attacks: What You Need to Know",
    excerpt: "As artificial intelligence becomes more sophisticated, cybercriminals are leveraging these tools to launch more effective attacks. Learn how to protect your organization.",
    date: "January 15, 2024",
    category: "Threat Intelligence",
    slug: "/news/articles/ai-cyber-attacks",
  },
  {
    title: "nxtgensec Achieves SOC 2 Type II Certification",
    excerpt: "We're proud to announce that nxtgensec has successfully completed SOC 2 Type II certification, demonstrating our commitment to security and compliance.",
    date: "January 10, 2024",
    category: "Company News",
    slug: "/news/articles/soc2-certification",
  },
  {
    title: "Best Practices for Securing Remote Workforces in 2024",
    excerpt: "With remote work here to stay, organizations must adapt their security strategies. Here are our top recommendations for protecting distributed teams.",
    date: "January 5, 2024",
    category: "Best Practices",
    slug: "/news/articles/remote-security",
  },
  {
    title: "Understanding Zero Trust Architecture: A Complete Guide",
    excerpt: "Zero Trust is more than a buzzword—it's a fundamental shift in how we approach security. This guide explains the key concepts and implementation strategies.",
    date: "December 28, 2023",
    category: "Education",
    slug: "/news/articles/zero-trust-guide",
  },
  {
    title: "AWmate 3.0: Introducing Advanced Automation Features",
    excerpt: "The latest version of AWmate brings powerful new automation capabilities, including AI-driven threat response and enhanced integration options.",
    date: "December 20, 2023",
    category: "Product Updates",
    slug: "/news/articles/awmate-3-release",
  },
  {
    title: "The Hidden Costs of a Data Breach: Beyond the Headlines",
    excerpt: "Data breaches cost organizations far more than the immediate financial impact. We explore the long-term consequences and how to mitigate them.",
    date: "December 15, 2023",
    category: "Research",
    slug: "/news/articles/data-breach-costs",
  },
];

export default function Articles() {
  return (
    <PageLayout>
      <PageHeader
        title="Latest Articles"
        description="Insights, research, and updates from the nxtgensec team."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
