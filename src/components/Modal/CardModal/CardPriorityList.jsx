import { useState } from 'react';
// import sprite from '../../../assets/images/icons/icons-sprite.svg';
import { InputRadio, PriorityUl } from './CardModal.styled';
import Icon from 'components/Icon/Icon';

const CardPrirityList = ({ priorityId }) => {
  const [priorityLabel, setPriorityLabel] = useState(priorityId);

  const PRIORITY_LIST = [
    { id: 0, priority: 'low', color: 'blue' },
    { id: 1, priority: 'medium', color: 'pink' },
    { id: 2, priority: 'high', color: 'green' },
    { id: 3, priority: 'without', color: 'gray' },
  ];

  const handleChange = id => {
    setPriorityLabel(id);
  };

  return (
    <PriorityUl>
      {PRIORITY_LIST.map(item => {
        return (
          <li key={item.id}>
            <label>
              <InputRadio
                type="radio"
                name="priorityId"
                value={priorityLabel}
                defaultChecked={priorityLabel === item.id}
                onChange={() => handleChange(item.id)}
              />
              <Icon
                width={14}
                height={14}
                fillColor={'none'}
                strokeColor={'var(--radio-button-unchecked)'}
                name={'radio-button-unchecked'}
              />
              {/* <LabelSVG width="14" height="14">
                <use xlinkHref={`${sprite}#${item.priority}`} />
              </LabelSVG> */}
            </label>
          </li>
        );
      })}
    </PriorityUl>
  );
};

export default CardPrirityList;
