'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { KEYBOARD_SHORTCUTS } from '@/lib/constants'
import { KeyboardShortcutsModal } from '@/components/ui/keyboard-shortcuts-modal'
import { useTheme } from '@/lib/hooks/use-theme'
import { useKeyboardFeedback } from '@/lib/hooks/use-keyboard-feedback'

declare global {
  interface Window {
    showKeyboardToast?: (message: string) => void;
  }
}

export function KeyboardNavProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { toggleTheme } = useTheme()
  const [showShortcuts, setShowShortcuts] = useState(false)

  // Main keyboard handler for all key shortcuts
  useEffect(() => {
    const handleKeyShortcuts = (e: KeyboardEvent) => {
      // Skip if user is typing in input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Only handle key presses without Ctrl/Meta modifiers
      if (e.ctrlKey || e.metaKey) {
        return;
      }

      // Handle Escape key separately to avoid duplicate toasts
      if (e.key === 'Escape') {
        if (showShortcuts) {
          setShowShortcuts(false);
            if (window.showKeyboardToast) {
            window.showKeyboardToast('Shortcuts closed');
            }
            e.preventDefault();
            return;
        }
        return; // Let other Escape handlers work if shortcuts not shown
      }

      // Single-key shortcuts (no Ctrl or Meta modifiers)
      switch (e.key.toLowerCase()) {
        case 'h': // Home navigation
          router.push('/');
              if (window.showKeyboardToast) {
            window.showKeyboardToast('Navigated to Home');
              }
          e.preventDefault();
          return;

        case 'a': // About navigation
          router.push('/about');
        if (window.showKeyboardToast) {
            window.showKeyboardToast('Navigated to About');
        }
          e.preventDefault();
        return;

        case 'p': // Projects navigation
          router.push('/projects');
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Navigated to Projects');
      }
          e.preventDefault();
          return;

        case 's': // Skills navigation
          router.push('/skills');
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Navigated to Skills');
          }
          e.preventDefault();
          return;

        case 'c': // Contact navigation
          router.push('/contact');
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Navigated to Contact');
          }
          e.preventDefault();
          return;

        case 't': // Theme toggle
          toggleTheme();
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Theme changed');
          }
          e.preventDefault();
          return;

        case '?': // Help panel
          setShowShortcuts(prev => !prev);
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Keyboard shortcuts');
          }
          e.preventDefault();
          return;
        case 'j': // Scroll down
          window.scrollBy({ top: 100, behavior: 'smooth' });
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Scrolled down');
          }
          return; // No preventDefault for j/k as they are common typing characters

        case 'k': // Scroll up
          window.scrollBy({ top: -100, behavior: 'smooth' });
          if (window.showKeyboardToast) {
            window.showKeyboardToast('Scrolled up');
      }
          return; // No preventDefault for j/k as they are common typing characters
      }
    };

    window.addEventListener('keydown', handleKeyShortcuts);
    return () => window.removeEventListener('keydown', handleKeyShortcuts);
  }, [router, toggleTheme, showShortcuts]);

  // Use our custom hook for keyboard shortcuts with visual feedback
  useKeyboardFeedback([
    // Additional scrolling shortcuts that aren't in the main handler
    {
      key: 'Home',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      description: 'Scrolled to top',
    },
    {
      key: 'End',
      action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
      description: 'Scrolled to bottom',
    },
    // Escape key for closing modals is handled by the modal itself
  ], [router, toggleTheme, showShortcuts])

  return (
    <>
      {children}
      {showShortcuts && (
        <KeyboardShortcutsModal onClose={() => setShowShortcuts(false)} />
      )}
    </>
  )
}