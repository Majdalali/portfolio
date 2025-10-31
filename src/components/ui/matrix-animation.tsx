'use client';

import { useEffect, useRef, useState } from 'react';

interface MatrixAnimationProps {
  onExit: () => void;
}

export function MatrixAnimation({ onExit }: MatrixAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%&*()=+{}[]<>?/\\|~'.split('');
    
    // Column settings
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Drops - position y coordinate for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Animation loop
    const draw = () => {
      if (!isActive) return;
      
      // Black BG with opacity for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Move drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      
      requestAnimationFrame(draw);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(draw);
    
    // Handle keyboard events to exit
    const handleKeyDown = () => {
      setIsActive(false);
      onExit();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleKeyDown);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, [isActive, onExit]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <canvas ref={canvasRef} className="block" />
      <div className="absolute bottom-4 left-0 w-full text-center text-[var(--color-accent)] font-mono text-sm">
        Press any key to exit
      </div>
    </div>
  );
}