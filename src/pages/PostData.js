import React, { useState, useEffect } from "react";
import DropDownButton from "../components/DropDownButton";
import axios from "axios";
import "./PostData.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostData(props) {
  const [Categories, setCategories] = useState([]);
  const [MCategory, SetMCategory] = useState([]);
  const [MainCategories] = useState([
    { name: "Fixed Expense", id: 1, value: "fixedexpense" },
    { name: "Fixed Income", id: 2, value: "fixedincome" },
    { name: "Recurring Expense", id: 3, value: "recurringexpense" },
    { name: "Recurring Income", id: 4, value: "recurringincome" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [repetition, setRepetition] = useState("");

  useEffect(async () => {
    const anwar = await fetch("http://localhost:8000/api/categories");

    const facesResult = await anwar.json();
    setCategories(facesResult);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    console.log(endDate);
  };
  const handleSelectedRepetetion = (e) => {
    setRepetition(e.target.value);
    console.log(repetition);
  };

  const addImage = (e) => {
    // e.preventDefault();
    // const index = e.target.selectedIndex;
    // const el = e.target.childNodes[index];
    // const option = el.getAttribute("id");
    // setCategoryId(option);
    setCategoryId(e.option);
    console.log({ categoryId });
  };

  useEffect(() => {
    console.log({ categoryId });
  }, []);

  const getCategoryValue = (e) => {
    SetMCategory(e.value);
    console.log(MCategory);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    console.log(option);
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
      };
      console.log(MCategory);
      const response = await axios.post(
        `http://localhost:8000/api/post${MCategory}`,
        article,
        {
          headers,
        }
      );
      notify(response.data.message);
      // if (response.data.success) {
      //   notify(response.data.message);
      // } else {
      //   console.log(response);
      // }
    } catch (response) {
      console.log(response);
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
    <div className="post-form">
      <fieldset>
        <legend> Post Data</legend>
        <form onSubmit={hadleSubmit}>
          <div className="wrap">
            <label for="title">title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              onChange={handleTitleChange}
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
            {/* Same as */}

            <label for="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleDescriptionChange}
            />
            <label for="amount">Amount</label>
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              onChange={handleAmountChange}
            />
            <label for="currency">Currency</label>
            <input
              placeholder="Currency"
              type="text"
              id="title"
              name="currency"
              onSelect={handleCurrencyChange}
            />
          </div>
          <DropDownButton
            test={Categories}
            name="categories"
            //   onChange={onChangeHandler}
            addImage={addImage}
          />
          <div className="grid-wraper">
            <div className="grid-1">
              <DropDownButton
                test={MainCategories}
                addImage={getCategoryValue}
              />
            </div>

            {MCategory == "recurringexpense" ||
            MCategory == "recurringincome" ? (
              <>
                <div className="grid-2">
                  <select onChange={handleSelectedRepetetion}>
                    <option></option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="grid-3">
                  <input
                    type="date"
                    name="start_date"
                    onChange={handleStartDateChange}
                  ></input>
                </div>
                <div className="grid-4">
                  <input
                    type="date"
                    name="start_date"
                    onChange={handleEndDateChange}
                  ></input>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <input type="Submit" />
        </form>
      </fieldset>
    </div>
  );
}

export default PostData;
