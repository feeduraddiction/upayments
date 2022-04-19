const ProductDetailsDescription = ({
  description,
}: {
  description: string;
}) => {
  return (
    <div>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 3,
        }}

        className="mb-5"
      />
      <h3 className="text-xl font-bold">Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetailsDescription;
