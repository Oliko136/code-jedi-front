import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './UserHeader.styled';
import { selectUser } from '../../../redux/auth/auth-selectors';
import UserDefaultDark from '../../../assets/img/user-default/user-default-dark.png';
import UserDefaultLight from '../../../assets/img/user-default/user-default-light.png';
import UserDefaultViolet from '../../../assets/img/user-default/user-default-violet.png';

const UserHeader = ({ currentTheme }) => {
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  let iconSrc;
  switch (currentTheme) {
    case 'dark':
      iconSrc = UserDefaultDark;
      break;
    case 'light':
      iconSrc = UserDefaultLight;
      break;
    case 'violet':
      iconSrc = UserDefaultViolet;
      break;
    default:
      iconSrc = UserDefaultDark;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Styled.UserDiv>
        <Styled.UserName>{user.name}</Styled.UserName>
        {user.avatar !== 'avatar/standartAvatar.png' ? (
          <Styled.UserImg
            src={user.avatarURL}
            alt="User Image"
            onClick={handleModalOpen}
          />
        ) : (
          <Styled.UserIconImg
            src={iconSrc}
            alt="User default image"
          ></Styled.UserIconImg>
        )}
      </Styled.UserDiv>
      {/* 
      {open && (
        <Modal
          open={open}
          closeModal={handleModalClose}
          children={
            <UserMenu handleClose={handleModalClose} selectedTheme={selectedTheme} />
          }
        />
      )}
      */}
    </>
  );
};
export default UserHeader;
