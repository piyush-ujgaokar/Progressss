import { NextRequest, NextResponse } from "next/server";


export const GET=async(request:NextRequest)=>{
   const query=request.nextUrl.searchParams.get("q")


    return NextResponse.json({
        message:"Data fetched Successfully",
        data:query
    })
    
}