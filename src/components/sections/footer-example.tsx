'use client';

import { Footer } from '@/components/layout/footer';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { PixelButton } from '@/components/ui/pixel-button';
import { useState } from 'react';

export function FooterExample() {
  const [location, setLocation] = useState('Remote');
  const [available, setAvailable] = useState(true);
  
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Footer Component Examples</h2>
      
      <TerminalWindow title="footer-config.sh">
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[var(--color-accent)]">Configure Footer</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">
                Location:
              </label>
              <select 
                className="bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-text-primary)] text-sm rounded-none focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] block w-full p-2.5"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Remote">Remote</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="London">London</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <input 
                id="availability" 
                type="checkbox" 
                checked={available}
                onChange={() => setAvailable(!available)}
                className="w-4 h-4 text-[var(--color-accent)] bg-[var(--color-background)] border-[var(--color-border)] rounded-none focus:ring-[var(--color-accent)]" 
              />
              <label htmlFor="availability" className="ml-2 text-sm font-medium text-[var(--color-text-secondary)]">
                Available for work
              </label>
            </div>
            
            <div className="pt-4">
              <h4 className="font-mono text-sm font-bold text-[var(--color-accent)] mb-2">Preview:</h4>
              <div className="border-2 border-[var(--color-border)]">
                <Footer 
                  location={location}
                  available={available}
                  lastUpdated="January 2024"
                />
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}