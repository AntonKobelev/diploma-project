import React, { useState } from "react";
import deliveryImg from "../../assets/icons/delivery.png";
import arrowDownImg from "../../assets/icons/arrow-down.png";

const LocationDelivery = () => {
  // const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    console.log("delivery-location");
    // setSelectedCity(event.target.value);
  };
  return (
    <div className="delivery-container">
      <img src={deliveryImg} alt="delivery-img" className="delivery-img"></img>
      <div className="default-text text-14 margin-left-10">Зона доставки</div>
      <img
        src={arrowDownImg}
        alt="arrow-down"
        className="arrow-down"
        onClick={handleCityChange}
      />
    </div>
  );
};

export default LocationDelivery;
