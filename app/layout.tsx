import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Create Next App", template: "%s | My Next App" },
  description: "This is a sample application for tutorial purposes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Global Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-700 bg-background">
              <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    MyApp
                  </span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  © {new Date().getFullYear()} MyApp. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                  <a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-indigo-500 transition-colors">Terms</a>
                  <a href="#" className="hover:text-indigo-500 transition-colors">Contact</a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
