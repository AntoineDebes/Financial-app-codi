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

// class ProductApiController {
//   test() {
//     return 2;
//   }

//   test2() {
//     return 4;
//   }
// }

// const x = new ProductApiController();

// x.test();
// x.test2();
