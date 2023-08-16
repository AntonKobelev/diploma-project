import React from "react";
import ButtonCatalog from "../buttons/buttonCatalog";
import ButtonPersent from "../buttons/buttonPercent";
import Cabinet from "../cabinet";
import Contacts from "../contacts";
import Discounts from "../discounts";
import Favourites from "../favourites";
import LocationDelivery from "../locationDelivery";
import Logo from "../logo/logo";
import Nav from "../nav";
import SearchGoods from "../searchGoods";
import ShoppingCart from "../shopping-cart";
import TimeDelivery from "../timeDelivery";

const Header = ({ handleBtnCatalogClick }) => {
  return (
    <>
      <header className="header">
        <div className="first-header">
          <Logo />
          <div className="row justify-content-evenly">
            <div className="offset-md-2 col text-center d-flex">
              <Contacts />
              <LocationDelivery />
              <TimeDelivery />
            </div>
            <div className="col text-center">
              <Nav />
            </div>
          </div>
        </div>
        <div className="second-header custom-offset">
          <div>
            <ButtonCatalog onClick={handleBtnCatalogClick} />
          </div>
          <div>
            <SearchGoods />
          </div>
          <div>
            <ButtonPersent />
          </div>
          <div className="personal-account">
            <Discounts />
            <Cabinet />
            <Favourites />
            <ShoppingCart />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
