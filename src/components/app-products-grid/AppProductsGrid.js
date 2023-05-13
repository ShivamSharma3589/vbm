/**
 * COMPONENT FOR SHOWING THE PRODUCTS GRID
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import React from "react";
import ProductCard from "../product-card/ProductCard";
import "./AppProductsGrid.scss";

const AppProductsGrid = ({ data, heading, showText, imageFit }) => {
  return (
    <div className="app-products-grid-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <div className="products-grid">
        {data.map((item) => {
          return (
            <div className="grid-item" key={item.id}>
              <ProductCard
                data={item}
                showText={showText}
                imageFit={imageFit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppProductsGrid;
