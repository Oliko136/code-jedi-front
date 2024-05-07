import styled from 'styled-components';

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
  transition: transform var(--easedTransition);

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
    border: 2px solid var(--background-color);
  }
`;

export const PlusButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  translate: 100% -50%;
`;
