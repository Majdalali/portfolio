'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface TerminalCardProps {
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
  glowOnHover?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TerminalCard({
  title,
  description,
  tags = [],
  href,
  glowOnHover = true,
  children,
  className = '',
  onClick,
}: TerminalCardProps) {
  const cardContent = (
    <div
      className={`
        group relative border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6
        transition-all duration-300
        ${glowOnHover ? 'hover:border-[var(--color-accent)] hover:shadow-[var(--glow-md)]' : ''}
        ${href || onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-mono text-xl font-bold text-[var(--color-accent)] group-hover:text-[var(--color-accent-secondary)]">
          {title}
        </h3>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-4 font-mono text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}

      {/* Custom Content */}
      {children}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-accent)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover indicator for links */}
      {href && (
        <div className="mt-4 flex items-center gap-2 font-mono text-sm text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
          <span>→</span>
          <span>View details</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}