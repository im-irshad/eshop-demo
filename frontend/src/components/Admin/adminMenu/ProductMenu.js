import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function ProductMenu() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);

    if (e.target.innerText === "Add New Product") {
      Navigate("/admin/product");
    }
    if (e.target.innerText === "Update Product") {
      Navigate("/admin/product/id");
    }
    if (e.target.innerText === "All Products") {
      Navigate("/admin/products");
    }
  };
  return (
    <div>
      <Button id="basic-button" onClick={handleClick} variant="contained">
        Product Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add New Product</MenuItem>
        <MenuItem onClick={handleClose}>Update Product</MenuItem>
        <MenuItem onClick={handleClose}>All Products</MenuItem>
      </Menu>
    </div>
  );
}
