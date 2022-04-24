import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";

export default function MidHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            E-Shop
          </Typography>
          <Button color="inherit" href="/">
            Home
            <HomeIcon />
          </Button>
          <Button color="inherit" href="/products">
            Products
            <InventoryIcon />
          </Button>
          <Button color="inherit" href="/contact">
            Contact
            <ContactsIcon />
          </Button>
          <Button color="inherit" href="/about">
            About
            <InfoIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
