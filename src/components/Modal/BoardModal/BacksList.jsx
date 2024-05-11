import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { getBackgroundIcons } from '../../../redux/boards/boards-operations';
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
  // const backgroundIcons = useSelector(selectBackgroundIcons);

  const backicons = backgroundMap();
  // console.log(icons);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBackgroundIcons());
  // }, [dispatch]);

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
                // defaultChecked={selectedBackId}
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
