/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Publication and legal review                                               */
/* -------------------------------------------------------------------------- */

/**
 * Claryden RCM Privacy Policy
 *
 * STATUS: DRAFT — NOT APPROVED FOR PUBLICATION
 *
 * This file is a legal-content drafting source. It must not be
 * represented as an approved or complete Privacy Policy until
 * the responsible business and qualified legal counsel have
 * reviewed the actual production practices.
 *
 * Before approval, confirm:
 *
 * 1. The exact legal entity operating Claryden RCM.
 * 2. The registered/business address and working privacy contact.
 * 3. The actual website, hosting, email, CRM, analytics, advertising,
 *    security, and other relevant service providers.
 * 4. The personal information collected by every public form.
 * 5. The actual purposes, legal bases, and marketing practices.
 * 6. Cookies, tracking technologies, and applicable consent controls.
 * 7. Data storage locations and international processing arrangements.
 * 8. Retention periods, deletion procedures, and backup retention.
 * 9. Applicable privacy rights and request-handling procedures.
 * 10. Whether any patient-data processing is operationally enabled.
 * 11. Applicable healthcare agreements, including BAAs where required.
 * 12. Actual technical and organizational security measures.
 * 13. Applicable US, Indian, and other jurisdictional requirements.
 * 14. The effective date and approval of the final published version.
 *
 * Do not publish unsupported HIPAA, certification, encryption,
 * audit, security-compliance, or performance claims.
 *
 * Do not set approved to true merely to make the page render.
 * Approval should reflect an actual legal and operational review.
 */

/* -------------------------------------------------------------------------- */
/* Privacy Policy                                                             */
/* -------------------------------------------------------------------------- */

