import * as Styled from './Header.styled';
import Burger from './Burger/Burger';
import ThemeSelection from './ThemeSelection/ThemeSelection';

const Header = ({ openSidebar }) => {
  return (
    <Styled.Header>
      <Styled.MobMenuBtn type="button" onClick={openSidebar}>
        <Burger></Burger>
      </Styled.MobMenuBtn>

      <Styled.UserInfoDiv>
        <ThemeSelection />
      </Styled.UserInfoDiv>
    </Styled.Header>
  );
};

export default Header;
