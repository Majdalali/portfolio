'use client';
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
                      I'm a full-stack developer specializing in building unique digital experiences. Currently, I'm focused on creating accessible web applications with modern technologies.
                  </p>
                  <p>
                      When I'm not at work, I enjoy watching twitch, playing video games (SKY:COTL & CS2) and listening to music.
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
    year="April 2024 - Present"
                  title="Full Stack Developer"
    company="Furqan Group for Education and IT (Remote)"
  description="Built a payroll system with fingerprint authentication (Svelte, Express, Supabase), maintained an Angular/NestJS e-service platform, and created a proof-of-concept with Zoho Catalyst. Provided support for PHP Laravel student registration pages, improving UI/UX. Optimized applications using TypeScript and Tailwind CSS."
                />

                <TimelineEntry
    year="Sept 2023 - Feb 2024"
    title="Intern & Freelance Developer"
    company="Applied Industrial Analytics Research Group (Johor, Malaysia)"
    description="Developed an academic management system for UTM University master's students using Vue.js (Composition API), Express.js, and Firebase. Designed UI with Figma and implemented real-time updates with Socket.io."
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
                  year="2019 - 2024"
                  title="Bachelor of Computer Science, Computer Networks And Security"
                  company="University of Technology Malaysia [3.71/4.0 GPA]"
                  description="Graduated with honors. Specialized in networks and IT."
                />

                {/*<TimelineEntry*/}
                {/*  year="2022"*/}
                {/*  title="Advanced React & Redux"*/}
                {/*  company="Online Certification"*/}
                {/*  description="In-depth study of advanced React patterns, state management, and performance optimization."*/}
                {/*/>*/}
              </div>
            </section>

            {/* Interests & Hobbies */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-accent)] border-b border-[var(--color-border)] pb-2 mb-6">
                <span className="text-[var(--color-text-dim)]">$</span> interests --verbose
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <InterestItem icon="🎮" title="Gaming" description="Adventure & FPS" />
                <InterestItem icon="🏔️" title="Hiking" description="Mountain trails" />
                <InterestItem icon="📚" title="Reading" description="Sci-fi & fantasy" />
                <InterestItem icon="🎸" title="Music" description="Radiohead & Fleetwwood Mac" />
                <InterestItem icon="🍳" title="Cooking" description="Bakery" />
                <InterestItem icon="🎬" title="Doccumentaries" description="History & Wars" />
                  <InterestItem icon="🩸️" title="True Crime" description="Podcasts & Youtube" />
                  <InterestItem icon="📺" title="Movies & TV Shows" description="The Wire &  The Sopranos" />
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
                    <PixelButton  variant="primary" size="md">
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
    <div className={`group p-4 border ${
      title === 'True Crime'
      ? ' hover:border-rose-900 hover:shadow-[var(--glow-sm-blood)]'
      : 'border-[var(--color-border)] hover:shadow-[var(--glow-sm)] hover:border-[var(--color-accent)]'
    }  transition-all duration-300`}>
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="font-bold text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-xs text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)] transition-colors">
            {description}
        </p>
    </div>
  );
}
