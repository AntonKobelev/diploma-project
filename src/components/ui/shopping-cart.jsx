import React from "react";
import shoppingCartImg from "../../assets/icons/shopping-cart.svg";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <img
        src={shoppingCartImg}
        alt="shopping-cart-img"
        className="shopping-cart-img"
      />
      <div className="default-text text-14 color-grey margin-left-12">
        Корзина
      </div>
    </div>
  );
};

export default ShoppingCart;
