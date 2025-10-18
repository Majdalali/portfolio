### Terminal Portfolio Website - AI Implementation Manual

## Step-by-Step Build Instructions with Approval Checkpoints

---

## HOW TO USE THIS MANUAL

**For the AI Assistant:**

1. Read the current step completely before taking any action
2. Execute ONLY the current step - do not proceed to the next step
3. After completing a step, mark it as ✅ COMPLETED and show the user what was done
4. Wait for explicit user approval with phrases like: "proceed", "next step", "continue", "looks good", or "approved"
5. If the user requests changes, revise the current step before moving forward
6. Keep track of which step you're on and reference it in your responses
7. If the user asks to skip a step, mark it as ⏭️ SKIPPED and move to the next


**For the User:**

- Review each completed step before approving
- Say "next" or "continue" to proceed to the next step
- Say "revise" or "change [specific thing]" to modify the current step
- Say "skip" to bypass a step
- Say "go back to step X" to revisit a previous step


---

## PROGRESS TRACKER

### Phase 1: Foundation & Setup

- Step 1: Project Initialization
- Step 2: Design System Setup (CSS Variables & Theme)
- Step 3: Typography Configuration
- Step 4: Core Layout Structure


### Phase 2: Core Components

- Step 5: Terminal Window Component
- Step 6: Pixel Button Component
- Step 7: Terminal Card Component
- Step 8: Command Prompt Component
- Step 9: Keyboard Hint Component


### Phase 3: Navigation & Layout

- Step 10: Header Navigation
- Step 11: Footer Component
- Step 12: Theme Switcher Component
- Step 13: Keyboard Navigation System


### Phase 4: Page Implementation

- Step 14: Home Page (Hero Section)
- Step 15: About Page
- Step 16: Projects Page
- Step 17: Skills Page
- Step 18: Contact Page


### Phase 5: Advanced Features

- Step 19: Project Detail Modal
- Step 20: Interactive Terminal Page
- Step 21: Animations & Effects
- Step 22: Accessibility Enhancements


### Phase 6: Polish & Deploy

- Step 23: Responsive Design Testing
- Step 24: Performance Optimization
- Step 25: SEO & Meta Tags
- Step 26: Final Testing & Deployment


---

## PHASE 1: FOUNDATION & SETUP

### STEP 1: Project Initialization

**Objective:** Set up a new Next.js project with TypeScript and Tailwind CSS v4

**Actions to Take:**

1. **Search the repository** to understand the current project structure

1. Use SearchRepo with query: "Give me an overview of the codebase"
2. Identify if this is a new project or existing one



2. **Check existing dependencies and configuration**

1. Read `package.json` to see what's already installed
2. Read `next.config.mjs` to understand current configuration
3. Read `tsconfig.json` to verify TypeScript setup



3. **Verify Tailwind CSS v4 is configured**

1. Check if `app/globals.css` exists and has Tailwind directives
2. Ensure `@import 'tailwindcss'` is present



4. **Document the current state**

1. List what's already set up
2. List what needs to be added
3. Note any conflicts or issues





**Expected Outcome:**

- Clear understanding of project structure
- Confirmation that Next.js, TypeScript, and Tailwind are ready
- List of any missing dependencies


**Deliverable to User:**

```plaintext
✅ STEP 1 COMPLETED

Current Project Status:
- Next.js Version: [version]
- TypeScript: [configured/not configured]
- Tailwind CSS v4: [configured/not configured]
- Existing pages: [list]
- Existing components: [list]

Ready to proceed: [YES/NO]
Issues found: [list any issues]

📋 Next Step: Step 2 - Design System Setup
⏸️ Waiting for your approval to continue...
```

---

### STEP 2: Design System Setup (CSS Variables & Theme)

**Objective:** Create the terminal-style design system with CSS variables for theming

**Actions to Take:**

1. **Read the current `app/globals.css` file**

1. Understand existing styles
2. Identify what needs to be preserved



2. **Create/Update `app/globals.css` with design tokens**

1. Add CSS variables for the Terminal Dark theme
2. Define color palette (background, surface, accent, text colors)
3. Add spacing scale variables
4. Add animation variables
5. Include scanline effect styles
6. Add theme variants (cyberpunk, neon) as data attributes



