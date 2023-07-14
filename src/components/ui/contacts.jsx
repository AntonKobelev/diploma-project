import React from "react";
import phoneCallImg from "../../assets/icons/phone-call.png";

const handlePhoneCall = () => {
  window.location.href = "tel:7756";
};

const Contacts = () => {
  return (
    <div className="phone-container">
      <img
        src={phoneCallImg}
        alt="phone call"
        className="phone-img"
        onClick={handlePhoneCall}
      ></img>
      <div className="default-text text-18 margin-left-14">7756</div>
    </div>
  );
};

export default Contacts;
