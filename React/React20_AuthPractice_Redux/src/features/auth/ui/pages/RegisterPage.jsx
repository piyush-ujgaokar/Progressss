import { useAuth } from "../../hooks/useAuthHook";

const RegisterPage = () => {

    const {register,handleSubmit,errors,navigate,registerSubmit}=useAuth()
  
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(registerSubmit)}  className="space-y-5">

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>

            <input
              {...register("username",{
                required:"Name is required",
                minLength:{
                    value:6,
                    message:"Name must have 6 Char"
                }
            })}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300
              outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
            />
              {errors.username && <p className="text-red-600">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
             {...register("email",{
                required:"Email is required",
                pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Invalid Email"
                }
            })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300
              outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
            />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              {...register("password",{
                required:"Password is required",
                minLength:{
                    value:6,
                    message:"Password must have 6 Char"
                }
            })}
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300
              outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
            />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600
            text-white font-semibold hover:bg-blue-700
            transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span onClick={()=>navigate('/auth/login')}  className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;