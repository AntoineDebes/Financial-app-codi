import Axios from "axios";

export const FetchApi = ({ method, fetchApiUrl, selectedIds }) => {
  const token = localStorage.getItem("login") ?? "";

  console.log(method, fetchApiUrl, selectedIds, token);
  return new Promise((res, rej) => {
    Axios({
      method: method, // Method like GET, POST, DELETE, PUT ...
      url: `${process.env.REACT_APP_API_URL}${fetchApiUrl}`,
      headers: {
        Authorization: token, // sending the token for the verification
      },
      data: {
        // This section is for the deleted ids it sends in the body
        ids: selectedIds,
      },
    })
      .then((response) => {
        // console.log(response);
        res(response);
      })
      .catch((e) => {
<<<<<<< HEAD
        console.log(e);
=======
        // console.log(e);

        localStorage.clear();
>>>>>>> fabe81d7fb98b76daa367a2a2c2b738efa57d9e2
        rej(e);
      });
  });
};

// http://batata-harra-financial.herokuapp.com/
