### Portfolio Website Development Specification
## Pixelated Terminal-Style Developer Portfolio

---

## 1. PROJECT OVERVIEW

### 1.1 Concept
A Next.js-based developer portfolio website that emulates a retro Linux terminal/CLI interface with pixelated art aesthetics, featuring keyboard-driven navigation and modern web development practices.

### 1.2 Core Objectives
- Showcase developer projects and skills in an immersive, interactive environment
- Provide intuitive keyboard and mouse navigation
- Maintain accessibility standards while delivering unique visual experience
- Ensure responsive design across all device sizes
- Implement theme switching capabilities for visual variety

---

## 2. DESIGN SYSTEM

### 2.1 Color Palette

**Default Theme: Terminal Dark**
```
Primary Colors:
- Background: #0a0e14 (Deep terminal black)
- Surface: #151a21 (Elevated surfaces)
- Border: #1f2937 (Subtle borders)

Accent Colors:
- Primary Accent: #00ff41 (Classic terminal green)
- Secondary Accent: #00d9ff (Cyan highlights)
- Warning: #ffaa00 (Amber alerts)
- Error: #ff3366 (Red errors)

Text Colors:
- Primary Text: #e6e6e6 (High contrast white)
- Secondary Text: #a0a0a0 (Muted gray)
- Accent Text: #00ff41 (Green highlights)
- Dim Text: #6b7280 (Subtle text)
```

