import Axios from "axios";

export const productApi = () => {
  return new Promise((resolve, reject) => {
    Axios.get("http://localhost:8000/api/product")
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
    Axios.get("http://localhost:8000/api/admin")
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
    Axios.delete(`http://localhost:8000/api/product`, {
      id: data,
    })
      .then((res) => r(res))
      .catch((e) => j(e));
  });
};
