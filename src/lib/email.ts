import type { Lead } from "@prisma/client";

/**
 * Placeholder notification hook. Real email delivery (e.g. via Resend) is
 * deferred until a domain exists for sending-domain verification — see the
 * project plan's Phasing section. Swapping in a real implementation here is
 * a one-file change; nothing else needs to know about it.
 */
export async function notifyNewLead(lead: Lead): Promise<void> {
  console.log(`[lead] new inquiry from ${lead.name} <${lead.email}>`);
}
