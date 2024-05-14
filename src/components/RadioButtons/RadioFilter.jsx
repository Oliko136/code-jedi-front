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
          ? 'var(--additional-text-color)'
          : 'var(--show-filter-txt)',
      radioColor: {
        static: 'var(--without-filter-lable)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'Low',
      label: 'Low',
      labelColor:
        selectedValue === 'Low' ? '#8FA1D0' : 'var(--show-filter-txt)',
      radioColor: {
        static: '#8FA1D0',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'Medium',
      label: 'Medium',
      labelColor:
        selectedValue === 'Medium'
          ? 'var(--mediumPriorityColor)'
          : 'var(--show-filter-txt)',
      radioColor: {
        static: 'var(--mediumPriorityColor)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'High',
      label: 'High',
      labelColor:
        selectedValue === 'High'
          ? 'var(--highPriorityColor)'
          : 'var(--show-filter-txt)',
      radioColor: {
        static: 'var(--highPriorityColor)',
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
