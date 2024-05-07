//import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './UserHeader.styled';
import { selectUser } from '../../../redux/auth/auth-selectors';

// import modal from ''; //Here should be imported modal
// import baseSvgSprite from ''; //Here should be import of our svg sprite

const UserHeader = ({ currentTheme }) => {
  const { user } = useSelector(selectUser);

  let iconId;
  switch (currentTheme) {
    case 'dark':
      iconId = '#someIdDark'; //Add and id for avatar for first users
      break;
    case 'light':
      iconId = '#someIdLight'; //Add and id for avatar for first users
      break;
    case 'violet':
      iconId = '#someIdViolet'; //Add and id for avatar for first users
      break;
    default:
      iconId = '#someIdDark'; //Add and id for avatar for first users
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Styled.UserDiv>
        <Styled.UserName>{user.name}</Styled.UserName>
        {user.avatarURL ? (
          <Styled.UserImg
            src={user.avatarURL}
            alt="User Image"
            onClick="{handleModalOpen}" //Should be function for opening a modal
          />
        ) : (
          <Styled.UserIcon onClick="{handleModalOpen}">
            {' '}
            {/*Should be a fucntion for opening a modal*/}
              <use href="{baseSvgSprite + iconId}" /> {/*Add SvgSprite and Icon id*/}
          </Styled.UserIcon>
        )}
      </Styled.UserDiv>
      {/* Here should be modal opening*/}
    </>
  );
};
export default UserHeader;
