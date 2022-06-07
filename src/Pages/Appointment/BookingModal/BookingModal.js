import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openModal,
  modalClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientname: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookinginfo, setBookinginfo] = useState(initialInfo);

  const handleBookingBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const bookInfo = { ...bookinginfo };
    bookInfo[field] = value;
    setBookinginfo(bookInfo);
  };
  const handleBooking = (e) => {
    //collect data
    const appointment = {
      ...bookinginfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    // send to the server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          modalClose();
        }
      });
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={modalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      setBookingSuccess={setBookingSuccess}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBooking}>
            <TextField
              disabled
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="patientname"
              onBlur={handleBookingBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleBookingBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleBookingBlur}
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" variant="contained">
              SUBMIT
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
