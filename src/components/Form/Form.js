import React, { useState } from "react";
import "./Form.css";
import starIcon from "../../images/icon-star.svg";

const Form = ({ handleSubmit }) => {
  const numbers = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(0);
  const [isActive,setIsActive] = useState(null);
  const toggleClass = (index) => {
    setIsActive(index)
  }
  const handleValue = (e,number) => {
    e.preventDefault();
    return setValue(number);
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e, value)}>
      <div className="star">
        <img src={starIcon} alt="star img"></img>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="numbers">
        {numbers.map((value, index) => {
          return (
            <button
              key={index}
              className={isActive === index ? "active number-button" : "number-button"}
              onClick={(e) => {
                handleValue(e, value);
                toggleClass(index)
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="submit-button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
