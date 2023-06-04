/**
 * MAIN APP LAYOUT FILE
 */

import React from "react";
import { BottomNav, Footer, Header, MobileHeader } from "../components";
import useMobileDevice from "../hooks/useMobileDevice";
import "./AppLayout.scss";

const AppLayout = ({ children }) => {
  //#region for states
  const { isMobile } = useMobileDevice();
  //#endregion

  return (
    <div className="app-layout-wrapper">
      {
        // Rendering header on the basis of the client device width
        isMobile ? <MobileHeader /> : <Header />
      }
      <main className="main-content">
        {
          // Main content will render here
          children
        }
      </main>
      <Footer />
      {
        // Rendering bottom navigation on the basis of the window size
        isMobile && <BottomNav />
      }
    </div>
  );
};

export default AppLayout;
