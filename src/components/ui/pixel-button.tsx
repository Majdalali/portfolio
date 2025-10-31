import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  loading?: boolean
}

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ variant = 'primary', size = 'md', icon, loading, children, className = '', ...props }, ref) => {
    const baseStyles = 'font-mono font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]'
    
    const variants = {
      primary: 'bg-[var(--color-accent)] border-2 border-[var(--color-accent)]  text-[var(--color-background)] hover:shadow-[var(--glow-md)] hover:scale-105 active:scale-95 ',
      secondary: 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:shadow-[var(--glow-sm)]',
      ghost: 'text-[var(--color-accent)] hover:bg-[var(--color-surface)] hover:shadow-[var(--glow-sm)]',
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], 'flex items-center gap-2 justify-center', className)}
        disabled={loading}
        {...props}
      >
        {loading && (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {icon && <span>{icon}</span>}
        {children}
      </button>
    )
  }
)

PixelButton.displayName = 'PixelButton'