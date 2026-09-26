import mongoose from "mongoose";

interface IUser{
    _id?:mongoose.Types.ObjectId
    name:string,
    image:string,
    email:string,
    password:string,
    createdAt?:Date,
    updatedAt?:Date

}

const userSchema=new mongoose.Schema<IUser>({
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
    },
    image:{
        type:String
    }
},{
    timestamps:true
})

const userModel=mongoose.models.users || mongoose.model("users",userSchema)


export default userModel