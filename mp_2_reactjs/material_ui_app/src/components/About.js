import React from 'react'
import { Box, Container, Typography, Divider } from '@mui/material';
import { RotatingText } from 'rotating-text';
import 'rotating-text/dist/index.css';
import ReactRotatingText from 'react-rotating-text';

function About() {
  return (
    <Box className='about-section'>
      <Container>
      <RotatingText className="rotating-text2"
        text="Hassle?"
      stagger={0.1}
        timing={0.5}>
      </RotatingText>
        <ReactRotatingText style={{ textAlign: 'center', fontFamily: 'Air America', fontSize: '40px', letterSpacing: '5px'}}
          items=
          {[' Drive and Park ', 'Easy', 'with Reserva']} />
        <Divider className='divider-section'></Divider>

        <Typography style={{ fontSize: '30px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px' }}>
          Having a hard time looking for parking spot around the metro? <Divider></Divider>
          No worries, Reserva got your back.
        </Typography>
      </Container>
    </Box>
  )
}

export default About;