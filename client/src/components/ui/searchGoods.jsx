import React from "react";
import loupeImage from "../../assets/icons/loupe.svg";

const SearchGoods = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск товара"
      ></input>
      <img src={loupeImage} alt="loupe" className="search-img" />
    </div>
  );
};

export default SearchGoods;
