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
import { Navigate, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);

    e.preventDefault();
  };

  const googleSignInHandle = () => {
    signInWithGoogle();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h6">Login</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Email"
              name="email"
              type="email"
              variant="standard"
              onBlur={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              name="password"
              type="password"
              variant="standard"
              onBlur={handleOnChange}
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink sx={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
          </form>
          <p>---------------------</p>
          <Button onClick={googleSignInHandle} variant="contained">
            Google Sign In
          </Button>
          {isLoading && <CircularProgress />}
          {user?.email && <Navigate to="/appointment" />}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
