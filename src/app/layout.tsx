import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { KeyboardNavProvider } from '@/components/providers/keyboard-nav-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SkipToContent } from '@/components/ui/skip-to-content';
import { ToastProvider } from '@/components/ui/keyboard-toast';
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Developer Portfolio | Terminal Style",
  description: "A retro terminal-style developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ToastProvider>
              <TooltipProvider>
            <KeyboardNavProvider>
              <SkipToContent />
              <Header />
              <main id="main-content" className="min-h-[calc(100vh-4rem-12rem)]">
                {children}
              </main>
              <Footer />
          </KeyboardNavProvider>
              </TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
