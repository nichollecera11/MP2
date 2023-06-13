import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(64, 64, 64, 0.8)'
            : 'rgb(84, 84, 84)',
      }}
    />
  );
}

export default function ModalForm1() {
  return (
    <Box className='modalFormBox1'
      sx={{
        display: 'flex',
        '& .MuiTextField-root': { width: '60ch' },
      
      }}
    >
      <RedBar />
      <TextField label={'First Name'} id="First Name" variant="standard"/>
      <RedBar />
      <RedBar />
      <TextField label={'Middle Name'} id="middle-Name" variant="standard" />
      <RedBar />
      <RedBar />
      <TextField label={'Last Name'} id="last-Name" variant="standard" />
      <RedBar />
      <RedBar />
      <TextField label={'Birthday'} id="birthday" variant="standard" />
      <RedBar />
      <RedBar />
      <TextField label={'Address'} id="Address" variant="standard" />
      <RedBar />
      <RedBar />
      <TextField label={'Drivers License'} id="drivers-license" variant="standard" />
      <RedBar />
    </Box>
  );
}