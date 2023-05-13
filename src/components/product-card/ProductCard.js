/**
 * PRODUCTS CARD COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 13 May 2023
 */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ data, showText, imageFit }) => {
  return (
    <article className="product-card">
      <Link to={data.redirect} className="img-area">
        <LazyLoadImage
          src={data?.src}
          alt={data.alt}
          title={data.title}
          effect="blur"
          className={`img ${imageFit}`}
          wrapperClassName="img-wrapper"
        />
      </Link>
      {showText && (
        <div className="content-area">
          <Link to="" className="title">
            {data.title}
          </Link>
          <p className="desc">{data.desc}</p>
          <p className="price">{data.price}</p>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
