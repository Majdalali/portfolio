"use client";

import { useEffect } from "react";

// Type declaration for our global toast function
declare global {
  interface Window {
    showKeyboardToast?: (message: string) => void;
  }
}

interface KeyAction {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
  preventDefault?: boolean;
}

/**
 * Hook that registers keyboard shortcuts with visual feedback
 */
export function useKeyboardFeedback(
  keyActions: KeyAction[],
  dependencies: any[] = [],
) {
  // Debug: Log all registered actions
  // console.log('Registered key actions:', keyActions.map(ka => `${ka.key}${ka.ctrlKey ? '+Ctrl' : ''}`));
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in input/textarea/select
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Find matching action
      const matchedAction = keyActions.find((keyAction) => {
        const keyMatch = e.key.toLowerCase() === keyAction.key.toLowerCase();
        const ctrlMatch =
          keyAction.ctrlKey === undefined || e.ctrlKey === keyAction.ctrlKey;
        const metaMatch =
          keyAction.metaKey === undefined || e.metaKey === keyAction.metaKey;
        const shiftMatch =
          keyAction.shiftKey === undefined || e.shiftKey === keyAction.shiftKey;
        const altMatch =
          keyAction.altKey === undefined || e.altKey === keyAction.altKey;

        // Check if we have a Ctrl+Key combination match
        if (keyMatch && ctrlMatch && keyAction.ctrlKey && e.ctrlKey) {
          // For debugging only
          // console.log(`Matched Ctrl+${keyAction.key}`, keyAction);
          return true;
        }

        return keyMatch && ctrlMatch && metaMatch && shiftMatch && altMatch;
      });

      if (matchedAction) {
        // Debug logging for matched action
        // console.log('Executing action:', matchedAction.description);

        // Always prevent default for navigation shortcuts with Ctrl
        if (matchedAction.ctrlKey || matchedAction.preventDefault !== false) {
          // Debug logging for preventDefault
          // console.log('Preventing default for', matchedAction.key, 'with description:', matchedAction.description);
          e.preventDefault();
        }

        // Execute the action
        matchedAction.action();

        // Show visual feedback if toast is available
        if (window.showKeyboardToast) {
          window.showKeyboardToast(matchedAction.description);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, dependencies);
}
