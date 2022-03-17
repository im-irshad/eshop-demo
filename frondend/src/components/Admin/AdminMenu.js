import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import OrderMenu from "./adminMenu/OrderMenu";
import ProductMenu from "./adminMenu/ProductMenu";
import UsersMenu from "./adminMenu/UsersMenu";
import ReviewsMenu from "./adminMenu/ReviewsMenu";
function AdminMenu() {
  return (
    <AppBar>
      <Toolbar>
        <OrderMenu />
        <ProductMenu />
        <UsersMenu />
        <ReviewsMenu />
      </Toolbar>
    </AppBar>
  );
}

export default AdminMenu;
