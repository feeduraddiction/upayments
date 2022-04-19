import CreateBtn from "./CreateBtn";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <main>
      <ProductsFilter />
      <ProductsList />
      <CreateBtn />
    </main>
  );
};

export default Products;
