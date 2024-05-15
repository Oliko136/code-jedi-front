import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: var(--additional-text-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  position: relative;
  p {
    font-size: 10px;
    position: absolute;
    bottom: 10px;
    color: var(--additional-bg-color);
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(input-border-color);
  opacity: 0.5;
  color: var(--additional-text-color);
  font-size: 14px;
  border-radius: 8px;
  background-color: transparent;
  padding: 14px 18px;
  margin-bottom: 24px;
  outline: transparent;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  transition: opacity 350ms ease-in-out;

  &.invalid {
    border: 2px solid var(--additional-bg-color);
  }
  &:focus {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.p`
  color: var(--additional-text-color);
  font-weight:500;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 14px;
  letter-spacing:-0.02em;
`;

export const IconsUl = styled.ul`
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
`;

export const IconSVG = styled.svg`
  stroke: var(--icon-color);
  stroke-opacity: 0.5;
  transform: scale(1.05);
`;

export const InputRadio = styled.input`
  display: none;
  &:checked + svg use {
    stroke: var(--additional-text-color);
    stroke-opacity: 1;
    transform: scale(1.05);
  }
`;

export const SmallLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const BacksUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  gap: 4px;
  width: 252px;
  & #default-bg-img {
    order: -1;
  }
`;

export const DefaultImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: var(--primary-bg-color);
  border-radius: 8px;
`;

export const BackInputRadio = styled.input`
  display: none;
  &:hover + img {
    box-shadow: 0 0 0 1px var(--additional-icon-color);
  }
  &:hover + img,
  &:hover + div {
    box-shadow: 0 0 0 1px var(--additional-icon-color);
  }
  &:checked + img,
  &:checked + div {
    box-shadow: 0 0 0 2px var(--additional-icon-color);
    transform: scale(1.05);
  }
`;

export const BackImage = styled.img`
  border-radius: 7px;
  width: 28px;
  height: 28px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  padding: 10px;
  margin-top: 40px;
  background-color: var(--additional-icon-color);
  color: var(--btn-icon-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 350ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--additional-bg-color);
  border-radius: 6px;
  padding: 7px;
`;

export const ChangeIcons = styled.button`
  background: transparent;
  padding: 0;
  transition: filter 350ms linear;

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      filter: drop-shadow(1px 1px 5px var(--sidebar-logout));
    }
  }
`;
