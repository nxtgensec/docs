import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";

export default function Terms() {
  return (
    <PageLayout>
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />
      <ContentSection>
        <div className="max-w-3xl mx-auto prose prose-invert prose-green">
          <p className="text-muted-foreground text-sm">Last updated: January 15, 2024</p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using nxtgensec services, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by these terms, please 
            do not use our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. Description of Services</h2>
          <p className="text-muted-foreground mb-4">
            nxtgensec provides cybersecurity services including but not limited to threat detection, 
            security monitoring, vulnerability assessment, and related consulting services. The specific 
            services available to you depend on your subscription plan.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
          <p className="text-muted-foreground mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and 
            for all activities that occur under your account. You agree to notify us immediately of 
            any unauthorized use of your account.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content, features, and functionality of our services are owned by nxtgensec and are 
            protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall nxtgensec be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use of our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Termination</h2>
          <p className="text-muted-foreground mb-4">
            We may terminate or suspend your access to our services immediately, without prior notice 
            or liability, for any reason, including breach of these Terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State 
            of California, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify or replace these Terms at any time. Material changes will 
            be notified at least 30 days before they become effective.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at legal@nxtgensec.com.
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
