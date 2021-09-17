import Axios from "axios";

const token = localStorage.getItem("login") ?? "";

export const adminApi = () => {
  return new Promise((res, rej) => {
    Axios.get(`${process.env.REACT_APP_API_URL}api/admin`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        res(response);
      })
      .catch((e) => {
        rej(e);
      });
  });
};

export const FetchApi = ({ method, fetchApiUrl, selectedIds }) => {
  console.log(method, fetchApiUrl, selectedIds);
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
        console.log(response);
        res(response);
      })
      .catch((e) => {
        console.log(e);
        rej(e);
      });
  });
};
