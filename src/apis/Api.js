import Axios from "axios";

export const FetchApi = ({ method, fetchApiUrl, selectedIds }) => {
  // console.log(method, fetchApiUrl, selectedIds);
  console.log("called");
  const token = localStorage.getItem("login") ?? "";
  return new Promise((res, rej) => {
    Axios({
      method: method,
      url: `${process.env.REACT_APP_API_URL}${fetchApiUrl}`,
      headers: {
        Authorization: token,
      },
      data: {
        ids: selectedIds,
      },
    })
      .then((response) => {
        // console.log(response);
        res(response);
      })
      .catch((e) => {
        // console.log(e);
        rej(e);
      });
  });
};
