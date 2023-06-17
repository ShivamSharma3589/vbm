/**
 * NAVIGATION COMPONENT FILE
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomLoader from "../components/custom-loader/CustomLoader";

const Navigation = () => {
  //#region for pages location

  // Homepage key
  const HomePage = lazy(() => import("../pages/home-page/HomePage"));
  //#endregion

  return (
    <Suspense fallback={<CustomLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<CustomLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
