
'use client'
import { Button } from "@/components/ui/button";

import { SignedOut, SignInButton, SignUpButton , SignedIn , SignOutButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose, DialogTitle
} from "@/components/ui/dialog"
import { toast } from "sonner";


/**
* Renders the DentWise landing page header with logo, navigation links, and authentication controls.
* @example
* Header()
* <nav className="...">...JSX header markup...</nav>
* @param {Object} props - Optional component props (unused).
* @returns {JSX.Element} The Header JSX element for the landing page.
**/
const Header = () => {

    

  
  return (
    <nav className=" fixed inset-0 z-100 px-6 py-2 border-b border-border/80 h-16 bg-background/80 backdrop-blur-md">
      {/* logo */}
      <div className="max-w-6xl flex mx-auto items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="DentWise logo"
            width={30}
            height={30}
            className="w-12"
          />
          <span className="font-semibold text-lg">DentWise</span>
        </Link>

        {/* for making navlink responsive */}

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        <div className="flex items-center gap-8 ">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"ghost"}>
                Login
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button >Signup</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Dialog>
                <DialogTrigger asChild>
                     <Button>Logout</Button>

                </DialogTrigger>

                <DialogContent className="sm:max-w-[438px] sm:max-h-[380px]">
                    <DialogHeader>
                        <DialogTitle>Logout from DentWise</DialogTitle>
                    </DialogHeader>

                    <DialogDescription>
                        Are you sure want to be logout from DentWise ? 
                    </DialogDescription>

                    <DialogFooter>
                        <DialogClose asChild>
                           <Button variant={'ghost'} size={'sm'}>Cancel</Button>
                        </DialogClose>

                        <SignOutButton>
                            <Button size={'sm'} onClick={()=>setTimeout(()=>toast.success('Logged out successfully'),1200)}>Yes</Button>
                        </SignOutButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
           
               
           
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
