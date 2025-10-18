import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="skills.sh">
        <div className="space-y-4">
          <CommandPrompt
            command="./skills.sh --list-all"
            typeAnimation={true}
          />
          
          <div className="mt-6 text-[var(--color-text-primary)]">
            <h1 className="mb-4 text-2xl font-bold text-[var(--color-accent)]">Skills</h1>
            <p className="mb-3">
              This is a placeholder skills page to test navigation.
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}