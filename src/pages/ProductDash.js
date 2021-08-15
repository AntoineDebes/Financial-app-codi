import React, { useState, useEffect } from "react";
import ProductHeader from "../components/ProductHeader";
import ProductCard from "../components/ProductCard";
import { productApi } from "../apis/Api";

export default function ProductDash() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    productApi()
      .then((res) => {
        console.log({ res });
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
      <div class="content__container">
        <ProductHeader />
        {products &&
          products.map((product) => {
            console.log(product);
            return <ProductCard productInfo={product} />;
          })}
      </div>
    </>
  );
}
