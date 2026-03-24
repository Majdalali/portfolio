"use client";

import { useState, useEffect } from "react";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { CommandPrompt } from "@/components/ui/command-prompt";
import { TerminalCard } from "@/components/ui/terminal-card";
import { PixelButton } from "@/components/ui/pixel-button";
import { ProjectDetailModal } from "@/components/ui/project-detail-modal";

// Helper function to get current domain from browser
const getCurrentDomain = (): string => {
  if (typeof window === "undefined") {
    return "https://example.com";
  }
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};

// Sample project data - in a real app, this would come from an API or CMS
const projectsData = [
  {
    id: 1,
    title: "terminal-portfolio.sh",
    description:
      "A terminal-styled portfolio website built with Next.js and Tailwind CSS. Features keyboard navigation and retro aesthetics.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    image: "/previews/portfolio/terminal-portfolio.png",
    demo: getCurrentDomain(),
    code: "https://github.com/Majdalali/portfolio",
    featured: true,
    problem:
      "Traditional portfolios lack personality and fail to showcase technical creativity. Developers need a way to stand out while demonstrating their skills.",
    solution:
      "Built an interactive terminal-styled portfolio with keyboard navigation, multiple themes, and retro aesthetics using Next.js 15, TypeScript, and Tailwind CSS v4.",
    impact:
      "A unique, memorable portfolio that demonstrates both design sensibility and technical proficiency. Features global keyboard shortcuts, theme switching, and accessible navigation.",
    techDetails:
      "This project uses Next.js 15 App Router with TypeScript for type safety. Tailwind CSS v4 provides the styling foundation with CSS variables for theming. The keyboard navigation system is built with React context and global event listeners. Animations are CSS-based with prefers-reduced-motion support.",
    codeSnippet: `// Keyboard Navigation Provider

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
}`,
  },
  {
    id: 2,
    title: "payroll-attendance.svelte",
    description:
      "Comprehensive payroll and attendance management system for educational institutions. Streamlines employee tracking, payroll processing, and administrative workflows.",
    tags: [
      "SvelteKit",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
      "SQL",
      "Mariadb",
    ],
    image: "/previews/fgp/main.png",
    screenshots: ["/previews/fgp/main.png", "/previews/fgp/one.png"],
    demo: "https://payroll.furqangroup.com",
    code: "https://github.com/",
    featured: true,
    problem:
      "Manual attendance and payroll management is time-consuming, error-prone, and lacks transparency. Institutions struggle with tracking employee hours, generating accurate payrolls, and maintaining compliance.",
    solution:
      "Automated attendance tracking and payroll generation using a web-based interface and RESTful APIs. Key technologies include SvelteKit for the frontend, Node.js/Express for the backend, Supabase for data storage, and Handlebars for dynamic email notifications.",
    impact:
      "Significant reduction in manual errors and administrative workload. Faster payroll processing and reporting. Improved transparency and auditability. Enhanced user experience for both administrators and employees.",
    techDetails:
      "Frontend uses SvelteKit with TypeScript and Vite. Backend is Node.js/Express with Supabase integration. Features include automated attendance workflows, email notifications with dynamic Handlebars templates, PDF report generation, Swagger API documentation, role-based authentication middleware, and a robust deployment pipeline using GitHub Actions and PM2.",
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

module.exports = router;`,
  },
  {
    id: 3,
    title: "fcms.vue",
    description:
      "Faculty Course Management System for universities. Digitizes academic processes including course evaluations, user management, notifications, and file uploads with role-based access.",
    tags: [
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase",
      "Socket.io",
      "Tailwind",
    ],
    image: "/previews/fcms/main.png",
    screenshots: [
      "/previews/fcms/one.png",
      "/previews/fcms/two.png",
      "/previews/fcms/three.png",
      "/previews/fcms/four.png",
    ],
    demo: "https://example.com",
    code: "https://github.com/username/project",
    featured: true,
    problem:
      "Manual academic management processes are time-consuming, error-prone, and lack transparency. Institutions need a unified platform to manage course evaluations, user roles, notifications, and file submissions efficiently.",
    solution:
      "A modular, full-stack web application with RESTful APIs for all core operations, real-time notifications using Socket.io, role-based access control (admin, coordinator, lecturer, student), and Firebase integration for authentication and file storage.",
    impact:
      "Streamlined academic workflows, reducing manual paperwork. Improved transparency and accountability in course evaluations. Enhanced user experience for students, lecturers, and admins. Scalable architecture ready for future expansion.",
    techDetails:
      "Backend uses Node.js/Express with Firebase Admin SDK for authentication and storage. Frontend is Vue.js with Vite, TypeScript, and Tailwind CSS. Features real-time communication via Socket.io, modular code organization (controllers, models, middleware, services), file upload management for CVs and documents, and responsive design with SCSS custom styles.",
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
);`,
  },
  {
    id: 4,
    title: "eyebaituna.dart",
    description:
      "Parental control mobile app for monitoring and safeguarding children's online activity. Features real-time content filtering, website blocking, bandwidth management, and browsing analytics.",
    tags: ["Flutter", "Dart", "PHP", "MySQL", "GetX", "REST API"],
    image: "/previews/eye/main.png",
    screenshots: [
      "/previews/eye/one.png",
      "/previews/eye/two.png",
      "/previews/eye/three.png",
    ],
    demo: "https://example.com",
    code: "https://github.com/username/project",
    featured: true,
    problem:
      "Parents face challenges protecting children from harmful online content while managing screen time. Lack of tools to enforce time limits, track browsing behavior, and control multiple devices makes manual oversight impractical.",
    solution:
      "Cross-platform mobile app with automated 5-category content filtering, custom website blocking, device bandwidth management, scheduled internet access, and visual analytics dashboard. Built with Flutter frontend and PHP/MySQL REST API backend.",
    impact:
      "Zero manual intervention for category-based blocking. Visual analytics replace raw log reading. Set-and-forget scheduling eliminates constant monitoring. Single codebase reduces development time by 50%. PDF reports enable sharing with guardians.",
    techDetails:
      "Flutter SDK with Dart for iOS/Android. GetX for state management. Syncfusion Charts for analytics visualization. PHP REST API with MySQL. bcrypt password hashing. SharedPreferences for offline persistence. Lottie animations and responsive UI with Sizer package.",
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
}`,
  },
  {
    id: 5,
    title: "scolior.com",
    description:
      "UI/UX design and frontend development for Scolior, a multi-tenant SaaS LMS platform for educational institutions and Quran circles. Designed intuitive interfaces for centralized subscription management and tenant-specific school administration features.",
    tags: [
      "UI/UX Design",
      "Vue.js",
      "Inertia.js",
      "Tailwind CSS",
      "Figma",
      "User Research",
    ],
    image: "/previews/scolior/main.png",
    screenshots: [
      "/previews/scolior/one.png",
      "/previews/scolior/two.png",
      "/previews/scolior/three.png",
      "/previews/scolior/four.png",
      "/previews/scolior/five.png",
    ],
    demo: "https://scolior.com",
    code: "https://github.com/username/project",
    featured: true,
    problem:
      "Educational institutions, particularly Quran schools, lack a unified platform to manage multi-tenant operations. Manual administration of students, teachers, classes, attendance, and content is time-consuming and error-prone. Subscription management and tenant onboarding add operational complexity.",
    solution:
      "Designed and implemented the complete UI/UX for the multi-tenant SaaS platform. Created intuitive dashboards for both central administrators and individual school tenants. Developed responsive interfaces using Vue.js 3 with Inertia.js, Tailwind CSS v4, and DaisyUI components. Focused on user experience optimization for complex educational workflows including student management, attendance tracking, and performance analytics.",
    impact:
      "Seamless multi-tenant isolation with database-per-tenant architecture. Automated subscription management and tenant lifecycle. Real-time notifications and communications. AI-generated student performance reports. Reduced administrative overhead by eliminating manual processes.",
    techDetails:
      "Frontend: Vue.js 3 with Inertia.js for seamless SPA experience, TypeScript for type safety, and Tailwind CSS v4 + DaisyUI/FlyonUI components for modern, responsive design. UI/UX: Figma for design systems, user research and testing, accessibility-first approach. Features: Multi-tenant dashboard design, responsive layouts for desktop and mobile, intuitive navigation systems, data visualization for educational metrics, and optimized user flows for complex administrative tasks.",
    codeSnippet: `// Multi-tenant Dashboard Component - Vue 3 + Inertia.js
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <TenantSwitcher :tenants="availableTenants" />
          </div>
          <div class="flex items-center space-x-4">
            <NotificationBell :count="unreadNotifications" />
            <UserMenu :user="currentUser" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Dashboard Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            v-for="stat in dashboardStats"
            :key="stat.id"
            :title="stat.title"
            :value="stat.value"
            :change="stat.change"
            :icon="stat.icon"
          />
        </div>

        <!-- Recent Activity & Quick Actions -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <RecentActivity :activities="recentActivities" />
          </div>
          <div>
            <QuickActions :actions="availableActions" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Reactive data
const page = usePage()
const currentUser = computed(() => page.props.auth.user)
const availableTenants = ref([
  { id: 1, name: 'Al-Noor Academy', active: true },
  { id: 2, name: 'Islamic Learning Center', active: false }
])

const dashboardStats = ref([
  { id: 1, title: 'Total Students', value: '1,247', change: '+12%', icon: 'users' },
  { id: 2, title: 'Active Classes', value: '23', change: '+3', icon: 'book-open' },
  { id: 3, title: 'Attendance Rate', value: '94.2%', change: '+2.1%', icon: 'check-circle' },
  { id: 4, title: 'Revenue', value: '$12,450', change: '+8.5%', icon: 'dollar-sign' }
])
</script>`,
  },
  {
    id: 6,
    title: "Student Registration & Subscription",
    description:
      "A redesigned student registration and subscription page for educational institutions. Features dynamic timezone support, streamlined checkout process, and improved payment gateway interface with responsive design.",
    tags: ["Laravel", "Tailwind CSS", "JavaScript", "Payment Gateway", "UI/UX"],
    image: "/previews/registration/main.png",
    screenshots: [
      "/previews/registration/one.png",
      "/previews/registration/two.png",
    ],
    demo: "https://furqanshop.com/new-students/",
    code: "https://github.com/username/project",
    featured: true,
    problem:
      "The original student registration page lacked intuitive design, provided no timezone awareness for different users, and the checkout process was confusing with poor payment method organization. Students struggled with unclear pricing summaries and payment options.",
    solution:
      "Completely redesigned the UI/UX with modern Tailwind CSS styling, added local timezone detection and display for event timings, created reusable componentry, and rebuilt the checkout page with better information hierarchy. Improved payment gateway interface with cleaner method selection and enhanced form clarity.",
    impact:
      "Improved student registration conversion rates through clearer subscription options. Eliminated timezone confusion with automatic user-local time display. Streamlined checkout process reduced form abandonment. Better organized payment methods improved payment success rates.",
    techDetails:
      "Frontend: Tailwind CSS v4 for responsive design with pure CSS custom utilities. JavaScript for dynamic timezone detection using Intl API and moment-timezone integration. Laravel backend handles subscription logic and payment processing. Components include timezone-aware time display, subscription tier cards, simplified checkout summary, and payment method selector. Responsive design ensures excellent mobile and desktop experience.",
    codeSnippet: `// Timezone-aware time display component
class TimezoneDisplay {
  constructor(utcTime) {
    this.utcTime = new Date(utcTime);
  }

  getUserLocalTime() {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return this.utcTime.toLocaleString('en-US', {
      timeZone: userTimezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

// Checkout summary component
<form id="checkout-form" class="space-y-6">
  <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="font-semibold text-lg">Gold Package</h3>
        <p class="text-sm text-gray-600">1 Year Subscription</p>
      </div>
      <span class="text-2xl font-bold text-blue-600">$49.99</span>
    </div>
    
    <details class="text-sm text-gray-700">
      <summary class="cursor-pointer font-medium mb-2">Include Details</summary>
      <ul class="list-disc pl-4 space-y-1">
        <li>Full course access</li>
        <li>Monthly webinars</li>
        <li>Lifetime support</li>
      </ul>
    </details>
  </div>

  <div class="border-t pt-4">
    <div class="flex justify-between font-semibold mb-4">
      <span>Total</span>
      <span>$49.99</span>
    </div>
  </div>

  <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
    Proceed to Payment
  </button>
</form>`,
  },
  {
    id: 7,
    title: "eServices - Course Management Portal",
    description:
      "A comprehensive course management system built with Angular and NestJS. Features product/course listing, enrollment management, and real-time synchronization between frontend and backend with Firebase integration.",
    tags: ["Angular", "NestJS", "TypeScript", "MySQL", "Firebase", "REST API"],
    image: "/previews/eservices/main.png",
    screenshots: ["/previews/eservices/main.png"],
    demo: "https://eservices.fg2020.com",
    code: "https://github.com/username/project",
    featured: true,
    problem:
      "The course management portal lacked effective product listing UI, had performance issues with course data loading, and needed enhancements in user experience. Bug fixes were critical for stability, and new features were required to meet evolving business needs.",
    solution:
      "Worked as a full-stack developer to maintain and enhance the platform. Improved the course listing interface with better filtering and search capabilities. Fixed critical bugs affecting enrollment workflows. Built new features including advanced course discovery, enhanced UI/UX components, and optimized data synchronization between Angular frontend and NestJS backend.",
    impact:
      "Improved course discovery and enrollment process for users. Reduced system bugs and increased platform stability. Faster course loading with optimized API queries. Enhanced user satisfaction through better UI/UX design. Seamless real-time data updates with Firebase integration.",
    techDetails:
      "Frontend: Angular with TypeScript, reactive forms, and RxJS for state management. UI enhancements using Bootstrap and custom CSS. Backend: NestJS with modular architecture, middleware, and decorators for clean code. Database: MySQL for persistent storage with optimized queries. Firebase integration for real-time features and authentication. REST API design with proper error handling and validation. Features include advanced filtering, search optimization, course enrollment management, and user profile management.",
    codeSnippet: `// NestJS Course Service with MySQL queries
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async findAllWithFilters(
    category?: string,
    level?: string,
    searchTerm?: string,
  ) {
    let query = this.courseRepository.createQueryBuilder('course')
      .leftJoinAndSelect('course.instructor', 'instructor')
      .leftJoinAndSelect('course.students', 'students');

    if (category) {
      query = query.where('course.category = :category', { category });
    }
    if (level) {
      query = query.andWhere('course.level = :level', { level });
    }
    if (searchTerm) {
      query = query.andWhere(
        '(course.title LIKE :search OR course.description LIKE :search)',
        { search: \`%\${searchTerm}%\` }
      );
    }

    return query.orderBy('course.createdAt', 'DESC').getMany();
  }
}

// Angular Component for Course Listing
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courses$: Observable<any>;
  searchTerm$ = new Subject<string>();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.courseService.searchCourses(term))
    );
  }

  onSearch(term: string): void {
    this.searchTerm$.next(term);
  }
}`,
  },
];

// Extract all unique tags from project data
const allTags = Array.from(
  new Set(projectsData.flatMap((project) => project.tags)),
);

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [modalProject, setModalProject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [command, setCommand] = useState("ls -la ./projects");
  const [isLoading, setIsLoading] = useState(false);
  const [currentDomain, setCurrentDomain] = useState("https://example.com");

  // Set current domain on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const protocol = window.location.protocol;
      const host = window.location.host;
      setCurrentDomain(`${protocol}//${host}`);
    }
  }, []);

  // Function to handle navigation between projects in modal
  const handleNavigateToPrevious = () => {
    const currentIndex = projectsData.findIndex(
      (p) => p.id === modalProject?.id,
    );
    if (currentIndex > 0) {
      setModalProject(projectsData[currentIndex - 1]);
    }
  };

  const handleNavigateToNext = () => {
    const currentIndex = projectsData.findIndex(
      (p) => p.id === modalProject?.id,
    );
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

    let filterCommand = "ls -la ./projects";

    if (selectedTag !== "All") {
      filterCommand += ` --filter=${selectedTag}`;
    }

    if (searchTerm) {
      filterCommand += ` | grep "${searchTerm}"`;
    }

    setCommand(filterCommand);

    // Simulate a slight delay for a more realistic terminal experience
    const timer = setTimeout(() => {
      const filtered = projectsData.filter((project) => {
        const matchesTag =
          selectedTag === "All" || project.tags.includes(selectedTag);
        const matchesSearch =
          searchTerm === "" ||
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
          <CommandPrompt command={command} typeAnimation={true} />

          {/* Filter Bar */}
          <div className="border-t border-b border-[var(--color-border)] py-4 mt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1/3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-[var(--color-text-dim)] font-mono">
                      $
                    </span>
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
                  isActive={selectedTag === "All"}
                  onClick={() => setSelectedTag("All")}
                />

                {allTags.map((tag) => (
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
                <div className="text-[var(--color-accent)] font-mono animate-pulse">
                  Loading...
                </div>
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    currentDomain={currentDomain}
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
                    setSelectedTag("All");
                    setSearchTerm("");
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
            screenshots: modalProject.screenshots || [modalProject.image],
          }}
          onClose={handleCloseModal}
          onNavigatePrevious={handleNavigateToPrevious}
          onNavigateNext={handleNavigateToNext}
          hasPrevious={
            projectsData.findIndex((p) => p.id === modalProject?.id) > 0
          }
          hasNext={
            projectsData.findIndex((p) => p.id === modalProject?.id) <
            projectsData.length - 1
          }
        />
      )}
    </div>
  );
}

function TagButton({
  tag,
  isActive,
  onClick,
}: {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`px-3 py-1 font-mono text-xs ${
        isActive
          ? "bg-[var(--color-accent)] text-[var(--color-background)]"
          : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
      } border border-[var(--color-border)] transition-colors`}
      onClick={onClick}
    >
      {tag}
    </button>
  );
}

function ProjectCard({
  project,
  currentDomain,
  onOpenModal,
}: {
  project: any;
  currentDomain: string;
  onOpenModal: () => void;
}) {
  // Replace example.com with current domain
  const demoUrl = project.demo.replace("https://example.com", currentDomain);

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
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
        >
          <span>Demo</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>

        <span className="text-[var(--color-text-dim)]">|</span>

        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex  items-center gap-1 text-xs font-mono text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
        >
          <span>Code</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </a>

        <span className="text-[var(--color-text-dim)]">|</span>

        <button
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent-secondary)] hover:cursor-pointer transition-colors"
          onClick={onOpenModal}
        >
          <span>Details</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
    </TerminalCard>
  );
}
