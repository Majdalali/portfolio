import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { PixelButton } from '@/components/ui/pixel-button';
import { TextAnimate } from '@/components/ui/text-animate';
import { ASCIIArt } from '@/components/ui/ascii-art';
import { CommandPrompt } from '@/components/ui/command-prompt';
import {Kbd} from "@/components/ui/kbd";

export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main hero content */}
          <div className="lg:col-span-3">
            <TerminalWindow title="portfolio@dev:~" className="h-full">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-col items-start">
                      <div className="w-full  max-h-[110px] text-xs  mb-10">
                          <ASCIIArt art="terminal" animate={true} animateSpeed={20} className="text-[var(--color-accent)] transform translate-x-1/2 p-5 border-[var(--color-accent)] border-1 scale-75 rounded-md text-xs w-1/2" />

                      </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] tracking-tight">
                      <TextAnimate text="Majd Alali" />
                    </h1>
                  </div>
                  <h2 className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium tracking-wide">
                    <TextAnimate text="Frontend Developer & UI Engineer" delay={500} />
                  </h2>
                </div>

                <div className="py-4 border-y border-[var(--color-border)] text-[var(--color-text-primary)]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <TextAnimate
                    text="Building pixel-perfect interfaces and crafting engaging user experiences with modern web technologies."
                    delay={1000}
                    className="text-lg leading-relaxed"
                  />

                    </div>
                    </div>
                <div className="space-y-2">
                  <CommandPrompt
                    user="portfolio"
                    host="dev"
                    directory="~"
                    command="cat skills.txt"
                    typeAnimation={true}
                    className="text-[var(--color-text-primary)]"
                />
                  <div className="text-[var(--color-text-secondary)] pl-4 py-2 border border-dashed border-[var(--color-border)] my-2 px-2 bg-[var(--color-background)] font-mono">
                    React • Next.js • TypeScript • Tailwind CSS • UI/UX
        </div>
                  <CommandPrompt
                    user="portfolio"
                    host="dev"
                    directory="~"
                    command="ls projects/"
                    typeAnimation={true}
                    className="text-[var(--color-text-primary)]"
                  />
                  <div className="text-[var(--color-accent-secondary)] pl-4 py-2 border border-dashed border-[var(--color-border)] my-2 px-2 bg-[var(--color-background)] font-mono">
                    e-commerce-platform/ dashboard-ui/ portfolio-site/ mobile-app/
                    </div>
                    </div>
                <div className="flex flex-wrap gap-4">
                  {NAV_ITEMS.filter(item => item.name !== 'Home').map((item) => (
                    <Link href={item.href} key={item.name}>
                      <PixelButton
                        variant={item.name === 'Contact' ? 'primary' : 'secondary'}
                        size="md"
                      >
                        {item.name}
                      </PixelButton>
                    </Link>
                  ))}
            </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse h-2 w-2 rounded-full bg-[var(--color-accent)]"></div>
                    <p className="text-[var(--color-accent)] text-sm font-mono animate-pulse">Press any key to continue...</p>
          </div>
                  <div className="text-[var(--color-text-dim)] text-sm font-mono">
                      <p>Press <Kbd className="bg-[var(--color-surface)] text-[var(--color-text border-[var(--color-border)] border px-1 rounded-sm" >Shift</Kbd> + <Kbd className="bg-[var(--color-surface)] text-[var(--color-text border-[var(--color-border)] border px-1 rounded-sm" >?</Kbd> to view keyboard shortcuts</p>
        </div>
      </div>
                    </div>
              </TerminalWindow>
        </div>

          {/* Sidebar with ASCII art and stats */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <TerminalWindow title="avatar.txt" className="h-full">
               <div className="w-full overflow-hidden max-h-[100px] ">
                  <ASCIIArt
                    art="logo"
                    color="var(--color-accent-secondary)"
                    animate={false}
                    className="mb-4 font-bold  transform scale-[25%] origin-top-left"
                  />
                </div>


                <div className="mt-4 space-y-3 text-[var(--color-text-secondary)] font-mono">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>Homs, Syria</span>
                    </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span>1.5+ years</span>
                    </div>
                  <div className="flex justify-between">
                    <span>Focus:</span>
                    <span>Web Development</span>
                    </div>
                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="text-[var(--color-success)]">✓ Open to work</span>
                    </div>
                  </div>
              </TerminalWindow>

              <TerminalWindow title="stats.txt" showControls={false}>
                <div className=" text-xs mb-4">
                <ASCIIArt
                  art="code"
                  color="var(--color-text-secondary)"
                />
                </div>
                <div className="space-y-4 py-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                      <span>Projects Completed</span>
                      <span>25+</span>
        </div>
                    <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                      <div className="bg-[var(--color-accent)] h-full" style={{ width: "85%" }}></div>
      </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                      <span>Technical Skills</span>
                      <span>18</span>
                    </div>
                    <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                      <div className="bg-[var(--color-accent-secondary)] h-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                      <span>Client Satisfaction</span>
                      <span>4.9/5</span>
                    </div>
                    <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                      <div className="bg-[var(--color-success)] h-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};