import Icon from 'components/Icon/Icon';
import { Label, InputRadio, PriorityDiv } from './CardModal.styled';

const CardPriorityList = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  const PRIORITY_LIST = [
    { priority: 'low', color: '#8FA1D0' },
    { priority: 'medium', color: '#E09CB5' },
    { priority: 'high', color: '#BEDBB0' },
    { priority: 'without', color: 'rgba(255, 255, 255, 0.3)' },
  ];

  return (
    <PriorityDiv>
      {PRIORITY_LIST.map(({ priority, color }) => (
        <Label key={priority}>
          <InputRadio
            type="radio"
            name="color"
            value={priority}
            checked={value === priority}
            onChange={handleChange}
          />
          <Icon
            fillColor={color}
            name={
              value === color
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
          />
        </Label>
      ))}
    </PriorityDiv>
  );
};

export default CardPriorityList;
