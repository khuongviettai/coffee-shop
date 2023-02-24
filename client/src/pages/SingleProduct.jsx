import React, { useState } from "react";
import SingleProductComponent from "../components/Product/SingleProduct/SingleProductComponent";
import RelatedProducts from "../layouts/RelatedProducts/RelatedProducts";
import Review from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosLink from "../instance/axiosLink";
import Navbar from "../layouts/Navbar/Navbar";
import SingleProductLoading from "../components/Loading/SingleProductLoading";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosLink
      .get("/api/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axiosLink
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [id]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <SingleProductLoading />
      ) : (
        <>
          <SingleProductComponent list={product} />
          <RelatedProducts list={products} />
          <Review />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
