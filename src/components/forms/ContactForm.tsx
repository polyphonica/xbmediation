"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitLead, type ContactFormState } from "@/app/kontakt/actions";
import { FormField } from "@/components/forms/FormField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { areaOptions, consentText, submitLabel, successMessage } from "@/content/kontakt";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="bg-sage border-border/60 rounded-xl border p-8">
        <p className="font-display text-lg font-medium text-navy">{successMessage}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real visitors, left blank on legitimate submissions. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormField label="Ihr Name" name="name" required error={state.errors?.name} />
      <FormField
        label="Ihre E-Mail-Adresse"
        name="email"
        type="email"
        required
        error={state.errors?.email}
      />
      <FormField label="Ihre Telefonnummer (optional)" name="phone" type="tel" />
      <FormField label="Worum geht es?" name="area" as="select">
        <option value="">Bitte auswählen (optional)</option>
        {areaOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormField>
      <FormField
        label="Ihr Anliegen"
        name="message"
        as="textarea"
        required
        error={state.errors?.message}
      />

      <p className="text-xs leading-relaxed text-ink-soft">
        {consentText}{" "}
        <Link href="/datenschutz" className="text-olive-dark underline underline-offset-2">
          Datenschutzerklärung
        </Link>
        .
      </p>

      <SubmitButton label={submitLabel} />
    </form>
  );
}
