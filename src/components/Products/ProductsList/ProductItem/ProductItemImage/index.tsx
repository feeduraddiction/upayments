const ProductItemImage = ({ avatar }: { avatar: string }) => {
  return (
    <div className="transition ease bg-white duration-300 h-52 w-full rounded-2xl overflow-hidden hover:opacity-75 hover:cursor-pointer">
      <img className="mx-auto" src={avatar} alt="img" />
    </div>
  );
};

export default ProductItemImage;
