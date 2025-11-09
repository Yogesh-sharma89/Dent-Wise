import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhatToAsk = () => {
  return (
    <section className="relative px-6 py-5  overflow-hidden bg-linear-to-b from-background to-muted/10 ">
      <div className="relative max-w-6xl mx-auto z-10 px-4">
        {/* header  */}
        <div className="text-center mb-20">
          {/* badge  */}
          <div className="inline-flex items-center  px-5 py-2 gap-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-8">
            <MessageCircleIcon className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              AI-Powered Conversations
            </span>
          </div>

          {/* heading  */}
          <h2 className="lg:text-6xl md:text-4xl text-3xl tracking-wide font-bold mb-8">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-linear-to-r  from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          {/* description - paragraph  */}
          <p className="text-muted-foreground leading-relaxed mb-15 font-medium  max-w-3xl mx-auto md:text-lg lg:text-xl ">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real dental cases
          </p>

          {/* questions and answers  */}

          <div className="grid lg:grid-cols-2   grid-cols-1 gap-12 items-start">
            {/* left side chat  */}

            <div className="space-y-11">
              <div className="space-y-6">
                <h3 className="font-bold text-left text-xl">
                  Common questions our AI answers:
                </h3>

                {/* chat bubble 1  */}

                <div className="group relative">
                  <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-500  hover:shadow-2xl hover:shadow-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MessageSquareIcon className="text-primary" />
                      </div>

                      <div className="space-y-3 flex-1 ">
                        <div className="bg-primary/5 text-left px-4 py-3 border border-primary/10 rounded-xl">
                          <p className="font-semibold text-primary ">
                            {`"My Tooth hurts When I bite down."`}
                          </p>
                        </div>

                        <div className="px-5 py-3 bg-muted/30 rounded-2xl text-left border border-muted-foreground/20">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Get immediate advice on pain management, possible
                            causes, and when to see a dentist urgently
                          </p>


                          <div className="flex items-center gap-4 mt-5">

                            <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                              Instant Response
                            </span>

                             <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                              Pain Relief
                            </span>

                          </div>

                        </div>




                      </div>


                    </div>
                  </div>
                </div>

                 
                  {/* char bubble 2 */}
                 <div className="group relative">

                  <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-500  hover:shadow-2xl hover:shadow-primary/20">

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MessageSquareIcon className="text-primary" />
                      </div>

                      <div className="space-y-3 flex-1 ">
                        <div className="bg-primary/5 text-left px-4 py-3 border border-primary/10 rounded-xl">
                          <p className="font-semibold text-primary ">
                            {`"How much does teeth whitening cost?"`}
                          </p>
                        </div>

                        <div className="px-5 py-3 bg-muted/30 rounded-2xl text-left border border-muted-foreground/20">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                          Compare treatment options, pricing ranges, and find the best whitening
                          solution for your budget
                          </p>


                          <div className="flex items-center gap-4 mt-5">

                            <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                            Cost Analysis
                            </span>

                             <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                                Treatment Options
                            </span>

                          </div>

                        </div>




                      </div>


                    </div>
                  </div>
                </div>

              {/* chat bubble 3 */}
                <div className="group relative">
                  <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-500  hover:shadow-2xl hover:shadow-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MessageSquareIcon className="text-primary" />
                      </div>

                      <div className="space-y-3 flex-1 ">
                        <div className="bg-primary/5 text-left px-4 py-3 border border-primary/10 rounded-xl">
                          <p className="font-semibold text-primary ">
                            {`"When should I replace my filling?"`}
                          </p>
                        </div>

                        <div className="px-5 py-3 bg-muted/30 rounded-2xl text-left border border-muted-foreground/20">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                              Learn about filling lifespan, warning signs of wear, and replacement
                          timing guidance
                          </p>


                          <div className="flex items-center gap-4 mt-5">

                            <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                              Preventive Care
                            </span>

                             <span className="text-center bg-primary/10  backdrop-blue-xl text-xs border border-primary/10 px-3 py-1 text-primary rounded-full">
                             Maintanence
                            </span>

                          </div>

                        </div>




                      </div>


                    </div>
                  </div>
                </div>

              </div>

            </div>


            {/* right side image  */}

            <div className="bg-linear-to-br from-card/90 to-card/60 rounded-2xl backdrop-blur-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 ">

            <div className="flex items-center justify-center w-full h-full">

              <Image
               src={'/confused.png'}
               alt="AI assitant"
               width={500}
               height={500}
               className="w-full h-auto object-contain max-w-lg"
              />


            </div>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
};

export default WhatToAsk;