3. **Implement the following structure:**


```css
@import 'tailwindcss';

@theme inline {
  /* Typography */
  --font-sans: 'JetBrains Mono', 'Courier New', monospace;
  --font-mono: 'IBM Plex Mono', monospace;
  
  /* Colors - Terminal Dark Theme */
  --color-background: #0a0e14;
  --color-surface: #151a21;
  --color-border: #1f2937;
  --color-accent: #00ff41;
  --color-accent-secondary: #00d9ff;
  --color-text-primary: #e6e6e6;
  --color-text-secondary: #a0a0a0;
  --color-text-dim: #6b7280;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Effects */
  --glow-sm: 0 0 5px var(--color-accent);
  --glow-md: 0 0 10px var(--color-accent);
  --glow-lg: 0 0 20px var(--color-accent);
  
  /* Animations */
  --transition-fast: 200ms ease-in-out;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}

/* Base Styles */
* {
  image-rendering: pixelated;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  letter-spacing: 0.05em;
}

/* Scanline Effect */
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.scanlines {
  position: relative;
  overflow: hidden;
}

.scanlines::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 255, 65, 0.03) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: scanline 8s linear infinite;
}

/* Cursor Blink Animation */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

/* Theme Variants */
[data-theme="cyberpunk"] {
  --color-background: #0d0221;
  --color-surface: #1a0933;
  --color-accent: #ff00ff;
  --color-accent-secondary: #00ffff;
}

[data-theme="neon"] {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-accent: #ff6b35;
  --color-accent-secondary: #ff006e;
}

[data-theme="matrix"] {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-accent: #00ff00;
  --color-accent-secondary: #00cc00;
}
```

4. **Test the CSS variables**

1. Ensure no syntax errors
2. Verify variables are accessible





**Expected Outcome:**

- Complete design system with CSS variables
- Multiple theme variants ready to use
- Scanline and animation effects defined
- Clean, organized CSS structure


**Deliverable to User:**

```plaintext
✅ STEP 2 COMPLETED

Design System Created:
✓ CSS variables for Terminal Dark theme
✓ Color palette defined (8 colors)
✓ Spacing scale (5 levels)
✓ Animation variables
✓ Scanline effect styles
✓ Theme variants: Cyberpunk, Neon, Matrix
✓ Base typography styles

The design system is now ready for components to use.

📋 Next Step: Step 3 - Typography Configuration
⏸️ Waiting for your approval to continue...
```

---

### STEP 3: Typography Configuration

**Objective:** Set up monospace fonts optimized for terminal aesthetic

**Actions to Take:**

1. **Read the current `app/layout.tsx` file**

1. Check existing font imports
2. Understand current layout structure



2. **Update `app/layout.tsx` with terminal fonts**

1. Import JetBrains Mono from Google Fonts
2. Import IBM Plex Mono from Google Fonts
3. Configure font variables
4. Apply fonts to body element



3. **Implement the following structure:**


```typescript
import { JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm',
  display: 'swap',
})

export const metadata = {
  title: 'Developer Portfolio | Terminal Style',
  description: 'A retro terminal-style developer portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

4. **Update `app/globals.css` to reference the fonts**


```css
@theme inline {
  --font-sans: var(--font-jetbrains), 'Courier New', monospace;
  --font-mono: var(--font-ibm), 'Courier New', monospace;
}
```

5. **Test font loading**

1. Verify fonts load correctly
2. Check fallback fonts work





**Expected Outcome:**

- JetBrains Mono and IBM Plex Mono fonts loaded
- Font variables properly configured
- Typography ready for use in components


**Deliverable to User:**

```plaintext
✅ STEP 3 COMPLETED

Typography Configuration:
✓ JetBrains Mono imported (primary terminal font)
✓ IBM Plex Mono imported (secondary monospace)
✓ Font variables configured in layout.tsx
✓ CSS variables updated in globals.css
✓ Font display optimization (swap strategy)
✓ Fallback fonts defined

The typography system is ready. All text will now use monospace fonts.

