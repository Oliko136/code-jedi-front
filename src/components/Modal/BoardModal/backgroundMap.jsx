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

// import { BACKGROUND_LIST } from '../../../assets/constants/backgroundList';

// import air from './small-back/air.png';
// import ballons from './small-back/ballons.png';
// import canyon from './small-back/canyon.png';
// import abstract from './small-back/abstract.png';
// import clouds from './small-back/clouds.png';
// import magnolia from './small-back/magnolia.png';
// import milkyway from './small-back/milkyway.png';
// import moon from './small-back/moon.png';
// import night from './small-back/night.png';
// import palm from './small-back/palm.png';
// import rocks from './small-back/rocks.png';
// import sea from './small-back/sea.png';
// import stars from './small-back/stars.png';
// import tree from './small-back/tree.png';
// import yacht from './small-back/yacht.png';

// export const iconMap = () => {
//   const nameBackround = BACKGROUND_LIST.map(background => `${background}`);

//   const images = nameBackround.map((nameBackround, index) => ({
//     id: index,
//     name: nameBackround,
//   }));

//   return images;
// };
//  alt: `${index}`,
//   console.log(import.meta.url);
//   const absoluteURL = new URL(
//     'small-back/milkyway.png',
//     import.meta.url
//   ).toString();
//   console.log(absoluteURL);

//   const fullPath = require.resolve('./small-back/milkyway.png');
//   console.log(fullPath);

// export const iconMap = async () => {
//   const images = [];

//   // Функция для загрузки изображения
//   const loadImage = async (imagePath, index) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () =>
//         resolve({ id: index, src: imagePath, alt: `${index}` });
//       img.onerror = error => reject(error);
//       img.src = imagePath;
//     });
//   };

//   // Цикл по списку фоновых изображений
//   for (let i = 0; i < BACKGROUND_LIST.length; i++) {
//     try {
//       const imagePath = `./small-back/${BACKGROUND_LIST[i]}.png`;
//       const image = await loadImage(imagePath, i);
//       images.push(image);
//     } catch (error) {
//       console.error(`Ошибка загрузки изображения: ${error}`);
//       // Можно добавить обработку ошибок, если необходимо
//     }
//   }

//   return images;
// };
