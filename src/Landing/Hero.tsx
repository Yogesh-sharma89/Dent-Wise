import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { Calendar, Mic, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden  w-full pt-10">
      {/* grid background  */}

      <div className="absolute overflow-hidden pointer-events-none w-full inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5 ">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* gradient circles  */}

      <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      {/* main content  */}

      {/* this div for making content visible above grid background  */}

      <div className="relative z-10 px-6 w-full">
        {/* next div for making it to remain in center and responsive  */}
        <div className="max-w-6xl mx-auto">
          {/* now making grid to place content  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* left content  */}

            <div className="space-y-12">
              <div className="space-y-4">
                {/* badge  */}

                <div className="inline-flex my-2 items-center gap-4 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="size-2.5 rounded-full bg-primary animate-caret-blink"></div>

                  <span className="text-primary font-semibold text-sm">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* main heading  */}

                <h1 className="text-3xl  md:text-4xl lg:text-[54px]  font-bold tracking-tight">
                  <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                <p className="text-md text-muted-foreground font-medium leading-relaxed max-w-xl">
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>

                {/* CTA buttons */}
                <div className="flex items-center gap-5 sm:flex-row flex-col">
                  {/* talk button  */}
                  <SignUpButton mode="modal">
                    <Button className="flex items-center gap-4">
                      <Mic />
                      <span className="font-semibold">Try voice chat</span>
                    </Button>
                  </SignUpButton>

                  <SignUpButton mode="modal">
                    <Button
                      className="flex items-center gap-4"
                      variant={"outline"}
                    >
                      <Calendar />
                      <span className="font-semibold">Book appointment</span>
                    </Button>
                  </SignUpButton>
                </div>

                {/* user testimonial  */}

                <div className="flex items-center gap-7 mt-6">
                  {/* Avatars  */}
                  <div className="flex -space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Jessica Davis"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      alt="Sam Miller"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                      alt="Anna Lopez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Rodriguez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                      alt="Katie Lee"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                  </div>

                  {/* ratings  */}
                  <div className="flex flex-col gap-1 justify-center">
                    {/* stars  */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className="w-4 h-4 text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>

                      <span className="text-sm text-foreground font-bold">
                        4.9/5
                      </span>
                    </div>

                    {/* trusted  */}
                    <p className="text-sm text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-bold text-foreground">
                        1,200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right content  */}

            <div className="relative lg:pl-12">

              {/* gradient orbs  */}
              <div className="absolute -top-3 -left-2 w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-5 -right-6 w-32 h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              
                    <Image src={'/hero.png'} alt="DentWise AI" width={200} height={200}  className="w-[82%] h-auto"/>
              


            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
