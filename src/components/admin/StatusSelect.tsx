"use client";

import type { LeadStatus } from "@prisma/client";
import { updateLeadStatus } from "@/app/admin/actions";

const statusLabels: Record<LeadStatus, string> = {
  NEU: "Neu",
  KONTAKTIERT: "Kontaktiert",
  ABGESCHLOSSEN: "Abgeschlossen",
  ARCHIVIERT: "Archiviert",
};

export function StatusSelect({
  leadId,
  status,
}: {
  leadId: string;
  status: LeadStatus;
}) {
  return (
    <select
      defaultValue={status}
      onChange={(event) => {
        void updateLeadStatus(leadId, event.target.value as LeadStatus);
      }}
      className="border-border rounded-md border bg-cream px-2 py-1.5 text-sm text-ink"
    >
      {Object.entries(statusLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
