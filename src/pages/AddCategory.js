import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PostData.css";
function AddCategory() {
  const [categoryName, setCategoryName] = useState("");

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const data = {
        category: categoryName,
      };
      const response = await axios.post(
        `http://localhost:8000/api/addcategory`,
        data,
        {
          headers,
        }
      );
      notify(response.data.message);
      console.log(response.data.message);
    } catch (e) {
      console.log("this one");
      notify("something wrong please try again later !");
    }
  };
  const notify = (x) =>
    toast.dark(x, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleOnCahnge = (e) => {
    setCategoryName(e.target.value);
  };
  return (
    <div className="main-div">
      <legend>Add Category</legend>
      <form>
        <input type="text" onChange={handleOnCahnge} />
        <input type="Submit" onClick={handleOnClick} />
      </form>
    </div>
  );
}

export default AddCategory;
