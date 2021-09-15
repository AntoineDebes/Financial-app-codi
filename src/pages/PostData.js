import React, { useState, useEffect } from "react";
import DropDownButton from "../components/DropDownButton";
import axios from "axios";
import "./PostData.css";

function PostData(props) {
  const [Categories, setCategories] = useState([]);
  const [MCategory, SetMCategory] = useState([]);
  const [MainCategories] = useState([
    { name: "Fixed Expense", id: 1, value: "fixedexpense" },
    { name: "Fixed Income", id: 2, value: "fixedincome" },
    { name: "Recurring Expense", id: 3, value: "recurringexpense" },
    { name: "Recurring Income", id: 4, value: "recurringincome" },
  ]);
  const [title, setTitle] = useState("salim slam");
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

  //   const handleCallback = (exam) => {
  //     console.log(exam);
  //   };
  const hadleSubmit = async (e) => {
    // const data = { title: e.target.title.value , description:e.target.description.value,
    //     amount : e.target.amount.value , currency:e.target.currency.value
    //     ,categories:e.target.categories.id  };

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
      await axios.post(`http://localhost:8000/api/post${MCategory}`, article, {
        headers,
      });
      console.log("done");
    } catch (e) {
      console.log(e);
    }
    //    const title = e.target["title"].value ;
    //    console.log(title);
    //    const des = e.target["description"].value;
    //    const amount= e.target["amount"].value ;
    //    const anwartab = test({title , des , amount })
    //    console.log(anwartab);
    // fetch('https://example.com/profile', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  };

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
