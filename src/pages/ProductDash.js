import React, { useState, useEffect } from "react";
import ProductHeader from "../components/ProductHeader";
import ProductCard from "../components/ProductCard";
import { productApi } from "../apis/Api";
import ReactPaginate from "react-paginate";

export default function ProductDash() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    productApi()
      .then((res) => {
        setProducts(res.data.products);
        getData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const getData = () => {
    console.log({ products });
    const data = products;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((product) => (
      <ProductCard key={product.id} productInfo={product} />
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const changePage = ({ selected }) => {
    setOffset(selected);
  };

  useEffect(() => {
    getData();
  }, [products, offset, pageCount]);

  return (
    <>
      <div className="content__container">
        <ProductHeader />
        {data && data}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
