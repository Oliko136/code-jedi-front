import React, { useState } from 'react';
import { Box, FormControlLabel, RadioGroup, Radio } from '@mui/material';

const RadioFilter = ({ onFilterChange, priority }) => {
  const [selectedValue, setSelectedValue] = useState(priority || 'Without');
  const radio = [
    {
      value: 'Without',
      label: 'Without priority',
      labelColor: selectedValue === 'Without' ? '#fff' : '#808080',
      radioColor: {
        static: '#DCDCDC',
        onChecked: '#fff',
      },
    },
    {
      value: 'Low',
      label: 'Low',
      labelColor: selectedValue === 'Low' ? '#fff' : '#808080',
      radioColor: {
        static: '#0000FF',
        onChecked: '#121212',
      },
    },
    {
      value: 'Medium',
      label: 'Medium',
      labelColor: selectedValue === 'Medium' ? '#fff' : '#808080',
      radioColor: {
        static: '#FFC0CB',
        onChecked: '#121212',
      },
    },
    {
      value: 'High',
      label: 'High',
      labelColor: selectedValue === 'High' ? '#fff' : '#DCDCDC',
      radioColor: {
        static: '#008000',
        onChecked: '#121212',
      },
    },
  ];

  const handleRadioChange = event => {
    const selectedPriority = event.target.value;
    setSelectedValue(selectedPriority);
    onFilterChange(selectedPriority);
  };
console.log('Render RadioFilter component');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flexStart',
        width: '120px',
      }}
    >
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        value={selectedValue}
        name="radio-buttons-group"
        onChange={handleRadioChange}
        sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
      >
        {radio.map(button => {
          const { value, label, labelColor, radioColor } = button;
          return (
            <FormControlLabel
              key={value}
              value={value}
              sx={{
                display: 'flex',
                gap: '8px',
                margin: '0',
                height: '24px',
                '& .MuiTypography-root': {
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  color: labelColor,
                },
              }}
              control={
                <Radio
                  sx={{
                    width: '14px',
                    height: '14px',
                    color: 'transparent',
                    backgroundColor: radioColor.static,
                    '&.Mui-checked': {
                      color: radioColor.static,
                      backgroundColor: radioColor.onChecked,
                    },
                  }}
                  disableRipple
                />
              }
              label={label}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioFilter;

//   --datepicker-grey: rgba(255, 255, 255, 0.5);
//   --datepicker-grey: rgba(22, 22, 22, 0.5);
//   --datepicker-grey: rgba(22, 22, 22, 0.5);

// --datepicker-grey-lable: rgba(255, 255, 255, 0.3);
// --datepicker-grey-lable: rgba(22, 22, 22, 0.3);
// --datepicker-grey-lable: rgba(22, 22, 22, 0.3);

// --datepicker-checked: #151512;
// --datepicker-checked: #ffffff;
// --datepicker-checked: #ffffff;

// --datepicker-focused: #fff;
// --datepicker-focused: #161616;;
// --datepicker-focused: #161616;;
