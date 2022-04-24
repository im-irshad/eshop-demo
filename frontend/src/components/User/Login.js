import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "../../redux/actions/userAction";

function Login() {
  const dispatch = useDispatch();
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("login form submited ");
    dispatch(login(loginEmail, loginPassword));
  };

  return (
    <>
      <div>
        <form onSubmit={loginSubmit}>
          <Container
            maxWidth="sm"
            sx={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <Typography variant="h5" gutterBottom align="center">
              Login
            </Typography>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      variant="outlined"
                      fullWidth
                      required
                      value={loginEmail}
                      onChange={(e) => setloginEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="password"
                      type="password"
                      placeholder="Enter your password"
                      variant="outlined"
                      fullWidth
                      required
                      value={loginPassword}
                      onChange={(e) => setloginPassword(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </form>
      </div>
    </>
  );
}

export default Login;
