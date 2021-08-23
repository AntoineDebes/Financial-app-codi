import Axios from "axios";

export const fixedIcomesApi = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL}api/product`)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const adminApi = () => {
  return new Promise((r, j) => {
    Axios.get(`${process.env.REACT_APP_API_URL}api/admin`)
      .then((res) => {
        console.log(res);
        r(res);
      })
      .catch((e) => {
        j(e);
      });
  });
};

export const incomeApiDelete = (data) => {
  console.log(data);
  return new Promise((r, j) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}api/product`, {
      data: {
        ids: data,
      },
      // headers: {
      //   // "Content-Type": "application/x-www-form-urlencoded",
      // },
    })
      .then((res) => r(res))
      .catch((e) => j(e));
  });
};
