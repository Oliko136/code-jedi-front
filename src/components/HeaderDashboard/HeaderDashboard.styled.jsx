import styled from 'styled-components';

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

@media screen and (min-width: 768px) {
  font-size: 18px;
}
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

`;

export const ContainerFilter = styled.div`
  display: flex;
  
`;