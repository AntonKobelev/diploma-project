import React from "react";
import favouritesImg from "../../assets/icons/favourites.svg";

const Favourites = () => {
  return (
    <div className="favourites-container">
      <img
        src={favouritesImg}
        alt="favourites-img"
        className="favourites-img"
      />
      <div className="default-text text-14 color-grey margin-left-12">
        Избранное
      </div>
    </div>
  );
};

export default Favourites;
