/**
 * COMPONENT FOR CIRCULAR CATEGORY CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date : 01 Apr 2023
 */

import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./AppCategoryCarousel.css";

const AppCategoryCarousel = ({ data, heading, showText }) => {
  //#region
  /**
   * Below code is for hanle the dragging of the horizontal scrollable content
   * @author: shivayasharma1149@gmail.com
   * @date : 23 Apr 2023
   */
  const containerRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.classList.add("active");
  }

  function handleMouseUp() {
    isDown = false;
    containerRef.current.classList.remove("active");
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // adjust the scroll speed here
    containerRef.current.scrollLeft = scrollLeft - walk;
  }
  //#endregion

  return (
    <div className="app-category-wrapper">
      {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
      <ul
        className="list section-draggable"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {data.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <Link to="/" className="link">
                <div className="img-area">
                  <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                    className="img"
                  />
                </div>
                {showText && (
                  <div className="text-area">
                    <p className="title">{item.title}</p>
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppCategoryCarousel;
