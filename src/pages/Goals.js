import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Goals.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import images from "../images/goal_graphic.webp";
import Popup from "../pages/Popup";
toast.configure();

const Goals = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [data, setData] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dunno, setDunno] = useState();
  const [dataofGoals, setdataofGoals] = useState([]);

  ////////////////////////////////////////////////////////////
  useEffect(() => {
    const testing = data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.start_date}</td>
        <td>{item.end_date}</td>
        <td> {dataofGoals[index]}</td>
        <td> {dataofGoals[index] >= 0 ? "achieved" : "Not achieved"}</td>
      </tr>
    ));
    setDunno(testing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/CheckGoal`)
      .then((res) => setdataofGoals(res.data))
      .catch((error) => console.log(error));
  }, []);
  //////////////////////////////////////////////////////////////
  const handleChange = async (e) => {
    e.preventDefault();
    const result = await fetch(`${process.env.REACT_APP_API_URL}api/goals`);
    const resultOfCheckGoals = await fetch(
      `${process.env.REACT_APP_API_URL}api/CheckGoal`
    );
    const dataofCheckGoals = await resultOfCheckGoals.json();
    setdataofGoals(dataofCheckGoals);
    const datarecieved = await result.json();
    setData(datarecieved);

    setButtonPopUp(true);
  };
  ////////////////////////////////////////////////////////////////
  const changeonClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("amount", amount);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);

    let result = await fetch(`${process.env.REACT_APP_API_URL}api/storeGoal`, {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    if (result.success === false) {
      toast.error("check the start date and end date ,the goal is not saved", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Your goal is added to your database");
    }
  };

  /////////////////////////////////////////////////////////////////////////////////
  return (
    <div data-aos="fade-left" className="login">
      <div className="login_image">
        <div className="image_img">
          <img src={images} alt="login" />
        </div>
      </div>
      <div className="Form">
        <form encType="multipart/form-data">
          <label> Name of the Goal:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label> Amount to be achieved :</label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
          <label> Start date :</label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            required
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>

          <label> End date :</label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            required
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
          <button onClick={changeonClick}>Add Goal</button>
          <button onClick={handleChange}>Check Goals</button>
        </form>
        <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <table id="allData">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Start_Date</th>
                <th>End_Date</th>
                <th>Profit</th>
                <th>Achieved</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.start_date}</td>
                    <td>{item.end_date}</td>
                  </tr>
                ))}
              {dunno && dunno}
            </tbody>
          </table>
        </Popup>
      </div>
    </div>
  );
};

export default Goals;
