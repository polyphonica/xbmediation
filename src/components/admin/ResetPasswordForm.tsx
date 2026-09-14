"use client";

import { useActionState } from "react";
import { resetPassword, type ResetPasswordState } from "@/app/admin/reset-password/actions";
import { Button } from "@/components/ui/Button";

const initialState: ResetPasswordState = {};

const fieldClasses =
  "border-border w-full rounded-lg border bg-cream px-4 py-3 text-sm text-ink focus:border-olive focus:ring-olive/20 focus:ring-2 focus:outline-none";

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction] = useActionState(resetPassword, initialState);

  if (state.success) {
    return (
      <div className="space-y-5">
        <p className="text-olive-dark text-sm">{state.success}</p>
        <Button href="/admin/login" className="w-full">
          Zur Anmeldung
        </Button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="token" value={token} />

      <div>
        <label htmlFor="newPassword" className="mb-1.5 block text-sm font-medium text-navy">
          Neues Passwort
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          minLength={10}
          autoFocus
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Neues Passwort bestätigen
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={10}
          className={fieldClasses}
        />
      </div>

      {state.error ? <p className="text-sm text-red-700">{state.error}</p> : null}

      <Button type="submit" className="w-full">
        Passwort zurücksetzen
      </Button>
    </form>
  );
}
