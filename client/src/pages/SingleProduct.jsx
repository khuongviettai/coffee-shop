import React, { useState } from "react";
import SingleProductComponent from "../components/Product/SingleProduct/SingleProductComponent";
import RelatedProducts from "../layouts/RelatedProducts/RelatedProducts";
import Review from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosLink from "../instance/axiosLink";
import Navbar from "../layouts/Navbar/Navbar";
import { PRODUCTS } from "../data/Products";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosLink
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(product);

  return (
    <div>
      <Navbar />
      <SingleProductComponent list={product} />
      <RelatedProducts list={PRODUCTS} />
      <Review />
    </div>
  );
};

export default SingleProduct;
