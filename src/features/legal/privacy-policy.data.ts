export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type PrivacyPolicy = {
  title: string;
  description: string;
  effectiveDate: string | null;
  lastUpdated: string | null;
  approved: boolean;
  sections: readonly PrivacySection[];
};

/**
 * Kinz HealthOps Privacy Policy
 *
 * IMPORTANT:
 * This is a drafting source, not an approved legal policy.
 *
 * Before publication, confirm:
 * - The legal entity operating Kinz HealthOps.
 * - Registered/business address and privacy contact.
 * - Actual hosting, analytics, email, security, and CRM providers.
 * - Data storage locations and international transfer practices.
 * - Retention/deletion schedules.
 * - Applicable privacy rights and response procedures.
 * - Whether any patient-data processing is operationally enabled.
 * - Counsel review for applicable US and Indian requirements.
 *
 * Do not publish unsupported HIPAA, certification, encryption,
 * audit, or security-compliance claims.
 */

export const privacyPolicy: PrivacyPolicy = {
  title: "Privacy Policy",

  description:
    "Learn how Kinz HealthOps handles business inquiries, website information, and privacy-related requests.",

  effectiveDate: null,

  lastUpdated: null,

  approved: false,

  sections: [
    {
      id: "overview",
      title: "1. Overview",
      paragraphs: [
        "Kinz HealthOps provides information about revenue cycle management and related healthcare administrative services. This Privacy Policy explains how information is handled when visitors use our website, contact us, or request a revenue cycle assessment.",

        "The legal entity responsible for this website, its business address, and its designated privacy contact will be identified in the approved version of this Policy. The Policy should be read together with our Terms of Use and any applicable service agreements.",

        "This Policy concerns our public website and business-inquiry activities. Where Kinz HealthOps performs services involving protected health information on behalf of a healthcare organization, the applicable service agreement, business associate agreement, and relevant privacy and security requirements govern that processing.",
      ],
    },

    {
      id: "information-collected",
      title: "2. Information We Collect",
      paragraphs: [
        "We may collect information that you voluntarily provide when contacting us or requesting an assessment. Depending on the form you use, this may include:",
      ],
      bullets: [
        "Your name, professional role, work email address, and telephone number.",
        "Your practice or organization name, website, specialty, state, and approximate number of providers.",
        "Business-level information about your current billing model, revenue cycle challenges, EHR or practice management system, and approximate collections range.",
        "The contents of your inquiry and your preferred contact method.",
      ],
    },

    {
      id: "automatic-information",
      title: "3. Website and Technical Information",
      paragraphs: [
        "When you visit the website, technical information may be processed by our hosting, security, and other configured service providers. Depending on the services actually enabled, this may include IP address, browser and device information, requested pages, timestamps, and security-related request data.",

        "Any analytics, advertising, or non-essential cookie technologies will be described in the approved Policy and, where required, presented through appropriate consent or preference controls. We will not describe a technology as active unless it is actually implemented.",
      ],
    },

    {
      id: "how-we-use-information",
      title: "4. How We Use Information",
      paragraphs: [
        "Business-inquiry information is used to understand your request, communicate with you, assess whether our services may be relevant, and prepare appropriate follow-up discussions or proposals.",

        "Technical information may be used to operate the website, maintain availability, investigate errors, prevent abuse, and protect the security of our systems.",

        "Where applicable, we may also use information to comply with legal obligations, maintain business records, and establish, exercise, or defend legal rights. Any additional marketing use must be consistent with applicable law and the choices provided to you.",
      ],
    },

    {
      id: "patient-information",
      title: "5. Patient Information and PHI",
      paragraphs: [
        "Our public contact and revenue cycle assessment forms are intended for business and operational inquiries only. Please do not submit patient names, dates of birth, medical records, insurance member identifiers, diagnoses, claim-level information, or other protected health information through these forms.",

        "Ordinary email and public website forms should not be treated as approved channels for transmitting patient information. If patient information is inadvertently submitted, it must be handled under the applicable privacy and incident-handling procedures.",

        "Any future service workflow involving PHI must be established separately with appropriate agreements, authorized access, safeguards, and operational procedures before patient information is requested or processed.",
      ],
    },

    {
      id: "service-providers",
      title: "6. Service Providers and Disclosures",
      paragraphs: [
        "Information may be processed by service providers that support the operation of our website and business-inquiry workflow, such as hosting, email delivery, security verification, and infrastructure providers. The approved Policy will identify relevant providers or categories based on the production configuration.",

        "We may also disclose information where required by applicable law, to protect legitimate legal rights, or in connection with a lawful business transaction, subject to applicable obligations.",

        "We do not authorize public-form submissions to be used as a channel for sending patient information to third-party services. Any service provider that creates, receives, maintains, or transmits PHI on our behalf must be evaluated under the applicable contractual and regulatory requirements.",
      ],
    },

    {
      id: "international-processing",
      title: "7. International Processing",
      paragraphs: [
        "Kinz HealthOps may serve healthcare organizations in the United States while operating through personnel or service providers in other countries. The approved Policy will describe the actual locations and arrangements relevant to website and business-inquiry processing.",

        "Where international processing is involved, we will evaluate applicable privacy requirements, contractual obligations, and appropriate safeguards. Any processing of PHI must additionally comply with the relevant healthcare service agreements and applicable HIPAA requirements.",
      ],
    },

    {
      id: "security",
      title: "8. Information Security",
      paragraphs: [
        "We recognize the importance of protecting information entrusted to us. Our website and business processes are intended to incorporate safeguards appropriate to the nature of the information and the risks involved.",

        "The specific technical and organizational measures described publicly will reflect controls that have actually been implemented and verified. No website, transmission method, or information system can be guaranteed to be completely secure.",

        "Visitors should avoid submitting sensitive patient information through public inquiry channels and contact us through the designated business contact method if they have concerns about information previously submitted.",
      ],
    },

    {
      id: "retention",
      title: "9. Retention and Deletion",
      paragraphs: [
        "Business-inquiry information will be retained for periods that are appropriate to the purpose for which it was collected and any applicable legal, contractual, or legitimate business requirements.",

        "The approved Policy will describe the applicable retention criteria and deletion procedures after our operational retention schedule has been confirmed. Information may need to be retained longer where required by law, necessary for legal claims, or subject to an applicable preservation obligation.",
      ],
    },

    {
      id: "your-rights",
      title: "10. Your Privacy Choices and Rights",
      paragraphs: [
        "Depending on your location and applicable law, you may have rights relating to access, correction, deletion, objection, restriction, withdrawal of consent, or other aspects of the processing of your personal information.",

        "You may contact our designated privacy contact to submit a request. We may need to verify your identity and may be required or permitted to retain certain information or decline a request in circumstances allowed by law.",

        "Requests concerning patient medical records or other PHI held by a healthcare provider should generally be directed to the relevant provider or its designated privacy office. Where Kinz HealthOps acts as a business associate, requests will be handled in accordance with the applicable agreements and legal obligations.",
      ],
    },

    {
      id: "children",
      title: "11. Children's Privacy",
      paragraphs: [
        "This website is intended for healthcare professionals, practice administrators, and other business users. It is not designed or directed toward children, and its public forms are not intended to collect information from children.",
      ],
    },

    {
      id: "third-party-links",
      title: "12. Third-Party Websites",
      paragraphs: [
        "Our website may contain links to third-party websites or services. Their privacy practices are governed by their own policies. We encourage visitors to review those policies before providing information to third parties.",
      ],
    },

    {
      id: "changes",
      title: "13. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy to reflect changes in our website, business practices, applicable requirements, or service providers. The current version will display its effective or last-updated date once approved for publication.",

        "Where required by applicable law, we will provide additional notice or obtain consent before implementing material changes.",
      ],
    },

    {
      id: "contact",
      title: "14. Contact Us",
      paragraphs: [
        "For questions about this Privacy Policy or to submit a privacy-related request, please contact Kinz HealthOps through the designated privacy contact published on this website.",

        "The approved version of this Policy will include the responsible legal entity, business address, and a working privacy contact email. Please do not send patient information through the public contact form or ordinary business email.",
      ],
    },
  ],
};