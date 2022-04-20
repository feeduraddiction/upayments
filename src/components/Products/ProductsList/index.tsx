import { getProducts } from "src/utils/http";
import { ProductPropTypes } from "@assets/types/componentsTypes";
import {
  selectCategoryInput,
  selectSearchInput,
} from "@store/slices/filterSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const [data, setData] = useState<ProductPropTypes[]>([]);
  const searchInput = useSelector(selectSearchInput);
  const categoryInput = useSelector(selectCategoryInput);
  useEffect(() => {
    console.log("render");
    const setProducts = async () => {
      const products = await getProducts();
      setData(products);
    };
    setProducts();
  }, []);

  const filteredProducts = data.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchInput.toLowerCase()) &&
      product.category
        ?.toString()
        .toLowerCase()
        .includes(categoryInput.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto my-10 grid gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