**Future Theme Options:**
- **Cyberpunk**: Magenta (#ff00ff), electric blue (#00ffff), hot pink (#ff1493)
- **Neon Sunset**: Orange (#ff6b35), pink (#ff006e), purple (#8338ec)
- **Matrix**: Various shades of green with black background
- **Retro Amber**: Amber (#ffb000) on dark brown (#1a0f00)

### 2.2 Typography

**Font Stack:**
```
Primary (Terminal): 'JetBrains Mono', 'Fira Code', 'Courier New', monospace
Headings: 'Press Start 2P', 'VT323', monospace (pixelated)
Body: 'IBM Plex Mono', 'Roboto Mono', monospace
```

**Type Scale:**
- Display: 48px / 3rem (Hero headings)
- H1: 32px / 2rem
- H2: 24px / 1.5rem
- H3: 20px / 1.25rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem
- Caption: 12px / 0.75rem

**Typography Rules:**
- Line height: 1.6 for body text (use `leading-relaxed`)
- Letter spacing: 0.05em for terminal aesthetic
- Use `text-balance` for headings
- Implement text shadows for glowing effects: `text-shadow: 0 0 10px currentColor`

### 2.3 Spacing System
Follow 8px base unit system:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### 2.4 Visual Effects

**Pixelated Elements:**
- Use CSS `image-rendering: pixelated` for images
- Implement 8-bit style icons using SVG or pixel art
- Border radius: 0px (sharp corners) or 2px (subtle)

**Terminal Effects:**
- Scanline overlay: Subtle horizontal lines
- CRT curvature: Optional subtle border-radius on viewport
- Cursor blink animation: 1s interval
- Text typing animations for dynamic content
- Glow effects on interactive elements

**Animations:**
```
Cursor blink: 1s step-end infinite
Typing effect: 0.05s per character
Hover transitions: 200ms ease-in-out
Page transitions: 300ms ease
Scanline animation: 8s linear infinite
```

---

## 3. COMPONENT ARCHITECTURE

### 3.1 Core Components

#### Terminal Window Component
```typescript
<TerminalWindow 
  title="portfolio.sh"
  showControls={true}
  scanlines={true}
>
  {children}
</TerminalWindow>
```
- Simulates terminal window with title bar
- Mac-style traffic light controls (red, yellow, green dots)
- Optional scanline overlay
- Pixelated border styling

#### Command Prompt Component
```typescript
<CommandPrompt 
  user="developer"
  directory="~/portfolio"
  command="ls -la"
/>
```
- Displays terminal-style prompt
- Shows current "directory" context
- Animated typing effect for commands

#### ASCII Art Component
```typescript
<ASCIIArt 
  art="logo"
  color="accent"
  animate={true}
/>
```
- Renders pre-formatted ASCII art
- Supports color customization
- Optional reveal animation

#### Pixel Button Component
```typescript
<PixelButton
  variant="primary" | "secondary" | "ghost"
  size="sm" | "md" | "lg"
  icon={<Icon />}
>
  Click Me
</PixelButton>
```
- Pixelated border styling
- Hover glow effects
- Keyboard focus indicators
- Sound effects (optional)

#### Terminal Card Component
```typescript
<TerminalCard
  title="project-name"
  tags={["React", "TypeScript"]}
  glowOnHover={true}
>
  {content}
</TerminalCard>
```
- Container for projects/content
- Pixelated borders
- Glow effect on hover
- Tag system for technologies

#### Keyboard Navigation Indicator
```typescript
<KeyboardHint
  keys={["↑", "↓", "Enter"]}
  action="Navigate"
/>
```
- Shows available keyboard shortcuts
- Animated hints for first-time visitors
- Dismissible after interaction

#### Theme Switcher Component
```typescript
<ThemeSwitcher
  themes={["terminal", "cyberpunk", "neon"]}
  position="top-right"
/>
```
- Dropdown or modal for theme selection
- Smooth color transitions
- Persists selection to localStorage

#### Skill Bar Component
```typescript
<SkillBar
  skill="JavaScript"
  level={90}
  pixelated={true}
/>
```
- Animated progress bars
- Pixelated fill animation
- Terminal-style labels

---

## 4. PAGE STRUCTURE

### 4.1 Navigation Architecture

**Multi-Page Structure:**
```
/                 → Home/Landing
/about           → About Me
/projects        → Portfolio Projects
/skills          → Technical Skills
/experience      → Work Experience
/contact         → Contact Form
/terminal        → Interactive Terminal (Easter egg)
```

**Navigation Component:**
- Fixed header with terminal-style menu
- Keyboard shortcuts displayed: `[H]ome [A]bout [P]rojects [S]kills [C]ontact`
- Active state with accent color underline
- Mobile: Hamburger menu with slide-in drawer

### 4.2 Page Layouts

#### Home Page (`/`)
```
Structure:
1. Hero Section
   - ASCII art logo/name
   - Animated typing introduction
   - "Press any key to continue" prompt
   - Scroll indicator (pixelated arrow)

2. Quick Navigation
   - Terminal-style command list
   - Clickable commands: ./about.sh, ./projects.sh, etc.
   - Keyboard shortcuts visible

3. Featured Projects Preview
   - 2-3 highlighted projects in terminal cards
   - "View all projects →" link

4. Status Bar Footer
   - System info style: "Status: Online | Location: [City] | Available for work"
```

#### About Page (`/about`)
```
Structure:
1. Terminal Header
   - Command: cat about.txt
   - Animated text reveal

2. Profile Section
   - Pixelated avatar/photo
   - Bio in terminal output format
   - ASCII art decorations

3. Timeline Component
   - Career/education timeline
   - Terminal-style list format
   - Expandable entries

4. Interests/Hobbies
   - Icon grid with pixel art
   - Hover effects with descriptions
```

#### Projects Page (`/projects`)
```
Structure:
1. Filter Bar
   - Command: ls --filter=[technology]
   - Tag-based filtering
   - Search functionality

2. Project Grid
   - Terminal cards in responsive grid
   - Each card shows:
     * Project name (as filename)
     * Description (as file content preview)
     * Tech stack tags
     * Links: [Demo] [Code] [Details]
   - Hover: Glow effect + expanded preview

3. Project Detail Modal
   - Full-screen terminal window
   - Screenshots/GIFs
   - Detailed description
   - Technical challenges
   - Links and repository info
```

#### Skills Page (`/skills`)
```
Structure:
1. Command Display
   - ./skills.sh --list-all

2. Skill Categories
   - Frontend, Backend, Tools, etc.
   - Collapsible sections
   - Terminal-style tree structure

3. Skill Visualization
   - Pixelated progress bars
   - Proficiency levels (Beginner/Intermediate/Advanced/Expert)
   - Years of experience

4. Certifications
   - Badge-style display
   - ASCII art certificates
```

#### Contact Page (`/contact`)
```
Structure:
1. Terminal Form
   - Command: send-message.sh
   - Input fields styled as terminal input
   - Labels as prompts: "Name:", "Email:", "Message:"

2. Contact Methods
   - Email, LinkedIn, GitHub, etc.
   - Displayed as clickable commands
   - Copy-to-clipboard functionality

3. Social Links
   - Pixel art icons
   - Hover effects with glow

4. Success/Error Messages
   - Terminal-style output
   - Animated confirmation
```

---

## 5. TECHNICAL FEATURES

### 5.1 Keyboard Navigation System

**Implementation Strategy:**
```typescript
// Global keyboard handler
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    // Navigation shortcuts
    if (e.key === 'h' && e.ctrlKey) navigateTo('/');
    if (e.key === 'a' && e.ctrlKey) navigateTo('/about');
    if (e.key === 'p' && e.ctrlKey) navigateTo('/projects');
    
    // Scroll navigation
    if (e.key === 'j') scrollDown();
    if (e.key === 'k') scrollUp();
    
    // Modal/overlay controls
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter') selectFocused();
    
    // Theme switcher
    if (e.key === 't' && e.ctrlKey) toggleTheme();
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

**Keyboard Features:**
- `Ctrl + H/A/P/S/C`: Navigate to pages
- `J/K`: Scroll down/up (Vim-style)
- `Tab`: Focus next interactive element
- `Enter`: Activate focused element
- `Esc`: Close modals/overlays
- `Ctrl + T`: Toggle theme
- `?`: Show keyboard shortcuts help modal

**Visual Feedback:**
- Focus rings with accent color glow
- Keyboard hint tooltips
- Active element highlighting
- Smooth scroll animations

### 5.2 Interactive Terminal Feature

**Easter Egg Terminal (`/terminal`):**
```typescript
// Interactive command-line interface
Commands:
- help: List available commands
- about: Display about information
- projects: List projects
- skills: Show skills tree
- contact: Display contact info
- clear: Clear terminal
- theme [name]: Change theme
- matrix: Run Matrix animation
- snake: Play snake game
- whoami: Display user info
- ls: List directory contents
- cat [file]: Display file contents
- neofetch: System info display
```

**Implementation:**
- Command history (up/down arrows)
- Auto-completion (Tab key)
- Command validation and error messages
- Output formatting with colors
- Persistent session (localStorage)

### 5.3 Theme System

**Implementation with CSS Variables:**
```css
:root {
  --color-bg: #0a0e14;
  --color-surface: #151a21;
  --color-accent: #00ff41;
  --color-text: #e6e6e6;
  /* ... more variables */
}

[data-theme="cyberpunk"] {
  --color-bg: #0d0221;
  --color-accent: #ff00ff;
  /* ... theme overrides */
}
```

**Theme Switching:**
- Smooth CSS transitions (300ms)
- Persist to localStorage
- Prefers-color-scheme detection
- Theme preview before applying

### 5.4 Performance Optimizations

**Next.js Best Practices:**
- Static generation for all pages
- Image optimization with next/image
- Font optimization with next/font
- Code splitting by route
- Lazy loading for heavy components
- Prefetching for navigation links

**Asset Optimization:**
- SVG for pixel art icons
- WebP format for images
- Minimal JavaScript bundle
- CSS-in-JS or Tailwind for styling
- Remove unused CSS

### 5.5 Animations & Interactions

**Key Animations:**
```typescript
// Typing effect
const typingAnimation = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05 }
  })
};

