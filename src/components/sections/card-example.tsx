'use client';

import { TerminalCard } from '@/components/ui/terminal-card';

export function CardExampleSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Simple Card */}
      <TerminalCard 
        title="Basic Card" 
        description="This is a simple card with just title and description."
      />
      
      {/* Card with Tags */}
      <TerminalCard 
        title="Project Card" 
        description="This card shows a project with technology tags."
        tags={['React', 'TypeScript', 'Tailwind']}
      />
      
      {/* Card as Link */}
      <TerminalCard 
        title="Linked Card" 
        description="This card is clickable and navigates to a page."
        tags={['Next.js']}
        href="#"
      />
      
      {/* Card with Content */}
      <TerminalCard 
        title="Content Card"
        tags={['Custom Content']}
      >
        <div className="my-4 text-[var(--color-text-primary)]">
          <p>This card has custom content inside it.</p>
          <div className="mt-2 h-24 bg-[var(--color-surface)] border border-[var(--color-border)]">
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-[var(--color-accent)]">Custom Content Area</span>
            </div>
          </div>
        </div>
      </TerminalCard>
      
      {/* Interactive Card */}
      <TerminalCard 
        title="Interactive Card" 
        description="This card has a click handler without navigation."
        tags={['Interactive']}
        onClick={() => alert('Card clicked!')}
      />
      
      {/* Card without Glow */}
      <TerminalCard 
        title="No Glow Effect" 
        description="This card doesn't have the hover glow effect."
        tags={['Static']}
        glowOnHover={false}
      />
    </div>
  );
}