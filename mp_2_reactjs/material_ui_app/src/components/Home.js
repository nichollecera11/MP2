import './HomeStyle.css';
import React from 'react';
import { RotatingText } from 'rotating-text';
import 'rotating-text/dist/index.css';
import {Box, Typography} from '@mui/material';

function Home() {
  return (
    <Box className="home-section">
      <RotatingText className="rotating-text"
        text="Reserva"
      stagger={0.1}
        timing={0.5}>
      </RotatingText>
      <Typography variant='h3' align='center' fontFamily={'Air America'} letterSpacing={'10px'}>
        Your parking solutions
      </Typography>
    </Box>
    
  )
}
export default Home;