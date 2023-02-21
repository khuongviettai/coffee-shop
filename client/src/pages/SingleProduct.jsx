import React, { useState } from "react";
import SingleProductComponent from "../components/Product/SingleProduct/SingleProductComponent";
import RelatedProducts from "../layouts/RelatedProducts/RelatedProducts";
import Review from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosLink from "../instance/axiosLink";
import Navbar from "../layouts/Navbar/Navbar";
import { PRODUCTS } from "../data/Products";
import SingleProductLoading from "../components/Loading/SingleProductLoading";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosLink
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [id]);

  console.log(product);

  return (
    <div>
      <Navbar />
      {loading ? (
        <SingleProductLoading />
      ) : (
        <>
          <SingleProductComponent list={product} />
          <RelatedProducts list={PRODUCTS} />
          <Review />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
