/**
 * COMPONENT FOR CIRCULAR CATEGORY CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date : 04 June 2023
 */

import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./AppCategoryCarousel.scss";
import { home } from "../../../data";

const AppCategoryCarousel = ({ showText }) => {
  const data = home.elements[1].data;
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
      <header className="header-2">
        <div className="title-area">
          <h2>
            Top
            <span> Categories</span>
          </h2>
        </div>
        <div className="action-button-area">
          <button type="button" className="btn selected">
            View All
          </button>
        </div>
      </header>

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
              <Link to={`/category/${item.id}`} className="link">
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
