import { connectToDb } from "@/lib/db";
import userModel from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    await connectToDb();

    const alreadyExist = await userModel.findOne({ email });

    if (alreadyExist) {
      return NextResponse.json(
        {
        message: "User already Exists",
      },{status:400});
    }

    if(password.length<6){
        return NextResponse.json({
            message:"password must be greater that 6 char"
        },{status:400})
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const user=await userModel.create({
        name,email,password:hashedPassword
    })

    return NextResponse.json({
        message:"User registered Successfully",
        user:user
    },{status:201})

  } catch (error) {
    return NextResponse.json({
        message:`error while registering ${error}`
    })
  }
}
