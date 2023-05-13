/**
 * BOTTOM NAVIGATION COMPONENT
 */

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  //#region for state variables
  const [value, setValue] = React.useState(0);
  //#endregion

  //#region for Objects and Function
  const navigate = useNavigate();
  //#endregion

  return (
    <div className="bottomNav-wrapper">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction label="Category" icon={<CategoryIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          onClick={() => navigate("/about")}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
