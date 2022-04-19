import Products from "@components/Products";
import { Route } from "react-router";
import { Fragment } from "react";
import CreateProduct from "@components/CreateProduct";
import ProductDetails from "@components/ProductDetails";

const Pages = () => {
  return (
    <Fragment>
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/create" exact>
        <CreateProduct />
      </Route>
      <Route path="/details/:productID" exact>
        <ProductDetails />
      </Route>
    </Fragment>
  );
};

export default Pages;
