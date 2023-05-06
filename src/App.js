/**
 * This is the beginning of the Application
 * @author: shivayasharma1149@gmail.com
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Navigation from "./navigator/Navigation";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter basename="/test">
        <AppLayout>
          <Navigation />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
