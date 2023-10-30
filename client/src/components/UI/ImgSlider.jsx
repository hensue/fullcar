import React, { useRef } from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/img-slider.css";

const ImgSlider = () => {
  const settings = {
    fade: false,
    speed: 200,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const previous = '<';

  const next = '>';


  return (
    <div>

    <Slider {...settings} ref={sliderRef} className="hero__slider">
      <div className="slider__item1 slider__item-041 mt0">
      </div>
      <div className="slider__item1 slider__item-051 mt0">
      </div>
      <div className="slider__item1 slider__item-061 mt0">
      </div>
      <div className="slider__item1 slider__item-071 mt0">
      </div>
      <div className="slider__item1 slider__item-041 mt0">
      </div>
      <div className="slider__item1 slider__item-051 mt0">
      </div>
      <div className="slider__item1 slider__item-061 mt0">
      </div>
      <div className="slider__item1 slider__item-071 mt0">
      </div>
    </Slider>
    <div className="text-center">
    <button onClick={goToPrevSlide} style={{marginRight:'10px'}} className="reserve__btn btn">{previous}</button>
    <button onClick={goToNextSlide} className="reserve__btn btn ">{next}</button>
    </div>
  
    </div>

  );
};

export default ImgSlider;
