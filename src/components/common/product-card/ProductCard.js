/**
 * THIS IS THE PRODUCT CARD COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({
  src, // Image source
}) => {
  return (
    <div className="product-card">
      <div className="image-area">
        <Link to="/" className="img-link">
          <LazyLoadImage src="https://www.dl.dropboxusercontent.com/s/y1feyazv0m5ds4v/promolist-2.jpg?dl=0" className="img" />
        </Link>
      </div>
      <div className="content-area">
        <Link className="title">
          <h6>Sweet Boxes Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium consectetur minima dolorum?</h6>
        </Link>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum id dolores accusantium, impedit nulla quod! Tempore inventore sunt veniam facere perferendis laborum minima illo dolores corporis dignissimos dicta modi, nemo quos hic saepe ipsam laboriosam deserunt cum velit? Assumenda rem magnam quisquam facere consectetur quasi enim dolores? Praesentium, consectetur. Assumenda.
        </p>
        <div className="action-area">
          <button type="button" className="btn btn-sm btn-danger">View Details</button>
          <div className="price">₹1599</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
