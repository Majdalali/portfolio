import Link from "next/link";
import { ErrorPageShell } from "@/components/ui/error-page-shell";

const primaryActionClassName =
  "inline-flex items-center justify-center border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-2 font-mono text-sm font-semibold text-[var(--color-background)] transition-all duration-200 hover:scale-105 hover:shadow-[var(--glow-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

const secondaryActionClassName =
  "inline-flex items-center justify-center border-2 border-[var(--color-accent)] px-4 py-2 font-mono text-sm font-semibold text-[var(--color-accent)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:shadow-[var(--glow-sm)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

export default function NotFound() {
  return (
    <ErrorPageShell
      code="404"
      title="Route not found"
      description="The path you requested does not exist, may have moved, or is no longer available."
      command="find /requested/path"
      statusLabel="PATH_NOT_FOUND"
    >
      <Link href="/" className={primaryActionClassName}>
        cd /home
      </Link>
      <Link href="/projects" className={secondaryActionClassName}>
        ls ./projects
      </Link>
    </ErrorPageShell>
  );
}
