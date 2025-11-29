import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
* Renders the footer for the DentWise landing page with product, support, and legal links.
* @example
* Footer()
* <footer>...JSX element...</footer>
* @param {{void}} {{none}} - This component takes no props.
* @returns {{JSX.Element}} Footer JSX element for the landing page.
**/
const Footer = () => {
  return (
    <footer className=" border-t bg-muted/30">
      <div className="max-w-6xl mx-auto py-10">

        <div className="grid md:grid-cols-4 gap-12 items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <Image
                src={"/logo.png"}
                alt="DentWise Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">DentWise</span>
            </div>

            <p className="text-muted-foreground text-sm font-medium">
              AI-powered dental assistance that actually helps.
            </p>

            <div>
              <Link href={'https://github.com/Yogesh-sharma89/Dent-Wise/releases/download/v1.0.0/Dentwise.Setup.1.0.0.exe'}>
              <Button>
                Download for Windows
              </Button>

              </Link>
            </div>
          </div>

          {/* product column  */}

          <div>
            <h3 className="font-bold mb-4 mt-1">Product</h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="#" className="hover:text-foreground">
                  How It Works
                </a>
              </p>

              <p>
                <a href="#" className="hover:text-foreground">
                 Pricing
                </a>
              </p>

               <p>
              <a href='#' className='hover:text-foreground'>FAQ</a>
             </p>

            </div>
          </div>

          {/* support column  */}

           <div>
            <h3 className="font-bold mb-4 mt-1">Support</h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="#" className="hover:text-foreground">
                  Help center
                </a>
              </p>

              <p>
                <a href="#" className="hover:text-foreground">
                Contact us
                </a>
              </p>

               <p>
              <a href='#' className='hover:text-foreground'>Status</a>
             </p>

            </div>

           </div>

           {/* legal column  */}

          <div>
            <h3 className="font-bold mb-4 mt-1">Legal</h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </p>

              <p>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </p>

               <p>
              <a href='#' className='hover:text-foreground'>Security</a>
             </p>

            </div>

          </div>




        </div>

        <div className="border-t mt-15 pt-10 text-sm text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DentWise. Built for real people with real dental problem or questions.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
