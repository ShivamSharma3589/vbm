/**
 * PRODUCTS GRID
 */

import React from "react";
import { Card, Col, Row } from "antd";
import { products_grid } from "../../data";
import "./ProductGrid.css";

const ProductGrid = () => {
  return (
    <div className="products-grid-wrapper">
      <Row gutter={[5, 5]}>
        {products_grid?.map((item) => {
          return (
            <Col key={item.id} span={12} className="grid-col">
              <Card size="small" className="grid-card">
                <div className="image-area">
                  <div className="img-container">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="product-img"
                    />
                  </div>
                </div>
                <div className="desc-area">
                  <h6 className="title">{item.title}ghfdb hgvfuy uyhgrfbb bvsunb uyhfbpyqfj</h6>
                  <div className="price">{item.price}</div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductGrid;
