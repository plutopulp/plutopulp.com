import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ToastProvider from "@/components/ui/ToastProvider";
import Navbar from "@/components/layout/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yvan Buggy | Portfolio",
  description: "Personal portfolio and contact information for Yvan Buggy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationProvider>
            <Navbar />
            <main>{children}</main>
          </NavigationProvider>
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
