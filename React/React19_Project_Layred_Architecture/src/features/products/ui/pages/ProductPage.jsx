import {
  useGetAllProduct,
  useGetProductsByCategory,
} from "../../hooks/useGetAllProductHooks";
import FilterComp from "../components/FilterComp";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { data, isPending, search, setSearch } = useGetAllProduct();

  let {
    data: productByCategory,
    setCategory,
    category,
  } = useGetProductsByCategory();

  console.log("Product By category", productByCategory);

  if (isPending) return <h1>Loading.....</h1>;

  return (
    <div className="w-full">
      <FilterComp
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productByCategory?.products.length
          ? productByCategory?.products.map((elem) => {
              return <ProductCard key={elem.id} product={elem} />;
            })
          : data?.products.map((elem) => {
              return <ProductCard key={elem.id} product={elem} />;
            })}
      </div>
    </div>
  );
};

export default ProductPage;
