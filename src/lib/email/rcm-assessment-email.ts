import {
  revenueChallenges,
} from "@/features/assessment/assessment-data";

import type {
  RcmAssessmentFormData,
} from "@/lib/validations/rcm-assessment";

const challengeLabels = new Map<string, string>(
  revenueChallenges.map((challenge) => [
    challenge.id,
    challenge.label,
  ])
);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safe(
  value: string | undefined | null,
  fallback = "Not provided"
) {
  if (!value?.trim()) {
    return fallback;
  }

  return escapeHtml(value.trim());
}

function row(
  label: string,
  value: string
) {
  return `
    <tr>
      <td
        style="
          padding: 12px 0;
          border-bottom: 1px solid #e8eef1;
          color: #71858e;
          font-size: 13px;
          width: 38%;
          vertical-align: top;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding: 12px 0;
          border-bottom: 1px solid #e8eef1;
          color: #122f3a;
          font-size: 13px;
          font-weight: 600;
          vertical-align: top;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}

export function createRcmAssessmentEmail(
  data: RcmAssessmentFormData
) {
  const challenges = data.challenges
    .map(
      (id) =>
        challengeLabels.get(id) ?? id
    )
    .map(escapeHtml)
    .join(", ");

  const name = `${safe(
    data.firstName
  )} ${safe(data.lastName)}`;

  return `
    <!doctype html>

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <title>
          New RCM Assessment
        </title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #f2f6f8;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        "
      >
        <div
          style="
            padding: 40px 20px;
          "
        >
          <div
            style="
              max-width: 720px;
              margin: 0 auto;
              overflow: hidden;
              border: 1px solid #dde7eb;
              border-radius: 22px;
              background: #ffffff;
            "
          >
            <div
              style="
                padding: 30px;
                background: #071722;
                color: #ffffff;
              "
            >
              <div
                style="
                  color: #6fe7dd;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Kinz HealthOps
              </div>

              <h1
                style="
                  margin: 12px 0 0;
                  font-size: 27px;
                  line-height: 1.2;
                "
              >
                New RCM Assessment Request
              </h1>

              <p
                style="
                  margin: 10px 0 0;
                  color: #a9bbc2;
                  font-size: 13px;
                  line-height: 1.6;
                "
              >
                A healthcare practice submitted
                an assessment through the
                Kinz HealthOps website.
              </p>
            </div>

            <div
              style="
                padding: 30px;
              "
            >
              <div
                style="
                  padding: 16px;
                  border: 1px solid #ccece8;
                  border-radius: 14px;
                  background: #f3fbfa;
                  color: #39626a;
                  font-size: 12px;
                  line-height: 1.6;
                "
              >
                This public assessment is intended
                for business information only.
                The prospect was instructed not to
                submit patient information or PHI.
              </div>

              <h2
                style="
                  margin: 28px 0 8px;
                  color: #102d38;
                  font-size: 17px;
                "
              >
                Practice
              </h2>

              <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="
                  border-collapse: collapse;
                "
              >
                ${row(
                  "Practice",
                  safe(data.practiceName)
                )}

                ${row(
                  "Website",
                  safe(data.practiceWebsite)
                )}

                ${row(
                  "Specialty",
                  safe(data.specialty)
                )}

                ${row(
                  "State",
                  safe(data.state)
                )}

                ${row(
                  "Providers",
                  safe(data.providerCount)
                )}
              </table>

              <h2
                style="
                  margin: 32px 0 8px;
                  color: #102d38;
                  font-size: 17px;
                "
              >
                Revenue Cycle
              </h2>

              <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="
                  border-collapse: collapse;
                "
              >
                ${row(
                  "Billing model",
                  safe(data.billingModel)
                )}

                ${row(
                  "Monthly collections",
                  safe(data.monthlyCollections)
                )}

                ${row(
                  "EHR / PM",
                  safe(data.ehr)
                )}

                ${row(
                  "Challenges",
                  challenges || "Not provided"
                )}
              </table>

              ${
                data.challengeDetails?.trim()
                  ? `
                    <h2
                      style="
                        margin: 32px 0 10px;
                        color: #102d38;
                        font-size: 17px;
                      "
                    >
                      Additional Context
                    </h2>

                    <div
                      style="
                        padding: 16px;
                        border: 1px solid #e4ecef;
                        border-radius: 14px;
                        background: #f8fafb;
                        color: #526b75;
                        font-size: 13px;
                        line-height: 1.7;
                        white-space: pre-wrap;
                      "
                    >${safe(
                      data.challengeDetails
                    )}</div>
                  `
                  : ""
              }

              <h2
                style="
                  margin: 32px 0 8px;
                  color: #102d38;
                  font-size: 17px;
                "
              >
                Contact
              </h2>

              <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="
                  border-collapse: collapse;
                "
              >
                ${row(
                  "Name",
                  name
                )}

                ${row(
                  "Role",
                  safe(data.role)
                )}

                ${row(
                  "Email",
                  safe(data.workEmail)
                )}

                ${row(
                  "Phone",
                  safe(data.phone)
                )}

                ${row(
                  "Preferred contact",
                  safe(
                    data.preferredContact
                  )
                )}
              </table>

              <div
                style="
                  margin-top: 28px;
                  padding-top: 18px;
                  border-top: 1px solid #e7edef;
                  color: #93a2a8;
                  font-size: 11px;
                  line-height: 1.6;
                "
              >
                Generated by the Kinz HealthOps
                RCM Assessment website form.
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}