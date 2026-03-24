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
    featured: true,
    problem: 'Traditional portfolios lack personality and fail to showcase technical creativity. Developers need a way to stand out while demonstrating their skills.',
    solution: 'Built an interactive terminal-styled portfolio with keyboard navigation, multiple themes, and retro aesthetics using Next.js 15, TypeScript, and Tailwind CSS v4.',
    impact: 'A unique, memorable portfolio that demonstrates both design sensibility and technical proficiency. Features global keyboard shortcuts, theme switching, and accessible navigation.',
    techDetails: 'This project uses Next.js 15 App Router with TypeScript for type safety. Tailwind CSS v4 provides the styling foundation with CSS variables for theming. The keyboard navigation system is built with React context and global event listeners. Animations are CSS-based with prefers-reduced-motion support.',
    codeSnippet: `// Keyboard Navigation Provider
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function KeyboardNavProvider({ children }) {
  const router = useRouter();
  const [showTerminalModal, setShowTerminalModal] = useState(false);

  useEffect(() => {
    const handleKeyShortcuts = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      
      switch (e.key.toLowerCase()) {
        case 'h': router.push('/'); break;
        case 'p': router.push('/projects'); break;
        case 'm': setShowTerminalModal(prev => !prev); break;
        case 't': toggleTheme(); break;
      }
    };

    window.addEventListener('keydown', handleKeyShortcuts);
    return () => window.removeEventListener('keydown', handleKeyShortcuts);
  }, [router]);

  return <>{children}</>;
}`
  },
  {
    id: 2,
    title: 'payroll-attendance.svelte',
    description: 'Comprehensive payroll and attendance management system for educational institutions. Streamlines employee tracking, payroll processing, and administrative workflows.',
    tags: ['SvelteKit', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'SQL', 'Mariadb'],
    image: '/projects/payroll-attendance.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true,
    problem: 'Manual attendance and payroll management is time-consuming, error-prone, and lacks transparency. Institutions struggle with tracking employee hours, generating accurate payrolls, and maintaining compliance.',
    solution: 'Automated attendance tracking and payroll generation using a web-based interface and RESTful APIs. Key technologies include SvelteKit for the frontend, Node.js/Express for the backend, Supabase for data storage, and Handlebars for dynamic email notifications.',
    impact: 'Significant reduction in manual errors and administrative workload. Faster payroll processing and reporting. Improved transparency and auditability. Enhanced user experience for both administrators and employees.',
    techDetails: 'Frontend uses SvelteKit with TypeScript and Vite. Backend is Node.js/Express with Supabase integration. Features include automated attendance workflows, email notifications with dynamic Handlebars templates, PDF report generation, Swagger API documentation, role-based authentication middleware, and a robust deployment pipeline using GitHub Actions and PM2.',
    codeSnippet: `// Modular API Routing - routes/index.js
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/role');

// Route modules
const attendanceRoutes = require('./attendance');
const payrollRoutes = require('./payroll');
const employeeRoutes = require('./employee');
const reportsRoutes = require('./reports');

// Apply authentication to all routes
router.use(authMiddleware);

// Mount route modules
router.use('/attendance', attendanceRoutes);
router.use('/payroll', roleMiddleware(['admin', 'hr']), payrollRoutes);
router.use('/employees', employeeRoutes);
router.use('/reports', roleMiddleware(['admin']), reportsRoutes);

module.exports = router;`
  },
  {
    id: 3,
    title: 'fcms.vue',
    description: 'Faculty Course Management System for universities. Digitizes academic processes including course evaluations, user management, notifications, and file uploads with role-based access.',
    tags: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Socket.io', 'Tailwind'],
    image: '/projects/fcms.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true,
    problem: 'Manual academic management processes are time-consuming, error-prone, and lack transparency. Institutions need a unified platform to manage course evaluations, user roles, notifications, and file submissions efficiently.',
    solution: 'A modular, full-stack web application with RESTful APIs for all core operations, real-time notifications using Socket.io, role-based access control (admin, coordinator, lecturer, student), and Firebase integration for authentication and file storage.',
    impact: 'Streamlined academic workflows, reducing manual paperwork. Improved transparency and accountability in course evaluations. Enhanced user experience for students, lecturers, and admins. Scalable architecture ready for future expansion.',
    techDetails: 'Backend uses Node.js/Express with Firebase Admin SDK for authentication and storage. Frontend is Vue.js with Vite, TypeScript, and Tailwind CSS. Features real-time communication via Socket.io, modular code organization (controllers, models, middleware, services), file upload management for CVs and documents, and responsive design with SCSS custom styles.',
    codeSnippet: `// src/middleware/roleAuth.js
function roleAuth(roles) {
  return function (req, res, next) {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
}

module.exports = roleAuth;

// Usage in routes
const roleAuth = require('../middleware/roleAuth');

// Only admins and coordinators can access
router.get('/evaluations', 
  roleAuth(['admin', 'coordinator']), 
  evaluationController.getAll
);

// Only lecturers can submit grades
router.post('/grades', 
  roleAuth(['lecturer']), 
  gradeController.submit
);`
  },
  {
    id: 4,
    title: 'eyebaituna.dart',
    description: 'Parental control mobile app for monitoring and safeguarding children\'s online activity. Features real-time content filtering, website blocking, bandwidth management, and browsing analytics.',
    tags: ['Flutter', 'Dart', 'PHP', 'MySQL', 'GetX', 'REST API'],
    image: '/projects/eyebaituna.png',
    demo: 'https://example.com',
    code: 'https://github.com/username/project',
    featured: true,
    problem: 'Parents face challenges protecting children from harmful online content while managing screen time. Lack of tools to enforce time limits, track browsing behavior, and control multiple devices makes manual oversight impractical.',
    solution: 'Cross-platform mobile app with automated 5-category content filtering, custom website blocking, device bandwidth management, scheduled internet access, and visual analytics dashboard. Built with Flutter frontend and PHP/MySQL REST API backend.',
    impact: 'Zero manual intervention for category-based blocking. Visual analytics replace raw log reading. Set-and-forget scheduling eliminates constant monitoring. Single codebase reduces development time by 50%. PDF reports enable sharing with guardians.',
    techDetails: 'Flutter SDK with Dart for iOS/Android. GetX for state management. Syncfusion Charts for analytics visualization. PHP REST API with MySQL. bcrypt password hashing. SharedPreferences for offline persistence. Lottie animations and responsive UI with Sizer package.',
    codeSnippet: `// GetX Controller for user state management
class InAppUser extends GetxController {
  final Rx<User> _inAppUser = User(
    id: 0, 
    username: '', 
    email: '', 
    password: ''
  ).obs;

  User get user => _inAppUser.value;

  getUserInfo() async {
    User? getUserInfoLocalStorage = await RememberUser.readUserInfo();
    _inAppUser.value = getUserInfoLocalStorage!;
  }
}

// API Service with centralized endpoints
class ApiService {
  static const hostConn = 'https://eyebaituna.000webhostapp.com';
  
  static Future<List<String>> fetchBannedURLs(int userId) async {
    final response = await http.get(
      Uri.parse('\$banURLS?user_id=\$userId')
    );
    
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      if (data['success']) {
        return List<String>.from(data['urls']);
      }
    }
    throw Exception('Failed to fetch banned URLs');
  }
}`
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
            screenshots: [modalProject.image] // Single screenshot for now
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
