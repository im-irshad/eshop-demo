import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <Box
      component="div"
      sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
    >
      <Box
        component="div"
        sx={{ width: "30%", p: 2, border: "1px dashed grey" }}
      >
        <Button>Download Our App</Button>
      </Box>
      <Box
        component="div"
        sx={{ width: "30%", p: 2, border: "1px dashed grey" }}
      >
        <Button>E-Shop</Button>
      </Box>
      <Box
        component="div"
        sx={{ width: "30%", p: 2, border: "1px dashed grey" }}
      >
        <Button>Follow Us </Button>
      </Box>
    </Box>
  );
}
