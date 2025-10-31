"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { PixelButton } from "@/components/ui/pixel-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { ASCIIArt } from "@/components/ui/ascii-art";
import { CommandPrompt } from "@/components/ui/command-prompt";
import { Kbd } from "@/components/ui/kbd";
import { TerminalModal } from "@/components/ui/terminal-modal";

export const HeroSection = () => {
    const [showTerminalModal, setShowTerminalModal] = useState(false);
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
                                            <ASCIIArt
                                                art="terminal"
                                                animate={true}
                                                animateSpeed={20}
                                                className="text-[var(--color-accent)] transform translate-x-1/2 p-5 border-[var(--color-accent)] border-1 scale-75 rounded-md text-xs w-1/2"
                                            />
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] tracking-tight">
                                            <TextAnimate text="Majd Alali" />
                                        </h1>
                                    </div>
                                    <h2 className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium tracking-wide">
                                        <TextAnimate
                                            text="Web Developer & UI Enthusiast"
                                            delay={0}
                                            speed={1}
                                        />
                                    </h2>
                                </div>

                                <div className="py-4 border-y border-[var(--color-border)] text-[var(--color-text-primary)]">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                        <TextAnimate
                                            text="Building pixel-perfect interfaces and crafting engaging user experiences with modern web technologies."
                                            delay={0}
                                            speed={1}
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
                                        Svelte • Vue.js • TypeScript • Tailwind CSS • Next.js •
                                        Node.js • SQL
                                    </div>
                                    <CommandPrompt
                                        user="portfolio"
                                        host="dev"
                                        directory="~"
                                        command="cat tools/tools.txt"
                                        className="text-[var(--color-text-primary)]"
                                    />
                                    <div className="text-[var(--color-text-secondary)] pl-4 py-2 border border-dashed border-[var(--color-border)] my-2 px-2 bg-[var(--color-background)] font-mono">
                                        Figma • Git • Docker • Postman • VsCode • Vercel • Supabase
                                    </div>
                                    <CommandPrompt
                                        user="portfolio"
                                        host="dev"
                                        directory="~"
                                        command="ls projects/"
                                        className="text-[var(--color-text-primary)]"
                                    />
                                    <div className="text-[var(--color-accent-secondary)] pl-4 py-2 border border-dashed border-[var(--color-border)] my-2 px-2 bg-[var(--color-background)] font-mono">
                                        educational-platform/ dashboard-ui/ portfolio-site/
                                        mobile-app/ hr-portal/
                                    </div>
                                    <CommandPrompt
                                        user="portfolio"
                                        host="dev"
                                        directory="~"
                                        command="cat interests/file.txt"
                                        className="text-[var(--color-text-primary)]"
                                    />
                                    <div className="text-[var(--color-text-secondary)] pl-4 py-2 border border-dashed border-[var(--color-border)] my-2 px-2 bg-[var(--color-background)] font-mono">
                                        Road Trips • Star Wars • Fleetwood Mac • Radiohead • 🧉 •
                                        Film
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {NAV_ITEMS.filter((item) => item.name !== "Home").map(
                                        (item) => (
                                            <Link href={item.href} key={item.name}>
                                                <PixelButton
                                                    variant={
                                                        item.name === "Contact" ? "primary" : "secondary"
                                                    }
                                                    size="sm"
                                                >
                                                    {item.name}
                                                </PixelButton>
                                            </Link>
                                        ),
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="animate-pulse h-2 w-2 rounded-full bg-[var(--color-accent)]"></div>
                                        <p className="text-[var(--color-accent)] text-sm font-mono animate-pulse">
                                            Press any key to continue...
                                        </p>
                                    </div>
                                    <div className="text-[var(--color-text-dim)] text-sm font-mono">
                                        <p>
                                            Press{" "}
                                            <Kbd className="bg-[var(--color-surface)] text-[var(--color-text border-[var(--color-border)] border px-1 rounded-sm">
                                                Shift
                                            </Kbd>{" "}
                                            +{" "}
                                            <Kbd className="bg-[var(--color-surface)] text-[var(--color-text border-[var(--color-border)] border px-1 rounded-sm">
                                                ?
                                            </Kbd>{" "}
                                            to view keyboard shortcuts
                                        </p>
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
                                        <span className="text-[var(--color-success)]">
                      ✓ Open to work
                    </span>
                                    </div>
                                </div>
                            </TerminalWindow>

                            <TerminalWindow title="stats.txt" showControls={false}>
                                <div className=" text-xs mb-4">
                                    <ASCIIArt art="code" color="var(--color-text-secondary)" />
                                </div>
                                <div className="space-y-4 py-2">
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                                            <span>Projects Completed</span>
                                            <span>25+</span>
                                        </div>
                                        <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                                            <div
                                                className="bg-[var(--color-accent)] h-full"
                                                style={{ width: "85%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                                            <span>Technical Skills</span>
                                            <span>18</span>
                                        </div>
                                        <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                                            <div
                                                className="bg-[var(--color-accent-secondary)] h-full"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                                            <span>Client Satisfaction</span>
                                            <span>4.9/5</span>
                                        </div>
                                        <div className="w-full bg-[var(--color-background)] h-2 rounded-sm overflow-hidden">
                                            <div
                                                className="bg-[var(--color-success)] h-full"
                                                style={{ width: "98%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </TerminalWindow>
                            <TerminalWindow
                                title="interactive-terminal"
                                showControls={false}
                                className="hover:cursor-pointer hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]"
                                onClick={() => setShowTerminalModal(true)}
                            >
                                <div className="flex flex-col  gap-3 ">
                                    <div className="flex items-center gap-2">
                                        <div className="animate-pulse h-2 w-2 rounded-full bg-[var(--color-accent)]"></div>
                                        <p className="text-[var(--color-accent)] text-sm font-mono animate-pulse">
                                            Click here to start terminal...
                                        </p>
                                    </div>

                                </div>
                            </TerminalWindow>
                        </div>
                    </div>
                </div>
            </div>
            {showTerminalModal && (
                <TerminalModal onClose={() => setShowTerminalModal(false)} />
            )}
        </section>
    );
};
