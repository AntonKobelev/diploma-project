import React from "react";
import cabinetImg from "../../assets/icons/cabinet.svg";

const Cabinet = () => {
  return (
    <div className="cabinet-container">
      <img src={cabinetImg} alt="cabinet-img" className="cabinet-img" />
      <div className="default-text text-14 color-grey margin-left-12">
        Кабинет
      </div>
    </div>
  );
};

export default Cabinet;
