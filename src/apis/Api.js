import Axios from "axios";

const token = localStorage.getItem("login") ?? "";

export const adminApi = () => {
  return new Promise((res, rej) => {
    Axios.get(`${process.env.REACT_APP_API_URL}api/auth/admin`)
      .then((response) => {
        console.log(response);
        res(response);
      })
      .catch((e) => {
        rej(e);
      });
  });
};

export const FetchApi = (methodAxios, url_path, dataIds) => {
  console.log(methodAxios, url_path, dataIds);
  return new Promise((res, rej) => {
    Axios({
      method: methodAxios,
      url: `${process.env.REACT_APP_API_URL}${url_path}`,
      headers: {
        Authorization: token,
      },
      data: {
        ids: dataIds,
      },
    })
      .then((response) => {
        console.log(response);
        res(response);
      })
      .catch((e) => {
        localStorage.setItem("isAuth", "false");
        console.log(e);
        rej(e);
      });
  });
};
