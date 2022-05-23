import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  return (
    <Container>
      <Typography
        sx={{ color: "info.main", fontWeight: 600 }}
        variant="h5"
        component="div"
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
