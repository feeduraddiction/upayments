import { ProductDetailsHeaderPropTypes } from "@assets/types/componentsTypes";

const ProductDetailsHeader = ({
  avatar,
  name,
  price,
}: ProductDetailsHeaderPropTypes) => {
  return (
    <div className="flex my-10">
      <img className="rounded-lg w-64" src={avatar} alt="" />
      <div className="ml-10 flex flex-col items-start justify-between">
        <h1 className="text-xxl">{name}</h1>
        <h2 className="text-lg">$ {price}</h2>
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
