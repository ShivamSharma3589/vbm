/**
 * HOME PAGE BANNER CAROUSEL
 */

import React from "react";
import "./Banner.css";
import { Carousel } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { banner } from "../../data";

const Banner = () => {
  return (
    <div className="banner-carousel-wrapper">
      <Carousel autoplay>
        {banner?.map((item) => {
          return (
            <div className="carousel-item" key={item.id}>
              <LazyLoadImage src={item.src} alt={item.a} className="carousel-image" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
