"use client";

import { useActionState } from "react";
import {
  requestPasswordReset,
  type ForgotPasswordState,
} from "@/app/admin/login/forgot-password/actions";
import { Button } from "@/components/ui/Button";

const initialState: ForgotPasswordState = {};

export function ForgotPasswordForm() {
  const [state, formAction] = useActionState(requestPasswordReset, initialState);

  if (state.success) {
    return <p className="text-olive-dark text-sm">{state.success}</p>;
  }

  return (
    <form action={formAction} className="space-y-5">
      <p className="text-sm text-ink-soft">
        Ein Link zum Zurücksetzen des Passworts wird an die hinterlegte E-Mail-Adresse der
        Praxis gesendet.
      </p>

      {state.error ? <p className="text-sm text-red-700">{state.error}</p> : null}

      <Button type="submit" className="w-full">
        Link anfordern
      </Button>
    </form>
  );
}
