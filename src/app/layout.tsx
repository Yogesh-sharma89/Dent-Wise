import type { Metadata } from "next";
import {Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import UserSync from "@/components/UserSync";
import TanStackProvider from "@/components/Providers/TanStackQueryProvider";
import { dark } from '@clerk/themes'


// import localFont from "next/font/local";

// const Geist = localFont({
//   src: [
//     { path: "/fonts/geist/geist-v4-latin-100.woff2", weight: "100" },
//     { path: "/fonts/geist/geist-v4-latin-200.woff2", weight: "200" },
//     { path: "/fonts/geist/geist-v4-latin-300.woff2", weight: "300" },
//     { path: "/fonts/geist/geist-v4-latin-regular.woff2", weight: "400" },
//     { path: "/fonts/geist/geist-v4-latin-500.woff2", weight: "500" },
//     { path: "/fonts/geist/geist-v4-latin-600.woff2", weight: "600" },
//     { path: "/fonts/geist/geist-v4-latin-700.woff2", weight: "700" },
//     { path: "/fonts/geist/geist-v4-latin-800.woff2", weight: "800" },
//     { path: "/fonts/geist/geist-v4-latin-900.woff2", weight: "900" },
//   ],
//   variable: "--font-geist",
//   display: "swap",
// });

const geist = Geist({
   variable: "--font-geist",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise  - AI Powered Dental Assistant",
  description: "Get instant dental advice through voice calls with our AI assistant . Available 24*7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
    <ClerkProvider
     appearance={{
          // variables: {
          //   colorPrimary: "#e78a53",
          //   colorBackground: "#f3f4f6",
          //   colorText: "#111827",
          //   colorTextSecondary: "#6b7280",
          //   colorInputBackground: "#f3f4f6",
          // },
          theme:dark
        }}
    >
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased dark hide scroll-smooth`}
      >
       {/* <UserSync/> */}
       <main>
         {children}
       </main>
       <Toaster richColors/>
      </body>
    </html>
     </ClerkProvider>
     </TanStackProvider>
  );
}
