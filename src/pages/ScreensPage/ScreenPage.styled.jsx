import styled from 'styled-components';

export const ContainerScreensPage = styled.div`
  padding: 14px 20px 60px 14px;
  background: (var--primary-bg-color);
  background-size: cover;
  background-position: center;
  height: calc(100vh - 70px);
  background-image: url(${props => props.backgroundImage.desk});
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${props => props.backgroundImage.deskx2});
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${props => props.backgroundImage.mob});
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 320px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-width: 320px) and (max-width: 767px) and (min-resolution: 192dpi),
    screen and (min-width: 320px) and (max-width: 767px) and (min-resolution: 2dppx) {
    background-image: url(${props => props.backgroundImage.mobx2});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${props => props.backgroundImage.tab});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-width: 768px) and (max-width: 1439px) and (min-resolution: 192dpi),
    screen and (min-width: 768px) and (max-width: 1439px) and (min-resolution: 2dppx) {
    background-image: url(${props => props.backgroundImage.tabx2});
  }
`;
