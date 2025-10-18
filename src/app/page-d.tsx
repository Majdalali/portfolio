import Image from "next/image";
import { KEYBOARD_SHORTCUTS } from "@/lib/constants";
import { KeyboardHintsPanel } from "@/components/ui/keyboard-hint";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { TextAnimate } from "@/components/ui/text-animate";
import { PixelButton } from "@/components/ui/pixel-button";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <TerminalWindow title="portfolio.sh" className="">
        <h1 className="text-3xl font-bold text-[var(--color-accent)] tracking-wide">Terminal Portfolio</h1>

        <div className="mt-4">
          <TextAnimate
            text="Welcome to the terminal experience. This portfolio showcases the power of Next.js and Tailwind CSS."
            className="text-[var(--color-text-secondary)] font-mono leading-relaxed tracking-wider"
          />
        </div>

        <p className="mt-2 text-[var(--color-text-secondary)] font-mono">Try using keyboard shortcuts to navigate (press <kbd className="px-1 border border-[var(--color-text-dim)]">?</kbd> to show all shortcuts)</p>

        <div className="mt-6 flex space-x-4">
          <PixelButton variant="primary" size="md">Enter</PixelButton>
        </div>

        <div className="mt-8 p-4 bg-[var(--color-background)] border border-[var(--color-border)]">
          <p className="font-mono text-sm text-[var(--color-text-primary)]">$ <span className="text-[var(--color-accent)]">echo</span> <span className="text-[var(--color-text-secondary)]">"Terminal window component is now ready!"</span></p>
        </div>
      </TerminalWindow>

      <div className="mt-8">
        <TerminalWindow title="component-demo.sh" showControls={true}>
          <h2 className="text-xl font-bold text-[var(--color-accent-secondary)]">Terminal Window Demo</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">This component supports:</p>
          <ul className="mt-2 space-y-1 text-[var(--color-text-primary)]">
            <li>• Custom title bar with traffic lights</li>
            <li>• Optional scanline overlay</li>
            <li>• Configurable styling</li>
            <li>• Proper content padding</li>
          </ul>
        </TerminalWindow>
      </div>

      <div className="mt-8">
        <TerminalWindow title="pixel-buttons.sh" showControls={true}>
          <h2 className="text-xl font-bold text-[var(--color-accent-secondary)]">Pixel Button Variants</h2>

          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <p className="text-sm text-[var(--color-text-secondary)]">Primary:</p>
                <div className="flex gap-2">
                  <PixelButton variant="primary" size="sm">Small</PixelButton>
                  <PixelButton variant="primary" size="md">Medium</PixelButton>
                  <PixelButton variant="primary" size="lg">Large</PixelButton>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <p className="text-sm text-[var(--color-text-secondary)]">Secondary:</p>
                <div className="flex gap-2">
                  <PixelButton variant="secondary" size="sm">Small</PixelButton>
                  <PixelButton variant="secondary" size="md">Medium</PixelButton>
                  <PixelButton variant="secondary" size="lg">Large</PixelButton>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <p className="text-sm text-[var(--color-text-secondary)]">Ghost:</p>
                <div className="flex gap-2">
                  <PixelButton variant="ghost" size="sm">Small</PixelButton>
                  <PixelButton variant="ghost" size="md">Medium</PixelButton>
                  <PixelButton variant="ghost" size="lg">Large</PixelButton>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <p className="text-sm text-[var(--color-text-secondary)]">States:</p>
                <div className="flex gap-2">
                  <PixelButton variant="primary" loading>Loading</PixelButton>
                  <PixelButton variant="primary" disabled>Disabled</PixelButton>
                  <PixelButton variant="primary" icon={<span>➡️</span>}>With Icon</PixelButton>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>

      {/* Keyboard shortcuts panel is now shown globally when pressing ? */}
    </div>
  );
}
