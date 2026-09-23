import { NextRequest, NextResponse } from "next/server"


export const GET=async ()=>{
    return NextResponse.json({
        name:"piyush",
        age:20
    })
}

export const POST=async(request:NextRequest)=>{
    const {name,email,password}=await request.json()

    console.log(name,email,password)

    return NextResponse.json({
        name:name,
        email:email,
        password:password,
        message:"Data fetched Successfully"
    })
}