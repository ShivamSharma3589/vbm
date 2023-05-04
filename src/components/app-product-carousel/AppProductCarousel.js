/**
 * COMPONENT FOR PRODUCT CARDS CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date : 02 Apr 2023
 */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./AppProductCarousel.css";

const AppProductCarousel = ({ data, heading }) => {
  //#region for States
  //#endregion

  //#region for Objects and Functions
  //#endregion

  //#region for useEffect
  //#endregion

  return (
    <div className="app-product-carousel-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <div className="slider-cards">
        <OwlCarousel items={4} className="owl-theme" loop nav margin={8}>
          {data?.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="product-card">
                  <div className="image-area">
                    <img
                      src="https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0"
                      alt=""
                    />
                  </div>
                  <div className="content-area">
                    <h6 className="title">Bhaji Box</h6>
                    <div className="desc">Lorem ipsum dolor sit amet.</div>
                    <div className="price">₹100</div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default AppProductCarousel;
