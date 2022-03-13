import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { loading, isAuth, user } = useSelector((state) => state.UserReducer);
  let Navigate = useNavigate();
  useEffect(() => {
    if (isAuth === false) {
      Navigate("/login");
    }
  }, [isAuth, Navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container
            maxWidth="sm"
            sx={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <Typography variant="h5" gutterBottom align="center">
              {user.name} Profile!
            </Typography>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1" gutterBottom align="center">
                      Full Name: {user.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1" gutterBottom align="center">
                      Email: {user.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      href="/me/update"
                    >
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
      )}
      ;
    </>
  );
}

export default Profile;
