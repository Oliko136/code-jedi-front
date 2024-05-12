import styled from 'styled-components';

// export const CreatedBoard = styled.div`
//   padding: 10px;
// `;
// export const CreateBoard = styled.button`
//   color: #bedbb0;
//   transition: text-decoration 450ms ease-in-out;

//   &:hover,
//   &:focus {
//     text-decoration: underline;
//   }
// `;

export const ContainerHeaderBoard = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 39px;
`;

export const TitleVilter = styled.h4`
font-weight: 500;
font-size: 14px;
letter-spacing: -0.02em;
color: var(--additional-text-color);
`;

export const FilterText = styled.h4`
font-weight: 500;
font-size: 14px;
letter-spacing: -0.02em;
color: var(--additional-text-color);
`;

export const FilterButton = styled.button`
display: flex;
gap:8px;
justify-content: space-between;
cursor: pointer;

  &:hover {
    stroke: #bedbb0;
  }
`;
export const FilterDiv = styled.div`
// display: flex;
// gap:8px;
// flex-direction: row;
// justify-content: space-between;


  // padding: 10px; 
`;
// export const TextDiv = styled.div`
//   display: flex;
//   justify-content: center; 
//   align-items: center; 
//   height: 100vh; 
// `;

export const ContainerFilter = styled.div`
  display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
`;