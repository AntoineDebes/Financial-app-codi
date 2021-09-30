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
import {
  ContentContainer,
  ContentContainerPagination,
} from "../Styled/StyledPageCompnent";
import Axios from "axios";

const PageComponent = ({ fetchApiUrl, headerName }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [cardData, setCardData] = useState(null);
  const perPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [checkedItemIds, setCheckedItemIds] = useState({ ids: [] });
  const { setIsAuth } = useAuth();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const exitLogin = () => {
      setIsAuth(false);
    };
    fetchApiCall({ method: "get", fetchApiUrl, setItems, exitLogin });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItemIds, fetchApiUrl]);

  useEffect(() => {
    const test = async () => {
      await Axios.get(`${process.env.REACT_APP_API_URL}api/categories`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(categories);
    };
    test();
  }, []);

  useEffect(() => {
    const getData = () => {
      getDataCall({
        headerName,
        items,
        offset,
        perPage,
        handleCheckBox,
        setCardData,
        setPageCount,
        checkedItemIds,
        mobileDeleteOneId,
        categories,
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
    if (checkedItemIds.ids.length > 0 || id.length > 0) {
      handleCardDeleteCall({
        method: "delete",
        fetchApiUrl,
        selectedIds: checkedItemIds.ids.length !== 0 ? checkedItemIds.ids : id,
        setCheckedItemIds,
        setIsAuth,
      });
    }
  };

  const changePage = ({ selected }) => {
    setOffset(selected * perPage);
  };

  return (
    <>
      <ContentContainer>
        <ContentHeader
          handleCardDelete={handleCardDelete}
          headerName={headerName}
        />
        {cardData && cardData}
      </ContentContainer>
      <ContentContainerPagination>
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
      </ContentContainerPagination>
    </>
  );
};

export default PageComponent;