📋 Next Step: Step 4 - Core Layout Structure
⏸️ Waiting for your approval to continue...
```

---

### STEP 4: Core Layout Structure

**Objective:** Create the base layout structure with providers for theme and keyboard navigation

**Actions to Take:**

1. **Create Theme Provider component**

1. Create `components/providers/theme-provider.tsx`
2. Implement theme context with localStorage persistence
3. Support theme switching between terminal, cyberpunk, neon, matrix



2. **Create Keyboard Navigation Provider**

1. Create `components/providers/keyboard-nav-provider.tsx`
2. Set up global keyboard event listeners
3. Implement navigation shortcuts (Ctrl+H, Ctrl+A, etc.)
4. Implement scroll shortcuts (J/K for vim-style)



3. **Update `app/layout.tsx` to include providers**

1. Wrap children with ThemeProvider
2. Wrap children with KeyboardNavProvider
3. Ensure proper nesting



4. **Create basic folder structure**


```plaintext
components/
├── providers/
│   ├── theme-provider.tsx
│   └── keyboard-nav-provider.tsx
├── ui/
│   └── (components will go here)
├── layout/
│   └── (layout components will go here)
└── sections/
    └── (page sections will go here)
```

**Implementation Details:**

**File: `components/providers/theme-provider.tsx`**

```typescript
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'terminal' | 'cyberpunk' | 'neon' | 'matrix'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('terminal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
```

**File: `components/providers/keyboard-nav-provider.tsx`**

```typescript
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function KeyboardNavProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Navigation shortcuts (Ctrl/Cmd + key)
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            e.preventDefault()
            router.push('/')
            break
          case 'a':
            e.preventDefault()
            router.push('/about')
            break
          case 'p':
            e.preventDefault()
            router.push('/projects')
            break
          case 's':
            e.preventDefault()
            router.push('/skills')
            break
          case 'c':
            e.preventDefault()
            router.push('/contact')
            break
        }
      }

      // Vim-style scrolling
      switch (e.key.toLowerCase()) {
        case 'j':
          window.scrollBy({ top: 100, behavior: 'smooth' })
          break
        case 'k':
          window.scrollBy({ top: -100, behavior: 'smooth' })
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [router])

  return <>{children}</>
}
```

**Updated `app/layout.tsx`:**

```typescript
import { JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { KeyboardNavProvider } from '@/components/providers/keyboard-nav-provider'

// ... existing font configuration ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <KeyboardNavProvider>
            {children}
          </KeyboardNavProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Expected Outcome:**

- Theme provider with localStorage persistence
- Keyboard navigation working globally
- Clean folder structure for components
- Providers properly integrated in layout


**Deliverable to User:**

```plaintext
✅ STEP 4 COMPLETED

Core Layout Structure:
✓ ThemeProvider created with 4 themes (terminal, cyberpunk, neon, matrix)
✓ Theme persistence with localStorage
✓ KeyboardNavProvider with shortcuts:
  - Ctrl+H → Home
  - Ctrl+A → About
  - Ctrl+P → Projects
  - Ctrl+S → Skills
  - Ctrl+C → Contact
  - J/K → Scroll down/up
✓ Folder structure created for components
✓ Providers integrated in root layout

The foundation is complete. Keyboard shortcuts are now active!

📋 Next Step: Step 5 - Terminal Window Component
⏸️ Waiting for your approval to continue...
```

---

## PHASE 2: CORE COMPONENTS

### STEP 5: Terminal Window Component

**Objective:** Create the signature terminal window component with title bar and scanlines

**Actions to Take:**

1. **Create `components/ui/terminal-window.tsx`**

1. Build component with props for title, controls, scanlines
2. Add Mac-style traffic light controls (red, yellow, green dots)
3. Implement scanline overlay option
4. Add pixelated border styling
5. Make it reusable for wrapping content



2. **Implementation:**


```typescript
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
    <div className={`relative border-2 border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}>
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
```

3. **Test the component**

1. Create a test usage in `app/page.tsx`
2. Verify title bar renders correctly
3. Check scanlines effect works
4. Test with and without controls





**Expected Outcome:**

- Reusable TerminalWindow component
- Mac-style window controls
- Optional scanline effect
- Proper border and styling


**Deliverable to User:**

```plaintext
✅ STEP 5 COMPLETED

