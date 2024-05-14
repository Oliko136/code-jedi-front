import { BACKGROUND_LIST } from '../../../assets/constants/backgroundList';
import air from './small-back/air.png';
import ballons from './small-back/ballons.png';
import canyon from './small-back/canyon.png';
import abstract from './small-back/abstract.png';
import clouds from './small-back/clouds.png';
import magnolia from './small-back/magnolia.png';
import milkyway from './small-back/milkyway.png';
import moon from './small-back/moon.png';
import night from './small-back/night.png';
import palm from './small-back/palm.png';
import rocks from './small-back/rocks.png';
import sea from './small-back/sea.png';
import stars from './small-back/stars.png';
import tree from './small-back/tree.png';
import yacht from './small-back/yacht.png';

export const backgroundMap = () => {
  const images = [
    air,
    ballons,
    canyon,
    abstract,
    clouds,
    magnolia,
    milkyway,
    moon,
    night,
    palm,
    rocks,
    sea,
    stars,
    tree,
    yacht,
  ];

  const icons = images.map((image, index) => ({
    id: index,
    name: BACKGROUND_LIST[index],
    src: image,
    alt: `${index}`,
  }));

  return icons;
};


