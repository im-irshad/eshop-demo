import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, register } from "../../redux/actions/userAction";
import { clearErrors, updateProfile } from "../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";
import Loader from "../Loader/Loader";

function UpdateProfile() {
  const dispatch = useDispatch();
  let Navigate = useNavigate();

  const { user } = useSelector((state) => state.UserReducer);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.profileReducer
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    console.log("submit executed");
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    dispatch(updateProfile({ name, email }));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

    if (error) {
      dispatch(clearErrors());
    }

    if (isUpdated) {
      dispatch(loadUser());
      Navigate("/account");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, Navigate, error, user, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <form onSubmit={updateProfileSubmit}>
            <Container
              maxWidth="sm"
              sx={{ marginTop: "100px", marginBottom: "100px" }}
            >
              <Typography variant="h5" gutterBottom align="center">
                Update Profile!
              </Typography>
              <Card>
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Name"
                        placeholder="Enter Your name"
                        variant="outlined"
                        required
                        fullWidth
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdateProfile;
