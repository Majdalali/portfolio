"use client";

import type { ReactNode } from "react";
import { CommandPrompt } from "./command-prompt";
import { TerminalWindow } from "./terminal-window";

interface ErrorPageShellProps {
  code: "404" | "500";
  title: string;
  description: string;
  command: string;
  statusLabel: string;
  children: ReactNode;
}

export function ErrorPageShell({
  code,
  title,
  description,
  command,
  statusLabel,
  children,
}: ErrorPageShellProps) {
  const titleId = `error-${code}-title`;

  return (
    <section
      className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12"
      aria-labelledby={titleId}
    >
      <TerminalWindow
        title={`system-error-${code}.log`}
        className="w-full max-w-3xl shadow-[var(--glow-md)]"
      >
        <div className="space-y-8">
          <CommandPrompt
            directory="~/system"
            command={command}
            showCursor={false}
          />

          <div
            className="flex flex-col gap-5 border-l-4 border-[var(--color-accent)] pl-5 sm:flex-row sm:items-center sm:gap-8 sm:pl-7"
            role={code === "500" ? "alert" : undefined}
          >
            <p
              className="shrink-0 font-mono text-6xl font-bold leading-none text-[var(--color-accent)] opacity-90 sm:text-7xl"
              aria-hidden="true"
            >
              {code}
            </p>

            <div className="min-w-0 flex-1">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-secondary)]">
                [ {statusLabel} ]
              </p>
              <h1
                id={titleId}
                className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl"
              >
                {title}
              </h1>
              <p className="mt-3 whitespace-normal break-words text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 font-mono text-xs text-[var(--color-text-dim)] sm:text-sm">
            <p>
              <span className="text-[var(--color-accent-secondary)]">
                status:
              </span>{" "}
              {code}
            </p>
            <p>
              <span className="text-[var(--color-accent-secondary)]">
                recovery:
              </span>{" "}
              actions_available
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">{children}</div>
        </div>
      </TerminalWindow>
    </section>
  );
}
