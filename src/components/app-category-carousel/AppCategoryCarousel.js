/**
 * COMPONENT FOR CIRCULAR CATEGORY CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const AppCategoryCarousel = () => {
  return <div className="app-category-wrapper">
    <ul>
      <li>
        <Link to="/">
          <LazyLoadImage 
            src="https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_960_720.jpg"
            alt=""
            title=""
          />
          test 
        </Link>
      </li>
    </ul>
  </div>;
};

export default AppCategoryCarousel;
