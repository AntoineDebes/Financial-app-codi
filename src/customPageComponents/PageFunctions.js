import { FetchApi } from "../apis/Api";

export const handleCardDeleteCall = (
  // function that sends an API to the backend with the respective ids to delete them and resets the array
  method,
  fetchApiUrl,
  data_ids,
  setCheckedItemIds,
  setIsAuth
) => {
  FetchApi(method, fetchApiUrl, data_ids)
    .then(() => {
      setCheckedItemIds && setCheckedItemIds({ ids: [] });
    })
    .catch((e) => {
      setIsAuth(false);
      console.log(e);
    });
};

export const handleCheckBoxCall = (e, checkedItemIds, setCheckedItemIds) => {
  // function for inserting and removing inside the ids array to send them to the backend
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
  // function that distribute the items data to the card to be disaplyed
  items,
  offset,
  perPage,
  handleCheckBox,
  setData,
  setPageCount,
  Card,
  checkedItemIds,
  mobileDeleteOneId
) => {
  const data = items;
  const slice = data.slice(offset, offset + perPage);
  const postData = slice.map((item) => {
    return (
      <Card
        key={item.id}
        checked={checkedItemIds.data}
        productInfo={item}
        mobileDeleteOneId={(e) => mobileDeleteOneId(e)}
        handleCheckBox={(e) => handleCheckBox(e)}
      />
    );
  });
  setData(postData);
  setPageCount(Math.ceil(data.length / perPage));
};

export const fetchApiCall = (method, fetchApiUrl, setItems, setIsAuth) => {
  // function that can be called to fetch the ids usually after deleting or when logging in
  FetchApi(method, fetchApiUrl)
    .then((res) => {
      const newItems = res.data.items.map((item) => ({
        ...item,
        checked: false,
      }));
      // console.log("newItems", newItems);
      setItems(newItems);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
