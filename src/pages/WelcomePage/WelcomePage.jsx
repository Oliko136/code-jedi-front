import { NavLink } from 'react-router-dom';
import { WelcomeBg, WelcomeLogo } from './WelcomePage.styled';

import WelcomeImgTel1x from './WelcomeImages/welcome-mob-1x.png';
import WelcomeImgTel2x from './WelcomeImages/welcome-mob-2x.png';
import WelcomeImgTab1x from './WelcomeImages/welcome-tab-1x.png';
import WelcomeImgTab2x from './WelcomeImages/welcome-tab-2x.png';
import WelcomeImgDesktop1x from './WelcomeImages/welcome-desk-1x.png';
import WelcomeImgDesktop2x from './WelcomeImages/welcome-desk-2x.png';

const WelcomePage = () => {
  return (
    <WelcomeBg>
      {/* Це лише заглушка. Можна буде прибрати/коригувати */}
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={`${WelcomeImgTel1x} 1x, ${WelcomeImgTel2x} 2x`}
        />

        <source
          media="(max-width: 768px)"
          srcSet={`${WelcomeImgTab1x} 1x, ${WelcomeImgTab2x} 2x`}
        />

        <source
          media="(max-width: 1440px)"
          srcSet={`${WelcomeImgDesktop1x} 1x, ${WelcomeImgDesktop2x} 2x`}
        />

        <img src={WelcomeImgTel1x} alt="User" />
      </picture>

      <WelcomeLogo>
        <h1>Task Pro</h1>
      </WelcomeLogo>

      <button>
        <NavLink to="/auth/register">Register</NavLink>
      </button>
      <button>
        <NavLink to="/auth/login">Login</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
    </WelcomeBg>
  );
};

export default WelcomePage;
