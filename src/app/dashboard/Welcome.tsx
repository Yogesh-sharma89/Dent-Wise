"use client";
import Image from "next/image";
import  { useEffect, useState } from "react";

interface WelcomeProps{
  username:string | null
}

const WelcomeUser = ({username}:WelcomeProps) => {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    const getTimeperiod = () => {
      const hour = new Date().getHours();

      if (hour >= 0 && hour < 12) setGreet("Good Morning");
      else if (hour >= 12 && hour < 17) setGreet("Good Afternoon");
      else if (hour >= 17 && hour < 24) setGreet("Good Evening");
    };

    getTimeperiod();

    const interval = setInterval(getTimeperiod, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12 flex items-center justify-between  bg-linear-to-br from-primary/10  via-primary/5 to-background rounded-3xl p-8 border border-primary/10 ">
        
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 py-1 px-4 bg-primary/10 rounded-full border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <span className="text-sm font-medium text-primary">
            Online & Ready
          </span>
        </div>

        <div className="flex-1">
           <h1 className="lg:text-4xl text-3xl font-bold mb-3">{`${greet}, ${username}`}</h1>
          <p className="text-muted-foreground lg:max-w-[80%] max-w-[90%]">
            Talk to your AI dental assistant using natural voice commands. Get
            instant advice and professional guidance.
          </p>
        </div>
      </div>

      {/* right icon  */}

      <div className="hidden lg:block">
        <div className="w-32 h-32 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-full">
          <Image
           src={'/logo.png'}
           alt="DentWise Logo"
           width={30}
           height={30}
           className="w-16 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
