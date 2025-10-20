'use client';

import { useEffect, useState } from 'react';
import { KeyboardHint } from './keyboard-hint';
import { PixelButton } from './pixel-button';
import { TerminalWindow } from './terminal-window';
import { CommandPrompt } from './command-prompt';
import {Kbd} from "@/components/ui/kbd";

interface ShortcutCategory {
  name: string;
  shortcuts: Array<{ keys: string[]; action: string }>;
}

const shortcutCategories: ShortcutCategory[] = [
  {
    name: 'Navigation',
    shortcuts: [
      { keys: ['H'], action: 'Go to Home' },
      { keys: ['A'], action: 'Go to About' },
      { keys: ['P'], action: 'Go to Projects' },
      { keys: ['S'], action: 'Go to Skills' },
      { keys: ['C'], action: 'Go to Contact' },
    ],
  },
  {
    name: 'Scrolling',
    shortcuts: [
      { keys: ['J'], action: 'Scroll down' },
      { keys: ['K'], action: 'Scroll up' },
      { keys: ['Home'], action: 'Scroll to top' },
      { keys: ['End'], action: 'Scroll to bottom' },
    ],
  },
  {
    name: 'Interface',
    shortcuts: [
      { keys: ['?'], action: 'Show/hide this help' },
      { keys: ['T'], action: 'Toggle theme' },
      { keys: ['Esc'], action: 'Close modal/panel' },
      { keys: ['Tab'], action: 'Next focusable element' },
      { keys: ['Shift', 'Tab'], action: 'Previous focusable element' },
    ],
  }
];

export function KeyboardShortcutsModal({ onClose }: { onClose: () => void }) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Stop propagation to prevent multiple handlers from firing
        e.stopPropagation();
        onClose();
      }
    };
    
    // Use capture phase to catch the event early
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm">
      <div 
        className="w-full max-w-4xl max-h-[90vh] overflow-auto"
        role="dialog"
        aria-labelledby="keyboard-shortcuts-title"
        aria-modal="true"
      >
        <TerminalWindow 
          title="keyboard-shortcuts.md" 
          showControls={true}
        >
          <div className="p-2">
            <CommandPrompt
              command="cat keyboard-shortcuts.md | less"
              typeAnimation={true}
              showCursor={false}
            />
            
            <div className="mt-6">
              <h2 
                id="keyboard-shortcuts-title"
                className="text-2xl font-bold text-[var(--color-accent)] mb-6"
              >
                Keyboard Shortcuts
              </h2>
              
              <div className="space-y-8">
                {shortcutCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-bold text-[var(--color-accent-secondary)] border-b border-[var(--color-border)] pb-2">
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-1 gap-y-3 gap-x-6 md:grid-cols-2">
                      {category.shortcuts.map((shortcut, idx) => (
                        <KeyboardHint 
                          key={idx}
                          keys={shortcut.keys}
                          action={shortcut.action}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[var(--color-text-secondary)] text-sm">
                  <span>Press <Kbd className="bg-[var(--color-surface)] text-[var(--color-accent)] border-[var(--color-border)] border px-1 rounded-sm" >Shift</Kbd> + <Kbd className="bg-[var(--color-surface)] text-[var(--color-accent)]  border-[var(--color-border)] border px-1 rounded-sm" >?</Kbd> to view keyboard shortcuts</span>
              </p>

              <div className="mt-6 flex justify-center">
                <PixelButton 
                  onClick={onClose}
                  variant="primary"
                >
                  Close (Esc)
                </PixelButton>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}