Terminal Window Component:
✓ Component created at components/ui/terminal-window.tsx
✓ Features:
  - Mac-style traffic light controls (red, yellow, green)
  - Customizable title bar
  - Optional scanline overlay effect
  - Pixelated border styling
  - Flexible content wrapper
✓ Props: title, showControls, scanlines, className
✓ Tested and working

This is the signature component that gives the terminal aesthetic!

📋 Next Step: Step 6 - Pixel Button Component
⏸️ Waiting for your approval to continue...
```

---

### STEP 6: Pixel Button Component

**Objective:** Create a retro pixel-style button with glow effects and variants

**Actions to Take:**

1. **Create `components/ui/pixel-button.tsx`**

1. Build button with multiple variants (primary, secondary, ghost)
2. Add size options (sm, md, lg)
3. Implement hover glow effect
4. Add keyboard focus indicators
5. Support icons and loading states



2. **Implementation:**


```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'

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
      primary: 'bg-[var(--color-accent)] text-[var(--color-background)] hover:shadow-[var(--glow-md)] hover:scale-105 active:scale-95',
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
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} flex items-center gap-2 justify-center`}
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
```

3. **Test the component**

1. Create test buttons with different variants
2. Test hover effects
3. Verify focus indicators
4. Check loading state





**Expected Outcome:**

- Versatile button component with 3 variants
- Smooth hover and focus effects
- Glow effects on interaction
- Loading state support


**Deliverable to User:**

```plaintext
✅ STEP 6 COMPLETED

Pixel Button Component:
✓ Component created at components/ui/pixel-button.tsx
✓ Variants: primary, secondary, ghost
✓ Sizes: sm, md, lg
✓ Features:
  - Hover glow effects
  - Keyboard focus indicators (accent ring)
  - Icon support
  - Loading state with spinner
  - Scale animations on hover/active
✓ Fully accessible with proper focus management

Buttons are ready to use throughout the site!

📋 Next Step: Step 7 - Terminal Card Component
⏸️ Waiting for your approval to continue...
```

---

### STEP 7: Terminal Card Component

**Objective:** Create a card component for displaying projects and content with terminal styling

**Actions to Take:**

1. **Create `components/ui/terminal-card.tsx`**

1. Build card with terminal-style borders
2. Add optional glow on hover
3. Support tags/badges for technologies
4. Include header and content sections
5. Make it clickable/linkable



2. **Implementation:**


```typescript
import Link from 'next/link'

interface TerminalCardProps {
  title: string
  description?: string
  tags?: string[]
  href?: string
  glowOnHover?: boolean
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export function TerminalCard({
  title,
  description,
  tags = [],
  href,
  glowOnHover = true,
  children,
  className = '',
  onClick,
}: TerminalCardProps) {
  const cardContent = (
    <div
      className={`
        group relative border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6
        transition-all duration-300
        ${glowOnHover ? 'hover:border-[var(--color-accent)] hover:shadow-[var(--glow-md)]' : ''}
        ${href || onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-mono text-xl font-bold text-[var(--color-accent)] group-hover:text-[var(--color-accent-secondary)]">
          {title}
        </h3>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-4 font-mono text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}

      {/* Custom Content */}
      {children}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-accent)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover indicator for links */}
      {href && (
        <div className="mt-4 flex items-center gap-2 font-mono text-sm text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
          <span>→</span>
          <span>View details</span>
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href}>{cardContent}</Link>
  }

  return cardContent
}
```

3. **Test the component**

1. Create sample cards with different content
2. Test hover effects
3. Verify tags display correctly
4. Test as link and as regular card





**Expected Outcome:**

- Flexible card component for content display
- Hover glow effects
- Tag system for technologies
- Link support for navigation


**Deliverable to User:**

```plaintext
✅ STEP 7 COMPLETED

Terminal Card Component:
✓ Component created at components/ui/terminal-card.tsx
✓ Features:
  - Terminal-style borders
  - Hover glow effect (optional)
  - Technology tags/badges
  - Link support (Next.js Link)
  - Click handler support
  - Flexible content area
  - Smooth transitions
✓ Perfect for project showcases and content blocks

Cards are ready for the projects page!

