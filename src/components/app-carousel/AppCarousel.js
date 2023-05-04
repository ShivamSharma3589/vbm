/**
 * COMPONENT FOR BANNER CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date: 01 Apr 2023
 */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./AppCarousel.sass";

const AppCarousel = ({data}) => {
  return (
    <div className="app-carousel-wrapper">
      <Carousel>
        {data?.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <LazyLoadImage
                className="app-carousel-image"
                src={item.src}
                alt={item.title}
                title={item.title}
              />
              {item.showText && (
                <Carousel.Caption>
                  <h3 style={{color: item.titleColor}}>{item.title}</h3>
                  <p style={{color: item.subTitleColor}}>{item.subTitle}</p>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AppCarousel;
