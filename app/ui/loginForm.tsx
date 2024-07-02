"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";

function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction}>
      <div className="space-y-4 w-[450px] bg-slate-300 p-6 rounded-lg">
        <h1>login</h1>
        <Input
          id="email"
          required
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Input
          id="password"
          name="password"
          required
          type="password"
          placeholder="Enter Password"
        />
        <Button aria-disabled={isPending} type="submit">
          Login
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
