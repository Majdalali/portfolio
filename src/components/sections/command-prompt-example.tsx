'use client';

import { useState } from 'react';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { PixelButton } from '@/components/ui/pixel-button';

export function CommandPromptExample() {
  const [typingEnabled, setTypingEnabled] = useState(true);
  
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Command Prompt Examples</h2>
      
      <div className="space-y-6 border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        {/* Basic Command Prompt */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Basic Command Prompt</h3>
          <CommandPrompt />
        </div>
        
        {/* With Custom User/Host/Directory */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Custom Prompt Elements</h3>
          <CommandPrompt 
            user="guest"
            host="terminal"
            directory="/projects"
          />
        </div>
        
        {/* With Static Command */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Static Command</h3>
          <CommandPrompt 
            command="ls -la"
            showCursor={false}
          />
        </div>
        
        {/* With Typing Animation */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Typing Animation</h3>
          <CommandPrompt 
            command="cat about.txt | grep experience"
            typeAnimation={typingEnabled}
          />
          <PixelButton 
            onClick={() => setTypingEnabled(!typingEnabled)}
            variant="secondary"
            size="sm"
          >
            {typingEnabled ? 'Disable Animation' : 'Enable Animation'}
          </PixelButton>
        </div>
        
        {/* Various Commands */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Command Examples</h3>
          <div className="space-y-3">
            <CommandPrompt command="cd ~/projects" />
            <CommandPrompt command="git status" />
            <CommandPrompt command="npm run build" />
            <CommandPrompt command="docker-compose up -d" />
            <CommandPrompt command="ssh user@remote-server" />
          </div>
        </div>
      </div>
    </div>
  );
}