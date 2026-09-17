import type { Config } from "tailwindcss";

/**
 * Semantic color layer. The actual palette lives in src/app/globals.css as CSS
 * custom properties (RGB channel tokens); these names just resolve to them, so
 * globals.css stays the single source of truth. Using rgb(var(--x) / <alpha>)
 * keeps Tailwind opacity modifiers working (e.g. bg-accent/20, border-line/60).
 */
const token = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Surfaces
                bg: {
                    DEFAULT: token("--bg"),
                    soft: token("--bg-soft"),
                },
                surface: {
                    DEFAULT: token("--surface"),
                    2: token("--surface-2"),
                },
                line: {
                    DEFAULT: token("--border"),
                    strong: token("--border-strong"),
                },
                // Text
                content: {
                    DEFAULT: token("--text"),
                    muted: token("--text-muted"),
                    faint: token("--text-faint"),
                },
                // Accent (cyan family) + indigo gradient partner
                accent: {
                    DEFAULT: token("--accent"),
                    bright: token("--accent-bright"),
                    deep: token("--accent-deep"),
                    2: token("--accent-2"),
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
