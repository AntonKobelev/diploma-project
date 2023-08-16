import React from "react";
import arrowDownYellowImg from "../../assets/icons/arrow-down-yellow.svg";

const Discounts = () => {
  return (
    <div className="discounts-container">
      <div className="default-text text-14 color-grey">Скидки</div>
      <img
        src={arrowDownYellowImg}
        alt="discounts-img"
        className="discounts-img"
      ></img>
    </div>
  );
};

export default Discounts;
