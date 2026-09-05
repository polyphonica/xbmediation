"use client";

import { useActionState } from "react";
import {
  changePassword,
  type ChangePasswordState,
} from "@/app/admin/(authenticated)/settings/actions";
import { Button } from "@/components/ui/Button";

const initialState: ChangePasswordState = {};

const fieldClasses =
  "border-border w-full rounded-lg border bg-cream px-4 py-3 text-sm text-ink focus:border-olive focus:ring-olive/20 focus:ring-2 focus:outline-none";

export function ChangePasswordForm() {
  const [state, formAction] = useActionState(changePassword, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label
          htmlFor="currentPassword"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Aktuelles Passwort
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          required
          className={fieldClasses}
        />
      </div>

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
      {state.success ? <p className="text-olive-dark text-sm">{state.success}</p> : null}

      <Button type="submit">Passwort ändern</Button>
    </form>
  );
}
