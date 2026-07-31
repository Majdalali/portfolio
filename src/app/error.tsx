"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ErrorPageShell } from "@/components/ui/error-page-shell";

const primaryActionClassName =
  "inline-flex items-center justify-center border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-2 font-mono text-sm font-semibold text-[var(--color-background)] transition-all duration-200 hover:scale-105 hover:shadow-[var(--glow-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

const secondaryActionClassName =
  "inline-flex items-center justify-center border-2 border-[var(--color-accent)] px-4 py-2 font-mono text-sm font-semibold text-[var(--color-accent)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:shadow-[var(--glow-sm)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPageShell
      code="500"
      title="Process terminated unexpectedly"
      description="This page encountered an unexpected error. Retry the operation or return to a known route."
      command="recover --last-session"
      statusLabel={error.digest ? `REFERENCE_${error.digest}` : "RUNTIME_ERROR"}
    >
      <button type="button" onClick={reset} className={primaryActionClassName}>
        retry --safe
      </button>
      <Link href="/" className={secondaryActionClassName}>
        cd /home
      </Link>
    </ErrorPageShell>
  );
}
