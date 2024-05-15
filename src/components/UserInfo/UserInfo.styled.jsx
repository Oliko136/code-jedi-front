import styled from 'styled-components';

export const TitleInfo = styled.h3`
font-weight: 500;
font-size: 18px;
letter-spacing: -0.02em;
color: var(--icon-color);;
`;

export const LabelWrap = styled.label`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: transparent;
  border: 1px solid var(--additional-btn-bg-color);
  border-radius: 8px;
  color: var(--icon-color);
  opacity: 0.4;
  transition: opacity 0.3s ease; 
 font-weight: 400;
 font-size: 14px;
 letter-spacing: -0.02em;

  &:focus {
    border-color: var(--additional-btn-bg-color);
    opacity: 1;
  }
  &:hover {
    border: 1px solid var(--additional-btn-bg-color);
    opacity: 1;
  }
  
`;
export const FormUserInfo = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const AddPhoto = styled.input`
  display: none;
`;

export const AvatarEdit = styled.label`
  cursor: pointer;
  background-color: var(--primary-bg-color);
  &:hover {
    transform: scale(1.2);
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
  margin-top: 24px;
  img {
    border-radius: 8px;
    border: 2px solid var(--primary-bg-color);
  }
`;

export const PlusButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: var(--accent-icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  translate: 100% -50%;
`;

export const SubmitBtnInfo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 100%;
  font-weight: 500;
  background: var( --additional-btn-bg-color);
  border-radius: 8px;
  color: var(--btn-text-color);
  transition: background 0.3s ease;
  margin-top: 10px;
  &:hover {
    background: var( --additional-btn-bg-hover-color);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
