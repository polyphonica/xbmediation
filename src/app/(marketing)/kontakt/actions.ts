"use server";

import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validation";
import { notifyNewLead } from "@/lib/email";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  message?: string;
};

export async function submitLead(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    area: formData.get("area"),
    website: formData.get("website"),
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) {
        errors[key] = issue.message;
      }
    }
    return { status: "error", errors };
  }

  // Honeypot triggered — pretend success without writing anything.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const lead = await prisma.lead.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
      area: parsed.data.area,
    },
  });

  await notifyNewLead(lead);

  return { status: "success" };
}
