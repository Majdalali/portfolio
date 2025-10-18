'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

interface UseKeyboardNavOptions {
  enableVimNavigation?: boolean
  disableOnInputs?: boolean
}

export function useKeyboardNav(options: UseKeyboardNavOptions = {}) {
  const {
    enableVimNavigation = true,
    disableOnInputs = true
  } = options
  
  const router = useRouter()

  const navigateTo = useCallback((path: string) => {
    router.push(path)
  }, [router])

  const scrollDown = useCallback(() => {
    window.scrollBy({ top: 100, behavior: 'smooth' })
  }, [])

  const scrollUp = useCallback(() => {
    window.scrollBy({ top: -100, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in input/textarea and disableOnInputs is true
      if (
        disableOnInputs &&
        (e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement)
      ) {
        return
      }

      // Navigation shortcuts (Ctrl/Cmd + key)
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            e.preventDefault()
            navigateTo('/')
            break
          case 'a':
            e.preventDefault()
            navigateTo('/about')
            break
          case 'p':
            e.preventDefault()
            navigateTo('/projects')
            break
          case 's':
            e.preventDefault()
            navigateTo('/skills')
            break
          case 'c':
            e.preventDefault()
            navigateTo('/contact')
            break
        }
      }

      // Vim-style scrolling if enabled
      if (enableVimNavigation) {
        switch (e.key.toLowerCase()) {
          case 'j':
            // Don't prevent default for these since they're common typing keys
            scrollDown()
            break
          case 'k':
            // Don't prevent default for these since they're common typing keys
            scrollUp()
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [navigateTo, scrollDown, scrollUp, enableVimNavigation, disableOnInputs])

  return {
    navigateTo,
    scrollDown,
    scrollUp
  }
}