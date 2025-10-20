import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { TextAnimate } from '@/components/ui/text-animate';
import { ASCIIArt } from '@/components/ui/ascii-art';
import { PixelButton } from '@/components/ui/pixel-button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <TerminalWindow title="about.txt" className="mb-8">
        <div className="space-y-6">
          <CommandPrompt
            command="cat about.txt"
            typeAnimation={true}
          />
          
          <div className="mt-8 space-y-8 text-[var(--color-text-primary)]">
            {/* Header Section */}
            <header className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
              <div className="w-full">
                <h1 className="mb-4 text-3xl font-mono font-bold text-[var(--color-accent)]">
                  <TextAnimate
                    text="Hiii! I'm Majd"
                    speed={80}
                  />
                </h1>
                <div className="text-[var(--color-text-secondary)] leading-relaxed">
                  <p className="mb-4">
                    <TextAnimate
                      text="I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, pixel-perfect web applications with modern technologies."
                      delay={1000}
                      speed={30}
                    />
                  </p>
                  <p>
                    <TextAnimate
                      text="When I'm not at the computer, I enjoy [your hobbies/interests]."
                      delay={3000}
                      speed={30}
                    />
                  </p>
                </div>
              </div>

              {/* Avatar Section with ASCII art */}
              <div className="relative border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-4 min-w-[250px]">
                <ASCIIArt
                  art="code"
                  animate={false}
                  animationDelay={500}
                  className="scale-75 whitespace-pre-line text-[var(--color-accent-secondary)]"
                />
                <div className="mt-2 text-center text-sm text-[var(--color-text-dim)]">
                  $ whoami
                </div>
              </div>
            </header>

            {/* Career Timeline */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-accent)] border-b border-[var(--color-border)] pb-2 mb-6">
                <span className="text-[var(--color-text-dim)]">$</span> career --timeline
              </h2>

              <div className="space-y-6">
                <TimelineEntry
                  year="2020 - Present"
                  title="Senior Developer"
                  company="Tech Company, Inc."
                  description="Led development of key projects, mentored junior developers, and implemented modern tech stack including React, TypeScript, and Node.js."
                />

                <TimelineEntry
                  year="2017 - 2020"
                  title="Full Stack Developer"
                  company="Digital Solutions Ltd."
                  description="Built responsive web applications, created RESTful APIs, and maintained database architecture."
                />

                <TimelineEntry
                  year="2015 - 2017"
                  title="Frontend Developer"
                  company="Creative Agency"
                  description="Designed and developed interactive websites using HTML, CSS, and JavaScript."
                />
              </div>
            </section>

            {/* Education */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-accent)] border-b border-[var(--color-border)] pb-2 mb-6">
                <span className="text-[var(--color-text-dim)]">$</span> education --list
              </h2>

              <div className="space-y-6">
                <TimelineEntry
                  year="2012 - 2015"
                  title="Bachelor of Science in Computer Science"
                  company="University Name"
                  description="Graduated with honors. Specialized in software engineering and web development."
                />

                <TimelineEntry
                  year="2022"
                  title="Advanced React & Redux"
                  company="Online Certification"
                  description="In-depth study of advanced React patterns, state management, and performance optimization."
                />
              </div>
            </section>

            {/* Interests & Hobbies */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-accent)] border-b border-[var(--color-border)] pb-2 mb-6">
                <span className="text-[var(--color-text-dim)]">$</span> interests --verbose
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <InterestItem icon="🎮" title="Gaming" description="Strategy & RPGs" />
                <InterestItem icon="🏔️" title="Hiking" description="Mountain trails" />
                <InterestItem icon="📚" title="Reading" description="Sci-fi & fantasy" />
                <InterestItem icon="🎸" title="Music" description="Playing guitar" />
                <InterestItem icon="🍳" title="Cooking" description="International cuisine" />
                <InterestItem icon="✈️" title="Travel" description="Exploring new places" />
                <InterestItem icon="📷" title="Photography" description="Nature & urban" />
                <InterestItem icon="🎨" title="Digital Art" description="Pixel art creation" />
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <ASCIIArt art="terminal" className="text-[var(--color-accent)] p-5 border-[var(--color-accent)] border-1 rounded-md text-xs hidden md:block" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Want to work together?</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">I'm currently available for freelance projects and full-time positions.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link href="/projects">
                    <PixelButton variant="secondary" size="md">
                      View Projects
                    </PixelButton>
                  </Link>
                  <Link href="/contact">
                    <PixelButton variant="primary" size="md">
                      Contact Me
                    </PixelButton>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function TimelineEntry({
  year,
  title,
  company,
  description
}: {
  year: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <div className="pl-6 border-l-2 border-[var(--color-border)] hover:border-[var(--color-accent)]">
      <div className="absolute -ml-[27px] w-4 h-4 bg-[var(--color-accent)] border-2 border-[var(--color-background)]"></div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{title}</h3>
        <span className="text-sm text-[var(--color-accent)] font-mono">{year}</span>
      </div>
      <div className="text-base text-[var(--color-accent-secondary)] mb-1">{company}</div>
      <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>
    </div>
  );
}

function InterestItem({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[var(--glow-sm)] transition-all duration-300">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-bold text-[var(--color-text-primary)]">{title}</h3>
      <p className="text-xs text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)] transition-colors">
        {description}
      </p>
    </div>
  );
}
