/**
 * CATEGORY PAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 06 May 2023
 */

import React from "react";
import "./CategoryPage.scss";
import { testCategory } from "../../data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoryPage = () => {
  return (
    <div className="category-page-section">
      <div className="category-page-wrapper">
        <div className="category-page-grid">
          {testCategory?.map((item) => {
            return (
              <div className="category-item">
                <article className="category-card">
                  <Link to="" className="image-area">
                    <LazyLoadImage
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      effect="blur"
                    />
                  </Link>
                  <div className="content-area">
                    <Link to="" className="title">
                      {item.title}
                    </Link>
                    <p className="desc">{item.desc}</p>
                    <p className="price">{item.price}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
