import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="contact.sh">
        <div className="space-y-4">
          <CommandPrompt
            command="./contact.sh"
            typeAnimation={true}
          />
          
          <div className="mt-6 text-[var(--color-text-primary)]">
            <h1 className="mb-4 text-2xl font-bold text-[var(--color-accent)]">Contact</h1>
            <p className="mb-3">
              This is a placeholder contact page to test navigation.
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}