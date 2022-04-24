import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AdminMenu from "./AdminMenu";

function Dashboard() {
  return (
    <div>
      <AdminMenu />
      <Box sx={{ width: "100%", height: "70%" }}>
        <Typography variant="h4" align="center">
          Admin Dashboard
        </Typography>
      </Box>
    </div>
  );
}

export default Dashboard;
