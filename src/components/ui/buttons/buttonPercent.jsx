import React from "react";
import percentBtnImg from "../../../assets/icons/percent.png";

const ButtonPersent = ({ onClick }) => {
  return (
    <button className="percent-btn" onClick={onClick}>
      <img src={percentBtnImg} alt="percent-btn" className="percent-btn-img" />
    </button>
  );
};

export default ButtonPersent;
