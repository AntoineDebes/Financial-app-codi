import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Report.css";

import { Pie } from "react-chartjs-2";

const Report = () => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState([]);

  const [currentExpense, setCurrentExpense] = useState("");
  const [currentIncome, setCurrentIncome] = useState("");
  const [fixedExpense, setFixedExpense] = useState("");
  const [fixedIncome, setFixedIncome] = useState("");

  const onsubmitHandler = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:8000/api/getamount/${id}`)
      .then(
        (res) => setAmount(res.data),
        setCurrentExpense(amount[0]),
        setCurrentIncome(amount[1]),
        setFixedExpense(amount[2]),
        setFixedIncome(amount[3])
      )
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(items);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Container">
      {/* {items && JSON.stringify(items)} */}
      {
        <ul className="ul">
          {items &&
            items.map((item) => (
              <Link
                to={`/Dashboard/Report/${item.id}`}
                onClick={() => onsubmitHandler(item.id)}
              >
                {item.title}
              </Link>
            ))}
        </ul>
      }
      <div className="Pie">
        <Pie
          data={{
            labels: [
              "current expenses",
              "current incomes",
              "fixed expenses",
              "fixed incomes",
            ],
            datasets: [
              {
                label: "# of votes",

                data: [
                  currentExpense,
                  currentIncome,
                  fixedExpense,
                  fixedIncome,
                ],

                backgroundColor: [
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Report;
