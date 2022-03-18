import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function OrderMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.innerText === "List All Orders") {
      navigate("/admin/orders");
    }
    if (e.target.innerText === "Process Order") {
      navigate("/admin/orders/id");
    }
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick} variant="contained">
        Order Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} id="p1">
          Process Order
        </MenuItem>
        <MenuItem onClick={handleClose}>List All Orders</MenuItem>
      </Menu>
    </div>
  );
}
