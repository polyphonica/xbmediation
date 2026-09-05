"use server";

import { revalidatePath } from "next/cache";
import type { LeadStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function updateLeadStatus(leadId: string, status: LeadStatus) {
  await prisma.lead.update({ where: { id: leadId }, data: { status } });
  revalidatePath("/admin");
}
