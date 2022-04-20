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
    const setProducts = async () => {
      const products = await getProducts();
      setData(products);
    };
    setProducts();
  }, []);

  const filteredProduct = () => {
    return data.filter(
      (product) =>
        product.name?.toLowerCase().includes(searchInput.toLowerCase()) &&
        product.category?.toLowerCase().includes(categoryInput.toLowerCase())
    );
  };

  const productsToShow =
    searchInput || categoryInput ? filteredProduct() : data;

  return (
    <div className="max-w-3xl mx-auto my-10 grid gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {productsToShow.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
