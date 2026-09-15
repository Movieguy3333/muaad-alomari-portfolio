import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Muaad Alomari | Full Stack Web Developer",
  description: "Full Stack & Mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable} bg-night-950 text-ink antialiased`}
        suppressHydrationWarning
      >
        {/* Ambient dual-tone glow + fine grid, fixed behind all content */}
        <div className="ambient-backdrop" aria-hidden="true">
          <div className="ambient-grid" />
        </div>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
