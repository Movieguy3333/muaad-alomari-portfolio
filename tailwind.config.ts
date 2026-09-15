import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Deep-space surfaces — page base + section banding + cards
                night: {
                    950: '#060609', // deepest / page base
                    900: '#0A0A10', // page base wash
                    850: '#0E0E16', // banded section
                    800: '#12121C', // card
                    750: '#171722', // elevated / hover
                    700: '#20202E', // strong border / divider
                },
                // Near-white text scale (cool tint)
                ink: {
                    DEFAULT: '#ECECF3',
                    muted: '#A3A3B8',
                    soft: '#7C7C93',
                },
                // Electric cyan — primary accent (CTAs, links, highlights)
                flux: {
                    50: '#ECFEFF',
                    100: '#CFFAFE',
                    200: '#A5F3FC',
                    300: '#67E8F9',
                    400: '#22D3EE', // main accent
                    500: '#06B6D4',
                    600: '#0891B2',
                    700: '#0E7490',
                },
                // Violet — secondary accent for gradients / dual-tone glows
                iris: {
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                },
            },
            fontFamily: {
                mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glow-flux': '0 0 0 1px rgba(34,211,238,0.20), 0 8px 40px -8px rgba(34,211,238,0.35)',
                'glow-iris': '0 0 0 1px rgba(139,92,246,0.20), 0 8px 40px -8px rgba(139,92,246,0.35)',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
export default config;
