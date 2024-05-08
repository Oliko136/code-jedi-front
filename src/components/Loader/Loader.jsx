import React from 'react';
import styled, { keyframes } from 'styled-components';

// Ключевая анимация для вращения
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Стили для Loader контейнера
const LoaderContainer = styled.div`
  margin: auto;
  border: 4px solid #f3f3f3; /* серый */
  border-top: 4px solid #3498db; /* синий */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} .5s linear infinite;
`;

// Компонент Loader
const Loader = () => {
  return <LoaderContainer />;
};

export default Loader;
