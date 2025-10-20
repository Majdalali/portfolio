'use client';

import { useState } from 'react';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { ASCIIArt } from '@/components/ui/ascii-art';

// Sample skill data - in a real app, this would come from an API or CMS
const skillsData = {
  frontend: [
    { name: 'React', level: 90, years: 4 },
    { name: 'TypeScript', level: 85, years: 3 },
    { name: 'JavaScript', level: 95, years: 6 },
    { name: 'Next.js', level: 80, years: 2 },
    { name: 'HTML/CSS', level: 90, years: 7 },
    { name: 'Tailwind CSS', level: 85, years: 2 },
    { name: 'Redux', level: 75, years: 3 },
  ],
  backend: [
    { name: 'Node.js', level: 80, years: 4 },
    { name: 'Express', level: 85, years: 4 },
    { name: 'MongoDB', level: 75, years: 3 },
    { name: 'PostgreSQL', level: 70, years: 2 },
    { name: 'GraphQL', level: 65, years: 2 },
    { name: 'REST APIs', level: 90, years: 5 },
  ],
  devops: [
    { name: 'Docker', level: 70, years: 2 },
    { name: 'Git', level: 85, years: 5 },
    { name: 'CI/CD', level: 75, years: 3 },
    { name: 'AWS', level: 65, years: 2 },
    { name: 'Vercel', level: 80, years: 2 },
  ],
  tools: [
    { name: 'VS Code', level: 90, years: 5 },
    { name: 'Figma', level: 75, years: 3 },
    { name: 'Terminal', level: 85, years: 6 },
    { name: 'Postman', level: 80, years: 4 },
    { name: 'GitHub', level: 85, years: 5 },
  ],
  softSkills: [
    { name: 'Problem Solving', level: 95, years: 10 },
    { name: 'Communication', level: 90, years: 10 },
    { name: 'Teamwork', level: 90, years: 8 },
    { name: 'Time Management', level: 85, years: 6 },
    { name: 'Adaptability', level: 90, years: 8 },
  ],
};

const certifications = [
  {
    name: 'Advanced React & Redux',
    provider: 'Udemy',
    date: '2022',
    url: 'https://example.com/cert/1',
  },
  {
    name: 'TypeScript Masterclass',
    provider: 'Frontend Masters',
    date: '2021',
    url: 'https://example.com/cert/2',
  },
  {
    name: 'AWS Developer Associate',
    provider: 'Amazon Web Services',
    date: '2022',
    url: 'https://example.com/cert/3',
  },
  {
    name: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    date: '2020',
    url: 'https://example.com/cert/4',
  },
];

type SkillCategory = keyof typeof skillsData;

export default function SkillsPage() {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState<SkillCategory[]>(['frontend']);

  // Toggle section expansion
  const toggleSection = (category: SkillCategory) => {
    if (expandedSections.includes(category)) {
      setExpandedSections(expandedSections.filter(item => item !== category));
    } else {
      setExpandedSections([...expandedSections, category]);
    }
  };

  // Check if section is expanded
  const isSectionExpanded = (category: SkillCategory) => {
    return expandedSections.includes(category);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="skills.sh">
        <div className="space-y-8">
          <CommandPrompt
            command="./skills.sh --list-all"
            typeAnimation={true}
          />
          
          <div className="mt-6 text-[var(--color-text-primary)]">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h1 className="mb-2 text-2xl font-bold text-[var(--color-accent)]">
                  Technical Skills
                </h1>
                <p className="text-[var(--color-text-secondary)]">
                  A comprehensive overview of my technical skills and proficiency levels.
                </p>
              </div>
              <div className="font-mono text-sm text-[var(--color-text-secondary)] border border-[var(--color-border)] p-3 bg-[var(--color-background)]">
                <div className="text-[var(--color-accent)]">
                  $ whoami --skills
                </div>
                <div>Developer | Problem Solver | Lifelong Learner</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mb-8 flex items-center justify-center space-x-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-12 bg-[var(--color-accent-secondary)] opacity-25"></div>
                <span className="text-[var(--color-text-dim)]">Beginner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-12 bg-[var(--color-accent-secondary)] opacity-50"></div>
                <span className="text-[var(--color-text-dim)]">Intermediate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-12 bg-[var(--color-accent-secondary)] opacity-75"></div>
                <span className="text-[var(--color-text-dim)]">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-12 bg-[var(--color-accent-secondary)] opacity-100"></div>
                <span className="text-[var(--color-text-dim)]">Expert</span>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="space-y-6">
              {Object.entries(skillsData).map(([category, skills]) => {
                const formattedCategory = category.replace(/([A-Z])/g, ' $1').trim();

                return (
                  <div key={category} className="border border-[var(--color-border)] bg-[var(--color-surface)]">
                    {/* Category Header */}
                    <button
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--color-background)] transition-colors"
                      onClick={() => toggleSection(category as SkillCategory)}
                      aria-expanded={isSectionExpanded(category as SkillCategory)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--color-text-dim)]">$</span>
                        <h2 className="font-bold text-[var(--color-accent)]">
                          {formattedCategory}
                        </h2>
                        <span className="text-xs text-[var(--color-text-secondary)] font-mono">
                          ({skills.length} skills)
                        </span>
                      </div>
                      <span className="text-[var(--color-accent)]">
                        {isSectionExpanded(category as SkillCategory) ? '−' : '+'}
                      </span>
                    </button>

                    {/* Skills List */}
                    {isSectionExpanded(category as SkillCategory) && (
                      <div className="p-4 border-t border-[var(--color-border)] space-y-4">
                        {skills.map((skill) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            years={skill.years}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h2 className="mb-6 text-xl font-bold text-[var(--color-accent)] border-b border-[var(--color-border)] pb-2">
                <span className="text-[var(--color-text-dim)]">$</span> certifications --list
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-[var(--color-border)] p-4 flex items-start gap-4 hover:border-[var(--color-accent)] hover:shadow-[var(--glow-sm)] transition-all duration-300">
                    <div className="hidden sm:block">
                      <ASCIIArt
                        art="code"
                        color="var(--color-accent)"
                        className="text-xs scale-[0.5] origin-top-left"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-primary)]">{cert.name}</h3>
                      <div className="text-sm text-[var(--color-accent-secondary)]">{cert.provider}</div>
                      <div className="text-xs text-[var(--color-text-dim)] mt-1">{cert.date}</div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
                      >
                        View Certificate →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function SkillBar({ name, level, years }: { name: string; level: number; years: number }) {
  // Function to determine proficiency label
  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <div className="text-[var(--color-text-primary)] font-medium">{name}</div>
        <div className="text-[var(--color-text-dim)] font-mono text-xs">
          {years} {years === 1 ? 'year' : 'years'} | {getProficiencyLabel(level)}
        </div>
      </div>
      <div className="relative h-5 bg-[var(--color-background)] overflow-hidden border border-[var(--color-border)]">
        <div
          className="absolute inset-0 bg-[var(--color-accent-secondary)] opacity-30 origin-left animate-skill-fill"
          style={{
            width: '100%',
            clipPath: `polygon(0% 0%, ${level}% 0%, ${level}% 100%, 0% 100%)`
          }}
        ></div>
        <div
          className="h-full bg-[var(--color-accent-secondary)] animate-skill-fill"
          style={{
            width: `${level}%`,
            animationDelay: '0.5s',
          }}
        ></div>
        <div
          className="absolute inset-0 grid grid-cols-10 pointer-events-none"
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-[var(--color-background)] opacity-30 last:border-none"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