📋 Next Step: Step 8 - Command Prompt Component
⏸️ Waiting for your approval to continue...
```

---

### STEP 8: Command Prompt Component

**Objective:** Create a terminal command prompt display with typing animation

**Actions to Take:**

1. **Create `components/ui/command-prompt.tsx`**

1. Build prompt with user@host format
2. Add directory display
3. Implement typing animation for commands
4. Add blinking cursor



2. **Implementation:**


```typescript
'use client'

import { useEffect, useState } from 'react'

interface CommandPromptProps {
  user?: string
  host?: string
  directory?: string
  command?: string
  showCursor?: boolean
  typeAnimation?: boolean
  className?: string
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
  const [displayedCommand, setDisplayedCommand] = useState('')
  const [isTyping, setIsTyping] = useState(typeAnimation)

  useEffect(() => {
    if (!typeAnimation || !command) {
      setDisplayedCommand(command)
      setIsTyping(false)
      return
    }

    setIsTyping(true)
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= command.length) {
        setDisplayedCommand(command.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [command, typeAnimation])

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
  )
}
```

3. **Test the component**

1. Test with static command
2. Test with typing animation
3. Verify cursor blinks correctly
4. Test different user/host/directory values





**Expected Outcome:**

- Authentic terminal prompt display
- Optional typing animation
- Blinking cursor effect
- Customizable prompt values


**Deliverable to User:**

```plaintext
✅ STEP 8 COMPLETED

Command Prompt Component:
✓ Component created at components/ui/command-prompt.tsx
✓ Features:
  - Authentic terminal prompt format (user@host:directory$)
  - Typing animation (50ms per character)
  - Blinking cursor effect
  - Customizable user, host, directory
  - Color-coded prompt elements
✓ Perfect for page headers and terminal simulations

The terminal aesthetic is coming together!

📋 Next Step: Step 9 - Keyboard Hint Component
⏸️ Waiting for your approval to continue...
```

---

### STEP 9: Keyboard Hint Component

**Objective:** Create a component to display keyboard shortcuts and hints to users

**Actions to Take:**

1. **Create `components/ui/keyboard-hint.tsx`**

1. Build component to display keyboard shortcuts
2. Show key combinations visually
3. Add animation for first-time visitors
4. Make it dismissible



2. **Implementation:**


```typescript
'use client'

import { useState, useEffect } from 'react'

interface KeyboardHintProps {
  keys: string[]
  action: string
  className?: string
}

export function KeyboardHint({ keys, action, className = '' }: KeyboardHintProps) {
  return (
    <div className={`flex items-center gap-2 font-mono text-sm ${className}`}>
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
      className={`fixed bottom-4 right-4 z-50 border-2 border-[var(--color-accent)] bg-[var(--color-background)] p-4 shadow-[var(--glow-lg)] transition-opacity duration-300 ${
        isDismissed ? 'opacity-0' : 'opacity-100'
      } ${className}`}
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
```

3. **Test the component**

1. Test individual KeyboardHint display
2. Test KeyboardHintsPanel with multiple hints
3. Verify localStorage persistence
4. Test dismiss functionality





**Expected Outcome:**

- Visual keyboard shortcut display
- Panel for showing multiple hints
- First-time visitor detection
- Dismissible with localStorage


**Deliverable to User:**

```plaintext
✅ STEP 9 COMPLETED

Keyboard Hint Component:
✓ Components created at components/ui/keyboard-hint.tsx
✓ Two components:
  1. KeyboardHint - Single shortcut display
  2. KeyboardHintsPanel - Multiple hints with dismiss
✓ Features:
  - Visual key representation (kbd elements)
  - Glow effects on keys
  - First-time visitor detection
  - localStorage persistence
  - Dismissible panel
  - Smooth animations
✓ Ready to guide users on keyboard navigation

All core UI components are complete!

📋 Next Step: Step 10 - Header Navigation
⏸️ Waiting for your approval to continue...
```

---

## PHASE 3: NAVIGATION & LAYOUT

### STEP 10: Header Navigation

**Objective:** Create the main navigation header with terminal styling and keyboard shortcuts

**Actions to Take:**

1. **Create `components/layout/header.tsx`**

1. Build fixed header with navigation links
2. Display keyboard shortcuts for each link
3. Add active state indicators
4. Make it responsive with mobile menu
5. Include theme switcher button



2. **Implementation:**


```typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/', shortcut: 'H' },
  { name: 'About', href: '/about', shortcut: 'A' },
  { name: 'Projects', href: '/projects', shortcut: 'P' },
  { name: 'Skills', href: '/skills', shortcut: 'S' },
  { name: 'Contact', href: '/contact', shortcut: 'C' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[var(--color-border)] bg-[var(--color-background)] backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="font-mono text-xl font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)]">
          <span className="text-[var(--color-text-secondary)]">~/</span>portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-mono text-sm transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
                }`}
              >
                <span className="text-[var(--color-text-dim)]">[</span>
                <span className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                  {item.shortcut}
                </span>
                <span className="text-[var(--color-text-dim)]">]</span>
                <span className="ml-1">{item.name.slice(1)}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--color-accent)] shadow-[var(--glow-sm)]" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-mono text-sm ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  <span className="text-[var(--color-text-dim)]">[{item.shortcut}]</span>{' '}
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
```

3. **Add Header to layout**

1. Update `app/layout.tsx` to include Header component
2. Ensure it appears on all pages



4. **Test the header**

1. Verify navigation works
2. Test active states
3. Check mobile menu functionality
4. Verify keyboard shortcuts are visible





**Expected Outcome:**

- Fixed header with terminal styling
- Keyboard shortcuts displayed
- Active page indicators
- Responsive mobile menu
- Smooth transitions


**Deliverable to User:**

```plaintext
✅ STEP 10 COMPLETED

Header Navigation:
✓ Component created at components/layout/header.tsx
✓ Features:
  - Fixed sticky header
  - 5 navigation links (Home, About, Projects, Skills, Contact)
  - Keyboard shortcuts displayed [H] [A] [P] [S] [C]
  - Active page indicator (underline + glow)
  - Responsive mobile menu (hamburger)
  - Terminal-style logo
✓ Integrated into root layout
✓ Works with keyboard navigation provider

Navigation is complete and functional!

📋 Next Step: Step 11 - Footer Component
⏸️ Waiting for your approval to continue...
```

---
### STEP 11: Footer Component

**Objective:** Create a terminal-style footer with status bar aesthetic

**Actions to Take:**

- Create footer component with system status display
- Add social media links with pixel art icons
- Include copyright and last updated information
- Display "system status" like: Status: Online | Location: [City] | Available for work
- Add quick links to main sections
- Make it responsive for mobile devices
- Style with terminal green accent and borders


---

### STEP 12: Theme Switcher Component

**Objective:** Build an interactive theme selector for switching between visual themes

**Actions to Take:**

- Create theme switcher component with dropdown or modal interface
- Display all available themes: Terminal Dark, Cyberpunk, Neon, Matrix
- Show preview colors for each theme option
- Integrate with the ThemeProvider context
- Add smooth CSS transitions when switching themes
- Include keyboard shortcut (Ctrl+T) to open switcher
- Position in top-right corner of header or as floating button
- Add visual feedback when theme changes


---

### STEP 13: Keyboard Navigation System Enhancement

**Objective:** Add visual feedback and help modal for keyboard shortcuts

**Actions to Take:**

- Create a keyboard shortcuts help modal (triggered by pressing "?")
- List all available shortcuts in organized categories
- Add visual indicators when keyboard shortcuts are used
- Implement focus management for better keyboard navigation
- Add skip-to-content link for accessibility
- Create toast notifications when shortcuts are activated
- Ensure Tab key navigation works through all interactive elements
- Test that Escape key properly closes modals and overlays


---

## PHASE 4: PAGE IMPLEMENTATION

### STEP 14: Home Page (Hero Section)

**Objective:** Build the landing page with animated hero section

**Actions to Take:**

- Search repo to understand current home page structure
- Create hero section with ASCII art logo or name
- Implement typing animation for introduction text
- Add "Press any key to continue" prompt with animation
- Create quick navigation section with terminal commands (./about.sh, ./projects.sh, etc.)
- Add featured projects preview (2-3 cards)
- Include scroll indicator with pixelated arrow
- Add status bar footer showing availability
- Implement smooth scroll behavior
- Make fully responsive for mobile devices


---

### STEP 15: About Page

**Objective:** Create an engaging about page with personal information and timeline

**Actions to Take:**

- Create about page at app/about/page.tsx
- Add terminal header with command: "cat about.txt"
- Implement animated text reveal effect
- Create profile section with pixelated avatar/photo
- Write bio in terminal output format
- Add ASCII art decorations around content
- Build timeline component for career/education history
- Make timeline entries expandable for more details
- Create interests/hobbies section with pixel art icons
- Add hover effects with descriptions
- Ensure responsive layout for mobile


---

### STEP 16: Projects Page

**Objective:** Build a filterable project showcase with grid layout

**Actions to Take:**

- Create projects page at app/projects/page.tsx
- Add filter bar with command: "ls --filter=[technology]"
- Implement tag-based filtering system
- Add search functionality for projects
- Create responsive project grid using Terminal Cards
- Display for each project: name, description, tech stack, links
- Add hover effects with glow and expanded preview
- Implement "View Demo" and "View Code" buttons
- Create loading states for filtering
- Make grid responsive (3 columns desktop, 2 tablet, 1 mobile)
- Add empty state when no projects match filters


---

### STEP 17: Skills Page

**Objective:** Create an interactive skills showcase with visualizations

**Actions to Take:**

- Create skills page at app/skills/page.tsx
- Add command display: "./skills.sh --list-all"
- Organize skills into categories (Frontend, Backend, Tools, Soft Skills)
- Create collapsible sections for each category
- Implement terminal-style tree structure for skill hierarchy
- Build skill bars with pixelated progress animations
- Show proficiency levels (Beginner/Intermediate/Advanced/Expert)
- Add years of experience for each skill
- Create certifications section with badge-style display
- Add ASCII art certificates or achievements
- Make interactive with hover effects
- Ensure mobile-friendly layout


---

### STEP 18: Contact Page

**Objective:** Build a contact page with terminal-style form

**Actions to Take:**

- Create contact page at app/contact/page.tsx
- Add terminal form with command: "send-message.sh"
- Style input fields as terminal input with prompts
- Create labels as terminal prompts: "Name:", "Email:", "Message:"
- Implement form validation with error messages
- Add contact methods section (Email, LinkedIn, GitHub)
- Display contact methods as clickable terminal commands
- Add copy-to-clipboard functionality for email
- Create social links section with pixel art icons
- Implement success/error messages in terminal style
- Add animated confirmation on successful submission
- Make form fully accessible with proper labels
- Ensure responsive layout for mobile


---

## PHASE 5: ADVANCED FEATURES

### STEP 19: Project Detail Modal

**Objective:** Create a full-screen modal for detailed project information

**Actions to Take:**

- Create modal component for project details
- Style as full-screen terminal window
- Add close button and Escape key handler
- Display project screenshots/GIFs in gallery format
- Show detailed description and technical challenges
- List all technologies used with icons
- Add links section (Demo, Repository, Case Study)
- Include "Problem, Solution, Impact" sections
- Add navigation between projects (Previous/Next)
- Implement smooth open/close animations
- Ensure keyboard navigation works within modal
- Make scrollable for long content
- Test on mobile devices


---

### STEP 20: Interactive Terminal Page

**Objective:** Build a functional terminal emulator as an easter egg

**Actions to Take:**

- Create terminal page at app/terminal/page.tsx
- Implement command input with blinking cursor
- Create command parser and executor
- Add available commands: help, about, projects, skills, contact, clear, theme, ls, cat, whoami, neofetch
- Implement command history (up/down arrow navigation)
- Add tab auto-completion for commands
- Create command validation with error messages
- Format output with colors and styling
- Add fun easter eggs (matrix animation, snake game)
- Implement persistent session with localStorage
- Make command history scrollable
- Add welcome message on page load
- Ensure mobile keyboard compatibility


---

### STEP 21: Animations & Effects

**Objective:** Add polish with animations and visual effects throughout the site

**Actions to Take:**

- Implement typing animations for text reveals
- Add fade-in animations for page content on load
- Create glow pulse animations for accent elements
- Add scanline animation overlay (subtle movement)
- Implement smooth page transitions
- Add hover scale effects on interactive elements
- Create loading animations for async operations
- Add cursor trail effect (optional)
- Implement parallax scrolling for hero section
- Add stagger animations for lists and grids
- Ensure animations respect prefers-reduced-motion
- Test performance of all animations
- Optimize for 60fps on all devices


---

### STEP 22: Accessibility Enhancements

**Objective:** Ensure the site meets WCAG 2.1 AA standards

**Actions to Take:**

- Audit all color contrasts (minimum 4.5:1 for text)
- Add proper ARIA labels to all interactive elements
- Implement skip-to-content link
- Ensure all images have descriptive alt text
- Add aria-live regions for dynamic content
- Test keyboard navigation through entire site
- Verify focus indicators are visible on all elements
- Add screen reader announcements for page changes
- Create text alternatives for ASCII art
- Test with screen reader (NVDA or VoiceOver)
- Ensure form errors are announced
- Add loading announcements for async content
- Test with keyboard only (no mouse)
- Verify heading hierarchy is logical


---

## PHASE 6: POLISH & DEPLOY

### STEP 23: Responsive Design Testing

**Objective:** Ensure perfect display across all device sizes

**Actions to Take:**

- Test on mobile devices (320px, 375px, 414px widths)
- Test on tablets (768px, 1024px widths)
- Test on desktop (1280px, 1440px, 1920px widths)
- Fix any layout breaks or overflow issues
- Adjust font sizes for readability on small screens
- Ensure touch targets are minimum 44x44px
- Test mobile menu functionality
- Verify images scale properly
- Check that tables/grids are responsive
- Test landscape and portrait orientations
- Ensure no horizontal scrolling on any device
- Verify all interactive elements work on touch
- Test with browser dev tools device emulation
- Fix any spacing or alignment issues


---

### STEP 24: Performance Optimization

**Objective:** Optimize site for fast loading and smooth performance

**Actions to Take:**

- Run Lighthouse audit and aim for 90+ score
- Optimize all images (convert to WebP, proper sizing)
- Implement lazy loading for images below fold
- Code split large components
- Minimize JavaScript bundle size
- Remove unused CSS and dependencies
- Add proper caching headers
- Optimize font loading (font-display: swap)
- Reduce layout shifts (add width/height to images)
- Minimize render-blocking resources
- Test Core Web Vitals (LCP, FID, CLS)
- Optimize animations for performance
- Test on slow 3G connection
- Ensure First Contentful Paint under 1.5s


---

### STEP 25: SEO & Meta Tags

**Objective:** Optimize for search engines and social sharing

**Actions to Take:**

- Add comprehensive meta tags to all pages
- Create unique title and description for each page
- Add Open Graph tags for social media sharing
- Create Twitter Card meta tags
- Generate and add favicon and app icons
- Create sitemap.xml file
- Add robots.txt file
- Implement structured data (JSON-LD)
- Add canonical URLs
- Create 404 page with terminal styling
- Optimize heading hierarchy (H1, H2, H3)
- Add internal linking between pages
- Create descriptive URLs for all routes
- Test social media preview cards
- Submit sitemap to Google Search Console


---

### STEP 26: Final Testing & Deployment

**Objective:** Complete final checks and deploy to production

**Actions to Take:**

- Run complete functionality test on all pages
- Test all forms and interactive elements
- Verify all links work (internal and external)
- Test theme switching on all pages
- Verify keyboard shortcuts work everywhere
- Check browser compatibility (Chrome, Firefox, Safari, Edge)
- Test with JavaScript disabled (graceful degradation)
- Review all content for typos and errors
- Test contact form submission
- Verify analytics tracking (if implemented)
- Create deployment checklist
- Deploy to Vercel
- Test production build
- Verify environment variables are set
- Configure custom domain (if applicable)
- Set up SSL certificate
- Test live site on multiple devices
- Monitor for errors in production
- Create backup of final code


---

## COMPLETION CHECKLIST

After all 26 steps are complete, verify:

- All pages load without errors
- Navigation works smoothly
- Keyboard shortcuts function correctly
- Theme switching works on all pages
- Forms validate and submit properly
- Site is fully responsive
- Accessibility standards met
- Performance scores are high
- SEO is optimized
- Site is deployed and live


