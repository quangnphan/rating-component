import React from "react";
import "./Modal.css";
import thankYouImg from "../../images/illustration-thank-you.svg";

function Modal({ rate }) {
  return (
    <div className="modal">
      <div className="ty-img">
        <img src={thankYouImg} alt="thankyou img"></img>
      </div>
      <div className="modal-rate">You selected {rate} out of 5</div>
      <div className="modal-description">
        <h1>Thank you!</h1>
        <p>
          We aprereciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Modal;
