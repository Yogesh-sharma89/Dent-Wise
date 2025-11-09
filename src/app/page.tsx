import { Button } from "@/components/ui/button";
import CTA from "@/Landing/CTA";
import Footer from "@/Landing/Footer";
import Header from "@/Landing/Header";
import Hero from "@/Landing/Hero";
import HowItWorks from "@/Landing/HowItWorks";
import Pricing from "@/Landing/Pricing";
import WhatToAsk from "@/Landing/WhatToAsk";

import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Home() {
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
