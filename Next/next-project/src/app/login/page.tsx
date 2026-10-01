"use client";

import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()

  const handleSignIn=async (e:React.FormEvent)=>{
    e.preventDefault()
    try {
            const response=await signIn('credentials',{
                email,password,redirect:false
            })

            router.push('/')
            
    } catch (error) {
        console.log(error);
        
    }
  }


  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create an Account</h1>
          <p className="text-zinc-400 mt-2">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-zinc-800"></div>
          <span className="text-sm text-zinc-500">OR</span>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full cursor-pointer py-3 rounded-lg bg-white hover:bg-zinc-100 text-zinc-900 font-semibold flex items-center justify-center gap-3 transition"
            onClick={async()=>{
                await signIn("google",{
                   callbackUrl:'/'
                })
            }}
       >
          <FcGoogle />
          Sign In With google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-zinc-400 mt-6" onClick={()=>router.push("/register")}>
          Create an account?{" "}
          <span className="text-indigo-400 cursor-pointer hover:text-indigo-300 font-medium">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
