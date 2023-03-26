/**
 * MAIN APP LAYOUT FILE
 */

import React from "react";
import { BottomNav, Header, TopBar } from "../components";
import useMobileDevice from "../hooks/useMobileDevice";
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  //#region for states
  const { isMobile } = useMobileDevice();
  //#endregion

  return (
    <div className="app-layout-wrapper">
      {
        // Rendering header on the basis of the client device width
        isMobile ? <TopBar /> : <Header />
      }
      {children}
      {
        // Rendering bottom navigation on the basis of the window size
        isMobile && <BottomNav />
      }
    </div>
  );
};

export default AppLayout;
