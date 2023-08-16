import React from "react";
import timeDeliveryImg from "../../assets/icons/time-delivery.png";
import arrowDownImg from "../../assets/icons/arrow-down.png";

const TimeDelivery = () => {
  // const [selectedTime, setSelectedTime] = useState("")
  const handleTimeDeliveryChange = (event) => {
    console.log("time-delivery");
    // setSelectedTime(event.target.value);
  };
  return (
    <div className="time-delivery-container">
      <img
        src={timeDeliveryImg}
        alt="time-delivery-img"
        className="time-delivery-img"
      ></img>
      <div className="default-text text-14 margin-left-10">17:00-17:45</div>
      <img
        src={arrowDownImg}
        alt="arrow-down"
        className="arrow-down"
        onClick={handleTimeDeliveryChange}
      />
    </div>
  );
};

export default TimeDelivery;
