import { useState } from "react";
import { Link } from "wouter";
import { AccountCircle, WidthFull } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "styled-components";

import SearchBar from "./SearchBar";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            minHeight: { xs: "64px", sm: "84px" },
          }}
        >
          <Link to="/">
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
            >
              ANIMEPEDIA
            </Typography>
          </Link>
          <SearchBar />
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
