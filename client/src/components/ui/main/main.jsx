import React from "react";
import Carousel from "./carousel/сarousel";
import CardsProductsWrapper from "./sidebar/cardsProductsWrapper";

const Main = () => {
  return (
      <div className="main">
          <Carousel />
          <CardsProductsWrapper/>
      </div>
  );
};

export default Main;
