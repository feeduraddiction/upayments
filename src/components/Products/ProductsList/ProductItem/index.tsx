import { ProductPropTypes } from "@assets/types";
import ProductItemImage from "./ProductItemImage";
import { Link } from "react-router-dom";

const ProductItem = ({ product }: { product: ProductPropTypes }) => {
  return (
    <Link to={`/details/${product.id}`}>
      <div className="h-auto w-full">
        <ProductItemImage avatar={product.avatar} />
        <h5 className="text-start text-lg font-normal mt-3">{product.name}</h5>
        <p className="text-center text-lg font-normal mt-1">
          $ {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
