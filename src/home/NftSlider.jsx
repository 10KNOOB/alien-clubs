import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NftData } from "../data/NftData";

export default class CenterMode extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: "20px",
      slidesToShow: 3,
      focusOnSelect: true,
      dots: false,
      speed: 500,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {NftData.map((item) => {
            return (
              <div key={item.id} className="slide-item">
                <img src={item.img} alt="" className="slide-image" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
