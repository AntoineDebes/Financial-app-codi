import { fetchApi } from "../apis/Api";

export const handleCardDeleteCall = (
  method,
  fetchApiUrl,
  data_ids,
  setCheckedItemIds
) => {
  fetchApi(method, fetchApiUrl, data_ids);
  setCheckedItemIds({ ids: [] });
};

export const handleCheckBoxCall = (e, checkedItemIds, setCheckedItemIds) => {
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

export const getDataCall = (
  items,
  offset,
  perPage,
  handleCheckBox,
  setData,
  setPageCount,
  Card,
  checkedItemIds
) => {
  // console.log(checkedItemIds);
  const data = items;
  console.log(data);
  const slice = data.slice(offset, offset + perPage);
  const postData = slice.map((item) => {
    return (
      <Card
        key={item.id}
        checked={checkedItemIds.data}
        productInfo={item}
        handleCheckBox={(e) => handleCheckBox(e)}
      />
    );
  });
  setData(postData);
  setPageCount(Math.ceil(data.length / perPage));
};

export const fetchApiCall = (method, fetchApiUrl, setItems) => {
  fetchApi(method, fetchApiUrl)
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
};
