/**
 * TOP BAR COMPONENT
 */

import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="me-1"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            VivekBoxMaker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
