import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrandWave - تصميم مواقع احترافية",
  description: "نصمم مواقع عصرية وسريعة تساعد مشروعك يكبر - GrandWave Web Agency",
  metadataBase: new URL("https://grandwave-web.vercel.app"),
  openGraph: {
    title: "GrandWave - تصميم مواقع احترافية",
    description: "تصميم مواقع احترافية - مواقع عصرية وسريعة",
    url: "https://grandwave-web.vercel.app",
    siteName: "GrandWave",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "GrandWave",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrandWave - تصميم مواقع احترافية",
    description: "تصميم مواقع احترافية - مواقع عصرية وسريعة",
    images: ["/image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
      <Navbar />
        {children}
        
<Footer />
        </body>
    </html>
  );
}