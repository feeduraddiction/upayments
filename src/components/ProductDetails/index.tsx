import { getProduct } from "src/utils/http";
import {
  ProductParamsPropTypes,
  ProductPropTypes,
} from "@assets/types/componentsTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";

const ProductDetails = () => {
  const INIT_DATA = {
    name: "",
    price: 0,
    category: "",
    description: "",
    avatar: "",
    developerEmail: "",
    id: 0,
  };
  const { productID } = useParams<ProductParamsPropTypes>();
  const [data, setData] = useState<ProductPropTypes>(INIT_DATA);

  useEffect(() => {
    const setProduct = async () => {
      const product = await getProduct(productID);
      setData(product);
    };
    setProduct();
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-20">
      <ProductDetailsHeader
        avatar={data.avatar}
        price={data.price}
        name={data.name}
      />
      <ProductDetailsDescription description={data.description} />
    </div>
  );
};

export default ProductDetails;
