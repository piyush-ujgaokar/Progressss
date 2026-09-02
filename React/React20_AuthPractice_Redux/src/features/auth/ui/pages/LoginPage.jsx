import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {

  const {register,handleSubmit,errors,navigate,loginSubmit}=useAuth()


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
            {...register("username",{
                required:"UserName is required",
            })}
              type="text"
              id="name"
              placeholder="Enter your email"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 
              outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition"
            />
            {errors.username && <p className="text-red-600">{errors.username.message}</p>}
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
              placeholder="Enter your password"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 
              outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 
            text-white font-semibold hover:bg-blue-700 
            transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span onClick={()=>navigate('/auth/register')} className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;