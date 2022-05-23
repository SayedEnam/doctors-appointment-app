import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";

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

const BookingModal = ({ openModal, modalClose, booking, date }) => {
  const { name, time } = booking;

  const handleBooking = (e) => {
    alert("submit");
    modalClose();
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
              defaultValue="Your Name"
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your Email"
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
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
