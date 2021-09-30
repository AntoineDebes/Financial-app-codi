import React, { useState, useEffect } from "react";
import DropDownButton from "../components/DropDownButton";
import axios from "axios";
import "./PostData.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FetchApi } from "../apis/Api";

function PostData() {
  const [Categories, setCategories] = useState([]);
  const [MCategory, SetMCategory] = useState([]);
  const [MainCategories] = useState([
    { title: "Fixed Expense", id: 1, value: "fixedexpense" },
    { title: "Fixed Income", id: 2, value: "fixedincome" },
    { title: "Recurring Expense", id: 3, value: "recurringexpense" },
    { title: "Recurring Income", id: 4, value: "recurringincome" },
  ]);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [amount, setAmount] = useState("");
  // const [currency, setCurrency] = useState("");
  const [categoryId, setCategoryId] = useState("");
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  // const [repetition, setRepetition] = useState("");
  // const [date, setDate] = useState();

  const [
    {
      title,
      description,
      amount,
      currency,
      startDate,
      endDate,
      repetition,
      date,
    },
    setPostData,
  ] = useState({
    title: null,
    description: null,
    amount: null,
    currency: null,
    startDate: null,
    endDate: null,
    repetition: null,
    date: null,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(async () => {
    const cat = await fetch("http://localhost:8000/api/categories");
    const facesResult = await cat.json();
    setCategories(facesResult);
=======
  useEffect(() => {
    FetchApi({ method: "get", fetchApiUrl: "api/categories" }).then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
>>>>>>> ea93eccfe4025834fd17ff7d24f4f362d7cc7c42
=======
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const cat = await fetch(`${process.env.REACT_APP_API_URL}api/categories`);
    const facesResult = await cat.json();
    setCategories(facesResult);
>>>>>>> fabe81d7fb98b76daa367a2a2c2b738efa57d9e2
  }, []);

  // useEffect(() => {
  //   FetchApi({ method: "get", fetchApiUrl: "api/categories" }).then((res) => {
  //     console.log(res.data);
  //     setCategories(res.data);
  //   });
  // }, []);

  const handleEventChange = (e) => {
    setPostData((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  };

  // useEffect(() => {
  //   console.log(
  //     title,
  //     description,
  //     amount,
  //     currency,
  //     startDate,
  //     endDate,
  //     repetition,
  //     date
  //   );
  // }, [
  //   title,
  //   description,
  //   amount,
  //   currency,
  //   startDate,
  //   endDate,
  //   repetition,
  //   date,
  // ]);

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  // };
  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };
  // const handleCurrencyChange = (e) => {
  //   setCurrency(e.target.value);
  // };
  // const handleStartDateChange = (e) => {
  //   setStartDate(e.target.value);
  // };
  // const handleEndDateChange = (e) => {
  //   setEndDate(e.target.value);
  // };
  // const handleDateChange = (e) => {
  //   setDate(e.target.value);
  // };
  // const handleSelectedRepetetion = (e) => {
  //   setRepetition(e.target.value);
  // };

  const addImage = (e) => {
    setCategoryId(e.option);
  };

  const getCategoryValue = (e) => {
    SetMCategory(e.value);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
  };
  const hadleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const article = {
        title: title,
        description: description,
        quantity: amount,
        category_id: categoryId,
        currency: currency,
        startDate: startDate,
        endDate: endDate,
        repetition: repetition,
        date: date,
      };
      console.log(article);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/post${MCategory}`,
        article,
        {
          headers,
        }
      );
      notify(response.data.message);
    } catch (e) {
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

  return (
    <div className="main-div">
      <legend>Post Data</legend>
      <form onSubmit={hadleSubmit}>
        <div className="wrap">
          <label for="title">title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleEventChange}
          />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <label for="description">Description</label>
          <textarea name="description" onChange={handleEventChange} />
          <label for="amount">Amount</label>
          <input type="text" name="amount" onChange={handleEventChange} />
          <label for="currency">Currency</label>
          <input
            type="text"
            id="title"
            name="currency"
            onSelect={handleEventChange}
          />
        </div>
        <label for="categories">Category</label>
        <DropDownButton
          test={Categories}
          name="categories"
          addImage={addImage}
        />

        <label for="main-category">Post Type</label>
        <DropDownButton
          name="main-category"
          test={MainCategories}
          addImage={getCategoryValue}
        />

        {MCategory === "recurringexpense" || MCategory === "recurringincome" ? (
          <>
            <label for="repetition">Repetition</label>
            <select name="repetition" onChange={handleEventChange}>
              <option></option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <label for="startDate">Start Date</label>
            <input type="date" name="startDate" onChange={handleEventChange} />

            <label for="endDate">End Date</label>
            <input type="date" name="endDate" onChange={handleEventChange} />
          </>
        ) : MCategory !== "" ? (
          <>
            <label for="date">Date</label>
            <input type="date" name="date" onChange={handleEventChange} />
          </>
        ) : null}

        <input type="Submit" />
      </form>
    </div>
  );
}

export default PostData;
