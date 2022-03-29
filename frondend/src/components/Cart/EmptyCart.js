import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Typography } from "@mui/material";

function EmptyCart() {
  return (
    <div>
      <RemoveShoppingCartIcon
        sx={{
          fontSize: "148px",
          color: "primary.main",
          margin: "10% 50% 1% 46% ",
        }}
      />
      <Typography variant="h5" align="center">
        Shopping cart is Empty
      </Typography>
    </div>
  );
}

export default EmptyCart;
