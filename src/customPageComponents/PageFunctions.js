import { FetchApi } from "../apis/Api";
import AdminCard from "../components/AdminCard";
import Card from "../components/Card";

export const handleCardDeleteCall = ({
  // function that sends an API to the backend with the respective ids to delete them and resets the array
  method,
  fetchApiUrl,
  selectedIds,
  setCheckedItemIds,
  setIsAuth,
}) => {
  FetchApi({ method, fetchApiUrl, selectedIds })
    .then(() => {
      setCheckedItemIds && setCheckedItemIds({ ids: [] });
    })
    .catch((e) => {
      setIsAuth(false);
      console.log(e);
    });
};

export const handleCheckBoxCall = ({
  e,
  checkedItemIds,
  setCheckedItemIds,
}) => {
  // function for inserting and removing inside the ids array to send them to the backend
  const mainId = e.target.id;
  if (e.target.checked) {
    setCheckedItemIds({ ids: [...checkedItemIds.ids, mainId] });
  } else {
    setCheckedItemIds({
      ids: checkedItemIds.ids.filter((id) => id !== mainId),
    });
  }
};

export const getDataCall = ({
  // function that distribute the items data to the card to be disaplyed
  headerName,
  items,
  offset,
  perPage,
  handleCheckBox,
  setCardData,
  setPageCount,
  checkedItemIds,
  mobileDeleteOneId, // Gaby is the king of coding
  categories,
}) => {
  const data = items;
  const slice = data.slice(offset, offset + perPage);
  const postData = slice.map((item, index) => {
    const itemCardInfos =
      headerName === "Admins" ? (
        <AdminCard
          key={item.id}
          checked={checkedItemIds.data}
          productInfo={item}
          mobileDeleteOneId={(e) => mobileDeleteOneId(e)}
          handleCheckBox={(e) => handleCheckBox(e)}
        />
      ) : (
        <Card
          key={item.id}
          categories={categories}
          checked={checkedItemIds.data}
          productInfo={item}
          mobileDeleteOneId={(e) => mobileDeleteOneId(e)}
          handleCheckBox={(e) => handleCheckBox(e)}
        />
      );
    return itemCardInfos;
  });
  setCardData(postData);
  setPageCount(Math.ceil(data.length / perPage));
};

export const fetchApiCall = ({ method, fetchApiUrl, setItems, exitLogin }) => {
  // function that can be called to fetch the ids usually after deleting or when logging in
  FetchApi({ method, fetchApiUrl })
    .then((res) => {
      const newItems = res.data.items.map((item) => ({
        ...item,
        checked: false,
      }));

      setItems(newItems);
    })
    .catch((error) => {
      exitLogin();
      console.log("error", error);
    });
};
