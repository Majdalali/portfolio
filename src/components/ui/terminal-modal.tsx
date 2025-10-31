'use client';

import { useEffect } from 'react';
import { TerminalWindow } from './terminal-window';
import { InteractiveTerminal } from './interactive-terminal';

interface TerminalModalProps {
  onClose: () => void;
}

export function TerminalModal({ onClose }: TerminalModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      {/* Prevent clicks on the modal from closing it */}
      <div
        className="w-full max-w-6xl max-h-[90vh] overflow-auto"
        role="dialog"
        aria-labelledby="terminal-modal-title"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >

          <div className="p-0">
            {/* Pass inModal prop to adjust styling */}
            <div className="max-h-full overflow-auto">
              <InteractiveTerminal  />
            </div>


          </div>

      </div>
    </div>
  );
}