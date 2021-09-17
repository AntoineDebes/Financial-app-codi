import React, { useState } from "react";

function DropDownButton({ addImage, test }) {
  const onTrigger = (e) => {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    const value = e.target.value;
    addImage({ option, value });
  };

  return (
    <div>
      <select name="selectList" id="selectList" onChange={onTrigger}>
        <option></option>
        {test.map((option, index) => (
          <option id={option.id} value={option.value} key={index}>
            {option.title}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownButton;
