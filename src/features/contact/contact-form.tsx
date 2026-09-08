"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldAlert,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

const inquiryTypes = [
  "Medical Billing",
  "A/R Management",
  "Denial Management",
  "Payment Posting",
  "Eligibility & Authorization",
  "Credentialing or Coding",
  "General RCM Discussion",
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name")
    .max(100, "Name is too long"),

  workEmail: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(254, "Email is too long"),

  practiceName: z
    .string()
    .trim()
    .min(2, "Enter your practice or company name")
    .max(120, "Name is too long"),

  inquiryType: z
    .string()
    .min(1, "Select an inquiry type"),

  message: z
    .string()
    .trim()
    .max(800, "Please keep your message under 800 characters"),

  confirmedBusinessOnly: z
    .boolean()
    .refine(
      (value) => value,
      "Please confirm before continuing"
    ),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  contactEmail: string;
}

const inputStyles =
  "w-full min-h-12 rounded-[13px] border border-[#dce5e9] bg-white px-4 text-[13px] text-[#17343f] outline-none transition-colors placeholder:text-[#9aabb3] focus:border-[#0b958a] focus:ring-4 focus:ring-[#15c8bb]/[0.07]";

const labelStyles =
  "mb-2 block text-[11px] font-semibold text-[#405a65]";

