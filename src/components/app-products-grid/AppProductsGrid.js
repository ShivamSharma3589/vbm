/**
 * COMPONENT FOR SHOWING THE PRODUCTS GRID
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import { Card, Col, Row } from "antd";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./AppProductsGrid.css";

const AppProductsGrid = ({ data, heading, showText }) => {
  return (
    <div className="app-products-grid-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <Row gutter={[5,5]}>
        {data.map((item) => {
          return (
            <Col key={item.id} xs={12} sm={12} md={8} lg={8} xl={6}>
              <Card size="small">
                <div className="img-area">
                  <LazyLoadImage
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    className="img"
                  />
                </div>
                {showText && (
                  <div className="content-area">
                    <h6 className="title">{item.title}</h6>
                    <div className="price">{item.price}</div>
                  </div>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AppProductsGrid;
