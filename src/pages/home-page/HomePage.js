/**
 * THIS IS THE HOMEPAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 02 June 2023
 */

import React, { useEffect } from "react";
import { AppBannerCarousel, AppValues } from "../../components"; // Page components
import { home } from "../../data"; // API data is being called
import {
  AppCategoryCarousel,
  AppNewsLetter,
  AppRecommendation,
  AppTodaysDeal,
  AppTrendingBoxes,
} from "../../components/home";
import "./HomePage.scss";
import { getData } from "../../api-helper/ApiHelper";
import { API_KEYS } from "../../config/AppConfig";

const HomePage = () => {
  //#region for states and objects

  //#endregion

  //#region for fucntions

  // Example usage
  //#endregion
  
  //#region for useEffect
  useEffect(() => {
    
    // TO GET DATA FOR HOMEPAGE 
    getData(API_KEYS.HOMEPAGE).then((jsonData) => {
      // Process the JSON data
      console.log(jsonData);
    });

  }, []);
  //#endregion

  return (
    <div className="homepage-wrapper">
      {/* APP BANNER CAROUSEL STARTS */}
      <section>
        <AppBannerCarousel data={home.elements[0].data} />
      </section>
      {/* APP BANNER CAROUSEL ENDS */}

      {/* OUR VALUES STARTS */}
      <section>
        <AppValues />
      </section>
      {/* OUR VALUES ENDS */}

      {/* WHAT ARE YOU LOOKING FOR TODAY STARTS */}
      <section>
        <AppTodaysDeal />
      </section>
      {/* WHAT ARE YOU LOOKING FOR TODAY ENDS */}

      {/* TRENDING BOXES SECTION STARTS */}
      <section>
        <AppTrendingBoxes />
      </section>
      {/* TRENDING BOXES SECTION ENDS */}

      {/* TOP CATEGORIES SECTION STARTS */}
      <section>
        <AppCategoryCarousel />
      </section>
      {/* TOP CATEGORIES SECTION ENDS */}

      {/* RECOMMENDATION SECTION STARTS  */}
      <section>
        <AppRecommendation />
      </section>
      {/* RECOMMENDATION SECTION ENDS */}

      {/* NEWSLETTER SECTION STARTS */}
      <section>
        <AppNewsLetter />
      </section>
      {/* NEWSLETTER SECTION ENDS */}
    </div>
  );
};

export default HomePage;
