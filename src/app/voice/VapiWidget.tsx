'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useRef, useState } from 'react'

import { Card } from '@/components/ui/card';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Vapi from '@vapi-ai/web';

const VapiWidget = () => {

   const [vapi, setVapi] = useState<Vapi | null>(null);

   const [callactive , setcallactive] = useState(false)
   const [connecting,setConnecting] = useState(false)
   const [isSpeaking , setIsSpeaking] = useState(false)
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [messages,setMessages] = useState<any[]>([])
   const [callEnded,setCallEnded] = useState(false);

   //load use from cleark 
   const {user,isLoaded} = useUser();

   //message container referecne
   const messageContainerRef = useRef<HTMLDivElement>(null)

   const [barHeights,setbarHeights] = useState<number[]>([0,0,0,0,0])

   //auto scroll for messages
   useEffect(()=>{
    if(messageContainerRef.current){
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
   },[messages])


   //use effect for random voice animation 
   useEffect(()=>{
      if(!isSpeaking) return;

       const increaseBarHeight  = ()=>{
         const newHeights = Array.from({ length: 5 }, () => Math.random() * 50 + 20);

         setbarHeights(newHeights);
       }

       increaseBarHeight();

   },[isSpeaking])

   //event listeners for vapi 
   useEffect(()=>{

         const vapiInstance = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY as string);
          setVapi(vapiInstance);

     const handleCallStart = ()=>{
        console.log('call started');
        setcallactive(true)
        setConnecting(false)
        setCallEnded(false)
     }

     const handleCallEnd = ()=>{
        console.log('call-ended');
        setCallEnded(true)
        setcallactive(false)
        setConnecting(false)
     }

     const handleSpeechStart = ()=>{
        console.log('AI start talking');
        setIsSpeaking(true);
        setCallEnded(false);
        setConnecting(false)
     }

     const handleSpeechEnd = ()=>{
        console.log('AI stoppd talking')
        setIsSpeaking(false);
        setCallEnded(false);
     }

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handleMessage = (message:any)=>{
        if(message.type==='transcript' && message.transcriptType==='final'){
            const newMessage= {content:message.transcript, role:message.role}
            setMessages((prev)=>[...prev,newMessage])
        }
     }

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handleError= (error:any)=>{
        console.log('Vapi error : '+error);
        setConnecting(false);
        setcallactive(false);
     }

     const handleCallStartProgress = ()=>{
        console.log('call starting in progress');
        setConnecting(true);
        setCallEnded(false);
        setcallactive(false)
     }

    vapiInstance.on('call-start',handleCallStart)
    .on('call-end',handleCallEnd)
    .on('speech-start',handleSpeechStart)
    .on('speech-end',handleSpeechEnd)
    .on('message',handleMessage)
    .on('error',handleError)
    .on('call-start-progress',handleCallStartProgress)


    return ()=>{
        vapiInstance?.stop();
    }
   },[])

   if(!isLoaded) return null;

   //toggle call 
   const toggleCall = async()=>{

     if(!vapi){
      console.log('vapi is not initialized yet');
      return;
     }
     
    if(callactive ) vapi?.stop();

    else{
        try{
            setConnecting(true);
            setCallEnded(false);
            setMessages([]);

            const result  = await axios.post('/api/create-vapi-callid');
            const callId = result.data.id;
            console.log(callId)

            await vapi?.start(result.data.assistantId)

            
            

        }catch(err){
            console.log('Erro in starting call in toggle call ',err)
            setConnecting(false);
        }
    }
   }

  return (
    <div className='max-w-6xl mx-auto px-6 pt-20 pb-15'>

      <div className='space-y-5 text-center'>

         <h2 className='lg:text-4xl text-2xl font-bold '>Talk to your <span className='text-primary'>AI DENTAL ASSISTANT</span> </h2>


         <p className='text-muted-foreground -mt-1'>
            Have a voice conversation with our AI assistant for dental advice and guidance
         </p>

      </div>

      {/* voice call area  */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>

         {/* ai assistant card  */}

         <Card className="bg-card/90 backdrop-blur-sm border border-border overflow-hidden relative">
          <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
            {/* AI VOICE ANIMATION */}
            <div
              className={`absolute inset-0 ${
                isSpeaking ? "opacity-30" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {/* voice wave animation when speaking */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center items-center h-20">
                
                {
                  barHeights.map((h,i)=>(

                     <div
                    key={i}
                    className={`mx-1 h-16 w-1 bg-primary rounded-full ${
                      isSpeaking ? "animate-sound-wave" : ""
                    }`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: isSpeaking ? `${h}%` : "5%",
                    }}
                  />

                  ))
                }
                  
               
              </div>
            </div>

            {/* AI LOGO */}
            <div className="relative size-32 mb-8">
              <div
                className={`absolute inset-0 bg-primary opacity-10 rounded-full blur-lg ${
                  isSpeaking ? "animate-pulse" : ""
                }`}
              />

              <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center border border-border overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5"></div>
                <Image
                  src="/logo.png"
                  alt="AI Dental Assistant"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground">DentWise AI</h2>
            <p className="text-sm text-muted-foreground mt-1">Dental Assistant</p>

            {/* SPEAKING INDICATOR */}
            <div
              className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border ${
                isSpeaking ? "border-primary" : ""
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isSpeaking ? "bg-primary animate-pulse" : "bg-muted"
                }`}
              />

              <span className="text-xs text-muted-foreground">
                {isSpeaking
                  ? "Speaking..."
                  : callactive
                  ? "Listening..."
                  : callEnded
                  ? "Call ended"
                  : "Waiting..."}
              </span>
            </div>
          </div>
        </Card>

         {/* user card  */}
         <Card className='bg-card/90 transition-all duration-300 hover:border-primary/50 overflow-hidden relative border baackdrop-blur-sm border-border '>

          <div className='flex items-center justify-center flex-col p-6 relative aspect-video'>

            {/* user profile picture  */}

            <div className='relative size-34 rounded-full border-card mb-6 '>

               <Image
                src={user?.imageUrl as string}
                alt='User profile picture'
                width={48}
                height={48}
                className='size-full rounded-full object-cover'
               />

            </div>

            <h2 className='text-2xl font-bold mb-1 text-foreground'>You</h2>
            <p className=' text-muted-foreground'>{`${user?.firstName} ${user?.lastName}`}</p>

            <div className='flex items-center gap-2 px-3 py-1 border border-border rounded-full mt-4'>
               <div className='size-2 rounded-full bg-muted'></div>
               <span className='text-xs text-muted-foreground'>Ready</span>
            </div>

          </div>

         </Card>

      </div>

      {/* Message container  */}

      { messages.length>0 && 

         <div ref={messageContainerRef} className='w-full bg-card/90 backdrop-blur-lg border border-border rounded-xl p-4 mt-10 mb-8 h-75 overflow-y-auto transition-all duration-400 scroll-smooth'>

            <div  className='space-y-6'>

               {
                  messages.map((msg,index)=>(
                     <div key={index} className='animate-in fade-in duration-300'>

                        <div className='font-semibold text-sm mb-1 text-muted-foreground'>
                           {msg.role ==='assistant' ? "DentWise AI : " : 'You :'}
                        </div>
                        <p className='text-foreground font-medium'>
                           {msg.content}
                        </p>

                     </div>
                  ))
               }

               {
                  callEnded && 
                  <div className='animate-in fade-in duration-300'>

                        <div className='font-semibold text-sm mb-1 text-primary'>
                           System : 
                        </div>
                        <p className='text-foreground font-medium'>
                           Call Ended. Thank you for using our DentWise AI.
                        </p>

                     </div>
               }

            </div>
            
         </div>
      }

      {/* call button  */}

      <div className='w-full flex items-center justify-center gap-4 mt-10'>

         <Button
          className={`w-44 text-xl rounded-2xl text-white relative
            ${callactive ? 'bg-destructive hover:bg-destructive/90 '
            : callEnded ? 'bg-red-500 hover:bg-red-700'
            :'bg-primary hover:bg-primary/90'
            }
            `}

            disabled={connecting}
            onClick={toggleCall}
         >

            {
               connecting && <span className='absolute inset-0 rounded-full animate-ping bg-primary/50 opacity-75'></span>
            }

            <span>
               {
                  callactive ? 'End call':
                  connecting ? 'Connecting...' :
                  callEnded ? 'Restart Call':'Start Call'
               }
            </span>




         </Button>

      </div>
      
    </div>
  )
}

export default VapiWidget
