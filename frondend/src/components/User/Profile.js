import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";

function Profile() {
  return (
    <>
      <div>
        <Container
          maxWidth="sm"
          sx={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Typography variant="h5" gutterBottom align="center">
            My Profile!
          </Typography>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1" gutterBottom align="center">
                    Full Name: Muhammad Irshad
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1" gutterBottom align="center">
                    Email: imabbasi@msn.com
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    Edit Profile
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    My Orders
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Profile;
