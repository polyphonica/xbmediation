import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(120),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen etwas genauer.")
    .max(4000),
  area: z
    .enum(["FAMILIE", "WIRTSCHAFT", "UNSICHER"])
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  // Honeypot field: real visitors never fill this in.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
