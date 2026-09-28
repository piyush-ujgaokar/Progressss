import bcrypt from 'bcryptjs'
import mongoose, { models } from 'mongoose'



interface IUser{
    _id?:mongoose.Types.ObjectId
    name:string,
    email:string,
    password:string
    createdAt?:Date,
    updatedAt?:Date
}


const userSchema=new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is reqired"],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Email is Invalid"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    }
},{
    timestamps:true
})


userSchema.pre("save",async function(next){
    if(this.isModified("password")){
       this.password=await bcrypt.hash(this.password,10)
    }
    next()
})


const userModel=models?.User || model<IUser>("User",userSchema)


export default userModel