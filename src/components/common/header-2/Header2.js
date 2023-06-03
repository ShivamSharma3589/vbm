/**
 * HEADER 2 FOR IN SECTION COMPONENT OF THE HOME PAGE WITH TABS
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */
import React from "react";
import "./Header2.scss";

const Header2 = () => {
  return (
    <header className="header-2">
      <div className="title-area">
        <h2>
          Trending
          <span> Boxes</span>
        </h2>
      </div>
      <div className="action-button-area">
        <button type="button" className="trending-option btn selected">
          Latest
        </button>
        <button type="button" className="trending-option btn">
          Featured
        </button>
        <button type="button" className="trending-option btn">
          Best Seller
        </button>
      </div>
    </header>
  );
};

export default Header2;
