import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

/**
 * claryden rcm — Terms of Use
 *
 * Legal review required before publication.
 *
 * Confirm:
 * - Actual legal entity and business address.
 * - Effective date and governing law.
 * - Whether any online purchases or payments are offered.
 * - Actual service agreement and BAA arrangements.
 * - Approved liability, indemnity, and dispute provisions.
 * - Whether additional jurisdiction-specific terms apply.
 *
 * This page governs the public website only.
 * It is not a substitute for a medical billing service agreement,
 * Business Associate Agreement, or legal advice.
 */

const legalStatus = {
  approved: false,
  effectiveDate: null as string | null,
  legalEntityName: "",
  governingLaw: "",
};

const isPublished =
  legalStatus.approved &&
  Boolean(legalStatus.effectiveDate) &&
  Boolean(legalStatus.legalEntityName) &&
  Boolean(legalStatus.governingLaw);

const pageTitle = "Terms of Use";

const pageDescription =
  "Review the terms governing use of the claryden rcm website, business inquiries, revenue cycle assessments, and related information.";

export const metadata: Metadata = {
  title: `${pageTitle} | claryden rcm`,
  description: pageDescription,

  alternates: {
    canonical: "/terms",
  },

  robots: {
    index: isPublished,
    follow: isPublished,
  },

  openGraph: {
    title: `${pageTitle} | claryden rcm`,
    description: pageDescription,
    type: "website",
    url: "/terms",
  },
};

type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

