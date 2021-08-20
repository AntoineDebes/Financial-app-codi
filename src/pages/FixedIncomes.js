import React, { useState, useEffect } from "react";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import { fixedIcomesApi, incomeApiDelete } from "../apis/Api";
import ReactPaginate from "react-paginate";
// import chevronLeft from "../svgs/chevron-left-solid.svg";

const ProductDash = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [checkedItemIds, setCheckedItemIds] = useState([]);

  useEffect(() => {
    fixedIcomesApi()
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
  }, [products, offset, pageCount, checkedItemIds]);

  const handleCardDelete = () => {
    incomeApiDelete(checkedItemIds);
    setCheckedItemIds([]);
  };

  const handleCheckBox = (e) => {
    const mainId = e.target.id;

    if (e.target.checked) {
      setCheckedItemIds([...checkedItemIds, mainId]);
    } else {
      setCheckedItemIds(checkedItemIds.filter((id) => id !== mainId));
    }
  };

  const getData = () => {
    console.log(checkedItemIds);
    const data = products;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((product) => {
      return (
        <Card
          key={product.id}
          checked={checkedItemIds}
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
        {JSON.stringify(checkedItemIds)}
        {offset}
        <ContentHeader handleCardDelete={handleCardDelete} />
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
