/**
 * COMPONENT FOR CIRCULAR CATEGORY CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./AppCategoryCarousel.css";

const AppCategoryCarousel = ({ data, heading, showText }) => {
  return (
    <div className="app-category-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <ul className="list">
        {data.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <Link to="/" className="link">
                <div className="img-area">
                  <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                    className="img"
                  />
                </div>
                {showText && (
                  <div className="text-area">
                    <p className="title">{item.title}</p>
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppCategoryCarousel;
