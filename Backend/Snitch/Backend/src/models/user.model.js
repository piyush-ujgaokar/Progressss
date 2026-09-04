import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Name is Required"],
    minLength:6,
    maxLength:30
  },
  email: {
    type: String,
    required: [true,"Email Is Required"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
  },
  password:{
    type:String,
    required:[true,"Password is Required"],
    select:false
  },
  role:{
    type:String,
    required:true,
    enum:['user','seller'],
    default:'user'
  }
},{
    timestamps:true
});


const userModel=mongoose.model('users',userSchema)


export default userModel
