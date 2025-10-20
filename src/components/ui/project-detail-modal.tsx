'use client';

import { useEffect, useState } from 'react';
import { TerminalWindow } from './terminal-window';
import { CommandPrompt } from './command-prompt';
import { PixelButton } from './pixel-button';
import { ASCIIArt } from './ascii-art';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    demo: string;
    code: string;
    featured: boolean;
    problem?: string;
    solution?: string;
    impact?: string;
    techDetails?: string;
    screenshots?: string[];
  };
  onClose: () => void;
  onNavigatePrevious?: () => void;
  onNavigateNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export function ProjectDetailModal({ 
  project, 
  onClose,
  onNavigatePrevious,
  onNavigateNext,
  hasPrevious = false,
  hasNext = false,
}: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'gallery'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrevious && onNavigatePrevious) {
        onNavigatePrevious();
      } else if (e.key === 'ArrowRight' && hasNext && onNavigateNext) {
        onNavigateNext();
      } else if (e.key === '1') {
        setActiveTab('overview');
      } else if (e.key === '2') {
        setActiveTab('details');
      } else if (e.key === '3') {
        setActiveTab('gallery');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [onClose, hasPrevious, hasNext, onNavigatePrevious, onNavigateNext]);
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!project.screenshots || project.screenshots.length === 0) return;
    
    if (direction === 'prev') {
      setCurrentImageIndex(
        currentImageIndex === 0 
          ? project.screenshots.length - 1 
          : currentImageIndex - 1
      );
    } else {
      setCurrentImageIndex(
        currentImageIndex === project.screenshots.length - 1 
          ? 0 
          : currentImageIndex + 1
      );
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="w-full max-w-6xl max-h-[90vh] overflow-auto"
        role="dialog"
        aria-labelledby="project-detail-title"
        aria-modal="true"
      >
        <TerminalWindow 
          title={project.title} 
          showControls={true}
        >
          <div className="p-4">
            <CommandPrompt
              command={`cat ./projects/${project.title} | more`}
              typeAnimation={true}
              showCursor={false}
            />
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 
                  id="project-detail-title"
                  className="text-2xl font-bold text-[var(--color-accent)]"
                >
                  {project.title}
                </h2>
                
                <div className="flex gap-2">
                  {hasPrevious && onNavigatePrevious && (
                    <button 
                      onClick={onNavigatePrevious}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] p-2"
                      aria-label="Previous project"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                  )}
                  
                  {hasNext && onNavigateNext && (
                    <button 
                      onClick={onNavigateNext}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] p-2"
                      aria-label="Next project"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  )}
                  
                  <button 
                    onClick={onClose}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] p-2"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-[var(--color-border)] mb-6">
                <TabButton 
                  isActive={activeTab === 'overview'} 
                  onClick={() => setActiveTab('overview')}
                  shortcut="1"
                >
                  Overview
                </TabButton>
                <TabButton 
                  isActive={activeTab === 'details'} 
                  onClick={() => setActiveTab('details')}
                  shortcut="2"
                >
                  Technical Details
                </TabButton>
                <TabButton 
                  isActive={activeTab === 'gallery'} 
                  onClick={() => setActiveTab('gallery')}
                  shortcut="3"
                >
                  Gallery
                </TabButton>
              </div>
              
              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[var(--color-accent-secondary)] mb-4">Description</h3>
                        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="border border-[var(--color-accent)] px-2 py-1 text-xs text-[var(--color-accent)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 mt-6">
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <PixelButton variant="primary" size="sm">
                              <span>Live Demo</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </PixelButton>
                          </a>
                          
                          <a 
                            href={project.code} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <PixelButton variant="secondary" size="sm">
                              <span>Source Code</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                              </svg>
                            </PixelButton>
                          </a>
                        </div>
                      </div>
                      
                      <div className="md:w-[40%]">
                        <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] h-64 flex items-center justify-center">
                          {/* Placeholder for main project image */}
                          <div className="text-[var(--color-text-dim)]">[Project Screenshot]</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Problem & Solution */}
                    {(project.problem || project.solution || project.impact) && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-[var(--color-border)]">
                        {project.problem && (
                          <div>
                            <h3 className="font-mono text-[var(--color-accent-secondary)] mb-2">Problem</h3>
                            <p className="text-sm text-[var(--color-text-secondary)]">{project.problem}</p>
                          </div>
                        )}
                        
                        {project.solution && (
                          <div>
                            <h3 className="font-mono text-[var(--color-accent-secondary)] mb-2">Solution</h3>
                            <p className="text-sm text-[var(--color-text-secondary)]">{project.solution}</p>
                          </div>
                        )}
                        
                        {project.impact && (
                          <div>
                            <h3 className="font-mono text-[var(--color-accent-secondary)] mb-2">Impact</h3>
                            <p className="text-sm text-[var(--color-text-secondary)]">{project.impact}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'details' && (
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-accent-secondary)] mb-4">Technical Details</h3>
                    
                    {project.techDetails ? (
                      <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                        {project.techDetails}
                      </p>
                    ) : (
                      <div className="border-2 border-dashed border-[var(--color-border)] p-6 text-center">
                        <p className="text-[var(--color-text-dim)]">
                          Technical details coming soon...
                        </p>
                        <p className="text-[var(--color-text-secondary)] mt-2">
                          $ echo "Check back later for detailed technical documentation"
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-8">
                      <h4 className="text-md font-bold text-[var(--color-accent)] mb-2">Technologies Used</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {project.tags.map((tech, index) => (
                          <div 
                            key={index} 
                            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 flex items-center"
                          >
                            <span className="text-[var(--color-accent)] mr-2">›</span>
                            <span className="text-[var(--color-text-primary)]">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-md font-bold text-[var(--color-accent)] mb-4">Code Snippet</h4>
                      <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-4 rounded overflow-x-auto">
                        <pre className="font-mono text-sm text-[var(--color-text-primary)]">
                          <code>{`// Example code snippet
function ProjectComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    const fetchData = async () => {
      const response = await api.get('/data');
      setData(response.data);
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="project-container">
      {data.map(item => (
        <ProjectItem key={item.id} data={item} />
      ))}
    </div>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-accent-secondary)] mb-4">Project Gallery</h3>
                    
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <div>
                        <div className="relative border-2 border-[var(--color-border)] bg-[var(--color-background)] h-80 flex items-center justify-center mb-4">
                          {/* Gallery image */}
                          <div className="text-[var(--color-text-dim)] absolute inset-0 flex items-center justify-center">
                            [Screenshot {currentImageIndex + 1} of {project.screenshots.length}]
                          </div>
                          
                          {/* Navigation arrows */}
                          <button 
                            onClick={() => navigateGallery('prev')}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-background)] text-[var(--color-accent)] p-2 opacity-80 hover:opacity-100"
                            aria-label="Previous image"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                          </button>
                          
                          <button 
                            onClick={() => navigateGallery('next')}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-background)] text-[var(--color-accent)] p-2 opacity-80 hover:opacity-100"
                            aria-label="Next image"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>
                        
                        {/* Thumbnail navigation */}
                        <div className="flex overflow-x-auto gap-2 pb-2">
                          {project.screenshots.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`border-2 min-w-16 h-16 flex-shrink-0 
                                ${currentImageIndex === index 
                                  ? 'border-[var(--color-accent)]' 
                                  : 'border-[var(--color-border)]'}`
                              }
                              aria-label={`View screenshot ${index + 1}`}
                              aria-current={currentImageIndex === index}
                            >
                              <div className="w-full h-full bg-[var(--color-background)] flex items-center justify-center text-xs text-[var(--color-text-dim)]">
                                {index + 1}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-[var(--color-border)] p-6 text-center">
                        <ASCIIArt 
                          art="computer" 
                          color="var(--color-text-dim)" 
                          animate={false}
                        />
                        <p className="text-[var(--color-text-dim)] mt-4">
                          No screenshots available yet
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex justify-between">
                <div className="text-xs text-[var(--color-text-dim)] font-mono">
                  Press <kbd className="px-1 border border-[var(--color-border)] mx-1">Esc</kbd> to close
                </div>
                
                <PixelButton 
                  onClick={onClose}
                  variant="primary"
                  size="sm"
                >
                  Close
                </PixelButton>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  shortcut?: string;
}

function TabButton({ children, isActive, onClick, shortcut }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        py-2 px-4 font-mono text-sm border-b-2 transition-colors
        ${isActive 
          ? 'border-[var(--color-accent)] text-[var(--color-accent)]' 
          : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
        }
      `}
    >
      {shortcut && (
        <span className="text-[var(--color-text-dim)] mr-1">[{shortcut}]</span>
      )}
      {children}
    </button>
  );
}