// Glow effect
const glowAnimation = {
  boxShadow: [
    '0 0 5px var(--color-accent)',
    '0 0 20px var(--color-accent)',
    '0 0 5px var(--color-accent)'
  ],
  transition: { duration: 2, repeat: Infinity }
};

// Scanline effect
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
```

**Interaction States:**
- Hover: Glow + scale(1.02)
- Active: scale(0.98)
- Focus: Accent color outline
- Disabled: Reduced opacity + grayscale

---

## 6. ACCESSIBILITY CONSIDERATIONS

### 6.1 WCAG 2.1 AA Compliance

**Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: 3:1 ratio
- Test all theme combinations

**Keyboard Accessibility:**
- All interactive elements keyboard accessible
- Visible focus indicators (2px accent outline)
- Logical tab order
- Skip to main content link
- No keyboard traps

**Screen Reader Support:**
```typescript
// Semantic HTML
<nav aria-label="Main navigation">
<main id="main-content">
<section aria-labelledby="projects-heading">

// ARIA labels
<button aria-label="Toggle theme">
<img alt="Project screenshot showing dashboard interface">

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

**Visual Accessibility:**
- Respect prefers-reduced-motion
- Provide text alternatives for ASCII art
- Ensure sufficient text size (minimum 16px)
- Avoid color as sole indicator
- Provide high contrast mode option

