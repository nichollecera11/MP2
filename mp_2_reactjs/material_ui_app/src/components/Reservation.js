import React from 'react'
import { Box, Container, Divider, Typography } from '@mui/material';
// import Calendar from './components/Calendar.js';
import Calendar from './Calendar.js';
import SpacingGrid from './SpacingGrid.js';
import ReactRotatingText from 'react-rotating-text';
import { RotatingText } from 'rotating-text';
// import shadows from '@mui/material/styles/shadows.js';



function Reservation() {
    return (
        <Box sx={{
            marginTop: '20px'
      }} className="reservationStyle">
        <Container>
          <RotatingText className="rotating-text2"
            style={{textAlign: 'center'}}
        text="Reservation"
      stagger={0.1}
        timing={0.5}>
          </RotatingText>
          <Divider className='reservation-divider'>
          </Divider>
        <ReactRotatingText className='reactRotatingText'
          items=
            {[' Choose your ', 'Date', 'and Slot']} />
          </Container>
          <Container>
          <Calendar />
          <Divider>
          </Divider>
              <SpacingGrid/>
          </Container>
    </Box>
  )
}

export default Reservation;