import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ModalForm1 from './ModalForm1';



const currencies = [
  {
    value: 'Toyota',
    label: 'Toyota',
  },
  {
    value: 'Honda',
    label: 'Honda',
  },
  {
    value: 'Mitsubishi',
    label: 'Mitsubishi',
  },
  {
    value: 'Suzuki',
    label: 'Suzuki',
  },
  {
    value: 'Lamborghini',
    label: 'Lamborghini',
  },
  {
    value: 'Hyundai',
    label: 'Hyundai',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Ford',
    label: 'Ford',
  },
  {
    value: 'Rusi',
    label: 'Rusi',
  },

];

const currencies2 = [
    {
      value: '2',
      label: '2',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '6',
      label: '6',
    },
    {
      value: '10',
      label: '10',
    },
    {
    value: 'Optimus Prime',
    label: 'Optimus Prime',
   },
];
  
const currencies3 = [
    {
      value: 'Sedan',
      label: 'Sedan',
    },
    {
      value: 'Coupe',
      label: 'Coupe',
    },
    {
      value: 'Hatchback',
      label: 'Hatchback',
    },
    {
      value: 'SportsCar',
      label: 'SportsCar',
    },
    {
      value: 'Cross Over',
    label: 'Cross Over',
    },
    
    {
      value: 'Mini Van',
      label: 'Mini Van',
    },
    
    {
    value: 'Convertible',
    label: 'Convertible',
    },
    
];
  
const currencies4 = [
    {
      value: '10am - 10pm',
      label: '10am - 10pm',
    },
    {
      value: '10am - before closing',
      label: '10am - before closing',
    },
    {
      value: 'afternoon-evening',
      label: 'afternoon-evening',
    },
    {
      value: 'morning - afternoon',
      label: 'morning - afternoon',
    },
  ];

  const currencies5 = [
    {
      value: '1 day',
      label: '1 day',
    },
    {
      value: '2 days',
      label: '2 days',
    },
    {
      value: '3 days',
      label: '3 days',
    },
    {
      value: '4 days',
      label: '4 days',
    },
    {
      value: '5 days',
      label: '5 days',
    },
    {
      value: '1 week',
      label: '1 week',
    },
];

const currencies6 = [
    {
      value: 'Gcash',
      label: 'Gcash',
    },
    {
      value: 'Metrobank',
      label: 'Metrobank',
    },
    {
      value: 'BPI',
      label: 'BPI',
    },
    {
      value: 'BDO',
      label: 'BDO',
  },
  {
    value: 'Security Bank',
    label: 'Security Bank',
  },
  {
    value: 'Rural Bank of Tiger',
    label: 'Rural Bank of Tiger',
  },
];
  


export default function ModalForm() {
  return (
    <Box className='modalFormBox'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '60ch',},
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
      <ModalForm1/>
      </Box>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Toyota"
          helperText="Please select your brand of car"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Number of Wheels"
          defaultValue="2"
          helperText="Please select number of wheels"
          variant="filled"
        >
          {currencies2.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="Sedan"
          helperText="Please select type of car"
          variant="filled"
        >
          {currencies3.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Time"
          defaultValue="10am - 10pm"
          helperText="Entry time and Time out"
          variant="filled"
        >
          {currencies4.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Number of Days"
          defaultValue="1"
          helperText="Select number of days"
          variant="filled"
        >
          {currencies5.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Payment Options"
          defaultValue="Gcash"
          helperText="Mode of payment"
          variant="standard"
        >
          {currencies6.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
      </div>
    </Box>
  );
}