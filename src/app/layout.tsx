import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "DentWise  - AI Powered Dental Assistant",
  description: "Get instant dental advice through voice calls with our AI assistant . Available 24/7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
