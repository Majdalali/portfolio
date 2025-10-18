// Navigation
export const NAV_ITEMS = [
  { name: 'Home', href: '/', shortcut: 'H' },
  { name: 'About', href: '/about', shortcut: 'A' },
  { name: 'Projects', href: '/projects', shortcut: 'P' },
  { name: 'Skills', href: '/skills', shortcut: 'S' },
  { name: 'Contact', href: '/contact', shortcut: 'C' },
]

// Themes
export const THEMES = [
  { name: 'terminal', label: 'Terminal' },
  { name: 'cyberpunk', label: 'Cyberpunk' },
  { name: 'neon', label: 'Neon Sunset' },
  { name: 'matrix', label: 'Matrix' },
] as const

// Keyboard shortcuts
export const KEYBOARD_SHORTCUTS = [
  { keys: ['H'], action: 'Go to Home' },
  { keys: ['A'], action: 'Go to About' },
  { keys: ['P'], action: 'Go to Projects' },
  { keys: ['S'], action: 'Go to Skills' },
  { keys: ['C'], action: 'Go to Contact' },
  { keys: ['J'], action: 'Scroll down' },
  { keys: ['K'], action: 'Scroll up' },
  { keys: ['T'], action: 'Toggle theme' },
  { keys: ['?'], action: 'Show keyboard shortcuts' },
  { keys: ['Esc'], action: 'Close modal/overlay' },
]

// Responsive breakpoints (for reference)
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '1024px',
  desktop: '1440px',
}