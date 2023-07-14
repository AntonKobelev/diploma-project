import React from "react";
import catalogBtnImg from "../../../assets/icons/catalog-btn.png";

const ButtonCatalog = ({ onClick }) => {
  return (
    <button className="catalog-btn" onClick={onClick}>
      <img src={catalogBtnImg} alt="catalog-btn" className="btn-img" />
      <div className="default-text text-14 color-grey margin-left-15">
        Каталог
      </div>
    </button>
  );
};

export default ButtonCatalog;