export function ContactForm({
  contactEmail,
}: ContactFormProps) {
  const [draftOpened, setDraftOpened] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      workEmail: "",
      practiceName: "",
      inquiryType: "",
      message: "",
      confirmedBusinessOnly: false,
    },
  });

  function onSubmit(values: ContactFormData) {
    if (!contactEmail) return;

    const subject =
      `Kinz HealthOps Inquiry — ${values.inquiryType}`;

    const body = [
      "Kinz HealthOps — Business Inquiry",
      "",
      `Name: ${values.name}`,
      `Work email: ${values.workEmail}`,
      `Practice / company: ${values.practiceName}`,
      `Inquiry type: ${values.inquiryType}`,
      "",
      "Message:",
      values.message || "No additional message provided.",
      "",
      "This inquiry contains business information only.",
    ].join("\n");

    const href =
      `mailto:${contactEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setDraftOpened(true);

    // Opens the visitor's email application.
    // This does not submit data to our server.
    window.location.href = href;
  }

  return (
    <div className="relative overflow-hidden rounded-[26px] border border-black/[0.065] bg-white p-6 shadow-[0_24px_80px_rgba(7,23,34,0.055)] sm:p-8 lg:p-9">
      <div className="absolute -right-20 -top-20 size-[250px] rounded-full bg-[#15c8bb]/[0.045] blur-[100px]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-[14px] bg-[#15c8bb]/[0.065] text-[#0b958a]">
            <Mail className="size-5" strokeWidth={1.7} />
          </span>

          <span className="rounded-full border border-black/[0.055] bg-[#f7fafb] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#84969e]">
            Business Inquiries
          </span>
        </div>

        <h2 className="mt-6 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.05em] text-[#102d38]">
          Tell us about your practice.
        </h2>

        <p className="mt-3 max-w-[600px] text-[13px] leading-7 text-[#71858e]">
          Share a little about your organization and
          the revenue-cycle support you&apos;re exploring.
          We&apos;ll use that information to understand
          the nature of your inquiry.
        </p>

        {!contactEmail && (
          <div
            role="status"
            className="mt-6 rounded-[15px] border border-amber-200 bg-amber-50 px-4 py-3.5 text-[12px] leading-6 text-amber-900"
          >
            Email contact is being configured. This
            form will become available once a working
            Kinz HealthOps mailbox is connected.
          </div>
        )}

        {draftOpened && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-[15px] border border-[#15c8bb]/20 bg-[#15c8bb]/[0.045] p-4"
          >
            <div className="flex items-start gap-3">
              <Check
                className="mt-0.5 size-4 shrink-0 text-[#0b958a]"
                strokeWidth={2}
              />

              <p className="text-[12px] leading-6 text-[#42616a]">
                Your email application should open
                with a prepared draft. Please review
                and send the email there. Your
                inquiry has not been submitted
                automatically.
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setDraftOpened(false)}
          noValidate
          className="mt-7 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Your name"
              error={errors.name?.message}
              required
            >
              <input
                {...register("name")}
                id="contact-name"
                autoComplete="name"
                placeholder="Your full name"
                maxLength={100}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name
                    ? "contact-name-error"
                    : undefined
                }
                className={inputStyles}
              />
            </FormField>

            <FormField
              label="Work email"
              error={errors.workEmail?.message}
              required
            >
              <input
                {...register("workEmail")}
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@practice.com"
                maxLength={254}
                aria-invalid={Boolean(errors.workEmail)}
                aria-describedby={
                  errors.workEmail
                    ? "contact-email-error"
                    : undefined
                }
                className={inputStyles}
              />
            </FormField>
          </div>

          <FormField
            label="Practice / company name"
            error={errors.practiceName?.message}
            required
          >
            <input
              {...register("practiceName")}
              id="contact-practice"
              autoComplete="organization"
              placeholder="Your organization"
              maxLength={120}
              aria-invalid={Boolean(errors.practiceName)}
              aria-describedby={
                errors.practiceName
                  ? "contact-practice-error"
                  : undefined
              }
              className={inputStyles}
            />
          </FormField>

          <FormField
            label="What would you like to discuss?"
            error={errors.inquiryType?.message}
            required
          >
            <select
              {...register("inquiryType")}
              id="contact-inquiry"
              defaultValue=""
              aria-invalid={Boolean(errors.inquiryType)}
              aria-describedby={
                errors.inquiryType
                  ? "contact-inquiry-error"
                  : undefined
              }
              className={cn(inputStyles, "appearance-none")}
            >
              <option value="" disabled>
                Select an inquiry type
              </option>

              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            label="Additional business details"
            error={errors.message?.message}
          >
            <textarea
              {...register("message")}
              id="contact-message"
              rows={4}
              maxLength={800}
              placeholder="Briefly describe your current billing model, operational challenges, or the services you're exploring. Do not include patient information."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message
                  ? "contact-message-error"
                  : undefined
              }
              className={cn(
                inputStyles,
                "min-h-[130px] resize-y py-3.5"
              )}
            />
          </FormField>

          <div className="rounded-[15px] border border-[#e3eaed] bg-[#f8fafb] p-4">
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-0.5 size-4 shrink-0 text-[#0b958a]"
                strokeWidth={1.7}
              />

              <div>
                <p className="text-[12px] font-semibold text-[#3e5964]">
                  Business information only
                </p>

                <p className="mt-1.5 text-[11px] leading-6 text-[#788b94]">
                  Do not include patient names, dates
                  of birth, medical records, insurance
                  identifiers, claim details or other
                  protected health information.
                  Public website forms and ordinary
                  email are not approved channels for
                  patient information.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                {...register("confirmedBusinessOnly")}
                type="checkbox"
                className="mt-1 size-4 shrink-0 accent-[#0b958a]"
              />

              <span className="text-[11px] leading-6 text-[#657a84]">
                I confirm this inquiry contains
                business information only and agree
                to be contacted about my inquiry.
              </span>
            </label>

            {errors.confirmedBusinessOnly && (
              <p
                role="alert"
                className="mt-2 text-[11px] text-red-600"
              >
                {errors.confirmedBusinessOnly.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!contactEmail}
            className="group flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 text-[13px] font-semibold text-white shadow-[0_16px_42px_rgba(5,28,38,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10313d] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
          >
            Open Email Draft

            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </button>

          <p className="text-center text-[10px] leading-5 text-[#91a1a8]">
            This opens your email application. You
            must review and send the message yourself.
            No information is submitted to our server
            by this form.
          </p>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = (() => {
    switch (label) {
      case "Your name":
        return "contact-name";
      case "Work email":
        return "contact-email";
      case "Practice / company name":
        return "contact-practice";
      case "What would you like to discuss?":
        return "contact-inquiry";
      default:
        return "contact-message";
    }
  })();

  return (
    <div>
      <label htmlFor={id} className={labelStyles}>
        {label}

        {required && (
          <span className="ml-1 text-[#0b958a]">*</span>
        )}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-[11px] text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}