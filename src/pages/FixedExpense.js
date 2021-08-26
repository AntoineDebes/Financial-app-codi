import React, { useState, useEffect } from "react";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import { fetchApi } from "../apis/Api";
import ReactPaginate from "react-paginate";

const FixedExpense = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [checkedItemIds, setCheckedItemIds] = useState({ ids: [] });

  useEffect(() => {
    fetchApi("get", "api/fixedexpense")
      .then((res) => {
        const newItems = res.data.items.map((item) => ({
          ...item,
          checked: false,
        }));
        console.log({ newItems });
        setItems(newItems);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [checkedItemIds]);

  useEffect(() => {
    getData();
  }, [items, offset, pageCount, checkedItemIds.ids]);

  const handleCardDelete = () => {
    // incomeApiDelete(checkedItemIds);
    fetchApi("delete", "api/fixedexpense", checkedItemIds.ids);
    console.log("items");
    console.log(items);
    console.log("checkedItemIds.ids");
    console.log(checkedItemIds.ids);

    // setItems(
    //   items.filter((item) => {
    //     return !checkedItemIds.ids.includes(item.id);
    //   })
    // );
    console.log(items);
    // getData();
    setCheckedItemIds({ ids: [] });
  };

  const handleCheckBox = (e) => {
    const mainId = e.target.id;
    console.log(checkedItemIds.ids);
    if (e.target.checked) {
      setCheckedItemIds({ ids: [...checkedItemIds.ids, mainId] });
    } else {
      console.log("first", checkedItemIds.ids);
      setCheckedItemIds({
        ids: checkedItemIds.ids.filter((id) => id !== mainId),
      });

      console.log("second", checkedItemIds.ids);
    }
  };

  const getData = () => {
    // console.log(checkedItemIds);
    const data = items;
    console.log(data);
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((product) => {
      return (
        <Card
          key={product.id}
          checked={checkedItemIds.data}
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
        <ContentHeader
          handleCardDelete={handleCardDelete}
          headerName="Fixed Expenses"
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

export default FixedExpense;
