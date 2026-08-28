import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const isInStock = product.stock > 0;

  return (
    <div className="group w-full max-w-sm rounded-[26px] border border-stone-200/70 bg-[#fffdfa] p-3 shadow-[0_8px_30px_rgba(70,60,40,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(70,60,40,0.12)]">

      {/* Image */}
      <div className="relative flex h-84 items-center justify-center overflow-hidden rounded-[20px] bg-[#f5f2ea]">

        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-[#292722] px-3 py-1 text-xs font-semibold text-white">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-stone-500 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-red-500">
          <Heart size={17} strokeWidth={1.8} />
        </button>

        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[75%] w-[75%] object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-1 pt-4">

        {/* Category + Stock */}
        <div className="flex items-center justify-between">

          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
            {product.category}
          </p>

          {/* Stock Status */}
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
              isInStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isInStock ? "In Stock" : "Out of Stock"}
          </span>

        </div>

        {/* Title */}
        <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-[#292722]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                className={
                  star <= Math.round(product.rating)
                    ? "fill-[#292722] text-[#292722]"
                    : "text-stone-300"
                }
              />
            ))}
          </div>

          <span className="text-sm font-medium text-stone-500">
            {product.rating}
          </span>

        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">

          <span className="text-xl font-bold text-[#292722]">
            ${product.price}
          </span>

          <span className="text-sm text-stone-400 line-through">
            $
            {(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(2)}
          </span>

        </div>

        {/* Add To Cart */}
        <button
          disabled={!isInStock}
          className={`mt-4 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
            isInStock
              ? "cursor-pointer bg-[#292722] text-white hover:-translate-y-0.5 hover:bg-[#3b3933] hover:shadow-lg active:scale-[0.98]"
              : "cursor-not-allowed bg-stone-200 text-stone-400"
          }`}
        >
          {isInStock ? "Add to Cart" : "Out of Stock"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;