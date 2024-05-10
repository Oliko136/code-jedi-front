import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { useEffect } from 'react';
import sprite from '../../../assets/svg/sprite.svg';
// import { getBackgroundIcons } from '../../../redux/boards/boards-operations';
import Loader from '../../Loader/Loader';
import {
  selectBackgroundIcons,
  selectIsLoading,
} from '../../../redux/boards/boards-selectors';
import {
  BacksUl,
  DefaultImgWrap,
  BackInputRadio,
  BackImage,
  SmallLoaderContainer,
} from './BoardModal.styled';

export const BacksList = ({ backgroundId, customBackground }) => {
  const [selectedBackId, setSelectedBackId] = useState(backgroundId);
  const isLoading = useSelector(selectIsLoading);
  const backgroundIcons = useSelector(selectBackgroundIcons);
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
      {backgroundIcons.map(item => {
        return (
          <li key={item._id} id={item.backgroundMinURL ? '' : 'default-bg-img'}>
            <label>
              <BackInputRadio
                type="radio"
                name="background"
                value={item._id}
                defaultChecked={
                  customBackground ? false : selectedBackId === item._id
                }
                onChange={() => handleBackChange(item._id)}
              />
              {item.backgroundMinURL ? (
                <BackImage
                  src={item.backgroundMinURL}
                  srcSet={`${item.backgroundMinURL} 1x, ${item.backgroundMin2xURL} 2x`}
                  alt="background miniature"
                  width={28}
                  height={28}
                />
              ) : (
                <DefaultImgWrap>
                  <svg width={16} height={16}>
                    <use href={`${sprite}#icon-default-bg`}></use>
                  </svg>
                </DefaultImgWrap>
              )}
            </label>
          </li>
        );
      })}
    </BacksUl>
  );
};
