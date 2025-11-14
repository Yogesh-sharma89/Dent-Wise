import { NextRequest, NextResponse } from "next/server";

export async function POST(){

 if(!process.env.NEXT_PUBLIC_VAPI_API_KEY || !process.env.VAPI_ASSISTANT_ID){
  return NextResponse.json({
    message:'Missing required environment variables',
    code:500
  })
 }

  try{

    const res = await fetch("https://api.vapi.ai/call/web", {
            method: "POST",
            headers: {
            "Authorization": `Bearer ${process.env.VAPI_API_KEY}`, // SECRET KEY!
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            assistantId: process.env.VAPI_ASSISTANT_ID
            })
        });

        const data = await res.json();
        return NextResponse.json(data);

  }catch(err){
    console.log('Error while talking with vapi api '+err)
    return NextResponse.json({
      message:'Internal sever erro while fetching vapi api ',
      status:500
    })
  }
}