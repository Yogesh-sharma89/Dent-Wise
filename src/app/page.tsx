import { Button } from "@/components/ui/button";
import CTA from "@/Landing/CTA";
import Footer from "@/Landing/Footer";
import Header from "@/Landing/Header";
import Hero from "@/Landing/Hero";
import HowItWorks from "@/Landing/HowItWorks";
import Pricing from "@/Landing/Pricing";
import WhatToAsk from "@/Landing/WhatToAsk";
import { AddUserToDb } from "@/lib/actions/user";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


/**
* Renders the Home page composed of the header, hero, feature sections, pricing, CTA, and footer in a single layout.
* @example
* Home()
* <div className="min-h-screen bg-background">...</div>
* @param {{void}} {{none}} - No parameters.
* @returns {{JSX.Element}} Return a JSX element representing the Home page layout.
**/
export default async function Home() {

   const user = await currentUser();

   
     await AddUserToDb();

    if(user?.primaryEmailAddress?.emailAddress === process.env.ADMIN_EMAIL) redirect('/admin')

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
