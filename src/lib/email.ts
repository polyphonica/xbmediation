import nodemailer from "nodemailer";
import type { Lead } from "@prisma/client";
import { areaOptions } from "@/content/kontakt";

const areaLabels: Record<string, string> = Object.fromEntries(
  areaOptions.map((option) => [option.value, option.label]),
);

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  const port = Number(SMTP_PORT);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

/**
 * Emails the practice's inbox about a new contact-form submission. The lead
 * is already persisted in the database before this runs (see submitLead), so
 * a delivery failure here is logged and swallowed rather than surfaced to
 * the visitor — the admin panel remains the source of truth either way.
 */
export async function notifyNewLead(lead: Lead): Promise<void> {
  const transporter = getTransporter();
  const to = process.env.CONTACT_NOTIFY_TO || process.env.SMTP_USER;

  if (!transporter || !to) {
    console.log(
      `[lead] new inquiry from ${lead.name} <${lead.email}> (SMTP not configured, no email sent)`,
    );
    return;
  }

  try {
    await transporter.sendMail({
      from: `"XB Mediation Website" <${process.env.SMTP_USER}>`,
      to,
      replyTo: `"${lead.name}" <${lead.email}>`,
      subject: `Neue Anfrage über das Kontaktformular – ${lead.name}`,
      text: [
        `Name: ${lead.name}`,
        `E-Mail: ${lead.email}`,
        lead.phone ? `Telefon: ${lead.phone}` : null,
        lead.area ? `Bereich: ${areaLabels[lead.area] ?? lead.area}` : null,
        "",
        "Nachricht:",
        lead.message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (error) {
    console.error(`[lead] failed to send notification email for lead ${lead.id}`, error);
  }
}
