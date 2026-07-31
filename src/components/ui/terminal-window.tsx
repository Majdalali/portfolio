interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  showControls?: boolean
  scanlines?: boolean
  className?: string
  onClick?: () => void
  onClose?: () => void
}

export function TerminalWindow({
  title = 'terminal',
  children,
  showControls = true,
  scanlines = true,
  className = '',
  onClick,
  onClose,
}: TerminalWindowProps) {
  return (
    <div
      className={`relative border-2 border-[var(--color-border)] bg-[var(--color-surface)] ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Title Bar */}
      {showControls && (
        <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2">
          <div className="flex gap-2">
            {onClose ? (
              <button
                type="button"
                className="h-3 w-3 rounded-full bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                aria-label="Close terminal"
                onClick={(event) => {
                  event.stopPropagation()
                  onClose()
                }}
              />
            ) : (
              <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            )}
            <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
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