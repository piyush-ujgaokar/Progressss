import { NextRequest, NextResponse } from "next/server";

interface ParamKey{
    params:{
        id:string
    }
}


export const GET= async(request:NextRequest,{params}:ParamKey) => {

const {id}=await params

console.log(id);

return NextResponse.json({
    id:id,
    message:"This is a dynamic routing in backend"
})

}

