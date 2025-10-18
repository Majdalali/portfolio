'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface KeyboardHintProps {
  keys: string[]
  action: string
  className?: string
}

export function KeyboardHint({ keys, action, className = '' }: KeyboardHintProps) {
  return (
    <div className={cn('flex items-center gap-2 font-mono text-sm', className)}>
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <span key={index}>
            <kbd className="inline-flex h-7 min-w-[28px] items-center justify-center border-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-2 font-mono text-xs text-[var(--color-accent)] shadow-[var(--glow-sm)]">
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="mx-1 text-[var(--color-text-dim)]">+</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-[var(--color-text-secondary)]">{action}</span>
    </div>
  )
}

interface KeyboardHintsPanelProps {
  hints: Array<{ keys: string[]; action: string }>
  dismissible?: boolean
  className?: string
}

export function KeyboardHintsPanel({
  hints,
  dismissible = true,
  className = '',
}: KeyboardHintsPanelProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const hasSeenHints = localStorage.getItem('keyboard-hints-seen')
    if (!hasSeenHints) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('keyboard-hints-seen', 'true')
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 border-2 border-[var(--color-accent)] bg-[var(--color-background)] p-4 shadow-[var(--glow-lg)] transition-opacity duration-300',
        isDismissed ? 'opacity-0' : 'opacity-100',
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-mono text-sm font-bold text-[var(--color-accent)]">
          Keyboard Shortcuts
        </h4>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)]"
            aria-label="Dismiss hints"
          >
            ✕
          </button>
        )}
      </div>
      <div className="space-y-2">
        {hints.map((hint, index) => (
          <KeyboardHint key={index} keys={hint.keys} action={hint.action} />
        ))}
      </div>
    </div>
  )
}