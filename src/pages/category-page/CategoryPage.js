/**
 * CATEGORY PAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 06 May 2023
 */

import React from "react";
import { ProductCard } from "../../components";
import { testCategory } from "../../data";
import "./CategoryPage.scss";

const CategoryPage = () => {
  return (
    <div className="category-page-section">
      <div className="category-page-wrapper">
        <div className="category-page-grid">
          {testCategory?.map((item) => {
            return (
              <div className="category-item">
                <ProductCard data={item} showText={true} imageFit={"cover"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
