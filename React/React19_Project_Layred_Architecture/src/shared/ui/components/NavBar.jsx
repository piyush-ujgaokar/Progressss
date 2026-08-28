


// import { Box, ShoppingCart } from "lucide-react";
// import { NavLink } from "react-router";

// const NavBar = () => {
//   return (
//     <div className="mx-auto w-[98%] mt-5 flex max-w-[100%] items-center justify-between rounded-2xl border border-stone-200/70 bg-[#faf8f2]/90 px-6 py-3 shadow-[0_10px_35px_rgba(70,60,40,0.08)] backdrop-blur-xl">

//       {/* Logo */}
//       <div className="group flex cursor-pointer items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292722] text-[#faf8f2] shadow-md transition duration-300 group-hover:scale-105 group-hover:rotate-[-6deg]">
//           <Box size={20} strokeWidth={1.8} />
//         </div>

//         <div>
//           <h1 className="text-lg font-bold tracking-tight text-[#292722]">
//             CloudCart
//           </h1>
//           <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400">
//             Essentials
//           </p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="hidden items-center gap-1 rounded-full border border-stone-200 bg-white/60 p-1 md:flex">

//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
//               isActive
//                 ? "bg-[#292722] text-white shadow-md"
//                 : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
//             }`
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/product"
//           className={({ isActive }) =>
//             `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
//               isActive
//                 ? "bg-[#292722] text-white shadow-md"
//                 : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
//             }`
//           }
//         >
//           Shop
//         </NavLink>

//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
//               isActive
//                 ? "bg-[#292722] text-white shadow-md"
//                 : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
//             }`
//           }
//         >
//           About
//         </NavLink>

//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-2">

//         {/* Cart */}
//         <NavLink to={'/cart'} className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#292722] hover:shadow-md">
//           <ShoppingCart
//             size={19}
//             strokeWidth={1.8}
//             className="transition-transform duration-300 group-hover:scale-110"
//           />

//           <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#292722] px-1 text-[9px] text-white">
//             2
//           </span>
//         </NavLink>

//         {/* Box */}
//         <NavLink to={'/order'} className="hidden h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#292722] hover:shadow-md sm:flex">
//           <Box
//             size={19}
//             strokeWidth={1.8}
//             className="transition-transform duration-300 group-hover:rotate-12"
//           />
//         </NavLink>

//         {/* Divider */}
//         <div className="mx-2 hidden h-7 w-px bg-stone-200 sm:block" />

//         {/* Logout */}
//         <button className="rounded-xl bg-[#292722] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b3933] hover:shadow-lg">
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// };

// export default NavBar;




import { Box, ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative mx-auto mt-5 w-[98%]">

      {/* Navbar */}
      <div className="flex items-center justify-between rounded-2xl border border-stone-200/70 bg-[#faf8f2]/90 px-6 py-3 shadow-[0_10px_35px_rgba(70,60,40,0.08)] backdrop-blur-xl">

        {/* Logo */}
        <div className="group flex cursor-pointer items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292722] text-[#faf8f2] shadow-md transition duration-300 group-hover:scale-105 group-hover:rotate-[-6deg]">
            <Box size={20} strokeWidth={1.8} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-[#292722]">
              CloudCart
            </h1>

            <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400">
              Essentials
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-stone-200 bg-white/60 p-1 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#292722] text-white shadow-md"
                  : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#292722] text-white shadow-md"
                  : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#292722] text-white shadow-md"
                  : "text-stone-500 hover:bg-stone-100 hover:text-[#292722]"
              }`
            }
          >
            About
          </NavLink>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-2 md:flex">

          <NavLink
            to="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#292722] hover:shadow-md"
          >
            <ShoppingCart size={19} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#292722] px-1 text-[9px] text-white">
              2
            </span>
          </NavLink>

          <NavLink
            to="/order"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#292722] hover:shadow-md"
          >
            <Box
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </NavLink>

          <div className="mx-2 h-7 w-px bg-stone-200" />

          <button className="rounded-xl bg-[#292722] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b3933] hover:shadow-lg">
            Logout
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 text-[#292722] md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-[75px] z-50 rounded-2xl border border-stone-200 bg-[#faf8f2] p-4 shadow-xl md:hidden">

          <div className="flex flex-col gap-2">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100"
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100"
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100"
            >
              About
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart size={18} />
                Cart
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#292722] px-1 text-[10px] text-white">
                2
              </span>
            </NavLink>

            <NavLink
              to="/order"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100"
            >
              <Box size={18} />
              Orders
            </NavLink>

            <div className="my-1 h-px bg-stone-200" />

            <button className="rounded-xl bg-[#292722] px-4 py-3 text-left text-sm font-medium text-white">
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;