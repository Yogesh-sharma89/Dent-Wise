import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import UserSync from "@/components/UserSync";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise  - AI Powered Dental Assistant",
  description: "Get instant dental advice through voice calls with our AI assistant . Available 24*7",
};

/**
 * Root layout component that wraps the app with authentication, fonts, and global UI elements.
 *
 * Renders a ClerkProvider configured with theme variables, an html/body scaffold that applies
 * global fonts and utility classes, a UserSync initializer, the main content area, and a Toaster.
 *
 * @param children - The application UI to render inside the layout's `<main>` element.
 * @returns The top-level JSX layout containing the authentication provider, page scaffold, and global UI components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     appearance={{
          variables: {
            colorPrimary: "#e78a53",
            colorBackground: "#f3f4f6",
            colorText: "#111827",
            colorTextSecondary: "#6b7280",
            colorInputBackground: "#f3f4f6",
          },
        }}
    >

   
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark hide scroll-smooth`}
      >
       <UserSync/>
       <main>
         {children}
       </main>
       <Toaster richColors/>
      </body>
    </html>
     </ClerkProvider>
  );
}