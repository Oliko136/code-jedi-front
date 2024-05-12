// import sprite from '../../../assets/images/icons/icons-sprite.svg';
import Icon from 'components/Icon/Icon';
import { IconWrap, InputRadio, PriorityDiv } from './CardModal.styled';

const CardPrirityList = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div>
      <PriorityDiv>
        <label>
          <InputRadio
            type="radio"
            name="color"
            value="#8FA1D0"
            checked={value === '#8FA1D0'}
            onChange={handleChange}
            required
          />
          <Icon
            width={14}
            height={14}
            fillColor={'#8FA1D0'}
            name={
              value === '#8FA1D0'
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
          />
        </label>
        <label>
          <InputRadio
            type="radio"
            name="color"
            value="#E09CB5"
            checked={value === '#E09CB5'}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <Icon
            width={14}
            height={14}
            fillColor={'#E09CB5'}
            name={
              value === '#E09CB5'
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
          />
        </label>
        <label>
          <InputRadio
            type="radio"
            name="color"
            value="#BEDBB0"
            checked={value === '#BEDBB0'}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <Icon
            width={14}
            height={14}
            fillColor={'#BEDBB0'}
            name={
              value === '#BEDBB0'
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
          />
        </label>
        <label>
          <InputRadio
            type="radio"
            name="color"
            value="rgba(255, 255, 255, 0.3)"
            checked={value === 'rgba(255, 255, 255, 0.3)'}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <Icon
            width={14}
            height={14}
            fillColor={'rgba(255, 255, 255, 0.3)'}
            name={
              value === '#rgba(255, 255, 255, 0.3)'
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
          />
        </label>
      </PriorityDiv>
    </div>
  );
};

export default CardPrirityList;
