import React, { useState } from "react";

function DropDownButton(props) {
  const onTrigger = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    props.addImage({ option });
    e.preventDefault();
  };

  return (
    <div>
      <select name="selectList" id="selectList" onChange={onTrigger}>
        <option></option>
        {props.test.map((option, index) => (
          <option id={option.id} value={option.name} key={index}>
            {option.name}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownButton;
