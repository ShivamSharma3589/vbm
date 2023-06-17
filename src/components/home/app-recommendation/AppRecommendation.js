/**
 * APP RECOMMENDATION SECTION FOR THE HOME PAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 04 June 2023
 */
import React from "react";
import { CardsCarousel } from "../../common";
import "./AppRecommendation.scss";

const AppRecommendation = () => {
  return (
    <div className="recommendation-section">
      <header className="header-2">
        <div className="title-area">
          <h2>
            Top
            <span> Recommendation</span>
          </h2>
        </div>
      </header>

      <CardsCarousel />
    </div>
  );
};

export default AppRecommendation;