const sections: readonly LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of These Terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of the claryden rcm website, including its public pages, business inquiry forms, and revenue cycle assessment request features.",

      "By accessing or using the website, you agree to comply with these Terms. If you do not agree, please discontinue use of the website.",

      "claryden rcm is the business name used on this website. The legal entity responsible for operating the website will be identified in the approved version of these Terms. References to “we,” “us,” and “our” refer to that entity.",

      "If you use the website on behalf of a healthcare practice, company, or other organization, you represent that you are authorized to provide the information you submit and to act on behalf of that organization in connection with the inquiry.",
    ],
  },

  {
    id: "website-purpose",
    title: "2. Website Purpose",
    paragraphs: [
      "The website provides general information about revenue cycle management, medical billing, and related healthcare administrative services. It also allows prospective clients and business contacts to communicate with claryden rcm.",

      "Website content is provided for general informational and business-development purposes. It is not medical, legal, tax, accounting, coding, reimbursement, or other professional advice, and it should not be relied upon as a substitute for advice from appropriately qualified professionals.",

      "We may update, modify, suspend, or discontinue website content or features from time to time, subject to applicable law and any separate contractual obligations.",
    ],
  },

  {
    id: "no-service-agreement",
    title: "3. No Service Engagement Created",
    paragraphs: [
      "Submitting a contact form, requesting an assessment, receiving a proposal, or communicating with our team does not by itself create a medical billing engagement, client relationship, business associate relationship, or obligation to provide services.",

      "Any professional RCM services will be subject to a separately agreed written service agreement that defines the scope of work, responsibilities, fees, service levels, confidentiality, data handling, and other applicable commercial terms.",

      "Where a proposed engagement involves protected health information and requires a Business Associate Agreement or other applicable data protection arrangements, those arrangements must be established before the relevant information is accessed or processed.",

      "If there is a conflict between these website Terms and a separately executed service agreement or Business Associate Agreement, the applicable executed agreement will govern the subject matter of that conflict.",
    ],
  },

  {
    id: "business-inquiries",
    title: "4. Business Inquiries and Assessments",
    paragraphs: [
      "Our public inquiry and assessment forms are intended to collect business-level information about your organization and its revenue cycle needs. You agree to provide information that is accurate to the best of your knowledge and that you are authorized to share.",

      "An assessment request is a preliminary discovery process. It is not a formal audit, coding review, compliance assessment, financial certification, or guarantee of particular operational or financial outcomes.",

      "Any observations, recommendations, estimates, or proposals provided following an inquiry are subject to the information available, the agreed scope of review, and any qualifications communicated with them.",

      "We may decline, defer, or discontinue an inquiry where the requested services are outside our capabilities, the information supplied is insufficient, or proceeding would be inconsistent with applicable legal, regulatory, security, or contractual requirements.",
    ],
  },

  {
    id: "patient-information",
    title: "5. Patient Information and PHI",
    paragraphs: [
      "Public website forms are intended for business and operational information only. You must not submit patient names, dates of birth, medical records, insurance member identifiers, diagnoses, claim-level details, or other protected health information through these forms.",

      "Ordinary business email and public website forms should not be treated as approved channels for transmitting patient information. Do not send PHI through these channels unless claryden rcm has expressly established and authorized an appropriate workflow for that purpose.",

      "If patient information is inadvertently submitted, please contact us through the designated business contact method without including additional patient information. The information will be handled in accordance with applicable privacy, security, and incident-handling procedures.",

      "Nothing in these Terms authorizes the use or disclosure of PHI beyond what is permitted by applicable law and any relevant executed agreements.",
    ],
  },

  {
    id: "permitted-use",
    title: "6. Permitted Use",
    paragraphs: [
      "You may use the website for lawful business and informational purposes consistent with these Terms. You agree not to interfere with the website, its infrastructure, or other users.",

      "You must not:",
    ],
    bullets: [
      "Use the website for unlawful, fraudulent, misleading, or unauthorized purposes.",
      "Submit information that you do not have the right to disclose.",
      "Attempt to gain unauthorized access to any system, account, server, or data.",
      "Introduce malware, malicious code, or other harmful material.",
      "Attempt to bypass security controls, rate limits, or access restrictions.",
      "Use automated methods to overload, disrupt, or scrape the website in a manner that violates applicable law or these Terms.",
      "Impersonate another person or organization or misrepresent your authority.",
      "Use website content in a manner that infringes intellectual property or other rights.",
    ],
  },

  {
    id: "availability",
    title: "7. Website Availability and Security",
    paragraphs: [
      "We aim to maintain a reliable and secure website, but uninterrupted availability cannot be guaranteed. Access may be affected by maintenance, technical failures, network conditions, third-party services, security incidents, or events outside our reasonable control.",

      "We may implement reasonable measures to protect the website and prevent misuse, including verification, rate limiting, access restrictions, and other security controls.",

      "You are responsible for using appropriate security practices when accessing the website and for ensuring that information submitted from your devices or systems is authorized and suitable for the public inquiry channel.",
    ],
  },

  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the website's original design, text, graphics, branding, software, and other materials are owned by or licensed to claryden rcm and are protected by applicable intellectual property laws.",

      "You may view and use website content for your own lawful, internal business evaluation. You may not reproduce, distribute, modify, commercially exploit, or create derivative works from substantial portions of the website without prior written permission, except where permitted by applicable law.",

      "Third-party trademarks, product names, and logos remain the property of their respective owners. References to third-party systems, payers, EHR platforms, or other products do not imply endorsement, affiliation, certification, or partnership unless expressly stated and substantiated.",
    ],
  },

  {
    id: "submitted-content",
    title: "9. Information You Submit",
    paragraphs: [
      "You retain any rights you have in information you submit through the website. You grant us permission to use business-inquiry information as reasonably necessary to receive, evaluate, respond to, and maintain records of your inquiry, subject to our Privacy Policy and applicable law.",

      "You represent that you have the necessary authority to provide the submitted information and that doing so does not violate applicable law, confidentiality obligations, or the rights of another person or organization.",

      "You must not submit confidential third-party information, patient information, or other sensitive material through a public form unless an appropriate authorized arrangement has been established for that information.",
    ],
  },

  {
    id: "third-party-services",
    title: "10. Third-Party Services and Links",
    paragraphs: [
      "The website may include links to third-party websites or rely on third-party technologies for functions such as hosting, email delivery, or security verification.",

      "We do not control third-party websites and are not responsible for their independent content, availability, or privacy practices. Your use of third-party websites may be subject to their own terms and policies.",

      "References to third-party products or services are provided for informational purposes and do not constitute an endorsement or guarantee unless expressly stated.",
    ],
  },

  {
    id: "no-guarantees",
    title: "11. No Guaranteed Business Outcomes",
    paragraphs: [
      "Revenue cycle results depend on many factors, including payer policies, coding accuracy, documentation, claim quality, patient responsibility, contractual arrangements, practice operations, and other circumstances outside the control of any single service provider.",

      "Website statements about potential improvements, process efficiencies, or revenue cycle opportunities are not guarantees of increased collections, reimbursement, claim acceptance, denial reduction, or any other specific financial or operational result.",

      "Any performance commitments, service levels, or remedies relating to contracted services must be expressly stated in the applicable written service agreement.",
    ],
  },

  {
    id: "disclaimers",
    title: "12. Website Disclaimers",
    paragraphs: [
      "The website and its informational content are provided on an “as available” basis. To the extent permitted by applicable law, we disclaim warranties that are not expressly provided, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",

      "We do not warrant that website content is complete, current, error-free, or suitable for every organization or circumstance. Healthcare reimbursement rules, payer requirements, and regulatory obligations may change, and users should independently verify information relevant to their decisions.",

      "Nothing in these Terms excludes or limits any warranty, right, or remedy that cannot lawfully be excluded or limited.",
    ],
  },

  {
    id: "liability",
    title: "13. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, claryden rcm and its responsible legal entity will not be liable for indirect, incidental, special, consequential, or punitive damages arising solely from use of, or inability to use, the public website, including loss of profits, business opportunities, or data, where such exclusions are legally permitted.",

      "These website limitations do not replace or override liability provisions in an applicable executed service agreement or Business Associate Agreement.",

      "Nothing in these Terms limits liability that cannot lawfully be limited, including liability arising from fraud, willful misconduct, or other matters for which applicable law prohibits exclusion or limitation.",

      "Any monetary liability cap, indemnity provision, or jurisdiction-specific limitation must be reviewed and approved as part of the final legal terms before publication.",
    ],
  },

  {
    id: "privacy",
    title: "14. Privacy",
    paragraphs: [
      "Our handling of information collected through the website is described in our Privacy Policy. Please review that Policy before submitting information.",

      "The Privacy Policy is not a substitute for a healthcare provider's Notice of Privacy Practices, a Business Associate Agreement, or any other notice or agreement required for a particular healthcare service arrangement.",
    ],
  },

  {
    id: "changes",
    title: "15. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms to reflect changes in our website, business practices, or applicable requirements. The approved version will display an effective or last-updated date.",

      "Changes will apply prospectively from the effective date stated in the revised Terms, except where a different approach is required by applicable law. Where legally required, we will provide additional notice or obtain consent.",

      "Changes to separately executed service agreements or Business Associate Agreements will be governed by the amendment provisions of those agreements.",
    ],
  },

  {
    id: "termination",
    title: "16. Suspension or Termination of Access",
    paragraphs: [
      "We may restrict or suspend access to the public website where reasonably necessary to address security risks, misuse, unlawful activity, or violations of these Terms, subject to applicable law.",

      "Termination or suspension of website access does not by itself terminate a separately executed service agreement. Any termination of contracted RCM services will be governed by the applicable agreement.",
    ],
  },

  {
    id: "governing-law",
    title: "17. Governing Law and Disputes",
    paragraphs: [
      "The governing law, jurisdiction, and any applicable dispute-resolution provisions for these website Terms will be identified in the approved version following legal review.",

      "Disputes arising under a separately executed service agreement or Business Associate Agreement will be governed by the dispute-resolution provisions of that agreement. Nothing in these Terms limits rights or remedies that cannot lawfully be waived.",
    ],
  },

  {
    id: "general",
    title: "18. General Provisions",
    paragraphs: [
      "If any provision of these Terms is determined to be unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",

      "Our failure to enforce a provision on one occasion does not necessarily constitute a waiver of that provision or any other right.",

      "These Terms, together with the Privacy Policy and any notices expressly incorporated into them, govern use of the public website. They do not supersede separately executed agreements governing professional services.",
    ],
  },

  {
    id: "contact",
    title: "19. Contact",
    paragraphs: [
      "For questions about these Terms or the use of the website, please contact claryden rcm through the contact information published on our website.",

      "The approved version of these Terms will identify the responsible legal entity, business address, and designated legal or business contact. Please do not include patient information in ordinary business correspondence.",
    ],
  },
];

