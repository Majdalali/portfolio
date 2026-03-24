'use client';

import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageTransition - Wraps page content with fade-in and slide-up animation
 * Use this component to provide consistent entrance animations for pages
 */
export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <div className={`animate-slide-up ${className}`}>
      {children}
    </div>
  );
}
