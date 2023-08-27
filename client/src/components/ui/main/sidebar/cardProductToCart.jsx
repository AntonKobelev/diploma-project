import cardProductToCartCancelImg from "../../../../assets/icons/sidebar/card-product-to-cart-cancel-img.png";
import cardProductToCartCounterPlusImg from "../../../../assets/icons/sidebar/card-product-to-cart-counter-plus-img.png";
import cardProductToCartCounterMinusImg from "../../../../assets/icons/sidebar/card-product-to-cart-counter-minus-img.png";

const CardProductToCart = ({image, description, customStyles}) => {
    return (
        <div className="card-product-to-cart-container">
            <img src={image} alt="card-product-to-cart-img" className="card-product-to-cart-img" style={customStyles}/>
            <div className="card-product-to-cart-counter">
                <img src={cardProductToCartCounterPlusImg} alt="card-product-to-cart-counter-plus-img" className="card-product-to-cart-counter-plus-img"/>
                2
                <img src={cardProductToCartCounterMinusImg} alt="card-product-to-cart-counter-minus-img" className="card-product-to-cart-counter-minus-img"/>
            </div>
            <div className="card-product-to-cart-description">
                {description}
                <div className="card-product-to-cart-price-info">
                    <div className="card-product-to-cart-price">
                        120 руб.
                    </div>
                    <div className="card-product-to-cart-weight">
                        450г.
                    </div>
                </div>
            </div>

            <img src={cardProductToCartCancelImg} alt="card-product-to-cart-cancel-img" className="card-product-to-cart-cancel-img" />
        </div>
    )
}

export default CardProductToCart