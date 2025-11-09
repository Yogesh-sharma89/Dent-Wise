import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CalendarIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden px-6 py-15 bg-linear-to-br from-muted/10 via-background to-muted/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>

      <div className="z-20 relative max-w-6xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center ">
          {/* left section  */}

          <div className="space-y-10">
            <div className="space-y-7">
              {/* badge  */}

              <div className="inline-flex my-2 items-center gap-4 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                <div className="size-2.5 rounded-full bg-primary animate-caret-blink"></div>

                <span className="text-primary font-semibold text-sm">
                  Ready When you are
                </span>
              </div>

              {/* content  */}

              <h2 className="text-2xl md:text-3xl my-3 lg:text-4xl xl:5xl tracking-tight ">
                <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent font-bold">
                  Your dental health
                </span>
                <br />
                <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold">
                  journey starts here
                </span>
              </h2>

              <div className="pt-4">
                <p className="text-lg text-muted-foreground max-w-xl  leading-relaxed">
                Join 1,200+ patients who trust our AI for instant guidance and personalized care.
              </p>
              </div>


              {/* CTA buttons  */}


              <div className="flex flex-col sm:flex-row gap-4 pt-2">

                <SignUpButton mode="modal">

              
                  <Button
                    size="lg"
                    className="px-6 py-3 font-semibold bg-linear-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  >
                    <MicIcon className="mr-2 h-4 w-4" />
                    Start free chat
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">

              
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 py-3 font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Book appointment
                  </Button>

                </SignUpButton>
              </div>

            </div>

          </div>

          {/* right - image section  */}

          <div className="relative flex justify-center lg:justify-end">

    
             <div className="relative">

            
              {/* badge  */}

              <div className="absolute -top-4 left-4 bg-linear-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>


              <div className=" relative ">

                {/* subtle glow  */}

                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl blur-xl scale-110"></div>

                 <Image
                  src="/cta.png"
                  alt="DentWise AI Assistant"
                  width={300}
                  height={300}
                  className="relative w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />


                {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-linear-to-br from-primary/10 to-primary/5 rounded-full blur-lg"></div>

              </div>

            </div>



           

          </div>


        </div>
      </div>
    </section>
  );
};

export default CTA;
