import { getProducts } from "@assets/functions";
import { ProductPropTypes } from "@assets/types";
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
    getProducts().then((products) => setData(products));
  }, []);

  const filteredProducts = data.filter(
    (product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()) 
      // &&
      // product.category.toLowerCase().includes(categoryInput.toLowerCase())
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
