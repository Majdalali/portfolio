'use client';

import { useState } from 'react';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { KeyboardHint } from '@/components/ui/keyboard-hint';
import { TerminalCard } from '@/components/ui/terminal-card';
import { PixelButton } from '@/components/ui/pixel-button';
import { useTheme } from '@/lib/hooks/use-theme';

export function ThemeSwitcherExample() {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Theme Switcher Examples</h2>
      
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-accent)]">
            Current Theme: <span className="capitalize">{theme}</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] mt-1">
            Try different themes to see how components adapt
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <KeyboardHint keys={['Ctrl', 'T']} action="Toggle theme" />
          <ThemeSwitcher />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Terminal Window Example */}
        <TerminalWindow title="theme-preview.sh">
          <div className="space-y-4">
            <CommandPrompt
              command={`echo "Current theme: ${theme}"`}
              typeAnimation={true}
            />
            
            <div className="mt-4">
              <h4 className="text-[var(--color-accent)] font-bold mb-2">Color Samples:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-[var(--color-background)] border border-[var(--color-border)]">Background</div>
                <div className="p-2 bg-[var(--color-surface)] border border-[var(--color-border)]">Surface</div>
                <div className="p-2 border border-[var(--color-border)] text-[var(--color-accent)]">Accent</div>
                <div className="p-2 border border-[var(--color-border)] text-[var(--color-accent-secondary)]">Accent Secondary</div>
              </div>
            </div>
          </div>
        </TerminalWindow>
        
        {/* Components Showcase */}
        <div className="space-y-4">
          <h4 className="text-[var(--color-accent)] font-bold mb-2">Components in Current Theme:</h4>
          
          <TerminalCard 
            title={`${theme}-card`} 
            description="This card adapts to the current theme"
            tags={['Theme', 'Preview']}
          >
            <div className="my-2 flex gap-2">
              <PixelButton size="sm">Primary</PixelButton>
              <PixelButton size="sm" variant="secondary">Secondary</PixelButton>
              <PixelButton size="sm" variant="ghost">Ghost</PixelButton>
            </div>
          </TerminalCard>
          
          <div className="flex gap-4 mt-6">
            <KeyboardHint keys={['Tab']} action="Next element" />
            <KeyboardHint keys={['↑', '↓']} action="Navigate" />
          </div>
        </div>
      </div>
    </div>
  );
}