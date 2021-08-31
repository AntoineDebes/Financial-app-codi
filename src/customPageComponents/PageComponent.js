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
    console.log(items);
  }, [checkedItemIds]);

  useEffect(() => {
    getData();
  }, [items, offset, pageCount, checkedItemIds.ids]);

  const handleCardDelete = () =>
    handleCardDeleteCall(
      "delete",
      fetchApiUrl,
      checkedItemIds.ids,
      setCheckedItemIds
    );

  const handleCheckBox = (e) => {
    handleCheckBoxCall(e, checkedItemIds, setCheckedItemIds);
  };

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
      </div>
    </>
  );
};

export default PageComponent;
