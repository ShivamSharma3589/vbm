/**
 * TRENDING BOXES SECTION COMPONENT FOR HOMEPAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */

import React, { useState } from "react";
import { CardsCarousel } from "../../common";
import "./AppTrendingBoxes.scss";

const AppTrendingBoxes = () => {
  //#region
  const [selectedTab, setSelectedTab] = useState("latest");
  //#endregion

  return (
    <div className="trending-boxes-wrapper">
      <header className="header-2 wrap">
        <div className="title-area">
          <h2>
            Trending
            <span> Boxes</span>
          </h2>
        </div>
        <div className="action-button-area">
          <button
            type="button"
            className={`btn ${selectedTab === "latest" ? "selected" : ""}`}
            onClick={() => setSelectedTab("latest")}
          >
            Latest
          </button>
          <button
            type="button"
            className={`btn ${selectedTab === "featured" ? "selected" : ""}`}
            onClick={() => setSelectedTab("featured")}
          >
            Featured
          </button>
          <button
            type="button"
            className={`btn ${selectedTab === "best-seller" ? "selected" : ""}`}
            onClick={() => setSelectedTab("best-seller")}
          >
            Best Seller
          </button>
        </div>
      </header>

      <div className="trending-boxes-carousels">
        {selectedTab === "latest" && <CardsCarousel />}
        {selectedTab === "featured" && <CardsCarousel />}
        {selectedTab === "best-seller" && <CardsCarousel />}
      </div>
    </div>
  );
};

export default AppTrendingBoxes;
