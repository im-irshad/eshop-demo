import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function UsersMenu() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);

    if (e.target.innerText === "Update User") {
      Navigate("/admin/user/id");
    }
    if (e.target.innerText === "List All Users") {
      Navigate("/admin/users");
    }
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick} variant="contained">
        User Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Update User</MenuItem>
        <MenuItem onClick={handleClose}>List All Users</MenuItem>
      </Menu>
    </div>
  );
}
