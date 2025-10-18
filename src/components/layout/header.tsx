'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const navItems = [
  { name: 'Home', href: '/', shortcut: 'H' },
  { name: 'About', href: '/about', shortcut: 'A' },
  { name: 'Projects', href: '/projects', shortcut: 'P' },
  { name: 'Skills', href: '/skills', shortcut: 'S' },
  { name: 'Contact', href: '/contact', shortcut: 'C' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[var(--color-border)] bg-[var(--color-background)] backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="font-mono text-xl font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)]">
          <span className="text-[var(--color-text-secondary)]">~/</span>portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <ThemeSwitcher />
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-mono text-sm transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
                }`}
              >
                <span className="text-[var(--color-text-dim)]">[</span>
                <span className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                  {item.shortcut}
                </span>
                <span className="text-[var(--color-text-dim)]">]</span>
                <span className="ml-1">{item.name.slice(1)}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--color-accent)] shadow-[var(--glow-sm)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-mono text-sm ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  <span className="text-[var(--color-text-dim)]">[{item.shortcut}]</span>{' '}
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-2 mt-2 border-t border-[var(--color-border)]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">Theme:</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        </div>
      )}
    </header>
  );
}