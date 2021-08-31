import React, { useState, useEffect } from "react";
import DropDownButton from "../components/DropDownButton";
import axios from "axios";

function PostData(props) {
  const [Categories, setCategories] = useState([]);
  const [MainCategories] = useState([
    { name: "Fixed Expense" },
    { name: "Fixed Income" },
    { name: "Recurring Expense" },
    { name: "Recurring Income" },
  ]);
  const [title, setTitle] = useState("salim slam");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [categoryId, setCategoryId] = useState("");

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
  const addImage = (e) => {
    // e.preventDefault();
    // const index = e.target.selectedIndex;
    // const el = e.target.childNodes[index];
    // const option = el.getAttribute("id");
    // setCategoryId(option);
    setCategoryId(e.option);
    console.log(categoryId);
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
      };
      await axios.post("http://localhost:8000/api/postfixedincome", article, {
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

  useEffect(async () => {
    const anwar = await fetch("http://localhost:8000/api/categories");

    const facesResult = await anwar.json();
    setCategories(facesResult);
  }, []);

  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <label>
          title:
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          />
        </label>

        <label>
          Amount:
          <input type="text" name="amount" onChange={handleAmountChange} />
        </label>

        <label>
          Currency:
          <input
            type="text"
            id="title"
            name="currency"
            onSelect={handleCurrencyChange}
          />
        </label>
        <DropDownButton
          test={Categories}
          name="categories"
          onChange={onChangeHandler}
          addImage={addImage}
        />
        <DropDownButton test={MainCategories} />
        <input type="Submit" />
      </form>
    </div>
  );
}

export default PostData;
