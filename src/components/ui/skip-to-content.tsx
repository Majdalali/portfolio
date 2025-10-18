'use client';

import { useState, useEffect } from 'react';

export function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    // Handle the skip link click
    const handleSkipClick = (e: MouseEvent) => {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
        
        // Remove tabindex after focus to avoid affecting normal navigation
        setTimeout(() => {
          main.removeAttribute('tabindex');
        }, 1000);
      }
    };
    
    const skipLink = document.getElementById('skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', handleSkipClick as any);
    }
    
    return () => {
      if (skipLink) {
        skipLink.removeEventListener('click', handleSkipClick as any);
      }
    };
  }, []);

  return (
    <a
      id="skip-to-content"
      href="#main-content"
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 transform z-50
        bg-[var(--color-accent)] px-4 py-2 text-[var(--color-background)]
        font-mono text-sm font-medium shadow-[var(--glow-md)] transition-opacity
        ${isFocused ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        focus:opacity-100 focus:pointer-events-auto
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  );
}