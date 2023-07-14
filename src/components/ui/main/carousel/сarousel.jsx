import React from "react";
import slide1Img from "../../../../assets/icons/slide-1.png";
import slide2Img from "../../../../assets/icons/slide-2.png";
import slide3Img from "../../../../assets/icons/slide-3.png";
import leftArrowImg from "../../../../assets/icons/left-arrow.png";
import rightArrowImg from "../../../../assets/icons/right-arrow.png";
import rightArrowAboutUsImg from "../../../../assets/icons/right-arrow-about-us.svg";
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  // useEffect(() => {
  //   new bootstrap.Carousel(document.getElementById("carouselExampleCaptions"));
  // }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="custom-button active "
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-current="true"
          aria-label="Slide 2"
          className="custom-button"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-current="true"
          aria-label="Slide 3"
          className="custom-button"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-current="true"
          aria-label="Slide 4"
          className="custom-button"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-current="true"
          aria-label="Slide 5"
          className="custom-button"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-current="true"
          aria-label="Slide 6"
          className="custom-button"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1Img} alt="item1" className="d-block w100" />
          <button className="about-us-btn">
            <div className="default-text text-12 color-grey">Узнать о нас</div>
            <img
              className="about-us-img"
              src={rightArrowAboutUsImg}
              alt="right-arrow-about-us-img"
            />
          </button>
        </div>
        <div className="carousel-item">
          <img src={slide2Img} alt="item2" className="d-block w100" />
          <button className="about-us-btn">
            <div className="default-text text-12 color-grey">Узнать о нас</div>
            <img
              className="about-us-img"
              src={rightArrowAboutUsImg}
              alt="right-arrow-about-us-img"
            />
          </button>
        </div>
        <div className="carousel-item">
          <img src={slide3Img} alt="item3" className="d-block w100" />
          <button className="about-us-btn">
            <div className="default-text text-12 color-grey">Узнать о нас</div>
            <img
              className="about-us-img"
              src={rightArrowAboutUsImg}
              alt="right-arrow-about-us-img"
            />
          </button>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <img src={leftArrowImg} alt="leftArrowImg" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <img src={rightArrowImg} alt="rightArrowImg" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
