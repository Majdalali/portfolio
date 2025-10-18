'use client';

import { useEffect, useState } from 'react';

interface CommandPromptProps {
  user?: string;
  host?: string;
  directory?: string;
  command?: string;
  showCursor?: boolean;
  typeAnimation?: boolean;
  className?: string;
}

export function CommandPrompt({
  user = 'developer',
  host = 'portfolio',
  directory = '~',
  command = '',
  showCursor = true,
  typeAnimation = false,
  className = '',
}: CommandPromptProps) {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(typeAnimation);

  useEffect(() => {
    if (!typeAnimation || !command) {
      setDisplayedCommand(command);
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= command.length) {
        setDisplayedCommand(command.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [command, typeAnimation]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <span className="text-[var(--color-accent)]">{user}</span>
      <span className="text-[var(--color-text-secondary)]">@</span>
      <span className="text-[var(--color-accent-secondary)]">{host}</span>
      <span className="text-[var(--color-text-secondary)]">:</span>
      <span className="text-[var(--color-accent)]">{directory}</span>
      <span className="text-[var(--color-text-primary)]">$ </span>
      <span className="text-[var(--color-text-primary)]">{displayedCommand}</span>
      {showCursor && (isTyping || !command) && (
        <span className="cursor-blink ml-1 inline-block h-4 w-2 bg-[var(--color-accent)]" />
      )}
    </div>
  );
}