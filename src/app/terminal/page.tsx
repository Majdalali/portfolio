import { Metadata } from 'next'
import { InteractiveTerminal } from '@/components/ui/interactive-terminal'

export const metadata: Metadata = {
  title: 'Interactive Terminal | Developer Portfolio',
  description: 'Interact with a fully functional terminal emulator and discover hidden commands and easter eggs.',
}

export default function TerminalPage() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-12rem)] px-4 py-8">
      <InteractiveTerminal />
    </main>
  )
}