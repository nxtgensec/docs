import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

const policies = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    href: "#privacy",
  },
  {
    title: "Data Processing Agreement",
    description: "Our commitment to data protection and GDPR compliance.",
    href: "#dpa",
  },
  {
    title: "Security Policy",
    description: "Our security practices and certifications.",
    href: "#security",
  },
  {
    title: "Acceptable Use Policy",
    description: "Guidelines for appropriate use of our services.",
    href: "#aup",
  },
  {
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies.",
    href: "#cookies",
  },
  {
    title: "Refund Policy",
    description: "Our refund and cancellation terms.",
    href: "#refund",
  },
];

export default function Policies() {
  return (
    <PageLayout>
      <PageHeader
        title="Policies"
        description="Our policies and commitments to transparency, privacy, and security."
      />
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {policies.map((policy) => (
            <a
              key={policy.title}
              href={policy.href}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                  {policy.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{policy.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Privacy Policy Content */}
        <div id="privacy" className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              At nxtgensec, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our services.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include your name, email address, 
              company information, and payment details.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-6">How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and respond 
              to your comments and questions.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect the security 
              of your personal information, including encryption, access controls, and regular 
              security assessments.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl bg-card border border-border p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Questions About Our Policies?</h3>
          <p className="text-muted-foreground mb-4">
            Contact our legal team for any questions or concerns about our policies.
          </p>
          <p className="text-primary font-medium">legal@nxtgensec.com</p>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
