"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Calendar, Crown, HomeIcon, Mic } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Navbar = () => {
  const { user ,isLoaded } = useUser();
  const pathname = usePathname();


  return (
    <nav className="fixed inset-0 z-50 px-4 py-2 border-b border-border/60 bg-background/80 backdrop-blur-md h-16">
      {/* wrapper div  */}

      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between h-full">
        {/* left navbar  */}

        <div className="flex items-center gap-6">
          <Link href={"/dashboard"}>
            <Image
              src={"/logo.png"}
              alt="DentWise logo"
              width={32}
              height={32}
              className="w-11 h-11 mr-1"
            />
          </Link>

          {/* nav links  */}

          <Link href={"/dashboard"} className="flex items-center">
            <div
              className={`flex items-center gap-2 text-sm 
              ${
                pathname === "/dashboard"
                  ? "text-foreground hover:text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              } 
            `}
            >
              <HomeIcon className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
          </Link>

          <Link href={"/appointments"}>
            <div
              className={`flex items-center gap-2 text-sm 
              ${
                pathname === "/appointments"
                  ? "text-foreground hover:text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              } 
            `}
            >
              <Calendar className="w-4 h-4" />
              <span>Appointments</span>
            </div>
          </Link>

          <Link href={"/voice"}>
            <div
              className={`flex items-center gap-2 text-sm 
              ${
                pathname === "/voice"
                  ? "text-foreground hover:text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              } 
            `}
            >
              <Mic className="w-4 h-4" />
              <span>Voice</span>
            </div>
          </Link>

          <Link href={"/pro"}>
            <div
              className={`flex items-center gap-2 text-sm 
              ${
                pathname === "/pro"
                  ? "text-foreground hover:text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              } 
            `}
            >
              <Crown className="w-4 h-4" />
              <span>Pro</span>
            </div>
          </Link>
        </div>

        {/* right side navbar */}

        <div className="flex items-center gap-6">
          <div className="hidden items-end lg:flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">
              {user?.firstName} {user?.lastName}
            </span>

            <span className="text-xs text-muted-foreground tracking-tight">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
          </div>

          <div>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "ring-2 ring-primary rounded-full", // tailwind allowed
                  userButtonPopoverCard: "bg-black text-white",
                },
              }}

             
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
