import React, { useState } from 'react';
import { Box, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { PriorityDiv } from './CardModal.styled'; 

const CardPriorityList = ({ value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value || 'without');

  const handleRadioChange = event => {
    const selectedPriority = event.target.value;
    setSelectedValue(selectedPriority);
    onChange(selectedPriority);
  };

  const PRIORITY_LIST = [
    {
      value: 'low',
      radioColor: {
        static: '#8fa1d0',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'medium',
      radioColor: {
        static: 'var(--mediumPriorityColor)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'high',
      radioColor: {
        static: 'var(--highPriorityColor)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
    {
      value: 'without',
      radioColor: {
        static: 'var(--btn-rad-without)',
        onChecked: 'var( --additional-bg-color)',
      },
    },
  ]; 

  return (
    <PriorityDiv>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          value={selectedValue}
          name="radio-buttons-group"
          onChange={handleRadioChange}
          sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
        >
          {PRIORITY_LIST.map(button => {
            const { value, radioColor } = button;
            return (
              <FormControlLabel
                key={value}
                value={value}
                sx={{
                  display: 'flex',
                  gap: '4px',
                  margin: '0',
                  height: '24px',
                  padding: '0',
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
                label=""
              />
            );
          })}
        </RadioGroup>
      </Box>
    </PriorityDiv>
  );
};

export default CardPriorityList;


