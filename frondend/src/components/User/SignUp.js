import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userAction";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    console.log("signup form submited");
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(user));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUser(data));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container
            maxWidth="sm"
            sx={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <Typography variant="h5" gutterBottom align="center">
              Register Yourself!
            </Typography>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Name"
                      placeholder="Enter Your name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      //value={name}
                      //  onChange={registerDataChange}
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name?.type === "required" &&
                      "First name is required"}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      //  value={email}
                      //  onChange={registerDataChange}
                      {...register("email", { required: "email is required" })}
                    />
                    {errors.email?.type === "required" && "email is required"}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="password"
                      type="password"
                      placeholder="Enter your password"
                      variant="outlined"
                      fullWidth
                      name="password"
                      // value={password}
                      //    onChange={registerDataChange}
                      {...register("password", {
                        required: "password is required",
                      })}
                    />
                    {errors.password?.type === "required" &&
                      "password is required"}
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

export default SignUp;
