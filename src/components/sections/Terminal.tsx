"use client";

import { TerminalLine } from "@/types";
import { cliConfig, personalInfo, experience, projects, skills } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>([
        { type: "output", content: cliConfig.welcomeMessage },
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when lines change
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);


    const executeCommand = (command: string): string => {
        const parts = command.trim().toLowerCase().split(" ");
        const cmd = parts[0];
        const args = parts.slice(1);

        switch (cmd) {
            case "help":
                return cliConfig.helpText;
            case "ls":
                return `${cliConfig.listings.join("\n")}`;
            case "pwd":
                return cliConfig.currentDir;
            case "cat":
                if (args.length === 0) return "Usage: cat <file>";
                const file = args[0];
                if (file in cliConfig.files) {
                    return cliConfig.files[file as keyof typeof cliConfig.files];
                }
                return `cat: ${file}: No such file or directory`;
            case "about":
                return `Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}

${personalInfo.bio}

Experience: ${experience.length} roles
Projects: ${projects.length} projects`;
            case "clear":
                setLines([]);
                setInput("");
                return "";
            case "skills":
                return `Languages: ${skills.languages.join(", ")}
Frontend: ${skills.frontend.join(", ")}
Backend: ${skills.backend.join(", ")}
Databases: ${skills.databases.join(", ")}
AI: ${skills.ai.join(", ")}
Cloud: ${skills.cloud.join(", ")}`;
            case "projects":
                return projects.map(p => `${p.title}: ${p.tags.join(", ")}`).join("\n");
            case "experience":
                return experience.map(e => `${e.role} @ ${e.company}`).join("\n");
            case "contact":
                return `Email: ${personalInfo.email}
LinkedIn: ${personalInfo.links.linkedin}
GitHub: ${personalInfo.links.github}
Resume: ${personalInfo.links.resume}`;
            case "":
                return "";
            default:
                return `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user input
        const newLines: TerminalLine[] = [...lines, { type: "input", content: `$ ${input}` }];

        // Special case for clear command
        if (input.trim().toLowerCase() === "clear") {
            setLines([]);
            setInput("");
            return;
        }

        // Execute command and add output
        const output = executeCommand(input);
        if (output) {
            newLines.push({ type: "output", content: output });
        }

        setLines(newLines);
        setHistory(prev => [input.trim(), ...prev]);
        setHistoryIndex(-1);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setHistoryIndex(prev => {
                const next = Math.min(prev + 1, history.length - 1);
                setInput(history[next] ?? "");
                return next;
            });
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setHistoryIndex(prev => {
                const next = prev - 1;
                setInput(next < 0 ? "" : history[next] ?? "");
                return Math.max(next, -1);
            });
        }
    };

    return (
        <section id="terminal" aria-label="Interactive command-line portfolio explorer" onClick={() => inputRef.current?.focus({ preventScroll: true })} className="py-12 px-4 sm:px-6 lg:px-8 bg-bg">
            <div className="max-w-4xl mx-auto">
                <div className="mb-5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-line" />
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-content-faint">
                        Explore via terminal — type <span className="text-accent">help</span>
                    </p>
                    <span className="h-px flex-1 bg-line" />
                </div>
                <div className="terminal-container overflow-hidden shadow-2xl shadow-black/50">
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-accent-2/70" aria-hidden="true" />
                        <span className="h-3 w-3 rounded-full bg-accent-deep" aria-hidden="true" />
                        <span className="h-3 w-3 rounded-full bg-accent/70" aria-hidden="true" />
                        <span className="ml-2 font-mono text-xs text-content-faint">
                            muaad@portfolio&nbsp;— zsh
                        </span>
                    </div>
                    <div
                        ref={terminalRef}
                        role="log"
                        aria-live="polite"
                        aria-atomic="false"
                        aria-label="Terminal output"
                        className="min-h-96 max-h-96 overflow-y-auto p-6"
                    >
                        {lines.map((line, index) => (
                            <div key={index} className="mb-2">
                                {line.type === "input" ? (
                                    <div className="text-accent font-semibold">
                                        {line.content}
                                    </div>
                                ) : (
                                    <div className="text-content-muted whitespace-pre-wrap break-words">
                                        {line.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex items-center bg-bg-soft border border-accent/25 rounded-lg px-4 py-2.5 focus-within:border-accent/60 transition-colors">
                        <span className="text-accent font-semibold mr-2" aria-hidden="true">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent text-content outline-none font-mono terminal-input placeholder:text-content-faint"
                            placeholder="Type command here..."
                            aria-label="Terminal command input. Type help for available commands."
                            autoComplete="off"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}



