'use client';

import { useEffect, useState } from 'react';

interface KeyboardToastProps {
  message: string;
  duration?: number;
}

export function KeyboardToast({ message, duration = 2000 }: KeyboardToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 transform z-50 
        flex items-center gap-2 bg-[var(--color-surface)] border-2 border-[var(--color-accent)]
        py-2 px-4 font-mono text-sm text-[var(--color-accent)] shadow-[var(--glow-sm)]
        animate-fade-in-up"
      role="alert"
      aria-live="polite"
    >
      <span className="text-[var(--color-text-secondary)]">✓</span>
      <span>{message}</span>
    </div>
  );
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; }>>([]);
  
  // Add this to global window to allow access from anywhere
  useEffect(() => {
    const showToast = (message: string) => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 9);

      // Check if toast with same message already exists
      if (toasts.some(t => t.message === message)) {
        return; // Skip adding duplicate message
      }
      setToasts(prev => [...prev, { id, message }]);
      
      // Auto-remove after 2 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 2000);
    };
    
    // @ts-ignore - Add to window for global access
    window.showKeyboardToast = showToast;
    
    return () => {
      // @ts-ignore - Cleanup
      delete window.showKeyboardToast;
    };
  }, [toasts]);

  return (
    <>
      {children}
      <div className="fixed bottom-4 left-0 right-0 flex flex-col items-center gap-2 z-50">
        {toasts.map(toast => (
    <KeyboardToast key={`toast-${toast.id}`} message={toast.message} />
  ))}
      </div>
    </>
  );
}