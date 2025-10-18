'use client';

import { useState } from 'react';
import { KeyboardHint, KeyboardHintsPanel } from '@/components/ui/keyboard-hint';
import { PixelButton } from '@/components/ui/pixel-button';
import { TerminalWindow } from '@/components/ui/terminal-window';

export function KeyboardHintExample() {
  const [showPanel, setShowPanel] = useState(false);

  const navigationHints = [
    { keys: ['Ctrl', 'H'], action: 'Go to Home' },
    { keys: ['Ctrl', 'A'], action: 'Go to About' },
    { keys: ['Ctrl', 'P'], action: 'Go to Projects' },
    { keys: ['Ctrl', 'S'], action: 'Go to Skills' },
    { keys: ['Ctrl', 'C'], action: 'Go to Contact' },
  ];

  const scrollingHints = [
    { keys: ['J'], action: 'Scroll down' },
    { keys: ['K'], action: 'Scroll up' },
  ];

  const modalHints = [
    { keys: ['Esc'], action: 'Close modal' },
    { keys: ['?'], action: 'Show keyboard shortcuts' },
  ];

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Keyboard Hint Examples</h2>
      
      <TerminalWindow title="keyboard-shortcuts.sh">
        <div className="space-y-8">
          {/* Individual Keyboard Hints */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">Individual Keyboard Hints</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <KeyboardHint keys={['Tab']} action="Focus next element" />
              <KeyboardHint keys={['Shift', 'Tab']} action="Focus previous element" />
              <KeyboardHint keys={['Enter']} action="Activate focused element" />
              <KeyboardHint keys={['Space']} action="Toggle selection" />
              <KeyboardHint keys={['↑', '↓']} action="Navigate list items" />
              <KeyboardHint keys={['Ctrl', 'T']} action="Toggle theme" />
            </div>
          </div>
          
          {/* Hint Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">Navigation Shortcuts</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {navigationHints.map((hint, i) => (
                <KeyboardHint key={i} keys={hint.keys} action={hint.action} />
              ))}
            </div>
            
            <h3 className="text-lg font-bold text-[var(--color-accent)] mt-6">Scrolling Shortcuts</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {scrollingHints.map((hint, i) => (
                <KeyboardHint key={i} keys={hint.keys} action={hint.action} />
              ))}
            </div>
            
            <h3 className="text-lg font-bold text-[var(--color-accent)] mt-6">Modal Controls</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {modalHints.map((hint, i) => (
                <KeyboardHint key={i} keys={hint.keys} action={hint.action} />
              ))}
            </div>
          </div>
          
          {/* Show Keyboard Hints Panel */}
          <div className="flex justify-center mt-8">
            <PixelButton onClick={() => setShowPanel(true)}>
              Show Keyboard Hints Panel
            </PixelButton>
          </div>
        </div>
      </TerminalWindow>
      
      {/* Conditionally show the panel */}
      {showPanel && (
        <KeyboardHintsPanel
          hints={[...navigationHints, ...scrollingHints, ...modalHints]}
          dismissible={true}
          className="relative static md:absolute"
        />
      )}
    </div>
  );
}