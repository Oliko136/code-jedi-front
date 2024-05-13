import React, { useState } from 'react';
import { Box, FormControlLabel, RadioGroup, Radio } from '@mui/material';

const RadioFilter = ({ onFilterChange, priority }) => {
  const [selectedValue, setSelectedValue] = useState(priority || 'Without');
  const radio = [
    {
      value: 'Without',
      label: 'Without priority',
      labelColor:
        selectedValue === 'Without'
          ? 'var(--additional-text-color-op)'
          : 'var(--additional-text-color-op)',
      radioColor: {
        static: 'var(--without-filter-lable)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'Low',
      label: 'Low',
      labelColor: selectedValue === 'Low' ? '#8FA1D0' : '#8FA1D0',
      radioColor: {
        static: '#8FA1D0',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'Medium',
      label: 'Medium',
      labelColor: selectedValue === 'Medium' ? '#E09CB5' : '#E09CB5',
      radioColor: {
        static: '#E09CB5',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'High',
      label: 'High',
      labelColor: selectedValue === 'High' ? '#BEDBB0' : '#BEDBB0',
      radioColor: {
        static: '#BEDBB0',
        onChecked: 'var( --additional-bg-color)',
      },
    },
  ];

  const handleRadioChange = event => {
    const selectedPriority = event.target.value;
    setSelectedValue(selectedPriority);
    onFilterChange(selectedPriority);
  };

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


