'use client';

import { useState } from 'react';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { PixelButton } from '@/components/ui/pixel-button';
import { KeyboardHint } from '@/components/ui/keyboard-hint';
import { KeyboardShortcutsModal } from '@/components/ui/keyboard-shortcuts-modal';

export function KeyboardNavExample() {
  const [focusIndex, setFocusIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  // Simulate keyboard navigation between items
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'j') {
      e.preventDefault();
      setFocusIndex(prev => (prev < 4 ? prev + 1 : 0));
      
      // Show toast notification
      if (window.showKeyboardToast) {
        window.showKeyboardToast('Navigated down');
      }
    }
    else if (e.key === 'ArrowUp' || e.key === 'k') {
      e.preventDefault();
      setFocusIndex(prev => (prev > 0 ? prev - 1 : 4));
      
      // Show toast notification
      if (window.showKeyboardToast) {
        window.showKeyboardToast('Navigated up');
      }
    }
  };
  
  const items = [
    { id: 0, name: 'Home Directory', description: 'Main user files' },
    { id: 1, name: 'Projects Folder', description: 'Development projects' },
    { id: 2, name: 'Documents', description: 'Text documents and notes' },
    { id: 3, name: 'Images', description: 'Photos and graphics' },
    { id: 4, name: 'System', description: 'System configuration' },
  ];
  
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        Keyboard Navigation Enhancement
      </h2>
      
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-accent)]">
            Features Demonstration
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Try the keyboard navigation and accessibility improvements
          </p>
        </div>
        
        <div className="flex gap-3">
          <KeyboardHint keys={['?']} action="Show shortcuts guide" />
          <PixelButton
            onClick={() => setShowModal(true)}
          >
            Show Shortcuts Guide
          </PixelButton>
        </div>
      </div>
      
      <TerminalWindow title="keyboard-navigation.sh">
        <div className="space-y-6" tabIndex={0} onKeyDown={handleKeyDown}>
          <div>
            <CommandPrompt
              command="ls -la ~/folders"
              typeAnimation={true}
            />
            
            <div className="mt-6 space-y-1">
              <p className="mb-2 text-sm text-[var(--color-text-secondary)]">
                Use arrow keys (or j/k) to navigate between items:
              </p>
              
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`p-2 border-l-4 ${
                    focusIndex === item.id
                      ? 'border-[var(--color-accent)] bg-[var(--color-surface)] text-[var(--color-accent)]'
                      : 'border-transparent text-[var(--color-text-primary)]'
                  } transition-colors`}
                  tabIndex={focusIndex === item.id ? 0 : -1}
                >
                  <div className="flex justify-between">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-[var(--color-text-dim)]">
                      {focusIndex === item.id ? '(selected)' : ''}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-[var(--color-border)] pt-4 mt-6">
            <h4 className="text-[var(--color-accent-secondary)] font-bold mb-2">
              Keyboard Navigation Help:
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <KeyboardHint keys={['↓', 'j']} action="Move down" />
              <KeyboardHint keys={['↑', 'k']} action="Move up" />
              <KeyboardHint keys={['Tab']} action="Next interactive element" />
              <KeyboardHint keys={['Shift', 'Tab']} action="Previous element" />
              <KeyboardHint keys={['Home']} action="Scroll to top" />
              <KeyboardHint keys={['End']} action="Scroll to bottom" />
            </div>
          </div>
        </div>
      </TerminalWindow>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">
            Accessibility Features
          </h3>
          <ul className="space-y-2 list-disc list-inside text-[var(--color-text-secondary)]">
            <li>Skip to content link (Tab on page load)</li>
            <li>Keyboard navigation indicators</li>
            <li>Visual feedback for shortcut actions</li>
            <li>Comprehensive shortcuts help modal</li>
            <li>Focus management</li>
            <li>Proper ARIA roles and attributes</li>
          </ul>
          
          <div className="mt-4">
            <PixelButton
              variant="secondary"
              onClick={() => {
                if (window.showKeyboardToast) {
                  window.showKeyboardToast('Toast notification example');
                }
              }}
            >
              Show Toast Notification
            </PixelButton>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">
            Try These Shortcuts:
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <KeyboardHint keys={['Ctrl', 'H']} action="Go to Home page" />
            <KeyboardHint keys={['Ctrl', 'T']} action="Toggle theme" />
            <KeyboardHint keys={['?']} action="Show shortcuts guide" />
            <KeyboardHint keys={['Esc']} action="Close modals and panels" />
          </div>
        </div>
      </div>
      
      {showModal && <KeyboardShortcutsModal onClose={() => setShowModal(false)} />}
    </div>
  );
}