import mongoose from "mongoose";



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Email is Invalid"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{
    timestamps:true
})

const userModel=mongoose.model("users",userSchema)


export default userModel