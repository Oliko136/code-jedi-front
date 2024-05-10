import styled from 'styled-components';

export const LabelWrap = styled.label`
  position: relative;
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
    opacity: 1;
  }
  &:hover {
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
  border: 2px solid yellow;
  transition: transform var(--easedTransition);
  border: 2px solid yellow;
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
  border: 2px solid blue;
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
  
  border: 2px solid red;
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
  color: var(--primary-text-color);
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
