



const CoinCard = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      notation: "compact",
    }).format(value);
  };

  return (
    <div className="bg-[#171a24] border border-gray-700 rounded-2xl p-5 text-white hover:border-blue-500 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="font-semibold text-lg">{coin.name}</h2>
            <p className="text-gray-400 text-sm uppercase">
              {coin.symbol}
            </p>
          </div>
        </div>

        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm">
          Rank #{coin.market_cap_rank}
        </span>
      </div>

      {/* Price */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">
          {formatCurrency(coin.current_price)}
        </h1>

        <p
          className={`mt-2 text-sm font-medium ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "▲" : "▼"}{" "}
          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          <span className="text-gray-400 ml-2">
            (24h)
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-5" />

      {/* Market Information */}
      <div className="grid grid-cols-2 gap-5">

        <div>
          <p className="text-gray-400 text-sm">Market Cap</p>
          <h3 className="font-semibold mt-1">
            {formatCurrency(coin.market_cap)}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">24h Volume</p>
          <h3 className="font-semibold mt-1">
            {formatCurrency(coin.total_volume)}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">24h High</p>
          <h3 className="font-semibold text-green-400 mt-1">
            {formatCurrency(coin.high_24h)}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">24h Low</p>
          <h3 className="font-semibold text-red-400 mt-1">
            {formatCurrency(coin.low_24h)}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default CoinCard;