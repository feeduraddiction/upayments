import { getProduct } from "@assets/functions";
import { ProductPropTypes } from "@assets/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";

type productParams = {
  productID: string;
};

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
  const { productID } = useParams<productParams>();
  const [data, setData] = useState<ProductPropTypes>(INIT_DATA);

  useEffect(() => {
    getProduct(productID).then((product) => setData(product));
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
