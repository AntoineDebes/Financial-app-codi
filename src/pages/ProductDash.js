import React, { useState, useEffect } from "react";
import ProductHeader from "../components/ProductHeader";
import ProductCard from "../components/ProductCard";
import { productApi, incomeApiDelete } from "../apis/Api";
import ReactPaginate from "react-paginate";

const ProductDash = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [checkedProductIds, setCheckedProductIds] = useState([]);

  useEffect(() => {
    productApi()
      .then((res) => {
        const newProducts = res.data.products.map((product) => ({
          ...product,
          checked: false,
        }));
        setProducts(newProducts);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [products, offset, pageCount, checkedProductIds]);

  const handleCardDelete = () => {
    incomeApiDelete(checkedProductIds);
    setCheckedProductIds([]);
  };

  const handleCheckBox = (e) => {
    const mainId = e.target.id;

    if (e.target.checked) {
      setCheckedProductIds([...checkedProductIds, mainId]);
    } else {
      setCheckedProductIds(checkedProductIds.filter((id) => id !== mainId));
    }
  };

  const getData = () => {
    const data = products;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((product) => {
      return (
        <ProductCard
          key={product.id}
          productInfo={product}
          handleCheckBox={(e) => handleCheckBox(e)}
        />
      );
    });
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const changePage = ({ selected }) => {
    console.log({ selected });
    setOffset(selected * perPage);
  };

  return (
    <>
      <div className="content__container">
        {JSON.stringify(checkedProductIds)}
        {offset}
        <ProductHeader handleCardDelete={handleCardDelete} />
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
};

export default ProductDash;
