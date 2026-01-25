import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";

export default function RulesRegulations() {
  return (
    <PageLayout>
      <PageHeader 
        title="Internal Rules and Regulations" 
        description="NxtGenSec Internal Rules and Regulations Version 1.0"
      />
      <ContentSection>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Purpose and Scope</h2>
          <p className="mb-4">
            This document establishes the internal rules, regulations, governance structure, and professional standards of NxtGenSec.
            It applies to all individuals associated with the organization, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Founder and Co-founders</li>
            <li>Employees and Core Team Members</li>
            <li>Interns and Trainees</li>
            <li>Freelancers and Contractors</li>
            <li>Volunteers and Open-Source Contributors</li>
            <li>Advisors and Mentors</li>
          </ul>
          <p className="mb-6">
            Compliance with this document is mandatory throughout the duration of association with NxtGenSec.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Organizational Governance Structure</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Governance Model</h3>
          <p className="mb-4">
            NxtGenSec follows a Hybrid Governance Model, balancing centralized leadership with domain-specific autonomy.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">2.2 Founder and Chief Executive Officer</h3>
          <p className="mb-4">
            The Founder and CEO holds the highest authority within the organization and is responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Defining company vision, mission, and long-term strategy</li>
            <li>Final approval of all critical decisions</li>
            <li>Oversight of security, ethics, legal compliance, and intellectual property</li>
            <li>Representation of the organization in legal, financial, and external matters</li>
          </ul>
          <p className="mb-4">
            The Founder/CEO retains the right to override any internal decision when deemed necessary for the protection or advancement of the company.
          </p>

          <h3 className="text-xl font-semibold mb-3">2.3 Co-Founders</h3>
          <p className="mb-4">
            Co-founders are entrusted with domain-specific authority as formally assigned by the Founder/CEO.
            They may:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Independently manage and make decisions within their assigned domains</li>
            <li>Lead teams and approve operational workflows</li>
            <li>Recommend strategic initiatives</li>
          </ul>
          <p className="mb-4">
            They may not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Override decisions of the Founder/CEO</li>
            <li>Enter binding legal, financial, or equity-related agreements</li>
            <li>Transfer ownership, intellectual property, or company assets</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2.4 Escalation and Conflict Resolution</h3>
          <p className="mb-2">
            In the event of disagreement or conflict:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Resolution should first be attempted within the concerned domain</li>
            <li>Unresolved matters must be escalated to the Founder/CEO</li>
            <li>The decision of the Founder/CEO shall be final and binding</li>
          </ol>

          <h2 className="text-2xl font-bold mb-4">3. General Responsibilities and Professional Conduct</h2>
          <p className="mb-4">
            All individuals associated with NxtGenSec are required to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Act in the best interests of the organization</li>
            <li>Maintain professionalism, integrity, and ethical behaviour</li>
            <li>Protect company assets, systems, and reputation</li>
            <li>Comply with applicable laws, regulations, and internal policies</li>
            <li>Avoid conflicts of interest</li>
          </ul>
          <p className="mb-6">
            Any action that compromises security, trust, or organizational integrity is considered a serious violation.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Code of Conduct and Ethics</h2>
          <h3 className="text-xl font-semibold mb-3">4.1 Ethical Standards</h3>
          <p className="mb-4">
            NxtGenSec maintains strict ethical standards, particularly in cybersecurity, artificial intelligence, and research activities.
            Prohibited actions include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Unauthorized system access</li>
            <li>Exploitation of vulnerabilities without approval</li>
            <li>Misuse of confidential or personal data</li>
            <li>Plagiarism, falsification, or misrepresentation of work</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">4.2 Respect and Workplace Behavior</h3>
          <p className="mb-6">
            All individuals must maintain a respectful, inclusive, and professional environment. Harassment, discrimination, intimidation, or abusive behavior will not be tolerated.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Information Security and Data Handling</h2>
          <h3 className="text-xl font-semibold mb-3">5.1 Access Control</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access is granted strictly on a least-privilege basis</li>
            <li>Credentials must not be shared</li>
            <li>Access may be revoked at any time for security reasons</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">5.2 Data Protection</h3>
          <p className="mb-6">
            All company data, including client data, research data, and internal documentation, must be handled securely and confidentially.
            Unauthorized disclosure, storage, or transmission of data is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Enforcement and Disciplinary Policy</h2>
          <h3 className="text-xl font-semibold mb-3">6.1 Enforcement Philosophy</h3>
          <p className="mb-4">
            NxtGenSec adopts a balanced and progressive enforcement approach, emphasizing correction while ensuring accountability.
          </p>

          <h3 className="text-xl font-semibold mb-3">6.2 Disciplinary Process</h3>
          <p className="mb-2">
            Unless the violation is critical, disciplinary actions will follow this progression:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Verbal or written warning</li>
            <li>Corrective action or training</li>
            <li>Formal disciplinary action, including access restriction or suspension</li>
            <li>Termination or contract termination</li>
          </ol>

          <h3 className="text-xl font-semibold mb-3">6.3 Immediate Disciplinary Action</h3>
          <p className="mb-6">
            Immediate action, including termination, may be taken without prior notice in cases involving:
            security breaches, intellectual property theft or misuse, ethical or legal violations, or intentional harm to company interests.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Termination and Exit Policy</h2>
          <h3 className="text-xl font-semibold mb-3">7.1 Grounds for Termination</h3>
          <p className="mb-4">
            Termination may result from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Policy violations</li>
            <li>Breach of confidentiality</li>
            <li>Gross misconduct or negligence</li>
            <li>Repeated performance failures</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">7.2 Exit Obligations</h3>
          <p className="mb-6">
            Upon termination or resignation, individuals must return all company assets, revoke access to company systems, 
            hand over work, credentials, and documentation, and maintain confidentiality indefinitely.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Intellectual Property and Ownership</h2>
          <p className="mb-6">
            All work produced during association with NxtGenSec, including but not limited to software code, research outputs, 
            designs, documentation, and models shall be the exclusive intellectual property of NxtGenSec, unless otherwise agreed 
            in writing and approved by the Founder/CEO.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Role-Specific Policies</h2>
          <h3 className="text-xl font-semibold mb-3">9.1 Employees and Core Team</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Must follow assigned work responsibilities and reporting structures</li>
            <li>Are accountable for quality, security, and compliance</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">9.2 Interns and Trainees</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Work under supervision</li>
            <li>Have restricted access</li>
            <li>Do not acquire ownership rights over produced work</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">9.3 Freelancers and Contractors</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Are bound by contractual confidentiality and IP clauses</li>
            <li>Have time-bound and task-specific access</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">9.4 Volunteers and Contributors</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contributions are governed by approved licensing terms</li>
            <li>No employment or ownership rights are implied</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">9.5 Advisors and Mentors</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide non-binding guidance only</li>
            <li>Hold no operational authority</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">10. Amendments and Interpretation</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>NxtGenSec reserves the right to amend these rules at any time</li>
            <li>The latest approved version supersedes all previous versions</li>
            <li>Final interpretation authority rests with the Founder/CEO</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">11. Acceptance</h2>
          <p>
            Association with NxtGenSec implies acknowledgment, understanding, and acceptance of these rules and regulations.
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
}