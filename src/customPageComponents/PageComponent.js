import React, { useState, useEffect } from "react";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import ReactPaginate from "react-paginate";
import {
  getDataCall,
  handleCardDeleteCall,
  handleCheckBoxCall,
  fetchApiCall,
} from "../customPageComponents/PageFunctions";

const PageComponent = ({ fetchApiUrl, headerName }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const perPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [checkedItemIds, setCheckedItemIds] = useState({ ids: [] });

  useEffect(() => {
    fetchApiCall("get", fetchApiUrl, setItems);
  }, [checkedItemIds, fetchApiUrl]);

  useEffect(() => {
    const getData = () => {
      getDataCall(
        items,
        offset,
        perPage,
        handleCheckBox,
        setData,
        setPageCount,
        Card,
        checkedItemIds
      );
    };
    const handleCheckBox = (e) => {
      handleCheckBoxCall(e, checkedItemIds, setCheckedItemIds);
    };
    getData();
  }, [items, offset, pageCount, checkedItemIds, checkedItemIds.ids]);

  const handleCardDelete = () => {
    console.log("ids", checkedItemIds.ids);
    handleCardDeleteCall(
      "delete",
      fetchApiUrl,
      checkedItemIds.ids,
      setCheckedItemIds
    );
  };

  const changePage = ({ selected }) => {
    setOffset(selected * perPage);
  };

  return (
    <>
      <div className="content__container">
        <ContentHeader
          handleCardDelete={handleCardDelete}
          headerName={headerName}
        />
        {data && data}
      </div>
      <div className="content__container__pagination">
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

export default PageComponent;
