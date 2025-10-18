import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="projects.sh">
        <div className="space-y-4">
          <CommandPrompt
            command="ls -la ./projects"
            typeAnimation={true}
          />
          
          <div className="mt-6 text-[var(--color-text-primary)]">
            <h1 className="mb-4 text-2xl font-bold text-[var(--color-accent)]">Projects</h1>
            <p className="mb-3">
              This is a placeholder projects page to test navigation.
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}