"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function KmSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img src="/khuyenmai1.webp" width={700} height={100} alt="logo"/>
      </div>
      <div>
      <img src="/D.I.Y-Duck.webp" width={600} height={100} alt="logo"/>
      </div>
      <div>
      <img src="/22.jpg" width={600} height={100} alt="logo"/>
      </div>
      <div>
      <img src="/33.avif" width={600} height={100} alt="logo"/>
      </div>
      <div>
      <img src="/img5.gif" width={600} height={100} alt="logo"/>
      </div>
      <div>
      <img src="/img6.gif" width={600} height={100} alt="logo"/>
      </div>
    </Slider>
  );
}