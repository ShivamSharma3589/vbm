/**
 * COMPONENT FOR SHOWING THE PRODUCTS GRID
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import React from "react";
import { Col, Row } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiEye } from "react-icons/fi";
import "./AppProductsGrid.sass";

const AppProductsGrid = ({ data, heading, showText, imageFit }) => {
  console.log(imageFit);
  return (
    <div className="app-products-grid-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <Row>
        {data.map((item) => {
          return (
            <Col key={item.id} xs={12} sm={12} md={8} xl={6}>
              <div className="product-item">
                <div className="product-card">
                  <div className="img-area">
                    <LazyLoadImage
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      className={`img ${imageFit}`}
                    />
                  </div>
                  {showText && (
                    <div className="product-content">
                      <div className="content-area">
                        <h6 className="title">{item.title}</h6>
                        <div className="price">{item.price}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AppProductsGrid;
