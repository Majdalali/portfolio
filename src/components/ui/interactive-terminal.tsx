'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/components/providers/theme-provider';
import { TerminalWindow } from './terminal-window';
import { PixelButton } from './pixel-button';
import { CommandPrompt } from './command-prompt';
import { MatrixAnimation } from './matrix-animation';

// Command history and auto-completion
interface CommandHistory {
    commands: string[];
    position: number;
    currentInput?: string;
}

// Available commands
const AVAILABLE_COMMANDS = [
    'help',
    'about',
    'projects',
    'skills',
    'contact',
    'clear',
    'reset',
    'theme',
    'ls',
    'cat',
    'whoami',
    'neofetch',
    'matrix',
    'snake',
    'exit'
];

// Welcome message ASCII art
const WELCOME_MESSAGE = `
 __          __  _                            _          
 \\ \\        / / | |                          | |         
  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___ | |_  ___   
   \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\| __|/ _ \\  
    \\  /\\  /  __/ | (_| (_) | | | | | | (_) | |_ | __/  
     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___/ \\__|\\___|  
                                                                                      
                         _____                    _             _ 
                        |_   _|                  (_)           | |
                          | | ___ _ __ _ __ ___  _ _ __   __ _| |
                          | |/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
                          | |  __/ |  | | | | | | | | | | (_| | |
                          \\_/\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
                                                             
Type 'help' to see available commands.
Press Tab for auto-completion.
Use Up/Down arrows to navigate command history.
`;

