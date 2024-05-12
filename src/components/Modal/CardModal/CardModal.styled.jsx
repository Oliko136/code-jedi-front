import styled from 'styled-components';

export const Modalform = styled.form`
  border-radius: 8px;
  width: 100%;
  &:hover {
    border-color: var(--accent-icon-hover-color);
  }
  @media screen and (min-width: 1440px) {
    input {
      width: 100%;
    }
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--input-text-color);
  margin-bottom: 24px;
`;

export const TitleInput = styled.input`
  width: 100%;
  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  height: 49px;
  opacity: 0.4;
  margin-bottom: 14px;
  color: var(--input-text-color) !important;
  padding: 14px 18px;
  background-color: transparent;
  &:focus {
    outline: none;
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  height: 154px;
  opacity: 0.4;
  margin-bottom: 24px;
  color: var(--input-text-color) !important;
  padding: 14px 18px;
  background-color: transparent;
  font-family: inherit;
  &:focus {
    outline: none;
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 100%;
`;

export const PriorityDiv = styled.div`
  display: flex;
  margin-bottom: 14px;
  gap: 8px;
`;

export const InputRadio = styled.input`
  display: none;
  cursor: pointer;
  &:checked + svg use {
    stroke-opacity: 1;
    transform: scale(1.05);
  }
`;

export const ButtonSend = styled.button`
  border-radius: 8px;
  width: 100%;
  height: 49px;
  background-color: var(--input-border-color);
  color: var(--btn-text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  &:hover {
    opacity: 0.7;
  }
`;

export const PlusButton = styled.div`
  width: 64px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.02em;
  color: var(--btn-text-color);
`;

export const IconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--btn-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;