### 6.2 Responsive Design

**Breakpoints:**
```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px - 1440px
Large: 1441px+
```

**Mobile Adaptations:**
- Simplified ASCII art
- Touch-friendly button sizes (min 44x44px)
- Collapsible navigation
- Reduced animations
- Optimized font sizes
- Single column layouts

**Touch Interactions:**
- Swipe gestures for navigation
- Pull-to-refresh (optional)
- Touch feedback animations
- Larger tap targets

---

## 7. IMPLEMENTATION STRATEGY

### 7.1 Technology Stack

**Core:**
- Next.js 14+ (App Router)
- TypeScript
- React 18+

**Styling:**
- Tailwind CSS v4
- CSS Modules (for complex animations)
- Framer Motion (animations)

**State Management:**
- React Context (theme, keyboard nav)
- SWR or React Query (if fetching data)
- localStorage (preferences)

**Additional Libraries:**
- react-type-animation (typing effects)
- react-intersection-observer (scroll animations)
- react-hot-toast (notifications)
- next-themes (theme management)

### 7.2 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx (root layout with theme provider)
│   ├── page.tsx (home)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── contact/page.tsx
│   ├── terminal/page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (reusable UI components)
│   │   ├── terminal-window.tsx
│   │   ├── pixel-button.tsx
│   │   ├── terminal-card.tsx
│   │   ├── command-prompt.tsx
│   │   ├── ascii-art.tsx
│   │   └── keyboard-hint.tsx
│   ├── layout/ (layout components)
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── sections/ (page sections)
│   │   ├── hero.tsx
│   │   ├── project-grid.tsx
│   │   ├── skill-bars.tsx
│   │   └── contact-form.tsx
│   └── providers/
│       ├── theme-provider.tsx
│       └── keyboard-nav-provider.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts (colors, breakpoints)
│   └── hooks/
│       ├── use-keyboard-nav.ts
│       ├── use-theme.ts
│       └── use-terminal.ts
├── public/
│   ├── fonts/
│   ├── images/
│   └── ascii-art/
└── styles/
    └── animations.css
```

### 7.3 Development Phases

**Phase 1: Foundation (Week 1)**
- Set up Next.js project with TypeScript
- Configure Tailwind CSS with custom theme
- Create design system (colors, typography, spacing)
- Build core UI components (buttons, cards, terminal window)
- Implement theme provider and switcher

**Phase 2: Core Pages (Week 2)**
- Build home page with hero section
- Create about page with timeline
- Develop projects page with filtering
- Implement skills page with visualizations
- Add contact page with form

**Phase 3: Interactivity (Week 3)**
- Implement keyboard navigation system
- Add animations and transitions
- Create interactive terminal feature
- Build project detail modals
- Add loading states and error handling

**Phase 4: Polish & Optimization (Week 4)**
- Accessibility audit and fixes
- Performance optimization
- Cross-browser testing
- Mobile responsiveness refinement
- SEO optimization (meta tags, sitemap)
- Add analytics (optional)

**Phase 5: Content & Launch**
- Add real project data
- Write compelling copy
- Optimize images and assets
- Final testing
- Deploy to Vercel

---

## 8. TESTING & DEPLOYMENT

### 8.1 Testing Checklist

**Functionality:**
- All navigation links work
- Keyboard shortcuts function correctly
- Forms validate and submit properly
- Theme switching works across all pages
- Modals open and close correctly
- Animations play smoothly

**Accessibility:**
- Keyboard navigation complete
- Screen reader compatibility
- Color contrast meets WCAG AA
- Focus indicators visible
- Alt text for all images
- ARIA labels implemented

**Performance:**
- Lighthouse score >90
- First Contentful Paint <1.5s
- Time to Interactive <3s
- No layout shifts (CLS <0.1)
- Images optimized
- Fonts loaded efficiently

**Responsive:**
- Mobile (320px-640px) tested
- Tablet (641px-1024px) tested
- Desktop (1025px+) tested
- Touch interactions work
- No horizontal scroll

### 8.2 Deployment

**Vercel Deployment:**
- Connect GitHub repository
- Configure build settings
- Set environment variables
- Enable automatic deployments
- Configure custom domain
- Set up SSL certificate

---

This formatted document provides a complete blueprint for building your terminal-style portfolio website with all the technical specifications, design guidelines, and implementation strategies needed for development.