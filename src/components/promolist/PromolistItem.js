/**
 * PROMOLIST ITEM COMPONENT
 */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./PromolistItem.css";

const PromolistItem = ({ src, alt, title }) => {
  return (
    <div className="promolist-item">
      <div className="item">
        <div className="image-area">
          <LazyLoadImage alt={alt} src={src} className="promo-image" />
        </div>
        <div className="title-area">
          <h6 className="title" title={title}>{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default PromolistItem;
