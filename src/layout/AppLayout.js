/**
 * MAIN APP LAYOUT FILE
 */

import React from "react";
import { BottomNav, TopBar, Wrapper } from "../components";
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout-wrapper">
      <Wrapper>
        <TopBar />
        {children}
        <BottomNav />
      </Wrapper>
    </div>
  );
};

export default AppLayout;
