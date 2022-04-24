import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Avatar from "@mui/material/Avatar";
import { Dashboard, AccountBox, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";

export default function UserMenu({ user }) {
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const actions = [
    { icon: <AccountBox />, name: "My Orders", func: orders },
    { icon: <AccountBox />, name: "My Profile", func: account },
    { icon: <Logout />, name: "Logout", func: logmeout },
  ];
  function orders() {
    Navigate("/orders");
  }

  function account() {
    Navigate("/account");
  }

  function logmeout() {
    console.log("logout req send");
    dispatch(logout());
  }

  function dashboard() {
    Navigate("/admin/dashboard");
  }

  console.log(user.role);
  if (user.role === "admin") {
    actions.unshift({
      icon: <Dashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", top: 146, right: 16 }}
      icon={<Avatar>{user.name}</Avatar>}
      direction="down"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.func}
        />
      ))}
    </SpeedDial>
  );
}