export function InteractiveTerminal() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([WELCOME_MESSAGE]);
    const [commandHistory, setCommandHistory] = useState<CommandHistory>({
        commands: [],
        position: -1,
    });
    const [tabCompletions, setTabCompletions] = useState<string[]>([]);
    const [showCompletions, setShowCompletions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();

    // Matrix animation state
    const [showMatrix, setShowMatrix] = useState(false);

    // Focus input on load
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Load command history from localStorage
    useEffect(() => {
        const savedHistory = localStorage.getItem('terminal-command-history');
        if (savedHistory) {
            try {
                const parsedHistory = JSON.parse(savedHistory);
                setCommandHistory({
                    commands: parsedHistory,
                    position: -1,
                });
            } catch (error) {
                console.error('Failed to parse command history', error);
            }
        }
    }, []);

    // Scroll to bottom when output changes
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    // Save command history to localStorage
    const saveCommandHistory = (commands: string[]) => {
        // Keep only last 50 commands
        const limitedHistory = commands.slice(-50);
        localStorage.setItem('terminal-command-history', JSON.stringify(limitedHistory));
    };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setShowCompletions(false);
    };

    // Handle key down events (for history, tab completion, and command execution)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle arrow keys for command history
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateHistory('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateHistory('down');
        }

        // Handle Tab for auto-completion
        else if (e.key === 'Tab') {
            e.preventDefault();
            handleTabCompletion();
        }

        // Handle Enter to execute command
        else if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand();
        }

        // Close completions on Escape
        else if (e.key === 'Escape') {
            setShowCompletions(false);
        }
    };

    // Navigate command history
    const navigateHistory = (direction: 'up' | 'down') => {
        if (commandHistory.commands.length === 0) return;

        let newPosition = commandHistory.position;

        if (direction === 'up') {
            // If at the end, save current input
            if (newPosition === -1) {
                setCommandHistory(prev => ({
                    ...prev,
                    currentInput: input
                }));
            }

            newPosition = Math.min(commandHistory.commands.length - 1, newPosition + 1);
        } else {
            newPosition = Math.max(-1, newPosition - 1);
        }

        setCommandHistory(prev => ({ ...prev, position: newPosition }));

        if (newPosition === -1) {
            setInput(commandHistory.currentInput || '');
        } else {
            setInput(commandHistory.commands[commandHistory.commands.length - 1 - newPosition]);
        }
    };

    // Handle Tab completion
    const handleTabCompletion = () => {
        if (input === '') return;

        const completions = AVAILABLE_COMMANDS.filter(cmd =>
            cmd.startsWith(input.split(' ')[0])
        );

        if (completions.length === 1) {
            // If there's only one completion, use it
            setInput(completions[0]);
        } else if (completions.length > 1) {
            // Show all possible completions
            setTabCompletions(completions);
            setShowCompletions(true);
        }
    };

    // Apply a completion from the suggestions
    const applyCompletion = (completion: string) => {
        setInput(completion);
        setShowCompletions(false);
        inputRef.current?.focus();
    };

    // Start matrix animation
    const startMatrixAnimation = () => {
        setShowMatrix(true);
    };

    // Exit matrix animation
    const exitMatrixAnimation = () => {
        setShowMatrix(false);
    };

    // Execute command
    const executeCommand = () => {
        if (!input.trim()) return;

        // Add command to output
        const newOutput = [...output, `developer@portfolio:~$ ${input}`];

        // Process command
        const args = input.trim().split(' ');
        const command = args[0].toLowerCase();
        const commandArgs = args.slice(1);

        // Add result based on command
        let commandResult: string;

        switch (command) {
            case 'help':
                commandResult = getHelpText();
                break;
            case 'about':
                commandResult = getAboutText();
                break;
            case 'projects':
                commandResult = getProjectsText();
                break;
            case 'skills':
                commandResult = getSkillsText();
                break;
            case 'contact':
                commandResult = getContactText();
                break;
            case 'clear':
                setOutput([]);
                setInput('');
                return;
            case 'reset':
                setOutput([WELCOME_MESSAGE])
                setInput('');
                return;
            case 'theme':
                commandResult = handleThemeCommand(commandArgs);
                break;
            case 'ls':
                commandResult = getLsOutput();
                break;
            case 'cat':
                commandResult = getCatOutput(commandArgs);
                break;
            case 'whoami':
                commandResult = 'You are a visitor exploring my terminal portfolio.\nFeel free to look around and discover more commands!';
                break;
            case 'neofetch':
                commandResult = getNeofetchOutput();
                break;
            case 'matrix':
                commandResult = 'Starting Matrix animation...\nPress any key to exit.';
                // Set timeout to allow the command result to be shown before animation
                setTimeout(() => {
                    setShowMatrix(true);
                }, 500);
                break;
            case 'snake':
                commandResult = 'Snake game is not implemented yet.\nCheck back later for this easter egg!';
                break;
            case 'exit':
                commandResult = 'Exiting terminal...\nRedirecting to home page.';
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
                break;
            default:
                commandResult = `Command not found: ${command}\nType 'help' to see available commands.`;
        }

        // Update output with command result
        setOutput([...newOutput, commandResult]);

        // Add command to history
        const newHistory = [
            ...commandHistory.commands,
            input
        ];
        setCommandHistory({
            commands: newHistory,
            position: -1,
        });
        saveCommandHistory(newHistory);

        // Clear input
        setInput('');
        setShowCompletions(false);
    };

    // Theme command handler
    const handleThemeCommand = (args: string[]): string => {
        const availableThemes = ['terminal', 'cyberpunk', 'neon', 'matrix'];

        if (args.length === 0) {
            return `Current theme: ${theme}\nAvailable themes: ${availableThemes.join(', ')}\nUsage: theme [name]`;
        }

        const requestedTheme = args[0].toLowerCase();

        if (!availableThemes.includes(requestedTheme)) {
            return `Theme "${requestedTheme}" not found.\nAvailable themes: ${availableThemes.join(', ')}`;
        }

        setTheme(requestedTheme as any);
        return `Theme switched to ${requestedTheme}`;
    };

    // Get help text
    const getHelpText = () => {
        return `
AVAILABLE COMMANDS:

${'help'.padEnd(12)} - Show this help message
${'about'.padEnd(12)} - Display about information
${'projects'.padEnd(12)} - List portfolio projects
${'skills'.padEnd(12)} - Show skills and technologies
${'contact'.padEnd(12)} - Display contact information
${'clear'.padEnd(12)} - Clear terminal output
${'reset'.padEnd(12)} - Reset terminal to initial state
${'theme'.padEnd(12)} - View or change theme
${'ls'.padEnd(12)} - List directory contents
${'cat'.padEnd(12)} - Display file contents
${'whoami'.padEnd(12)} - Display visitor info
${'neofetch'.padEnd(12)} - Display system info
${'matrix'.padEnd(12)} - Run Matrix animation
${'snake'.padEnd(12)} - Play Snake game
${'exit'.padEnd(12)} - Return to home page

TIP: Use Tab for command completion and arrow keys for history.
`;
    };

    // Get about text
    const getAboutText = () => {
        return 'This is my terminal-style portfolio.\nTo learn more about me, type "cat about.txt" or visit the About page.';
    };

    // Get projects text
    const getProjectsText = () => {
        return 'Projects:\n- Project 1: Description\n- Project 2: Description\n- Project 3: Description\n\nFor details, type "cat projects.txt" or visit the Projects page.';
    };

    // Get skills text
    const getSkillsText = () => {
        return 'Skills:\n- Frontend: React, Next.js, TypeScript, Tailwind\n- Backend: Node.js, Express, GraphQL\n- Tools: Git, Docker, AWS\n\nFor more, visit the Skills page.';
    };

    // Get contact text
    const getContactText = () => {
        return 'Contact:\n- Email: example@example.com\n- GitHub: github.com/username\n- LinkedIn: linkedin.com/in/username\n\nVisit the Contact page to send a message.';
    };

    // Get ls output
    const getLsOutput = () => {
        return `
drwxr-xr-x  1 developer  portfolio    0 Jan 1 2024 about/
drwxr-xr-x  1 developer  portfolio    0 Jan 1 2024 projects/
drwxr-xr-x  1 developer  portfolio    0 Jan 1 2024 skills/
drwxr-xr-x  1 developer  portfolio    0 Jan 1 2024 contact/
-rw-r--r--  1 developer  portfolio  512 Jan 1 2024 about.txt
-rw-r--r--  1 developer  portfolio  512 Jan 1 2024 projects.txt
-rw-r--r--  1 developer  portfolio  512 Jan 1 2024 skills.txt
-rw-r--r--  1 developer  portfolio  512 Jan 1 2024 resume.pdf
-rw-r--r--  1 developer  portfolio  512 Jan 1 2024 README.md
`;
    };

    // Get cat output
    const getCatOutput = (args: string[]): string => {
        if (args.length === 0) {
            return 'Usage: cat <filename>';
        }

        const filename = args[0].toLowerCase();

        switch(filename) {
            case 'about.txt':
                return 'I am a passionate web developer with expertise in modern frontend and backend technologies. I love building interactive, accessible, and performant web applications that solve real problems.';
            case 'projects.txt':
                return 'PROJECT 1: E-Commerce Platform\n- Built with Next.js, TypeScript, and Stripe\n- Features: user authentication, product catalog, cart functionality\n\nPROJECT 2: Task Management App\n- Built with React, Redux, and Firebase\n- Features: real-time updates, drag-and-drop interface';
            case 'skills.txt':
                return 'FRONTEND\n- React, Next.js, Vue.js\n- TypeScript, JavaScript\n- CSS, Sass, Tailwind CSS\n\nBACKEND\n- Node.js, Express\n- MongoDB, PostgreSQL\n- GraphQL, REST APIs\n\nDEVOPS\n- Docker, AWS\n- CI/CD pipelines\n- Git, GitHub Actions';
            case 'contact.txt':
                return 'Email: developer@example.com\nGitHub: github.com/developer\nLinkedIn: linkedin.com/in/developer\nTwitter: @developer\n\nFeel free to reach out for collaboration opportunities or just to say hello!';
            case 'resume.pdf':
                return '[This would be a downloadable PDF in a real implementation]\nUse the "download resume" command or visit the About page to download my resume.';
            default:
                return `File not found: ${filename}`;
        }
    };

    // Get neofetch output
    const getNeofetchOutput = () => {
        return `
           .-/+oossssoo+/-.               developer@portfolio
        \`:+ssssssssssssssssss+:\`           -------------------
      -+ssssssssssssssssssyyssss+-         OS: Web Browser
    .ossssssssssssssssss dMMMNy sssso.     Host: GitHub Pages
   /sssssssssss hdmmNNmmyNMMMMh ssssss/    Kernel: JavaScript
  +sssssssss hMMMMNNNNNNNNNNNMh ssssssss+  Uptime: Since 2023
 /ssssssssss dMMMNNNNNNNNNNNNMy sssssssss/ Packages: React, Next.js, TypeScript
.ssssssssssss NNNNNNNNNNNNNNNo ssssssssss. Shell: Terminal.js
+ssssssssssss NNNNNNNNNNNNNNo ssssssssssss+ Resolution: Responsive
ossssssssssss NNNNNNNNNNNNNo sssssssssssso Theme: ${theme}
ossssssssssss NNNNNNNNNNNN ysssssssssssso
+ssssssssssss NNNNNNNNNNN ssssssssssssss+  CPU: Brain.js
.ssssssssssssso NNNNNNN sssssssssssssss.   Memory: Limitless
 /sssssssssssssss NNNN sssssssssssssss/
  +sssssssssssssss N ssssssssssssssss+
   \\ssssssssssssssssssssssssssssssss/
    .ossssssssssssssssssssssssssso.
      -+sssssssssssssssssssssss+-
        \`:+ssssssssssssssssss+:\`
           .-/+oossssoo+/-.
`;
    };

    return (
        <>
            {showMatrix && <MatrixAnimation onExit={exitMatrixAnimation} />}
            <TerminalWindow title="interactive-terminal" scanlines className="min-h-[500px]">
                <div className="flex flex-col h-full">
                    <div
                        ref={outputRef}
                        className="flex-1 whitespace-pre-wrap font-mono text-sm overflow-auto pb-4"
                    >
                        {output.map((line, index) => (
                            <div key={index} className="mb-2">{line}</div>
                        ))}
                    </div>
                    <div className="relative">
                        <div className="flex items-center">
                            <CommandPrompt
                                user="developer"
                                host="portfolio"
                                directory="~"
                                showCursor={false}
                            />
                            <div className="flex-1 relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    className="w-full caret-[var(--color-accent)] bg-transparent border-none outline-none font-mono text-sm text-[var(--color-text-primary)]"
                                    aria-label="Terminal input"
                                    autoFocus
                                />
                                {/*<span*/}
                                {/*    className="cursor-blink h-4 w-2 bg-[var(--color-accent)] absolute top-1/2 -translate-y-1/2"*/}
                                {/*    style={{*/}
                                {/*        left: `${input.length * 0.6}ch`,*/}
                                {/*        display: document.activeElement === inputRef.current ? 'block' : 'none'*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </div>
                        </div>

                        {showCompletions && tabCompletions.length > 0 && (
                            <div className="absolute top-full left-0 mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] z-10">
                                {tabCompletions.map((completion, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 font-mono text-sm cursor-pointer hover:bg-[var(--color-background)]"
                                        onClick={() => applyCompletion(completion)}
                                    >
                                        {completion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                            {/*<div className="mt-4 flex justify-between">*/}
                            {/*    <PixelButton*/}
                            {/*        size="sm"*/}
                            {/*        variant="ghost"*/}
                            {/*        onClick={() => executeCommand()}*/}
                            {/*    >*/}
                            {/*        Execute*/}
                            {/*    </PixelButton>*/}

                            {/*    <PixelButton*/}
                            {/*        size="sm"*/}
                            {/*        variant="ghost"*/}
                            {/*        onClick={() => setOutput([WELCOME_MESSAGE])}*/}
                            {/*    >*/}
                            {/*        Reset*/}
                            {/*    </PixelButton>*/}
                            {/*</div>*/}
                        </div>
            </TerminalWindow>
        </>
);
}
