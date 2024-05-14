import { useSelector } from 'react-redux';
import { useState } from 'react';
import Loader from '../../Loader/Loader';
import { selectIsLoading } from '../../../redux/boards/boards-selectors';
import {
  BacksUl,
  BackInputRadio,
  BackImage,
  SmallLoaderContainer,
} from './BoardModal.styled';
import { backgroundMap } from './backgroundMap';

export const BacksList = ({ backgroundId }) => {
  const [selectedBackId, setSelectedBackId] = useState(backgroundId);
  const isLoading = useSelector(selectIsLoading);

  var temp = selectedBackId;
  const temp1 = temp;
  temp = temp1;

  const backicons = backgroundMap();
  const handleBackChange = id => {
    setSelectedBackId(id);
  };

  return isLoading ? (
    <SmallLoaderContainer>
      <Loader width="20" height="20" />
    </SmallLoaderContainer>
  ) : (
    <BacksUl>
      {backicons.map(item => {
        return (
          <li key={item.id} id={item.name}>
            <label>
              <BackInputRadio
                type="radio"
                name="background"
                value={item.name}
         
                onChange={() => handleBackChange(item.name)}
              />
              <BackImage
                src={item.src}
                alt="background miniature"
                width={28}
                height={28}
              />
            </label>
          </li>
        );
      })}
    </BacksUl>
  );
};
