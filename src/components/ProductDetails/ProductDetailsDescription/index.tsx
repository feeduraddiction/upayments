import { ProductDetailsDescriptionPropTypes } from "@assets/types/componentsTypes";

const ProductDetailsDescription = ({
  description,
}: ProductDetailsDescriptionPropTypes) => {
  return (
    <div>
      <hr className="mb-5 h-[3px] text-black  bg-black" />
      <h3 className="text-xl font-bold">Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetailsDescription;
