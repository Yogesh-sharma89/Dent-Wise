import { NextResponse } from "next/server";

export async function POST(){
  try{

    const res = await fetch("https://api.vapi.ai/call/web", {
            method: "POST",
            headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_VAPI_API_KEY}`, // SECRET KEY!
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
    return;
  }
}