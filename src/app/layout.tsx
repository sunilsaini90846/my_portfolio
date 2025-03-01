import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunil Kumar | Senior Software Engineer",
  description: "Portfolio of Sunil Kumar, a Senior Software Engineer specializing in Flutter and mobile app development",
  keywords: ["Flutter", "Mobile Development", "Software Engineer", "React", "Portfolio", "Developer"],
  authors: [{ name: "Sunil Kumar" }],
  creator: "Sunil Kumar",
  openGraph: {
    title: "Sunil Kumar | Senior Software Engineer",
    description: "Portfolio of Sunil Kumar, a Senior Software Engineer specializing in Flutter and mobile app development",
    url: "https://sunilkumar.dev",
    siteName: "Sunil Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
