'use client';

import { useState, useEffect } from 'react';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { TerminalCard } from '@/components/ui/terminal-card';
import { PixelButton } from '@/components/ui/pixel-button';
import { ProjectDetailModal } from '@/components/ui/project-detail-modal';

// Sample project data - in a real app, this would come from an API or CMS
const projectsData = [
  {
    id: 1,
    title: 'terminal-portfolio.sh',
    description: 'A terminal-styled portfolio website built with Next.js and Tailwind CSS. Features keyboard navigation and retro aesthetics.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    image: '/projects/terminal-portfolio.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true
  },
  {
    id: 2,
    title: 'ecommerce-platform.js',
    description: 'Full-stack e-commerce platform with inventory management, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true
  },
  {
    id: 3,
    title: 'ai-chatbot.py',
    description: 'Intelligent chatbot built with machine learning that can answer questions and provide assistance.',
    tags: ['Python', 'TensorFlow', 'NLP', 'API'],
    image: '/projects/chatbot.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: false
  },
  {
    id: 4,
    title: 'social-network.rb',
    description: 'A social networking platform with real-time messaging, news feed, and user profiles.',
    tags: ['Ruby', 'Rails', 'PostgreSQL', 'WebSockets'],
    image: '/projects/social.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: false
  },
  {
    id: 5,
    title: 'crypto-tracker.go',
    description: 'Real-time cryptocurrency price tracker with alerts and portfolio management.',
    tags: ['Go', 'React', 'WebSockets', 'Charts'],
    image: '/projects/crypto.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true
  },
  {
    id: 6,
    title: 'weather-app.jsx',
    description: 'Weather application that shows forecasts, historical data, and weather maps.',
    tags: ['React', 'API', 'Geolocation', 'PWA'],
    image: '/projects/weather.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: false
  },
  {
    id: 7,
    title: 'task-manager.ts',
    description: 'Productivity application for managing tasks, projects, and team collaboration.',
    tags: ['TypeScript', 'React', 'Redux', 'Firebase'],
    image: '/projects/task-manager.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: false
  },
  {
    id: 8,
    title: 'fitness-tracker.swift',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
    tags: ['Swift', 'iOS', 'HealthKit', 'Core Data'],
    image: '/projects/fitness.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: false
  },
];

// Extract all unique tags from project data
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [command, setCommand] = useState('ls -la ./projects');
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle navigation between projects in modal
  const handleNavigateToPrevious = () => {
    const currentIndex = projectsData.findIndex(p => p.id === modalProject?.id);
    if (currentIndex > 0) {
      setModalProject(projectsData[currentIndex - 1]);
    }
  };

  const handleNavigateToNext = () => {
    const currentIndex = projectsData.findIndex(p => p.id === modalProject?.id);
    if (currentIndex < projectsData.length - 1) {
      setModalProject(projectsData[currentIndex + 1]);
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setModalProject(null);
    setSelectedProjectId(null);
  };

  // Filter projects based on search term and selected tag
  useEffect(() => {
    setIsLoading(true);

    let filterCommand = 'ls -la ./projects';

    if (selectedTag !== 'All') {
      filterCommand += ` --filter=${selectedTag}`;
    }

    if (searchTerm) {
      filterCommand += ` | grep "${searchTerm}"`;
    }

    setCommand(filterCommand);

    // Simulate a slight delay for a more realistic terminal experience
    const timer = setTimeout(() => {
      const filtered = projectsData.filter(project => {
        const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
        const matchesSearch = searchTerm === '' ||
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesTag && matchesSearch;
      });

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedTag]);

  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="projects.sh" className="mb-8">
        <div className="space-y-6">
          <CommandPrompt
            command={command}
            typeAnimation={true}
          />
          
          {/* Filter Bar */}
          <div className="border-t border-b border-[var(--color-border)] py-4 mt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1/3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-[var(--color-text-dim)] font-mono">$</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-8 pr-4 py-2 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                <TagButton
                  tag="All"
                  isActive={selectedTag === 'All'}
                  onClick={() => setSelectedTag('All')}
                />

                {allTags.map(tag => (
                  <TagButton
                    key={tag}
                    tag={tag}
                    isActive={selectedTag === tag}
                    onClick={() => setSelectedTag(tag)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-8">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="text-[var(--color-accent)] font-mono animate-pulse">Loading...</div>
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenModal={() => {
                      setSelectedProjectId(project.id);
                      setModalProject(project);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-[var(--color-text-secondary)] font-mono mb-2 text-lg">
                  No matching projects found
                </div>
                <div className="text-[var(--color-text-dim)] font-mono mb-6">
                  Try adjusting your filters
                </div>
                <PixelButton
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSelectedTag('All');
                    setSearchTerm('');
                  }}
                >
                  Clear Filters
                </PixelButton>
              </div>
            )}
          </div>
        </div>
      </TerminalWindow>

      {/* Global Project Detail Modal */}
      {modalProject && (
        <ProjectDetailModal
          project={{
            ...modalProject,
            problem: "This project aimed to solve the challenge of [specific problem].",
            solution: "I implemented a [specific solution] that utilized [technologies/approaches].",
            impact: "The result was a [X]% improvement in performance and enhanced user experience.",
            techDetails: "This project was built using a modern stack including React for the frontend, Node.js for the backend, and MongoDB for the database. I implemented [specific technical features] to solve [specific challenges].",
            screenshots: [modalProject.image, modalProject.image, modalProject.image] // Placeholder for multiple screenshots
          }}
          onClose={handleCloseModal}
          onNavigatePrevious={handleNavigateToPrevious}
          onNavigateNext={handleNavigateToNext}
          hasPrevious={projectsData.findIndex(p => p.id === modalProject?.id) > 0}
          hasNext={projectsData.findIndex(p => p.id === modalProject?.id) < projectsData.length - 1}
        />
      )}
    </div>
  );
}

function TagButton({ tag, isActive, onClick }: { tag: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      className={`px-3 py-1 font-mono text-xs ${isActive
        ? 'bg-[var(--color-accent)] text-[var(--color-background)]'
        : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
      } border border-[var(--color-border)] transition-colors`}
      onClick={onClick}
    >
      {tag}
    </button>
  );
}

function ProjectCard({ project, onOpenModal }: { project: any; onOpenModal: () => void }) {
  return (
    <TerminalCard
      title={project.title}
      description={project.description}
      tags={project.tags}
      glowOnHover={true}
    >
      <div className="mt-4 mb-6">
        <div className="relative h-48 border border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-dim)]">
            [Project Screenshot]
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
        >
          <span>Demo</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

        <span className="text-[var(--color-text-dim)]">|</span>

        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
        >
          <span>Code</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        </a>

        <span className="text-[var(--color-text-dim)]">|</span>

        <button
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent-secondary)] hover:cursor-pointer transition-colors"
          onClick={onOpenModal}
        >
          <span>Details</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </TerminalCard>
  );
}
