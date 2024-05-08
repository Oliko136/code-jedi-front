import * as Styled from './Header.styled';
import ThemeSelection from './ThemeSelection/ThemeSelection';
import Icon from 'components/Icon/Icon';

const Header = ({ openSidebar }) => {
  return (
    <Styled.Header>
      <Styled.MobMenuBtn type="button" onClick={openSidebar}>
        <Icon name="icon-menu"></Icon>
      </Styled.MobMenuBtn>

      <Styled.UserInfoDiv>
        <ThemeSelection />
      </Styled.UserInfoDiv>
    </Styled.Header>
  );
};

export default Header;
