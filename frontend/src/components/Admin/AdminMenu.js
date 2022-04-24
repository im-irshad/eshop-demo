import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import OrderMenu from "./adminMenu/OrderMenu";
import ProductMenu from "./adminMenu/ProductMenu";
import UsersMenu from "./adminMenu/UsersMenu";
import ReviewsMenu from "./adminMenu/ReviewsMenu";
function AdminMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <OrderMenu />
          <ProductMenu />
          <UsersMenu />
          <ReviewsMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AdminMenu;
