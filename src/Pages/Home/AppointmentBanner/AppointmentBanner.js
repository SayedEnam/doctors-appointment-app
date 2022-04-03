import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 175
}
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width: 400, marginTop: '-110px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
         <Box>
         <Typography variant='h6' sx={{mb: 5 }} style={{color: 'lightblue'}}>
            Appointment
         </Typography>
         <Typography variant='h4' style={{color: 'white'}}>
            Make an Appointment Today
         </Typography>
         <Typography variant='h4' sx={{my: 1 }} style={{color: 'white', fontSize: '14px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </Typography>
         <Button bariant="contained">Learn More</Button>
         </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AppointmentBanner