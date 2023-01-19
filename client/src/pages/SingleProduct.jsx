import React from "react";
import SingleProductComponent from "../components/Product/SingleProduct/SingleProductComponent";
import RelatedProducts from "../layouts/RelatedProducts/RelatedProducts";
import { PRODUCTS } from "../data/Products";

const SingleProduct = () => {
  return (
    <div>
      <SingleProductComponent />
      <RelatedProducts list={PRODUCTS} />
    </div>
  );
};

export default SingleProduct;