const linkStyles =
  "font-semibold text-[#087f78] underline decoration-[#15c8bb]/30 underline-offset-4 transition-colors hover:text-[#075d59] hover:decoration-[#087f78]";

function LegalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-48 top-0 size-[520px] rounded-full bg-[#15c8bb]/[0.055] blur-[150px]" />

      <div className="absolute -right-48 top-24 size-[560px] rounded-full bg-[#4c8dff]/[0.055] blur-[150px]" />

      <div
        className="
          absolute inset-0 opacity-35
          bg-[linear-gradient(rgba(7,23,34,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.025)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]
        "
      />
    </div>
  );
}

function LegalHero() {
  return (
    <header className="relative overflow-hidden border-b border-black/[0.055] bg-[#f6fafb]">
      <LegalBackground />

      <Container>
        <div className="relative mx-auto max-w-[850px] px-1 pb-14 pt-28 text-center sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#15c8bb]/15 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b8179] shadow-[0_8px_30px_rgba(7,23,34,0.035)]">
            <FileText size={14} strokeWidth={1.8} />
            Legal Information
          </div>

          <h1 className="mt-7 text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[#071722]">
            Terms of
            <span className="block bg-gradient-to-r from-[#0c716f] via-[#078e94] to-[#337ce5] bg-clip-text text-transparent">
              Use.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-8 text-[#657d87] sm:text-[17px]">
            Clear expectations for using our website,
            requesting an assessment, and exploring
            revenue cycle management services.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-medium text-[#617983]">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                size={15}
                className="text-[#0b958a]"
              />
              Business inquiries only
            </span>

            <span className="inline-flex items-center gap-2">
              <LockKeyhole
                size={15}
                className="text-[#0b958a]"
              />
              No PHI requested
            </span>
          </div>

          {isPublished && legalStatus.effectiveDate ? (
            <p className="mt-8 text-[11px] font-medium text-[#91a2a9]">
              Effective date: {legalStatus.effectiveDate}
            </p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

function DraftNotice() {
  if (isPublished) return null;

  return (
    <div
      role="note"
      className="mb-8 rounded-[18px] border border-amber-200/80 bg-amber-50/80 p-5 text-amber-950"
    >
      <p className="text-[12px] font-semibold">
        Draft — legal review required
      </p>

      <p className="mt-2 text-[12px] leading-6 text-amber-900/80">
        This page is not yet approved for publication.
        The responsible legal entity, effective date,
        governing law, and final contractual provisions
        must be confirmed before launch.
      </p>
    </div>
  );
}

function LegalSectionContent({
  section,
}: {
  section: LegalSection;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28 border-b border-[#e7edef] py-9 first:pt-0 last:border-b-0 sm:py-11"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-[clamp(1.45rem,2.2vw,1.9rem)] font-semibold leading-[1.25] tracking-[-0.035em] text-[#102d38]"
      >
        {section.title}
      </h2>

      <div className="mt-5 space-y-5">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[14px] leading-[1.95] text-[#526b76] sm:text-[15px]"
          >
            {paragraph}
          </p>
        ))}

        {section.bullets ? (
          <ul className="space-y-3 pl-1">
            {section.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14px] leading-7 text-[#526b76] sm:text-[15px]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#0b958a]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {section.id === "privacy" ? (
          <p className="text-[14px] leading-7 text-[#526b76]">
            Read our{" "}
            <Link href="/privacy-policy" className={linkStyles}>
              Privacy Policy
            </Link>
            .
          </p>
        ) : null}

        {section.id === "contact" ? (
          <p className="text-[14px] leading-7 text-[#526b76]">
            Visit our{" "}
            <Link href="/contact" className={linkStyles}>
              contact page
            </Link>{" "}
            for business inquiries.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function ContentsNavigation() {
  return (
    <nav
      aria-label="Terms of Use sections"
      className="rounded-[22px] border border-[#e3eaed] bg-white p-5 shadow-[0_16px_50px_rgba(7,23,34,0.035)] lg:sticky lg:top-28"
    >
      <div className="flex items-center justify-between gap-3 border-b border-[#edf1f2] pb-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#79909a]">
          On this page
        </p>

        <span className="rounded-full bg-[#f1f6f7] px-2.5 py-1 text-[10px] font-semibold text-[#82969e]">
          {sections.length} sections
        </span>
      </div>

      <ol className="mt-4 space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-lg px-3 py-2.5 text-[12px] leading-5 text-[#69808a] transition-colors hover:bg-[#f3f8f8] hover:text-[#0b8179] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b958a]"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function TermsPage() {
  const canonicalUrl = new URL(
    "/terms",
    siteConfig.url
  ).toString();

  const homeUrl = new URL(
    "/",
    siteConfig.url
  ).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${pageTitle} | claryden rcm`,
    description: pageDescription,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "claryden rcm",
      url: homeUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageTitle,
          item: canonicalUrl,
        },
      ],
    },
  };

  return (
    <main className="min-w-0 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <LegalHero />

      <section className="py-10 sm:py-14 lg:py-20">
        <Container>
          <div className="grid min-w-0 gap-10 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
            <div className="min-w-0">
              <div className="lg:hidden">
                <details className="group rounded-[18px] border border-[#e3eaed] bg-[#f8fafb] p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13px] font-semibold text-[#284652] [&::-webkit-details-marker]:hidden">
                    Browse sections
                    <span className="text-[#0b958a] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="mt-4 max-h-[330px] overflow-y-auto border-t border-[#e5ecee] pt-3">
                    <ol className="space-y-1">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="block rounded-lg px-2 py-2 text-[12px] leading-5 text-[#69808a] hover:bg-white hover:text-[#0b8179]"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              </div>

              <div className="hidden lg:block">
                <ContentsNavigation />
              </div>
            </div>

            <article className="min-w-0 max-w-[790px]">
              <DraftNotice />

              <div className="rounded-[20px] border border-[#e2eaed] bg-[#f8fbfb] p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-[#15c8bb]/15 bg-white text-[#0b958a]">
                    <FileText size={18} strokeWidth={1.7} />
                  </span>

                  <div>
                    <h2 className="text-[13px] font-semibold text-[#284652]">
                      About these Terms
                    </h2>

                    <p className="mt-2 text-[12px] leading-6 text-[#71858e]">
                      These Terms govern the public website
                      and business inquiries. Professional
                      RCM services, patient-data processing,
                      and commercial commitments require
                      separate written agreements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                {sections.map((section) => (
                  <LegalSectionContent
                    key={section.id}
                    section={section}
                  />
                ))}
              </div>

              <div className="mt-12 rounded-[22px] border border-[#dce9e8] bg-[#f5faf9] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] border border-[#15c8bb]/15 bg-white text-[#0b958a]">
                    <ShieldCheck
                      size={20}
                      strokeWidth={1.7}
                    />
                  </span>

                  <div>
                    <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#183843]">
                      Questions about our terms?
                    </h2>

                    <p className="mt-2 text-[13px] leading-7 text-[#69808a]">
                      Our team can clarify the website
                      terms and explain how a separate RCM
                      service agreement would be structured.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 text-[12px] font-semibold text-[#087f78] transition-colors hover:text-[#075d59]"
                    >
                      Contact our team
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e7edef] bg-[#f8fbfb] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b958a]">
                claryden rcm
              </p>

              <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.045em] text-[#102d38] sm:text-[30px]">
                Explore with confidence.
              </h2>

              <p className="mt-3 max-w-[500px] text-[13px] leading-7 text-[#71858e]">
                Learn more about how we approach
                revenue cycle operations or begin a
                business-level assessment.
              </p>
            </div>

            <Link
              href="/rcm-assessment"
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2.5 self-start rounded-[14px] bg-[#071c27] px-6 text-[12px] font-semibold text-white shadow-[0_14px_35px_rgba(5,28,38,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10313d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b958a]"
            >
              Request an Assessment
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}