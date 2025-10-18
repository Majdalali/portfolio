'use client'

import { useTheme as useThemeContext } from '@/components/providers/theme-provider'
import { useEffect } from 'react'

type ThemeHookReturn = ReturnType<typeof useThemeContext> & {
  toggleTheme: () => void
}

export function useTheme(): ThemeHookReturn {
  const context = useThemeContext()
  
  // Add transition class when changing themes
  useEffect(() => {
    document.documentElement.classList.add('transition-colors')
    document.documentElement.classList.add('duration-300')
    
    return () => {
      document.documentElement.classList.remove('transition-colors')
      document.documentElement.classList.remove('duration-300')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = (() => {
      switch(context.theme) {
        case 'terminal': return 'cyberpunk'
        case 'cyberpunk': return 'neon'
        case 'neon': return 'matrix'
        case 'matrix': return 'terminal'
        default: return 'terminal'
      }
    })()
    
    context.setTheme(nextTheme)
  }

  return {
    ...context,
    toggleTheme
  }
}