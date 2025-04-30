import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from 'flowbite-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me A Chai - Fund your projects",
  description: "This website is a crowdfunding plaform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900`}>
        <SessionWrapper>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <div className="mt-auto">
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}