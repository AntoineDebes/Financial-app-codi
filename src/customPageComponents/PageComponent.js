import React, { useState, useEffect } from "react";
import ContentHeader from "../components/ContentHeader";
import ReactPaginate from "react-paginate";
import {
  getDataCall,
  handleCardDeleteCall,
  handleCheckBoxCall,
  fetchApiCall,
} from "../customPageComponents/PageFunctions";
import { useAuth } from "../useContext/IsAuthContext";

const PageComponent = ({ fetchApiUrl, headerName }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [cardData, setCardData] = useState(null);
  const perPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [checkedItemIds, setCheckedItemIds] = useState({ ids: [] });
  const { setIsAuth } = useAuth();

  useEffect(() => {
    fetchApiCall({ method: "get", fetchApiUrl, setItems });
  }, [checkedItemIds, fetchApiUrl]);

  useEffect(() => {
    const getData = () => {
      getDataCall({
        items,
        offset,
        perPage,
        handleCheckBox,
        setCardData,
        setPageCount,
        checkedItemIds,
        mobileDeleteOneId,
      });
    };
    const handleCheckBox = (e) => {
      handleCheckBoxCall({ e, checkedItemIds, setCheckedItemIds });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, offset, pageCount, checkedItemIds, checkedItemIds.ids]);

  const mobileDeleteOneId = (id) => {
    handleCardDelete(id);
  };

  const handleCardDelete = (id) => {
    handleCardDeleteCall({
      method: "delete",
      fetchApiUrl,
      selectedIds: checkedItemIds.ids.length !== 0 ? checkedItemIds.ids : id,
      setCheckedItemIds,
      setIsAuth,
    });
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
        {cardData && cardData}
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
