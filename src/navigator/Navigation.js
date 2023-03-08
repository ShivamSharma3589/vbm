/**
 * NAVIGATION COMPONENT FILE
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
        <Route path="*" element={<Navigate />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
