import { Box, Divider, Button, } from '@mui/material'
import React from 'react'
import ModalForm from './ModalForm';
import { RotatingText } from 'rotating-text';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Register() {
  return (
    <Box className='register-section'>
      <RotatingText className="rotating-text2"
        text="Register"
        stagger={0.1}
        timing={0.5}>
      </RotatingText>
      <Divider></Divider>
      

        <Box className='register-section'>
        <ModalForm className='modalForm-section'></ModalForm>
      </Box>
      <Button style={{marginBottom:'50px'}} variant="contained" endIcon={<SendIcon />}>
      Register
      </Button>
      
    </Box>
  )
}

export default Register;