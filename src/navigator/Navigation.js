/**
 * NAVIGATION COMPONENT FILE
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import React from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomLoader from "../components/custom-loader/CustomLoader";

const Navigation = () => {
  const HomePage = React.lazy(() => import("../pages/home-page/HomePage"));
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
