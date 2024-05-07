import styled from 'styled-components';

export const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  gap: 8px;
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--additional-text-color);
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
`;

export const UserIconImg = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  object-fit: cover;
`;
