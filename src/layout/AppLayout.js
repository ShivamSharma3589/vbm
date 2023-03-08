/**
 * MAIN APP LAYOUT FILE
 */

import React from "react";
import { BottomNav, TopBar, Wrapper } from "../components";

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopBar />
      {children}
      <BottomNav />
    </Wrapper>
  );
};

export default AppLayout;
