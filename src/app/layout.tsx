import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muaad Alomari | Full Stack Web Developer",
  description: "Full Stack & Mobile Developer Portfolio",
  icons: {
    icon: "/images/muaad.JPG",
    shortcut: "/images/muaad.JPG",
    apple: "/images/muaad.JPG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-bg text-content`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
