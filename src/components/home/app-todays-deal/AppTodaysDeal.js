/**
 * TODAY'S DEAL SECTION COMPONENT FOR HOMEPAGE COMPONENTS
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */
import React from "react";
import { Header1 } from "../../common";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./AppTodaysDeal.scss";

const AppTodaysDeal = () => {
  return (
    <div className="todays-deal-wrapper">
      <Header1 subTitle="Our values" title="What are you looking for today?" />

      <div className="todays-deal-grid">
        <div className="grid-item first">
          <Link to="/">
            <LazyLoadImage src="https://www.dl.dropboxusercontent.com/s/opnbvo88evwmx42/promolist-4.jpg?dl=0" />
          </Link>
        </div>
        <div className="grid-item">
          <div className="todays-deal-inner-grid">
            <div className="grid-item second">
              <Link to="/">
                <LazyLoadImage src="https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0" />
              </Link>
            </div>
            <div className="grid-item third">
              <Link to="/">
                <LazyLoadImage src="https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0" />
              </Link>
            </div>
          </div>
          <div className="grid-item four">
            <Link to="/">
              <LazyLoadImage src="https://www.dl.dropboxusercontent.com/s/jk8wdyvyzordri2/promolist-3.jpg?dl=0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTodaysDeal;
