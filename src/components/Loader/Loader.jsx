import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoaderElement = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 80px; 
  height: 80px; 
  z-index: 1;

  animation: ${spin} 0.5s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderElement />
    </LoaderContainer>
  );
};

export default Loader;
