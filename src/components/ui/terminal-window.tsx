interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  showControls?: boolean
  scanlines?: boolean
  className?: string
}

export function TerminalWindow({
  title = 'terminal',
  children,
  showControls = true,
  scanlines = true,
  className = '',
}: TerminalWindowProps) {
  return (
    <div className={`relative border-2  border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}>
      {/* Title Bar */}
      {showControls && (
        <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-sm text-[var(--color-text-secondary)]">
            {title}
          </span>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {children}

        {/* Scanlines Overlay */}
        {scanlines && (
          <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />
        )}
      </div>
    </div>
  )
}