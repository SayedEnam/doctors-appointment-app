import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Appointments Portal
          </Typography>
          <Link to={"/appointment"}>
            <Button style={{ color: "white", textDecoration: "none" }}>
              Appointment
            </Button>
          </Link>
          {user?.email ? (
            <Box>
              <NavLink to="/dashboard">
                <Button style={{ color: "white", textDecoration: "none" }}>Dashboard</Button>
              </NavLink>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink to="/login">
              <Button style={{ color: "white", textDecoration: "none" }}>
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
