"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img src="/img1.webp" width={372} height={300} alt="logo"/>
      </div>
      <div>
      <img src="/D.I.Y-Duck.webp" width={372} height={300} alt="logo"/>
      </div>
      <div>
      <img src="/22.jpg" width={372} height={300} alt="logo"/>
      </div>
      <div>
      <img src="/33.avif" width={372} height={300} alt="logo"/>
      </div>
      <div>
      <img src="/img5.gif" width={372} height={300} alt="logo"/>
      </div>
      <div>
      <img src="/img6.gif" width={372} height={300} alt="logo"/>
      </div>
    </Slider>
  );
}