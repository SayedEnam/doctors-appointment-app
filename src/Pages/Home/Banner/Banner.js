import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';



const bannerBg = {
    background: `url(${bg})`,
    
}
const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid style={{...verticalAlign, textAlign: 'left'}} item xs={12} md={6}>
        <Box>
        <Typography variant="h3">
            Your New Smile <br />
            Starts Here
        </Typography>
        <Typography variant="h6" sx={{fontSize: "14px", fontWeight: 300, color: 'gray'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
        </Typography>
        
        <Button variant="contained" style={{backgroundColor: '#5ce7ed', marginTop: 20}}>Get Appointment</Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} style={verticalAlign} >
        <img style={{width: '450px'}} src={chair} alt="" />
      </Grid>
    </Grid>
  </Container>
  )
}

export default Banner