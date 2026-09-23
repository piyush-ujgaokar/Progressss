import { NextRequest, NextResponse } from "next/server";

interface ParamsType{
    params:{
        id:string
    }
}

export const GET = async (request:NextRequest,{params}:ParamsType) => {
    const {id}=await params
    console.log(id);
    
    return NextResponse.json({
        postId:id,
        message:"ur is the neeter"
    })

};
