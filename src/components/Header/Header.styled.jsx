import styled from 'styled-components';
import Burger from './Burger/Burger';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 18px 20px;
  width: 100vw;
  background-color: #161616;

  @media screen and (min-width: 768px) {
    height: 68px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const MobMenuBtn = styled.button`
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
    stroke: #fff;
    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled(Burger)``;

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;
