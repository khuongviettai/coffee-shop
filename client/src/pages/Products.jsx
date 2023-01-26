import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsComponent from "../components/Product/Products/ProductsComponent";
import axiosLink from "../instance/axiosLink";
import Navbar from "../layouts/Navbar/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosLink
      .get("/api/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navbar />
      <ProductsComponent list={products} />
    </div>
  );
};

export default Products;
