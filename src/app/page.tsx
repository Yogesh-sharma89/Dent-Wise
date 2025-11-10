import { Button } from "@/components/ui/button";
import CTA from "@/Landing/CTA";
import Footer from "@/Landing/Footer";
import Header from "@/Landing/Header";
import Hero from "@/Landing/Hero";
import HowItWorks from "@/Landing/HowItWorks";
import Pricing from "@/Landing/Pricing";
import WhatToAsk from "@/Landing/WhatToAsk";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


/**
 * Render the public Home page; redirect authenticated users to "/dashboard".
 *
 * Retrieves the current user and performs a redirect to '/dashboard' when a user is present.
 *
 * @returns The JSX element containing the Home page layout (Header, Hero, HowItWorks, WhatToAsk, Pricing, CTA, and Footer).
 */
export default async function Home() {

   const user = await currentUser();

   if(user) redirect('/dashboard')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}