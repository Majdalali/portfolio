'use client'

import { useTheme } from '@/lib/hooks/use-theme'
import { THEMES } from '@/lib/constants'
import { useState } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const handleThemeChange = (newTheme: string) => {
    // @ts-ignore - we know these are valid theme values
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu}
        className="flex items-center gap-2 border-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text-primary)] hover:shadow-[var(--glow-sm)]"
        aria-label="Toggle theme menu"
      >
        <span className="font-mono">Theme: {THEMES.find(t => t.name === theme)?.label}</span>
        <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 border-2 border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--glow-md)] z-50">
          <ul>
            {THEMES.map((t) => (
              <li key={t.name}>
                <button
                  className={`block w-full px-4 py-2 text-left font-mono text-sm hover:bg-[var(--color-surface)] ${
                    theme === t.name 
                      ? 'text-[var(--color-accent)]' 
                      : 'text-[var(--color-text-primary)]'
                  }`}
                  onClick={() => handleThemeChange(t.name)}
                >
                  {t.name === theme && '▶ '}
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}