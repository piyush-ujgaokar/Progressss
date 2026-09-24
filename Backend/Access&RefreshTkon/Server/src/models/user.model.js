import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email Is Required"],
        unique:[true,"Email Should be Unique"],
        match:[ /^\S+@\S+\.\S+$/,"Email Format is invalid"]
    },
    password:{
        type:String,
        required:[true,"Password Is Required"]
    }
},{
    timestamps:true
})


const userModel=mongoose.model("Users",userSchema)


export default userModel