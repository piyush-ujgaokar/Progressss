// import { Search, ChevronDown } from "lucide-react";
// import { useGetProductCategories } from "../../hooks/useGetAllProductHooks";

// const FilterComp = () => {

//  const {data,isPending,error}= useGetProductCategories()

//   console.log("Product categories is ",data);

//   if(isPending) return <h1>Loading Categories....</h1>

//   return (
//     <div className="mx-auto mb-8 flex w-full max-w-6xl items-center justify-between gap-4">

//       {/* Search */}
//       <div className="group relative w-full max-w-md">
//         <Search
//           size={19}
//           strokeWidth={1.8}
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 transition-colors duration-300 group-focus-within:text-[#292722]"
//         />

//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-[50vw] rounded-2xl border border-stone-200/80 bg-[#fffdfa] py-3.5 pl-11 pr-4 text-sm text-[#292722] outline-none shadow-[0_5px_20px_rgba(70,60,40,0.04)] transition-all duration-300 placeholder:text-stone-400 hover:border-stone-300 focus:border-stone-300 focus:shadow-[0_8px_25px_rgba(70,60,40,0.08)]"
//         />
//       </div>

//       {/* Categories */}
//       <div className="relative">
//         <select
//           className="cursor-pointer appearance-none rounded-2xl border border-stone-200/80 bg-[#fffdfa] py-3.5 pl-5 pr-11 text-sm font-medium text-[#292722] outline-none shadow-[0_5px_20px_rgba(70,60,40,0.04)] transition-all duration-300 hover:border-stone-300 focus:border-stone-300 focus:shadow-[0_8px_25px_rgba(70,60,40,0.08)]"
//         >
//           {data.map((item) => (
//             <option key={item.slug} value={item.slug}>
//               {item.name}
//             </option>
//           ))}
//         </select>

//         <ChevronDown
//           size={17}
//           strokeWidth={1.8}
//           className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400"
//         />
//       </div>

//     </div>
//   );
// };

// export default FilterComp;

import { Search, ChevronDown } from "lucide-react";
import { useGetProductCategories } from "../../hooks/useGetAllProductHooks";

const FilterComp = ({ search, setSearch, category, setCategory }) => {
  const { data, isPending, error } = useGetProductCategories();

  console.log("Product categories is ", data);

  if (isPending) return <h1>Loading Categories....</h1>;

  return (
    <div className="mx-auto mb-8 flex w-full max-w-6xl flex-col items-stretch justify-between gap-3 px-2 sm:flex-row sm:items-center sm:gap-4">
      {/* Search */}
      <div className="group relative w-full sm:max-w-md">
        <Search
          size={19}
          strokeWidth={1.8}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 transition-colors duration-300 group-focus-within:text-[#292722]"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-[50vw] rounded-2xl border border-stone-200/80 bg-[#fffdfa] py-3.5 pl-11 pr-4 text-sm text-[#292722] outline-none shadow-[0_5px_20px_rgba(70,60,40,0.04)] transition-all duration-300 placeholder:text-stone-400 hover:border-stone-300 focus:border-stone-300 focus:shadow-[0_8px_25px_rgba(70,60,40,0.08)]"
        />
      </div>

      {/* Categories */}
      <div className="relative w-full sm:w-auto">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-2xl border border-stone-200/80 bg-[#fffdfa] py-3.5 pl-5 pr-11 text-sm font-medium text-[#292722] outline-none shadow-[0_5px_20px_rgba(70,60,40,0.04)] transition-all duration-300 hover:border-stone-300 focus:border-stone-300 focus:shadow-[0_8px_25px_rgba(70,60,40,0.08)] sm:w-auto"
        >
          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          strokeWidth={1.8}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400"
        />
      </div>
    </div>
  );
};

export default FilterComp;
