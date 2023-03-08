/**
 * This is the beginning of the App
 * @author: shivayasharma1149@gmail.com
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Navigation from "./navigator/Navigation";

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <AppLayout>
          <Navigation />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
