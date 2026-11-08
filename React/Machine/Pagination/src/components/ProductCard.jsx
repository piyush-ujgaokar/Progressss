const ProductCard = ({ product }) => {

  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      {/* Product Image */}
      <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-xs text-gray-500">{product.category}</p>

        <h2 className="mt-1 truncate text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 text-xl font-bold text-gray-900">
          ${product.price}
        </p>

        <button className="mt-3 w-full rounded-lg bg-black py-2 text-sm font-medium text-white hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;