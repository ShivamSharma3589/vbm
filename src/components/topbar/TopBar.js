/**
 * TOP BAR COMPONENT
 */

import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import "./TopBar.css";
import useScroll from "../../hooks/useScroll";

const TopBar = () => {
  //#region for states
  const isDeviceScrolled = useScroll();
  //#endregion
  return (
    <div id="topbar-wrapper" className={isDeviceScrolled > 55 ? "fixed" : ""}>
      <AppBar style={{ backgroundColor: "#000" }} className="app-bar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="me-1"
          >
            <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            className="nav-logo"
          >
            Vivek<span>Box</span>Maker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
