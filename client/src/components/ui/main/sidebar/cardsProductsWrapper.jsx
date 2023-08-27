import CardProductToCart from "./cardProductToCart";
import React from "react";
import CardsProductsTitle from "./cardsProductsTitle";
import cardProductToCartPastaImg from "../../../../assets/icons/sidebar/card-product-to-cart-pasta-img.png";
import cardProductToCartPackageImg from "../../../../assets/icons/sidebar/lime-package.png";
const CardsProductsWrapper = () => {
    const customStyles = {
        width: "30px",
        height: "20px"
    }
    return (
        <div className="cards-products-wrapper">
            <CardsProductsTitle title = "Бакалея"/>
            <CardProductToCart image = {cardProductToCartPastaImg} description = "Макаронные изделия Макфа триколлини..."/>
            <CardProductToCart image = {cardProductToCartPastaImg} description = "Макаронные изделия Макфа триколлини..."/>
            <CardProductToCart image = {cardProductToCartPastaImg} description = "Макаронные изделия Макфа триколлини..."/>
            <CardsProductsTitle title = "Вода, напитки"/>
            <CardProductToCart image = {cardProductToCartPastaImg} description = "Макаронные изделия Макфа триколлини..."/>
            <CardsProductsTitle title = "Другие товары"/>
            <CardProductToCart image = {cardProductToCartPackageImg} description = "Пакет-майка Белый Большой" customStyles = {customStyles}/>
        </div>
    )
}

export default CardsProductsWrapper