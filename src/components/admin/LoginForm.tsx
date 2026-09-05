"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/admin/login/actions";
import { Button } from "@/components/ui/Button";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-navy">
          Passwort
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="border-border w-full rounded-lg border bg-cream px-4 py-3 text-sm text-ink focus:border-olive focus:ring-olive/20 focus:ring-2 focus:outline-none"
        />
      </div>

      {state.error ? <p className="text-sm text-red-700">{state.error}</p> : null}

      <Button type="submit" className="w-full">
        Anmelden
      </Button>
    </form>
  );
}