export const privacyPolicy: PrivacyPolicy = {
  title: "Privacy Policy",

  description:
    "Learn how Claryden RCM handles business inquiries, website information, and privacy-related requests.",

  effectiveDate: null,

  lastUpdated: null,

  approved: false,

  sections: [
    /* ---------------------------------------------------------------------- */
    /* 1. Overview                                                            */
    /* ---------------------------------------------------------------------- */

    {
      id: "overview",
      title: "1. Overview",

      paragraphs: [
        "Claryden RCM provides information about revenue cycle management and related healthcare administrative services. This Privacy Policy explains how personal information is handled when visitors use our public website, contact us, or request a revenue cycle assessment.",

        "The legal entity responsible for this website, its business address, and its designated privacy contact will be identified in the approved version of this Policy. This Policy should be read together with our Terms of Use and any applicable service agreements.",

        "This Policy concerns our public website and business-inquiry activities. Where Claryden RCM performs services involving protected health information on behalf of a healthcare organization, the applicable service agreement, business associate agreement where required, and relevant privacy and security requirements govern that processing.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 2. Information We Collect                                              */
    /* ---------------------------------------------------------------------- */

    {
      id: "information-collected",
      title: "2. Information We Collect",

      paragraphs: [
        "We may collect personal and business information that you voluntarily provide when contacting us, requesting an assessment, or communicating with our team. Depending on the form or communication channel you use, this may include:",
      ],

      bullets: [
        "Your name, professional role, work email address, and telephone number.",

        "Your practice or organization name, website, specialty, state, and approximate number of providers.",

        "Business-level information about your current billing model, revenue cycle challenges, EHR or practice management system, and approximate collections range.",

        "The contents of your inquiry, your preferred contact method, and other information you choose to provide in connection with a business request.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 3. Website and Technical Information                                   */
    /* ---------------------------------------------------------------------- */

    {
      id: "automatic-information",
      title: "3. Website and Technical Information",

      paragraphs: [
        "When you visit the website, technical information may be processed by our hosting, security, and other configured service providers. Depending on the services actually enabled, this may include IP address, browser and device information, requested pages, timestamps, and security-related request data.",

        "The approved Policy will describe the analytics, advertising, cookies, and other tracking technologies actually used on the production website, including their purposes and relevant service providers. Where required by applicable law, non-essential technologies will be subject to appropriate consent or preference controls.",

        "We will not describe a technology as active, claim that tracking is disabled, or make statements about cookie behavior unless those statements accurately reflect the production configuration.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 4. How We Use Information                                              */
    /* ---------------------------------------------------------------------- */

    {
      id: "how-we-use-information",
      title: "4. How We Use Information",

      paragraphs: [
        "Business-inquiry information is used to understand your request, communicate with you, assess whether our services may be relevant, and prepare appropriate follow-up discussions, assessments, or proposals.",

        "Technical information may be used to operate the website, maintain availability, investigate errors, prevent abuse, and protect the security of our systems.",

        "Where applicable, information may also be used to comply with legal obligations, maintain business records, and establish, exercise, or defend legal rights. Any additional marketing use must be consistent with applicable law and the choices provided to you.",

        "The approved Policy will identify the actual purposes of processing and, where required by applicable law, the relevant legal bases or other required information concerning those purposes.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 5. Patient Information and PHI                                         */
    /* ---------------------------------------------------------------------- */

    {
      id: "patient-information",
      title: "5. Patient Information and PHI",

      paragraphs: [
        "Our public contact and revenue cycle assessment forms are intended for business and operational inquiries only. Please do not submit patient names, dates of birth, medical records, insurance member identifiers, diagnoses, claim-level information, or other protected health information through these forms.",

        "Ordinary email and public website forms should not be treated as approved channels for transmitting patient information. If patient information is inadvertently submitted, it must be handled under the applicable privacy and incident-handling procedures.",

        "Any service workflow involving protected health information must be established separately with appropriate agreements, authorized access, safeguards, and operational procedures before patient information is requested or processed.",

        "The public website should not be used to submit patient records, request patient-specific medical advice, or communicate information concerning an individual patient's care.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 6. Service Providers and Disclosures                                   */
    /* ---------------------------------------------------------------------- */

    {
      id: "service-providers",
      title: "6. Service Providers and Disclosures",

      paragraphs: [
        "Information may be processed by service providers that support the operation of our website and business-inquiry workflow, such as hosting, email delivery, security verification, infrastructure, and other providers actually used by the business. The approved Policy will identify relevant providers or categories based on the production configuration.",

        "We may also disclose information where required by applicable law, to protect legitimate legal rights, or in connection with a lawful business transaction, subject to applicable obligations.",

        "We do not authorize public-form submissions to be used as a channel for sending patient information to third-party services. Any service provider that creates, receives, maintains, or transmits protected health information on our behalf must be evaluated under the applicable contractual and regulatory requirements.",

        "The approved Policy will accurately describe any sharing of personal information for analytics, advertising, marketing, or other purposes where such sharing occurs and disclosure is required by applicable law.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 7. International Processing                                            */
    /* ---------------------------------------------------------------------- */

    {
      id: "international-processing",
      title: "7. International Processing",

      paragraphs: [
        "Claryden RCM may serve healthcare organizations in the United States while operating through personnel or service providers in other countries. The approved Policy will describe the actual locations and arrangements relevant to website and business-inquiry processing.",

        "Where international processing is involved, we will evaluate applicable privacy requirements, contractual obligations, and appropriate safeguards. Any processing of protected health information must additionally comply with the relevant healthcare service agreements and applicable legal requirements.",

        "The final Policy will not make claims about data residency, international transfer mechanisms, or specific safeguards unless those arrangements have been confirmed and are accurately described.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 8. Information Security                                                */
    /* ---------------------------------------------------------------------- */

    {
      id: "security",
      title: "8. Information Security",

      paragraphs: [
        "We recognize the importance of protecting information entrusted to us. Our website and business processes are intended to incorporate safeguards appropriate to the nature of the information and the risks involved.",

        "The specific technical and organizational measures described publicly will reflect controls that have actually been implemented and verified. No website, transmission method, or information system can be guaranteed to be completely secure.",

        "Visitors should avoid submitting sensitive patient information through public inquiry channels. If you have concerns about information previously submitted, please contact us through the designated business contact method so the matter can be reviewed under the applicable procedures.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 9. Retention and Deletion                                              */
    /* ---------------------------------------------------------------------- */

    {
      id: "retention",
      title: "9. Retention and Deletion",

      paragraphs: [
        "Business-inquiry information will be retained for periods appropriate to the purpose for which it was collected and any applicable legal, contractual, or legitimate business requirements.",

        "The approved Policy will describe the applicable retention periods or criteria and deletion procedures after our operational retention schedule has been confirmed. This review will include relevant production systems and, where applicable, backup or archival arrangements.",

        "Information may need to be retained longer where required by law, necessary for legal claims, or subject to an applicable preservation obligation. Where deletion is requested, the response will be determined in accordance with applicable law and the relevant retention requirements.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 10. Privacy Choices and Rights                                         */
    /* ---------------------------------------------------------------------- */

    {
      id: "your-rights",
      title: "10. Your Privacy Choices and Rights",

      paragraphs: [
        "Depending on your location and applicable law, you may have rights relating to access, correction, deletion, objection, restriction, withdrawal of consent, or other aspects of the processing of your personal information.",

        "You may contact our designated privacy contact to submit a request. We may need to verify your identity and may be required or permitted to retain certain information or decline a request in circumstances allowed by law.",

        "Where applicable, you may also have choices concerning marketing communications or non-essential tracking technologies. The approved Policy will explain the relevant options and how they can be exercised based on the services actually enabled.",

        "Requests concerning patient medical records or other protected health information held by a healthcare provider should generally be directed to the relevant provider or its designated privacy office. Where Claryden RCM acts as a business associate, requests will be handled in accordance with the applicable agreements and legal obligations.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 11. Children's Privacy                                                 */
    /* ---------------------------------------------------------------------- */

    {
      id: "children",
      title: "11. Children's Privacy",

      paragraphs: [
        "This website is intended for healthcare professionals, practice administrators, and other business users. It is not designed or directed toward children, and its public forms are not intended to collect information from children.",

        "If you believe a child has submitted personal information through the public website, please contact the designated privacy contact so the matter can be reviewed and addressed in accordance with applicable law.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 12. Third-Party Websites                                               */
    /* ---------------------------------------------------------------------- */

    {
      id: "third-party-links",
      title: "12. Third-Party Websites",

      paragraphs: [
        "Our website may contain links to third-party websites or services. Their privacy practices are governed by their own policies and are not necessarily covered by this Privacy Policy. We encourage visitors to review those policies before providing information to third parties.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 13. Changes to This Policy                                             */
    /* ---------------------------------------------------------------------- */

    {
      id: "changes",
      title: "13. Changes to This Policy",

      paragraphs: [
        "We may update this Privacy Policy to reflect changes in our website, business practices, applicable requirements, or service providers. The current version will display its effective or last-updated date once approved for publication.",

        "Where required by applicable law, we will provide additional notice or obtain consent before implementing material changes. The applicable version will be made available through the website.",
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* 14. Contact Us                                                         */
    /* ---------------------------------------------------------------------- */

    {
      id: "contact",
      title: "14. Contact Us",

      paragraphs: [
        "For questions about this Privacy Policy or to submit a privacy-related request, please contact Claryden RCM through the designated privacy contact published on this website.",

        "The approved version of this Policy will include the responsible legal entity, business address, and a working privacy contact email. Please do not send patient information through the public contact form or ordinary business email.",

        "If your request concerns patient information held by a healthcare provider, please contact the relevant provider or its designated privacy office unless you have been instructed to use another authorized channel.",
      ],
    },
  ],
};