import React, { useState } from "react";
import {
  Music2,
  Mic2,
  User,
  AtSign,
  Mail,
  Lock,
  ArrowRight,
  Headphones,
  Radio,
  Disc3,
} from "lucide-react";
import {useForm} from 'react-hook-form'


const RegisterPage = () => {
  const [role, setRole] = useState("listener");

    const {register,handleSubmit,formState:{errors},reset}=useForm()

const formHandler=(data)=>{
    

    reset()
    
}



  return (
    <div className="min-h-screen bg-[#100f14] text-white flex flex-col items-center justify-center px-4 py-8 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-8 animate-fadeIn">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c6a8ff] to-[#8c4de8] bg-clip-text text-transparent">
          MusicHub
        </h1>

        <p className="text-sm text-gray-300 mt-2">
          Join the sound revolution.
        </p>
      </div>

      {/* Register Card */}
      <div
        className="
          w-full max-w-[390px]
          bg-[#1b1a1f]
          border border-white/5
          rounded-xl
          p-7
          shadow-2xl shadow-black/30
          transition-all duration-300
          hover:shadow-purple-900/10
        "
      >

        {/* Role Selection */}
        <div className="grid grid-cols-2 gap-3 mb-4">

          {/* Listener */}
          <button
            type="button"
            onClick={() => setRole("listener")}
            className={`
              h-20 rounded-lg border
              flex flex-col items-center justify-center gap-2
              transition-all duration-300
              ${
                role === "listener"
                  ? "border-[#8d52e8] bg-[#29233b] shadow-lg shadow-purple-900/20"
                  : "border-white/10 bg-[#181719] hover:border-purple-500/40"
              }
            `}
          >
            <Music2
              size={20}
              className={
                role === "listener"
                  ? "text-[#c8adff]"
                  : "text-gray-400"
              }
            />

            <span
              className={`text-[10px] font-bold tracking-widest ${
                role === "listener"
                  ? "text-[#ddd0ff]"
                  : "text-gray-400"
              }`}
            >
              LISTENER
            </span>
          </button>

          {/* Artist */}
          <button
            type="button"
            onClick={() => setRole("artist")}
            className={`
              h-20 rounded-lg border
              flex flex-col items-center justify-center gap-2
              transition-all duration-300
              ${
                role === "artist"
                  ? "border-[#8d52e8] bg-[#29233b] shadow-lg shadow-purple-900/20"
                  : "border-white/10 bg-[#181719] hover:border-purple-500/40"
              }
            `}
          >
            <Mic2
              size={20}
              className={
                role === "artist"
                  ? "text-[#c8adff]"
                  : "text-gray-400"
              }
            />

            <span
              className={`text-[10px] font-bold tracking-widest ${
                role === "artist"
                  ? "text-[#ddd0ff]"
                  : "text-gray-400"
              }`}
            >
              ARTIST
            </span>
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formHandler)} className="space-y-3">

          {/* Full Name */}
          <div className="relative">
            <User
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Full Name"
              required
              {...register("fullName",{
                required:{
                    value:true,
                    message:"Full Name is Required"
                },
                minLength:{
                    value:6,
                    message:"Full name Should be 6 char long"
                }
              })}
              className="
                w-full h-9
                bg-[#0e0d10]
                border border-gray-700
                rounded-full
                pl-10 pr-4
                text-lg text-white
                placeholder:text-gray-600
                outline-none
                transition-all duration-200
                focus:border-[#8d52e8]
                focus:ring-1 focus:ring-[#8d52e8]/30
              "
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          {/* Username */}
          <div className="relative">
            <AtSign
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Username"
              required
                 {...register("userName",{
                required:{
                    value:true,
                    message:"User Name is Required"
                },
                minLength:{
                    value:4,
                    message:"User name Should be 4 char long"
                }})}
              className="
                w-full h-9
                bg-[#0e0d10]
                border border-gray-700
                rounded-full
                pl-10 pr-4
                text-lg text-white
                placeholder:text-gray-600
                outline-none
                transition-all duration-200
                focus:border-[#8d52e8]
                focus:ring-1 focus:ring-[#8d52e8]/30
              "
            />
            {errors.fullName && <p>{errors.userName.message}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              {...register('email',{
                required:{
                    value:true,
                    message:"Email is required"
                },

              })}
              className="
                w-full h-9
                bg-[#0e0d10]
                border border-gray-700
                rounded-full
                pl-10 pr-4
                text-lg text-white
                placeholder:text-gray-600
                outline-none
                transition-all duration-200
                focus:border-[#8d52e8]
                focus:ring-1 focus:ring-[#8d52e8]/30
              "
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="password"
              placeholder="Password"
              required
              {...register('password',{
                required:{
                    value:true,
                    message:"Password is required"
                }
              })}
              className="
                w-full h-9
                bg-[#0e0d10]
                border border-gray-700
                rounded-full
                pl-10 pr-4
                text-lg text-white
                placeholder:text-gray-600
                outline-none
                transition-all duration-200
                focus:border-[#8d52e8]
                focus:ring-1 focus:ring-[#8d52e8]/30
              "
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* Terms
          <div className="flex items-center gap-2 px-1 pt-2">
            <input
              type="checkbox"
              required
              className="
                appearance-none
                w-3 h-3
                rounded-sm
                border border-gray-700
                bg-[#151419]
                checked:bg-[#8d52e8]
                checked:border-[#8d52e8]
                cursor-pointer
              "
            />

            <p className="text-[10px] text-gray-400">
              I agree to the{" "}
              <span className="text-gray-300">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-gray-300">
                Privacy Policy
              </span>
              .
            </p>
          </div> */}

          {/* Register Button */}
          <button
            type="submit"
            className="
              w-full h-11
              mt-4
              rounded-full
              bg-gradient-to-r
              from-[#c5a7ff]
              to-[#743bdd]
              text-[#32126c]
              fon10semi4old
              text-lg
              flex items-center justify-center gap-2
              shadow-lg shadow-purple-500/20
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-purple-500/30
              active:scale-[0.98]
            "
          >
            Register
            <ArrowRight size={16} />
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{" "}
          <button
            type="button"
            className="
              text-[#c4a4ff]
              font-semibold
              hover:text-white
              transition-colors duration-200
            "
          >
            Login
          </button>
        </p>
      </div>

      {/* Bottom Icons */}
      <div className="flex items-center gap-6 mt-8 text-gray-700">
        <Disc3 size={24} />
        <Headphones size={24} />
        <Radio size={24} />
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>

    </div>
  );
};

export default RegisterPage;