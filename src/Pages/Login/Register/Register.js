import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("password does not match");
      return;
    }
    registerUser(registerData.email, registerData.password, registerData.name);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h6">Registeration</Typography>
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Email"
                name="email"
                type="email"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Password"
                name="password"
                type="password"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Your Password"
                name="password2"
                type="password"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink sx={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Your Account Created Successfully!</Alert>
          )}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
